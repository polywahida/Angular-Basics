import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() Villain!: any;
  @Input('heroName') heroName ='';

   @Output() killVillain= new EventEmitter<any>();

  onKillVillain(_event: any) {
 this.killVillain.emit("Poly killed 1st villain")
  } 
}