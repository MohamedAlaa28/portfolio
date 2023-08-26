const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  }));
  
app.use(express.json());

app.post("/submit-form", async (req, res) => {
  try {
    console.log("Before sending email");
    const { firstName, email, type, comment } = req.body;

    // Create a transporter using your email service's SMTP settings
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "mohamed.alaa.elhefny@gmail.com",
        pass: "Mohamed&alaa2020",
      },
    });

    // Prepare the email
    const mailOptions = {
      from: email,
      to: "mohamed.alaa.elhefny@gmail.com",
      subject: type,
      text: `
        Name: ${firstName}
        Email: ${email}
        Type of Enquiry: ${type}
        Comment: ${comment}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "An error occurred." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
