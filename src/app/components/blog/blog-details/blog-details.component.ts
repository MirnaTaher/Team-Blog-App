import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BlogType } from '../blog-listing/blog-type';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
})
export class BlogDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {}
  blogId: any;
  thisBlog: any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.blogId = params.get('id');

      this.blogService.getBlogs().subscribe((blogs) => {
        blogs.forEach((blog) => {
          if (blog.id == this.blogId) {
            this.thisBlog = blog;
          }
        });
      });
    });
  }
}
