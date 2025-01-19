import nodemailer from "nodemailer";

const smtpTransport = new nodemailer.createTransport({
    host: import.meta.VITE_APP_EMAIL_HOST,
    port: parseInt(import.meta.VITE_APP_EMAIL_PORT ?? "587"),
    auth: {
        user: import.meta.VITE_APP_EMAIL_USER, // Add your SMTP user here
        pass: import.meta.VITE_APP_EMAIL_PASS, // Add your SMTP password here
    },
});

export const sendWelcomeMail = async (email, name) => {
    const mailOptions = {
        from: "noreply@buildwithkaustubh.tech",
        to: email,
        subject: "THANK YOU FOR THE MAIL",
        text: `Thank you for contacting us. We will get back to you soon.`,
        html: `
            <table cellspacing="0" cellpadding="0" style="margin: 0px auto; width: 100%; background-color:#fff;">
                <tbody>
                    <tr>
                        <td>
                            <div style="background-color: #fff; border: 1px solid #eee; box-sizing: border-box; font-family: Lato, Helvetica, 'Helvetica Neue', Arial, 'sans-serif'; margin: auto; max-width: 600px; overflow: hidden; width: 600px;">
                                <div style="padding: 65px 90px 20px; background-color: #1B3E71;">
                                    <h4 style="color: #fff; font-size: 16px; margin: 0; margin-bottom: 10px;">Hi ${name},</h4>
                                    <h2 style="color: #fff; font-size: 24px; margin: 0;">Hearty Welcome!</h2>
                                </div>
                                <div style="padding: 25px 90px 65px;">
                                    <p>We're glad to have you on board! Please hang on tight while we get back to you!</p>
                                    <div>
                                        <a href="https://github.com/itzVort3x1" style="border: none; border-radius: 4px; color: #fff; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; text-decoration: none; padding: 12px 24px; background-color: #1B3E71; margin: 20px 0 30px;">Explore</a>
                                    </div>
                                    <p>Thank you,</p>
                                    <p>Kaustubh</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        `,
    };

    return mailOptions;
};

export const sendAdminMail = async (email, name, message) => {
    const mailOptions = {
        from: "noreply@buildwithkaustubh.tech",
        to: "saikaustubh10@gmail.com",
        subject: "Build With Kaustubh NEW EMAIL",
        text: `NEW CONTACT`,
        html: `
            <table cellspacing="0" cellpadding="0" style="margin: 0px auto; width: 100%; background-color:#fff;">
                <tbody>
                    <tr>
                        <td>
                            <div style="background-color: #fff; border: 1px solid #eee; box-sizing: border-box; font-family: Lato, Helvetica, 'Helvetica Neue', Arial, 'sans-serif'; margin: auto; max-width: 600px; overflow: hidden; width: 600px;">
                                <div style="padding: 65px 90px 20px; background-color: #1B3E71;">
                                    <h4 style="color: #fff; font-size: 16px; margin: 0; margin-bottom: 10px;">Hi new message from ${name},</h4>
                                    <h2 style="color: #fff; font-size: 24px; margin: 0;">New client!</h2>
                                </div>
                                <div style="padding: 25px 90px 65px;">
                                    <p>New message from ${email}!</p>
                                    <p>Name: ${name}!</p>
                                    <p>Message: ${message}!</p>
                                    <p>Thank you,</p>
                                    <p>buildWithKaustubh</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        `,
    };

    await smtpTransport
        .sendMail(mailOptions)
        .then(() => {
            console.log("Email sent");
        })
        .catch((err) => {
            console.log("Error sending email", err);
        });
};
