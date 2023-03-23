const nodemailer = require('nodemailer');
const { Router } = require('express');
const app = Router();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'test0127noreply@gmail.com',
        pass: 'scitrckvsjkfkvqx'
    }
});

app.post('/sendemails', (req, res) => {
    console.log(req.body)
    const { to, subject, text } = req.body;
    const mailOptions = {
        from: 'test0127noreply@gmail.com',
        to,
        subject,
        text
      };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error: Unable to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});


module.exports = app;