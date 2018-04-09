var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'gobiphd@gmail.com',
      pass: 'xxxxxxxxxx'
    }
  });
  
  var mailOptions = {
    from: 'gobiphd@gmail.com',
    to: 'gobiprofile@gmail.com',
    subject: 'Sending Email using Node.js12345',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log('error : '+error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });