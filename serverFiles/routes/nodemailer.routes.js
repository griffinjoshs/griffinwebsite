// contact form + mailchimp add api calls
const nodemailer = require('nodemailer');
// const request = require('request');
require('dotenv').config();

const User = require("../models/subscribe.model");

module.exports = function (app) {  
  app.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>First Name: ${req.body.firstName}</li>
    <li>Last Name: ${req.body.lastName}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    // mongoDb insert
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
    })
    // .then(dbEmail => {
    //   res.json(dbEmail);
    // })
    .catch(err => {
      res.json(err);
    });

    // gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'griffinjoshs99@gmail.com',
        pass: 'Mets99mets99' // naturally, replace both with your real credentials or an application-specific password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: `${req.body.email}`,
      to: 'griffinjoshs99@gmail.com',
      subject: `${req.body.subject}`,
      text: `${req.body.message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        console.log(output);
      }
    });
  });
}
