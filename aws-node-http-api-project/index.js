const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a transporter using SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SEND_MAIL, // your email
    pass: process.env.PASSWORD, // your password
  },
});

module.exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);
  const { name, email, phone, message } = requestBody;

  // Setup email data
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVE_MAIL,
    subject: "User Mail",
    html: `<b>Name</b>: ${name}<br>
           <b>Email</b>: ${email}<br>
           <b>Phone</b>: ${phone}<br>
           <b>Message</b>: ${message}`,
  };

  // Send email
  let info = await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Email sent successfully!",
      info: info,
    }),
  };
};

module.exports.emailList = async (event) => {
  const requestBody = JSON.parse(event.body);
  const { email } = requestBody;

  // Setup email data
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVE_MAIL,
    subject: "Email List",
    html: `<b>Email</b>: ${email}`,
  };

  // Send email
  let info = await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Email sent successfully!",
      info: info,
    }),
  };
};
