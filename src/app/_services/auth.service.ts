import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from '../_models/exam';

@Injectable({ providedIn: 'root' })
export class AuthService {
  userData: Observable<firebase.User>;
  constructor(
    private firestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth
  ) {
    this.userData = angularFireAuth.authState;
  }

  getOrders() {
    return this.firestore
      .collection('orders', (ref) => ref.orderBy('created_at', 'desc'))
      .snapshotChanges();
  }

  updateOrder(order: Order) {
    // delete order.id;
    this.firestore.doc('orders/' + order.id).update(order);
  }

  filter(status) {
    const isTrueSet = status === 'true';
    return this.firestore
      .collection('orders', (ref) => ref.where('delivered', '==', isTrueSet))
      .snapshotChanges();
  }

  search(value) {
    return this.firestore
      .collection('orders', (ref) =>
        ref
          .orderBy('phoneNumber')
          .startAt(value.toLowerCase())
          .endAt(value.toLowerCase() + '\uf8ff')
          .limit(10)
      )
      .snapshotChanges();
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  /* Sign out */
  SignOut() {
    return this.angularFireAuth.signOut();
  }
}
