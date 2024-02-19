const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password
  },
});

const mailOptions = {
  from: "mtgdeckbuilder22@outlook.com", // Sender’s email address
  to: "treblotnad@gmail.com", // Recipient’s email address
  subject: "Test Email", // Email subject
  text: "did this work???", // Email body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email: " + error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
