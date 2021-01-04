import { Component, OnInit } from '@angular/core';
import {
  faMotorcycle,
  faUsers,
  faReceipt,
  faInfoCircle,
  faSlidersH,
  faTachometerAlt,
  faChartBar,
  faHotel,
  faCreditCard,
  faCartPlus,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  riderIcon = faMotorcycle;
  customerIcon = faUsers;
  reportsIcon = faChartBar;
  dashboardIcon = faTachometerAlt;
  settingsIcon = faSlidersH;
  supportIcon = faInfoCircle;
  vendorIcon = faHotel;
  financeIcon = faCreditCard;
  ordersIcon = faCartPlus;
  constructor() {}

  ngOnInit(): void {}
}
