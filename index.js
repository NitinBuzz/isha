const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const pushIn = require('./firebase');
var nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
//
// app.get('/', (req, res) => {
//   res.send('Hi Server');
// });
// 14th April 2018
app.get('/api/server', function(req, res) {
  res.send('Hello World! from server');
});
app.post('/api/user', function(req, res) {
  console.log(req.body);
  if (req.body.Email === null) {
    res.send(`Hey ${req.body.Name}!!!, Please Provide Valid eMail address`);
  } else if (req.body.Message === null) {
    res.send(`Hey ${req.body.Name}!!!, Please Provide Valid Message `);
  } else {
    pushIn(req.body.Name, req.body.Email, req.body.Message)
      .then(response => {
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'ishag1818@gmail.com',
            pass: 'XQ111111'
          }
        });
        const mailOptions = {
          from: 'ishag1818@gmail.com', // sender address
          to: 'reachnitinvenkat@gmail.com, g.lakshmisirisha19@gmail.com', // list of receivers
          subject: `Message from ${req.body.Name}`, // Subject line
          text: `Name: ${req.body.Name} - eMail: ${req.body.Email} - Message: ${
            req.body.Message
          }`,
          html: `<p>Name: ${req.body.Name} - eMail: ${
            req.body.Email
          } - Message: ${req.body.Message}</p>` // plain text body
        };
        transporter.sendMail(mailOptions, function(err, info) {
          if (err) console.log(err);
          else console.log(info);
        });
        res.send(
          `Thanks for the message ${req.body.Name}, Isha will get back.`
        );
      })
      .catch(error => res.send(`DataBase Error Please try again. - ${error}`));
  }
});
app.get('/proxy/my/path', function(req, res) {
  res.send('Hello Worldzzzz! from server');
});
// NODE_ENV=production

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/public'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
