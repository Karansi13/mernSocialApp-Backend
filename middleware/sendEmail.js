const nodemailer = require("nodemailer")

exports.sendEmail = async (options) => {

    const transporter = nodemailer.createTransport({

        //This will not work
        host: process.env.SMPT_Host,
        port: process.env.SMPT_PORT,
        auth: {
            user: process.env.SMPT_MAIL,
            pass: process.env.SMPT_PASSWORD
        },
        service: process.env.SMPT_SERVICE
    });

    //mailtrap
        //     host: "sandbox.smtp.mailtrap.io",
        //     port: 2525,
        //     auth: {
        //       user: "karansinghk1307@gmail.com",
        //       pass: "Karan132605"
        //     }
        //   });

    const mailOptions = {
        // from: "Nodemailer Contact",
        // to: options.to,
        // subject: options.subject,
        // text: options.text,

        from: "process.env.SMPT_MAIL",
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    await transporter.sendMail(mailOptions)
}