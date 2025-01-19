import smtp from "smtp";
import { sendWelcomeMail } from "./mailService";

// Email service credentials
const credentials = {
    host: "smtp.zeptomail.in",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "emailapikey",
        pass: "", // Replace with actual password
    },
};

// Function to send an email
export const sendEmail = async (email, name) => {
    try {
        // Connect to SMTP server
        await smtp.connect(credentials);

        // Send email using the provided mail content
        const info = await smtp.sendMail(sendWelcomeMail(email, name));

        console.log("Email sent!", info);

        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};
