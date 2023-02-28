import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ImageInfo } from '../types/image.interface';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  constructor() { }

  // getting data from api call
  getGallery(): Observable<ImageInfo[]> {
    const gallery: ImageInfo[] = [
      { id: 1, title: 'First post', albumId: 1, url: 'https://via.placeholder.com/600/92c952', thumbnailUrl: 'https://via.placeholder.com/150/92c952' },
      { id: 2, title: 'Second post', albumId: 1, url: 'https://via.placeholder.com/600/92c952', thumbnailUrl: 'https://via.placeholder.com/150/92c952' },
      { id: 3, title: 'Third post', albumId: 1, url: 'https://via.placeholder.com/600/92c952', thumbnailUrl: 'https://via.placeholder.com/150/92c952' },
    ];
    return of(gallery).pipe(delay(0));
  }
}
