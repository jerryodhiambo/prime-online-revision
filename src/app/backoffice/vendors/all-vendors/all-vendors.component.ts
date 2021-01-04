import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-vendors',
  templateUrl: './all-vendors.component.html',
  styleUrls: ['./all-vendors.component.css'],
})
export class AllVendorsComponent implements OnInit {
  vendors: Array<any[]>;
  totalVendors: number;
  p = 1;
  params = {
    offset: environment.offset,
    limit: environment.limit,
  };
  exams: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.exams = firestore.collection('exam_papers').valueChanges();
  }

  ngOnInit(): void {}

  updateVendor() {}

  getVendorsPagination(page) {}

  getExams() {}
}
