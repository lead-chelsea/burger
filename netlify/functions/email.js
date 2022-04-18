/* eslint-disable no-console */
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  // const { sendgrid_username } = process.env;
  // console.log('username:', sendgrid_username);

  const body = JSON.parse(event.body);
  const customerEmail = body.email;
  const orders = body.orders;

  let total = 0;
  let emailContent = 'We have received a new order: \n\n';

  orders.forEach((order) => {
    emailContent =
      emailContent +
      `${order.name}: ${order.quantity} pcs - ${
        order.price * order.quantity
      } \n`;
    total = total + order.price * order.quantity;
  });

  emailContent = emailContent + `\nTotal amount: ${total.toFixed(2)}`;

  const email = {
    from: 'drlau@thelead.io', // please make sure this is the email you created with sendgrid.
    to: customerEmail,
    subject: 'New order received',
    text: emailContent,
  };

  const mailer = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true,
    auth: {
      user: 'apikey',
      pass: process.env.sendgridApiKey,
    },
  });

  console.log('sending email...');
  // console.log(email);

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
