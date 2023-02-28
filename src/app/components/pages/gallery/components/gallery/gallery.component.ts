import { Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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
export class GalleryComponent implements OnInit, OnDestroy {
  gallery: ImageInfo[] = initialGallery;
  dataSource = new MatTableDataSource<ImageInfo>(initialGallery);

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  gallery$: Observable<ImageInfo[]>;
  displayGallery: Observable<ImageInfo[]> = new Observable<ImageInfo[]>();

  breakpoint: number = 3;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(private store: Store<AppState>, private changeDetectorRef: ChangeDetectorRef) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.gallery$ = this.store.pipe(select(gallerySelector));

    this.gallery$.subscribe(gallery => this.dataSource.data = gallery);
  }
  
  onResize(_event?: any) {
    this.breakpoint = window.innerWidth <= 600 ? 2 : Math.floor(window.innerWidth / 500) * 2;
  }

  ngOnInit(): void {
    this.onResize();
    this.changeDetectorRef.detectChanges();
    this.store.dispatch(GalleryActions.getGallery());
    this.dataSource.paginator = this.paginator;
    this.displayGallery = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
}
