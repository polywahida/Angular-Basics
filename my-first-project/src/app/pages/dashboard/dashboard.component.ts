import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';
import { StudentService } from '../_service/student.service';
import { NavigationExtras, Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 students:Student[]=[];
 searchTerms = new Subject<string>();
 constructor(private studentService:StudentService, private router:Router) { }
  ngOnInit(): void {
    this.loadStudent();
    this.searchStudentFromDB();
  }
  loadStudent(){
    this.studentService.getStudents().subscribe({next:(res: Student[]) =>{

      this.students=res;
    }})
  }
  addStudent(name: string): void{
    name=name.trim();
    if(!name){return;}
    this.studentService.saveStudent({name} as Student).subscribe(student => {
      this.students.push(student);
    })
    }
    
    removeStudents(student: Student): void{
    this.students=this.students.filter(res => res!=student);
    this.studentService.removeStudentsByID(student.id).subscribe();
    
    }
  
    navigateStudent(id: number){
    
    this.studentService.getStudentsById(id).subscribe({next:(res: Student)=>{
    if(res){
      const navigationExtras: NavigationExtras ={
        state : {student:res}
      }
      this.router.navigateByUrl(`/detail/${id}`,navigationExtras);
    //console.log(res);
    
    } else {
    
      console.log("There is no student found");
    }
    
    
    }});
    
    }
    searchStudent(terms: string){

      if(!terms){
       this.loadStudent();
      }
       this.searchTerms.next(terms);
     
     }
     
      searchStudentFromDB(){
     
       let resultObs=this.searchTerms.pipe(
          debounceTime(300),
          distinctUntilChanged(),
          switchMap((term:string)=>this.studentService.searchStudents(term))
       );
       if(resultObs){
         resultObs.subscribe(result =>{
           this.students=result;
         });
       }
     
     }
  }
