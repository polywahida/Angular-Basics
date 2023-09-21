import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AddItem } from './add-item';
import { BannerService } from './banner.service';
import { BannerDirective } from './banner.directive';
import { AddBanner } from './add-banner';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit,OnDestroy {
globalLisFunc: Function | undefined;

public addItemsList:AddItem[]=[];
currentIndex=-1;
@ViewChild(BannerDirective,{static:true}) appBanner!:BannerDirective;
private clearTime:VoidFunction|undefined;

constructor(private bannerService:BannerService){
this.addItemsList=this.bannerService.getAdds();

}

ngOnInit(): void {
  this.loadDirectives();
  this.getAdds();
}

loadDirectives(){
  this.currentIndex=(this.currentIndex+1) % this.addItemsList.length;
  const addItems=this.addItemsList[this.currentIndex];
  const viewContainerRef=this.appBanner.viewContainerRef;
  viewContainerRef.clear();

  const createContainer = viewContainerRef.createComponent<AddBanner>(addItems.component);
  createContainer.instance.data=addItems.data;




}
getAdds(): any{
 const interval=setInterval(()=>{
 this.loadDirectives();

 },3000);
 this.clearTime=() => clearInterval(interval);

}
ngOnDestroy(): void {
  this.clearTime?.();
}

}