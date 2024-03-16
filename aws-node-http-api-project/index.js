const nodemailer = require("nodemailer");

// Create a transporter using SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lightwebx@gmail.com", // your email
    pass: "zvyiuzvotjjsoeyy", // your password
  },
});

module.exports.handler = async (event) => {
  const requestBody = JSON.parse(event.body);
  const { name, email, phone, message } = requestBody;

  // Setup email data
  let mailOptions = {
    from: "lightwebx@gmail.com",
    to: "dhakalbishal930@gmail.com",
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
    from: "lightwebx@gmail.com",
    to: "dhakalbishal930@gmail.com",
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
