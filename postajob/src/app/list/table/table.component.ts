import { Component, OnInit, Input } from '@angular/core';
// import { EnrollmentService } from '../enrollment.service';
import { EnrollmentService } from 'src/app/form/enrollment.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data = [];
  @Input() headers = [];

  users = this._enrollmentService.getUsers();

  constructor(private _enrollmentService: EnrollmentService) { }

  // public printUsers() {
  //   console.log(this._enrollmentService.getUsers());
  //   users: this._enrollmentService.getUsers();
  // }

  ngOnInit() {
  }

}
