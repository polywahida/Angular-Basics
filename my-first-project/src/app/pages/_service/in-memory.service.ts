import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService {

  constructor() { }
  createDb() { 
    const students : Student[] = [
      { id: 1, name: 'Poly', description:'Poly is very good girl'},
      { id: 2, name: 'Adil', description:'Adil is very attentive'},
      { id: 3, name: 'Moinul',description:'Moinul is very lazy'},
      { id: 4, name: 'Labib' },
      { id: 5, name: 'Laura'},
      { id: 6, name: 'Evan' }
    ];
    return { students };
  }

  genId(students:Student[]):number{
    return students.length> 0
      ? Math.max(...students.map((x)=>x.id))+1
      : 11;
  }
}