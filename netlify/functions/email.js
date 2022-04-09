const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  // const { sendgrid_username } = process.env;
  // console.log('username:', sendgrid_username);
  const mailer = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true,
    auth: {
      user: 'apikey',
      pass: process.env.sendgridApiKey,
    },
  });

  const email = {
    from: 'drlau@thelead.io',
    to: 'laucherhan@gmail.com',
    subject: 'Hello',
    text: 'Hello world',
    html: '<b>Hello world</b>',
  };

  mailer.sendMail(email, (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log(info.response);
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Mail sent successfully' }),
  };
};
