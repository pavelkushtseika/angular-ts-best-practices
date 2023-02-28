import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { ImageInfo } from '../../types/image.interface';
import { AppState } from '../../../../../types/app.state.interface';
import * as GalleryActions from '../../store/gallery.actions';
import { isLoadingSelector, errorSelector, gallerySelector } from '../../store/gallery.selectors';

const initialGallery: ImageInfo[] = [];

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery: ImageInfo[] = initialGallery;
  private readonly maxCardWidth: number = 250;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  gallery$: Observable<ImageInfo[]>;

  breakpoint: number = 3;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.gallery$ = this.store.pipe(select(gallerySelector));
  }

  onResize(_event: any) {
    this.breakpoint = Math.floor(window.innerWidth / this.maxCardWidth);
  }

  ngOnInit(): void {
    this.store.dispatch(GalleryActions.getGallery());
  }
}
