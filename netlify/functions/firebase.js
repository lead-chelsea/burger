/* eslint-disable no-console */
// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase/app';

const admin = require('firebase-admin');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = JSON.parse(process.env.firebaseCredentials);

exports.handler = async function (event, context) {
  let app;
  if (admin.apps.length === 0) {
    app = initializeApp({
      credential: cert(serviceAccount),
    });
  }

  const db = getFirestore(app);

  try {
    const body = JSON.parse(event.body);
    const customerEmail = body.email;
    const orders = body.orders;

    // "bb5dc8842ca31d4603d6aa11448d1654"

    console.log('Email...');
    console.log(customerEmail);

    const response = await db.collection('orders').add({
      customerEmail,
      orders,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Document added successfully - ' + response.id,
      }),
    };
  } catch (error) {
    console.log('Error adding document', error);
  }
};
