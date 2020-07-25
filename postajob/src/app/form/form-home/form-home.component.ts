import { Component, OnInit } from '@angular/core';
import { User } from "./user";
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.css']
})
export class FormHomeComponent implements OnInit {

  ngOnInit() {
  }
  // userModel = new User('software', 20000, 'good');
  private _user:User = {job:'', salary:0, desc:''};
  constructor(private _enrollmentService: EnrollmentService){}

  public addUser() {
    const currentUser: User = {
      job:this._user.job,
      salary:this._user.salary,
      desc:this._user.desc
    };
    this._enrollmentService.addUser(currentUser);
  }

}
