import nodemailer from "nodemailer";

export default function handler(req, res) {
  const message = {
    from: req.body.MAIL_USER,
    replyTo: req.body.email,
    to: process.env.MAIL_USER,
    subject: req.body.subject,
    text: `Email from: ${req.body.email}\n\n${req.body.message}`,
    html: `<p>Email from: ${req.body.email}</p><p>${req.body.message}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  if (req.method === "POST") {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
