import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInfo } from '../types/post.interface';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(private http: HttpClient) {}

  load(): Observable<PostInfo[]> {
    return this.http.get<PostInfo[]>('/api/posts');
  }

  getPosts(): Observable<PostInfo[]> {
    return this.load().pipe(delay(0));
  }
}
