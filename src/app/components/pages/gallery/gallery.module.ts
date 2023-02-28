import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryRoutes } from './gallery.routing';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GalleryRoutes)
  ],
  declarations: [
    ThumbnailComponent
  ]
})

export class GalleryModule {}
