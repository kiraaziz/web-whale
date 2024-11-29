//@ts-nocheck
import NextAuth from "next-auth"
import { options } from "./Options"

export const handler = NextAuth(options) as never

export { handler as GET, handler as POST }