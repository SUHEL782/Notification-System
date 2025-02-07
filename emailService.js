const nodemailer = require('nodemailer');

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true, 
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});
ports.sendEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: EMAIL_USER,
      to, 
      subject, 
      text, 
    };

    const response = await transporter.sendMail(mailOptions);
    console.log('Email sent:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw error;
  }
};
