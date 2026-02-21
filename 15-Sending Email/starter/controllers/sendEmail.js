const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,  // ایمیل خودت
    pass: process.env.GMAIL_PASS,  // پسورد یا App Password
  },
});

 let info = await transporter.sendMail({
    from: "Alireza <alireza40000000000@gmail.com>",
    to:'alireza13970000000000@gmail.com',
    subject:"Hello",
    html:"<h2>Sending Emails With NodeJS</h2>"

 })
  res.json(info);
};

module.exports = sendEmail;
