import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from 'src/app/_models/exam';
import { AuthService } from 'src/app/_services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
})
export class AllOrdersComponent implements OnInit {
  totalOrders: number;
  p = 1;
  params = {
    offset: environment.offset,
    limit: environment.limit,
  };
  orders: Order[];
  selectOrder: Order = {};
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getOrders().subscribe((data) => {
      this.orders = data.map((e) => {
        const data = e.payload.doc.data() as Order;
        const id = e.payload.doc.id;
        return {
          id,
          ...data,
        };
      });
    });
  }

  selectedOrder(index) {
    this.selectOrder = this.orders[index];
  }

  updateOrder() {
    this.selectOrder.delivered = true;
    this.authService.updateOrder(this.selectOrder);
  }

  filterByStatus(value: boolean) {
    this.authService.filter(value).subscribe((data) => {
      this.orders = data.map((e) => {
        const data = e.payload.doc.data() as Order;
        const id = e.payload.doc.id;
        return {
          id,
          ...data,
        };
      });
    });
  }

  search(value) {
    console.log(value);
    this.authService.search(value).subscribe((data) => {
      this.orders = data.map((e) => {
        const data = e.payload.doc.data() as Order;
        const id = e.payload.doc.id;
        return {
          id,
          ...data,
        };
      });
    });
  }
}
