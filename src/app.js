const express = require('express');
const nodemailer = require('nodemailer');
const { formatMail } = require('./assets/MailHandle');
require('dotenv').config(); 

const app = express();
app.use(express.json()); 

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const RECIPIENT = process.env.RECIPIENT;
app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
});

app.post('/send-email', (req, res) => {
  const {subject, text} = formatMail(req.body);
  if (!subject || !text) {
    return res.status(400).send('Missing required fields');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  const mailOptions = {
    from: EMAIL,
    to: RECIPIENT,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
