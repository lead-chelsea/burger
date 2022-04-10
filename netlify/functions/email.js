/* eslint-disable no-console */
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
    to: 'drlau@cherhan.net',
    subject: 'Hello 1,2,3',
    text: 'Hello world',
    html: '<b>Hello world</b>',
  };

  console.log(email);

  mailer.sendMail(email, (err, info) => {
    console.log(' mail is here...');
    if (err) {
      console.log('Error:', err);
    }
    console.log('response', info.response);
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Mail sent successfully' }),
  };
};
