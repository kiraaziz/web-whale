//@ts-nocheck
import { NextAuthOptions } from "next-auth"
import GitHubProvider from 'next-auth/providers/github';
import GoolgeProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const options: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: "/signin",
        signOut: "/profile",
        // error: "/auth/error",
        verifyRequest: "/verify"
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                otp: { label: "otp", type: "password" },
            },

            async authorize(credentials) {

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })

                if (!user) {
                    throw new Error("User not exist")
                }

                if (user.otpExpierd || user.optDate <= new Date()) {
                    throw new Error("OTP code expired")
                }

                if (user.otp !== credentials?.otp) {
                    throw new Error("Incorrect OTP code")
                }

                await prisma.user.update({
                    where: {
                        id: user.id
                    },
                    data: {
                        otpExpierd: true
                    }
                })

                return user
            }
        }),
    ],
    callbacks: {
        session: async ({ session, token }: any) => {
            if (session?.user) {
                session.user.id = token.sub;

                const { activated, name, email, image } = await prisma.user.findUnique({
                    where: {
                        id: token.sub
                    }
                })
                session.user.name = await name;
                session.user.email = await email;
                session.user.image = await image;
                session.user.activated = await activated;
            }


            return session;
        },
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET
}  