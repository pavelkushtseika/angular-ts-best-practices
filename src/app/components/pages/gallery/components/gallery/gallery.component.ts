import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';


import { AppState } from '../../../../../types/app.state.interface';
import * as GalleryActions from '../../store/gallery.actions';
import { isLoadingSelector, errorSelector, gallerySelector } from '../../store/gallery.selector';
import { ImageInfo } from '../../types/image.interface';

const initialGallery: ImageInfo[] = [];

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  posts$: Observable<ImageInfo[]>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.posts$ = this.store.pipe(select(gallerySelector));
  }

  ngOnInit(): void {
    this.store.dispatch(GalleryActions.getGallery());
  }
}
