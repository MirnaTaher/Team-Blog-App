import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { SpinnerComponent } from './components/common/spinner/spinner.component';
import { BlogListingComponent } from './components/blog/blog-listing/blog-listing.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeHeaderComponent } from './components/home/home-header/home-header.component';
import { HomeNavbarComponent } from './components/common/home-navbar/home-navbar.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestimonialsCardComponent } from './components/home/testimonials/testimonials-card/testimonials-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlogCardComponent } from './components/blog/blog-listing/blog-card/blog-card.component';
import { HubSectionComponent } from './components/home/hub-section/hub-section.component';
import { TaskMangageSysComponent } from './components/home/task-mangage-sys/task-mangage-sys.component';
import { SchedulingComponent } from './components/home/scheduling/scheduling.component'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    BlogListingComponent,
    BlogDetailsComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeNavbarComponent,
    TestimonialsComponent,
    TestimonialsCardComponent,
    BlogCardComponent,
    HubSectionComponent,
    TaskMangageSysComponent,
    SchedulingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    CarouselModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
