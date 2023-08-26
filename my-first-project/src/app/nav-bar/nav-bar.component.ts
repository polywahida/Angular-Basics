import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class  NavBarComponent implements OnInit {

 navRouter: Array<any>;

 constructor() { 
  this.navRouter= [];

 }
   ngOnInit(): void {
  this.navRouter= [
  { routerName:'Parent', displayName:'Parents'},
  { routerName:' dashboard', displayName:' Dashboard'},
  ]
}
}