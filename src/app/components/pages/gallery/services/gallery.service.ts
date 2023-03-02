import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ImageInfo } from '../types/image.interface';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  private lastTime: number = 0;
  private cacheData: Observable<ImageInfo[]> = of([]);
  private readonly expiredTime: number = 1000 * 60 * 5;

  constructor(private http: HttpClient) {}

  load(): Observable<ImageInfo[]> {
    const now: number = Date.now();
    if (this.lastTime === 0 || this.lastTime + this.expiredTime > now) {
      this.lastTime = now;
      this.cacheData = this.http.get<ImageInfo[]>("/api/photos");
    }
    return this.cacheData;
  }

  // getting data from api call
  getGallery(): Observable<ImageInfo[]> {
    return this.load().pipe(delay(0));
  }
}
