import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { AppState } from 'src/app/types/app.state.interface';

import { PostInfo } from '../posts/types/post.interface';
import * as PostsActions from '../posts/store/posts.actions';
import * as PostsSelectors from '../posts/store/posts.selectors';

import { ImageInfo } from '../gallery/types/image.interface';
import * as GalleryActions from '../gallery/store/gallery.actions';
import * as GallerySelectors from '../gallery/store/gallery.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts$: Observable<PostInfo[]>;
  gallery$: Observable<ImageInfo[]>;

  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.pipe(select(PostsSelectors.postsSelector));
    this.gallery$ = this.store.pipe(select(GallerySelectors.gallerySelector));
  }

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPosts());
    this.store.dispatch(GalleryActions.getGallery());
  }
}
