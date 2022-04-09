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
      pass: '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',
    },
  });

  const email = {
    from: 'laucherhan@gmail.com',
    to: 'drlau@thelead.io',
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
