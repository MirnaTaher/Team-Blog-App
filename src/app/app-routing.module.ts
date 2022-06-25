import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { BlogListingComponent } from './components/blog/blog-listing/blog-listing.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogListingComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
