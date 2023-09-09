import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BindingComponent } from './pages/binding/binding.component';
import { ParentComponent } from './pages/binding/parent/parent.component';
import { ChildComponent } from './pages/binding/child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryService } from './pages/_service/in-memory.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    BindingComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(

      InMemoryService,{dataEncapsulation:false }
    )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
