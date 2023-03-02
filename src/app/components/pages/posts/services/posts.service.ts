import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInfo } from '../types/post.interface';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private lastTime: number = 0;
  private cacheData: Observable<PostInfo[]> = of([]);
  private readonly expiredTime: number = 1000 * 60 * 5;

  constructor(private http: HttpClient) {}

  load(): Observable<PostInfo[]> {
    const now: number = Date.now();
    if (this.lastTime === 0 || this.lastTime + this.expiredTime > now) {
      this.lastTime = now;
      this.cacheData = this.http.get<PostInfo[]>('/api/posts');
    }
    return this.cacheData;
  }

  getPosts(): Observable<PostInfo[]> {
    return this.load().pipe(delay(0));
  }
}
