const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xxxxxxxxxx@gmail.com',
    pass: 'xxxx'
  }
});

// setup email data
let mailOptions = {
  from: 'xxxxxxxxx@gmail.com',
  to: 'xxxxxxxxxx@gmail.com',
  subject: 'Test email from Node.js',
  html: '<h1>Hello from Node.js</h1><p>This is a test email sent using Node.js</p>'
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});