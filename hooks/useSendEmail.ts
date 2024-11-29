"use server"
import nodemailer from 'nodemailer'

export const useSendEmail = async (to: string, subject: string, content: string) => {

    let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        secure: false,
        auth: {
            user: "800c42001@smtp-brevo.com",
            pass: "1DUcwbf5XnKAC6ZF",
        },
    });


    let mailOptions = {
        from: 'eyebase@hotmail.com',
        to: to,
        subject: subject,
        text: content,
    }

    const mail = await transporter.sendMail(mailOptions) 
    return mail
}

// let transporter = nodemailer.createTransport({
//     host: 'localhost',
//     port: 1025,
//     ignoreTLS: true,
// })
