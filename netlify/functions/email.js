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

  console.log('sending email...');
  console.log(email);

  try {
    await mailer.sendMail(email);
    console.log('Test email sent successfully');
  } catch (error) {
    console.error('Error sending test email');
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Our mail sent successfully' }),
  };
};
