import { prisma } from "@/hooks/usePrisma"
import { useSendEmail } from "@/hooks/useSendEmail"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { options } from "../[...nextauth]/Options"

export const POST = async (req: Request) => {

  const { name, email, image } = await req.json()
  if (!name || !email) return NextResponse.json({
    success: false,
    message: "Name and email are required",
  })

  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  const currentTime = new Date()
  const otpDate = new Date(currentTime.getTime() + 5 * 60 * 1000)

  const emailLow = `${email}`.toLowerCase()

  const exist = await prisma.user.findUnique({
    where: {
      email: emailLow
    }
  })

  if (exist) {
    return NextResponse.json({
      success: false,
      message: "Email Already in Use",
    })
  }

  await prisma.user.create({
    data: {
      email: emailLow,
      image: image,
      name: name,
      otp: otp,
      otpExpierd: false,
      optDate: otpDate
    }
  })

  await useSendEmail(emailLow, "Your verification code", getMail(otp, emailLow))

  return NextResponse.json({
    success: true,
    message: "Registration successful! Check your email to verify your account",
  })
}

export const PUT = async (req: Request) => {

  const { email } = await req.json()
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  const currentTime = new Date()
  const otpDate = new Date(currentTime.getTime() + 5 * 60 * 1000)
  const emailLow = `${email}`.toLowerCase()

  if (!email) return NextResponse.json({
    success: false,
    message: "Email is required",
  })

  const exist = await prisma.user.findUnique({
    where: {
      email: emailLow
    }
  })

  if (!exist) {
    return NextResponse.json({
      success: false,
      message: "Email not found",
    })
  }

  await prisma.user.update({
    where: {
      email: emailLow,
    },
    data: {
      otp: otp,
      otpExpierd: false,
      optDate: otpDate
    }
  })

  await useSendEmail(emailLow, "Your verification code", getMail(otp, emailLow))

  return NextResponse.json({
    success: true,
    message: "Code sent! Please check your email",
  })
}

export const PATCH = async (req: Request) => {

  const { name, image } = await req.json()
  const { user: { id } }: any = await getServerSession(options)

  if (!name) return NextResponse.json({
    success: false,
    message: "Name is required",
  })

  await prisma.user.update({
    where: {
      id: id
    },
    data: { name, image }
  })

  return NextResponse.json({
    success: true,
    message: "Profile updated successfully.",
  })
}

const getMail = (code: string, emailLow: string) => {

  return (`<table role="presentation" style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
    <tbody>
      <tr>
        <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
          <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
            <tbody>
              <tr>
                <td style="padding: 40px 0px 0px;">
                  <div style="text-align: left;">
                    <div style="padding-bottom: 20px;"><img src="${process.env.ROOT_URL}/eyebase-bg.png" alt="Company" style="width: 56px;"></div>
                  </div>
                  <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                    <div style="color: rgb(0, 0, 0); text-align: left;">
                      <h1 style="margin: 1rem 0">${code}</h1>
                      <p style="padding-bottom: 16px">Use this code to finish your login</p>
                      <p style="padding-bottom: 16px"><a href="${process.env.ROOT_URL}/verify?email=${emailLow}" target="_blank"style="padding: 12px 24px; border-radius: 4px; color: #000000; background: #FFF444;display: inline-block;margin: 0.5rem 0;">Go to eyebase</a></p>
                      <p style="padding-bottom: 16px">If you didn’t ask to login with this address, you can ignore this email.</p>
                      <p style="padding-bottom: 16px">Thanks,<br>Eyebase team - kira</p>
                    </div>
                  </div>
                  <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;">
                    <p style="padding-bottom: 16px">Made with ♥ in Tunisia</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
 `)
}