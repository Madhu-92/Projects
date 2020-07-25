import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})

export class EnrollmentService {

  private _users: User[] = [];

  addUser(user: User) {
    this._users.push(user);
  }

  getUsers(): User[] {
    return this._users;
  }

}
