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
import { InMemoryService } from './pages/_service/in-memory.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StudentsDetailsComponent } from './pages/dashboard/students-details/students-details.component';
import { AddBannerComponent } from './pages/dashboard/add-banner/add-banner.component';
import { BannerDirective } from './pages/dashboard/add-banner/banner.directive';
import { JobOfferComponent } from './pages/dashboard/add-banner/job-offer/job-offer.component';
import { CourseOfferComponent } from './pages/dashboard/add-banner/course-offer/course-offer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    BindingComponent,
    ParentComponent,
    ChildComponent,
    StudentsDetailsComponent,
    AddBannerComponent,
    BannerDirective,
    JobOfferComponent,
    CourseOfferComponent
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
