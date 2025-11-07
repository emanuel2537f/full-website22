// Netlify Function: contact-form-handler
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const data = JSON.parse(event.body);
  const { name, email, message } = data;

  // Configure your email transport (use environment variables for credentials)
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // change to your SMTP host
    port: 587,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'your@email.com', // change to your receiving email
      subject: `Contact Form Submission from ${name}`,
      text: message,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
