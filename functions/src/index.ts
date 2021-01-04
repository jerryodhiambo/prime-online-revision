import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

const SENDGRID_API_KEY = functions.config().sendgrid.key;

import * as sgMail from '@sendgrid/mail';
sgMail.setApiKey(SENDGRID_API_KEY);

export const sendOrder = functions.firestore
  .document('orders/{orderId}')
  .onUpdate(async (doc) => {
    const order = await doc.after.data();
    console.log(order);
    const msg = {
      to: order.email,
      from: 'orders@primeonlinerevision.com',
      subject: 'New Revision Material',

      // Custom Templates
      templateId: 'd-3dbbd4cb76a74379b99967cc3e88679f',
    };

    console.log('Sent');

    return sgMail.send(msg);
  });
