import { Component, OnInit } from '@angular/core';
import { Exam } from 'src/app/_models/exam';
import { AngularFirestore } from '@angular/fire/firestore';
// import {} from 't'
@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css'],
})
export class CreateVendorComponent implements OnInit {
  exam: Exam = {};
  constructor(
    private firestore: AngularFirestore // private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  submit() {
    this.exam.available = true;
    this.exam.updated_at = new Date().toDateString();
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('exam_papers')
        .add(this.exam)
        .then(
          (res) => {
            this.exam = {};
          },
          (err) => reject(err)
        );
    });
  }
}
