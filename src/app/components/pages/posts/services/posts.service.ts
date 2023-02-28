import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInfo } from '../types/post.interface';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor() { }

  // getting data from api call
  getPosts(): Observable<PostInfo[]> {
    const posts: PostInfo[] = [
      { id: 1, title: 'First post', userId: 1, body: 'asldfj' },
      { id: 2, title: 'Second post', userId: 1, body: 'asldfj' },
      { id: 3, title: 'Third post', userId: 1, body: 'asldfj' },
    ];
    return of(posts).pipe(delay(0));
  }

}
