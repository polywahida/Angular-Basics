import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 students:Student[]=[];
 constructor(private studentService:StudentService) { }
  ngOnInit(): void {
    this.loadStudent();
  }
  loadStudent(){
    this.studentService.getStudents().subscribe({next:(res) =>{
    
      this.students=res;
    }})
  }
  addStudent(name:string):void {

     }
removeStudents(student:Student):void {
} }
