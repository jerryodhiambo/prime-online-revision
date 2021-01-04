import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css'],
})
export class AllCustomersComponent implements OnInit {
  customers: Array<any[]>;
  totalCustomers: number;
  p = 1;
  params = {
    offset: environment.offset,
    limit: environment.limit,
  };
  constructor() {}

  ngOnInit(): void {}

  getCustomersPagination(page) {}
}
