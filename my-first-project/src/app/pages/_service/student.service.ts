
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../_models/student';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //Read (Get)
  private studentsUrl = 'api/students';
  httpOptions ={
    headers :new HttpHeaders({'Content-Type': 'application/json'})
  }
  studentsURL: any;

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl).pipe(
      tap( (_) => console.log('Fetched All Students')),

      catchError(this.handleErrorResponse<Student[]>('getStudents',[]))

    )
  }
  getStudentsById(id: number) : Observable<Student>{
    const url= `${this.studentsURL}?id=${id}`; 
    return this.http.get<Student>(url).pipe(
      tap((_)=> console.log(`Fetched Students by ${id}`)),
      catchError(this.handleErrorResponse<Student>(`getStudents by ${id}`))

    )
    }


    saveStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(this.studentsURL,student,this.httpOptions).pipe(
      tap((newStudent:Student)=> console.log(`Add new Student ${newStudent.id}`)),
      catchError(this.handleErrorResponse<Student>(`Save student`))

    )


  }
    removeStudentsByID(id:number):Observable<Student>{
    const url= `${this.studentsURL}/${id}`; 
    return this.http.delete<Student>(url).pipe(
      tap((_)=> console.log(`Delete Students by ${id}`)),
      catchError(this.handleErrorResponse<Student>(`Delete Student by ${id}`))

    )
    }

  private handleErrorResponse<T>(opertaion = 'operation', result?: T){
     return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${opertaion} failed: ${error.message}`);
      return of(result as T);
    }


  }
  updateStudent(student:Student):Observable<Student>{

    return this.http.put<Student>(this.studentsURL,student,this.httpOptions).pipe(
      tap((_)=> console.log(`Update Students `)),
      catchError(this.handleErrorResponse<Student>(`Update Student `))

    )
    }

    searchStudents(terms:string): Observable<Student[]>{
      if(!terms.trim()) return of([]);
      return this.http.get<Student[]>(`${this.studentsURL}?name=${terms}`).pipe(
        tap((_)=> console.log( 'Fetched All Students')),
        catchError(this.handleErrorResponse<Student[]>('getStudents',[]))

      )
      }

    }