import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { BindingComponent } from './pages/binding/binding.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ParentComponent } from './pages/binding/parent/parent.component';
import { ChildComponent } from './pages/binding/child/child.component';

const routes: Routes = [
 {path:'binding', component: BindingComponent},
 {path:'dashboard', component: DashboardComponent},
 {path:'parent', component: ParentComponent},
 {path:'child', component: ChildComponent},
];
 
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  
})
export class AppRoutingModule { }
