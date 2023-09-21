import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-offer',
  templateUrl: './course-offer.component.html',
  styleUrls: ['./course-offer.component.css']
})
export class CourseOfferComponent {
  @Input()data!:any;
}