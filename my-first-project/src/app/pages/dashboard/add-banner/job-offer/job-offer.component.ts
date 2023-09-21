import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-offer',
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.css']
})
export class JobOfferComponent {
@Input()data!:any;
}