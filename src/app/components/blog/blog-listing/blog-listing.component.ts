import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogType } from './blog-type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.scss'],
})
export class BlogListingComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  bgColor: any = '#f5f7fa';
  blogList: BlogType[] = [];
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((list) => {
      this.blogList = list;
    });
  }
  goToBlogDetails(blog: BlogType) {
    this.router.navigate(['/blog', blog.id]);
  }
}
