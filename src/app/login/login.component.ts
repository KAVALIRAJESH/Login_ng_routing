import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = [{
    serialnum: 1,
    empid: 'E23647',
    name: 'Rajesh',
    age: 24,
    company: "Infosys",
    salary: 80000,
    designation: 'fullstack developer',
    doj: new Date('06/08/1995'),
    location: 'Bangalore'

  },
  {
    serialnum: 2,
    empid: 'T55648',
    name: 'sravani',
    age: 18,
    company: "cognizant",
    salary: 60000,
    designation: 'html developer',
    doj: new Date('5/5/97'),
    location: 'Hindupur'

  },
  {
    serialnum: 3,
    empid: 'U26645',
    name: 'Roopesh',
    age: 15,
    company: "TCS",
    salary: 10000,
    designation: 'Angular developer',
    doj: new Date('07/09/2005'),
    location: 'Narasapuram'

  },
  {
    serialnum: 4,
    empid: 'R15455',
    name: 'Kiran',
    age: 22,
    company: "CGI",
    salary: 50000,
    designation: 'java developer',
    doj: new Date('02/05/2017'),
    location: 'Hyderabad'

  },
  {
    serialnum: 5,
    empid: 'H25142',
    name: 'Lakshmi',
    age: 22,
    company: "Thomson reuters",
    salary: 10000,
    designation: 'Software developer',
    doj: new Date('05/20/2019'),
    location: 'Mysore'

  },
  {
    serialnum: 6,
    empid: 'L21221',
    name: 'Mahesh',
    age: 23,
    company: "Tatasky",
    salary: 15000,
    designation: 'Marketting',
    doj: new Date('10/09/2002'),
    location: 'Marthalli'

  },
  {
    serialnum: 7,
    empid: 'A25897',
    name: 'Ashok',
    age: 35,
    company: "ICIC Bank",
    salary: 45000,
    designation: 'Banking',
    doj: new Date('12/24/2015'),
    location: 'Anantapur'

  },
  {
    serialnum: 8,
    empid: 'Z45213',
    name: 'Pavan',
    age: 24,
    company: "Mindtree",
    salary: 30000,
    designation: 'Marketting',
    doj: new Date('10/11/2016'),
    location: 'Pune'

  },
  {
    serialnum: 9,
    empid: 'V25154',
    name: 'Puttaraju',
    age: 26,
    company: "IHS Markit",
    salary: 25000,
    designation: 'Software Developer',
    doj: new Date('01/01/2018'),
    location: 'Whitefield'

  },
  {
    serialnum: 10,
    empid: 'N25731',
    name: 'Govardhan',
    age: 34,
    company: "Vedanthu",
    salary: 18500,
    designation: 'DTP operator',
    doj: new Date('02/03/2016'),
    location: 'HSR Layout'

  }];
  constructor() { }

  ngOnInit() {
  }

}
