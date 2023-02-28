import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ImageInfo } from '../types/image.interface';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  constructor(private http: HttpClient) {}

  load(): Observable<ImageInfo[]> {
    return this.http.get<ImageInfo[]>('/api/photos');
  }

  // getting data from api call
  getGallery(): Observable<ImageInfo[]> {
    return this.load().pipe(delay(0));
  }
}
