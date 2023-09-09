import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //Read (Get)
  private studentsUrl = 'api/students';
  httpOptions ={
    headers :new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl).pipe(
      tap( (_) => console.log('Fetched All Students')),
      
      catchError(this.handleErrorResponse<Student[]>('getStudents',[]))
      
    )
  }
  private handleErrorResponse<T>(opertaion = 'operation', result?: T){
     return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${opertaion} failed: ${error.message}`);
      return of(result as T);
    }


  }
}
