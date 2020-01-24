import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  employees = [{
    empid: 'E23647',
    name: 'Rajesh',
    empphoto:"https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg",
    age: 24,
    company: "Infosys",
    salary: 80000,
    designation: 'fullstack developer',
    doj: new Date('06/08/1995'),
    location: 'Bangalore'

  },
  {
  empid: 'T53647',
  name: 'Roopesh',
  empphoto:"https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365__340.jpg",
  age: 24,
  company: "TCS",
  salary: 80000,
  designation: 'HTML developer',
  doj: new Date('06/08/1995'),
  location: 'Anantapur'

},
{
  empid: 'A43647',
  name: 'Kiran',
  empphoto:"https://cdn.pixabay.com/photo/2015/06/22/08/38/children-817368__340.jpg",
  age: 24,
  company: "CTS",
  salary: 50000,
  designation: 'frontend developer',
  doj: new Date('06/08/1995'),
  location: 'Bangalore'

}];

addEmp(){
  this.employees.unshift({
    empid: 'A43647',
    name: 'Kiran',
    empphoto:"https://cdn.pixabay.com/photo/2015/06/22/08/38/children-817368__340.jpg",
    age: 24,
    company: "CTS",
    salary: 50000,
    designation: 'frontend developer',
    doj: new Date('06/08/1995'),
    location: 'Bangalore'    
  })
}
removeEmp(emp){
let index = this.employees.indexOf(emp);
this.employees.splice(index,1);
}
  constructor() { }

  ngOnInit() {
  }

}
