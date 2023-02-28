import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { PostInfo } from 'src/app/components/shared/post/post.component';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor() { }

  // getting data from api call
  getPosts(): Observable<PostInfo[]> {
    const posts: PostInfo[] = [
      { id: 1, title: 'First post', userID: 1, body: 'asldfj' },
      { id: 2, title: 'Second post', userID: 1, body: 'asldfj' },
      { id: 3, title: 'Third post', userID: 1, body: 'asldfj' },
    ];
    return of(posts).pipe(delay(0));
  }

}
