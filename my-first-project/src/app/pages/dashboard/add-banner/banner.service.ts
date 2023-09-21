import { Injectable } from '@angular/core';
import { AddItem } from './add-item';
import { JobOfferComponent } from './job-offer/job-offer.component';
import { CourseOfferComponent } from './course-offer/course-offer.component';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor() { }

getAdds(){

  return [

   new AddItem(JobOfferComponent,{
     tittle:'Software Developer',
     body:'we are looking for software developer',
     requirement: 'ASP.NET and Angular'


   }),
   new AddItem(JobOfferComponent,{
    tittle:'DevOps Engineer',
    body:'we are looking for Devops Engi.',
    requirement: 'CICD and Automation'


  }),
  new AddItem(CourseOfferComponent,{
    tittle:'Industrial Software Bootcamp',
    body:'C#,Angular,SQL,Algorithm,Data Structure',
    coursePrice:'1500 BDT'


  }),

  new AddItem(CourseOfferComponent,{
    tittle:'Machine Learning',
    body:'python,TensorFlow,panda',
    coursePrice:'2500 BDT'


  }),





  ];




}
}





