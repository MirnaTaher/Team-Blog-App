import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogType } from './blog-type';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

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
  page: number = 1;
  count: number = 0;
  tableSize: number = 9;
  tableSizes: number[] = [9, 12, 15, 18];

  ngOnInit(): void {
    this.getBlogList();
  }
  getBlogList(): void {
    this.blogService.getBlogs().subscribe((list) => {
      this.blogList = list;
    });
  }
  // pagination
  onTableDataChange(event: any): void {
    this.page = event.target.value;
    this.getBlogList();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getBlogList();
  }

  // when click on card
  goToBlogDetails(blog: BlogType) {
    this.router.navigate(['/blog', blog.id]);
  }
}
