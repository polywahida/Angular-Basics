import { Component } from '@angular/core';
import { Student } from '../../_models/student';
import { Router } from '@angular/router';
import { StudentService } from '../../_service/student.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent {
  student: Student | undefined;
  constructor(private router:Router,private studentService:StudentService){
   this.loadStudent();

  }

  loadStudent(){

  const navgiationBehavior = this.router.getCurrentNavigation();
  this.student=navgiationBehavior?.extras?.state?.['student'][0];


  }

  updateStudent(student:Student){

 this.studentService.updateStudent(student).subscribe(()=>{

  this.router.navigate(['/dashboard'])
 });

  }







}