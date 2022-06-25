import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogType } from './blog-listing/blog-type';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}
  private _url: string = '/assets/blog-data.json';
  getBlogs(): Observable<BlogType[]> {
    return this.http.get<BlogType[]>(this._url);
  }
}
