import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {
  data = [
    { job: '', salary: 0, desc: '' }
  ];
  headers = [
    {key: 'job', label: 'Job'},
    {key: 'salary', label: 'Salary'},
    {key: 'desc', label: 'Desc'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
