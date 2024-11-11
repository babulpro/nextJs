
import  nodemailer from 'nodemailer'
export async function sendEmail (emailTo,Text,Sub) {
    let transporter = nodemailer.createTransport({
        host: 'mail.teamrabbil.com',
        port: 25,
        secure: false,
        auth:{
            user:"info@temarabbil.com",
            pass:"~sR4[bbaC[Qs"
        },
        tls:{
            rejectUnauthorized: false
        }
    })

    let mailOptions = {
        from: '<info@temarabbil.com>',
        to: emailTo,
        subject: 'Email Utility',
        text: 'Hello World!',
    }

    return await transporter.sendMail(mailOptions)
}