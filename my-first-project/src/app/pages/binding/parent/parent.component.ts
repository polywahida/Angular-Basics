import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
hero = 'Poly';
polyKills = '';
Villains = [
  {id : 1, name:'Dipjol'},
];
PolyKilled(event: any) {
  console.log(event);
  this.polyKills = event;
  }
}
