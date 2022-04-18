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
    const docRef = db.collection('users').doc('alovelace');

    await docRef.set({
      first: 'Ada',
      last: 'Lovelace',
      born: 1815,
    });

    console.log('Document written with ID: ', docRef.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Document added successfully' }),
    };
  } catch (e) {
    console.error('Error adding document: ', e);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'something wrong...' }),
    };
  }
};
