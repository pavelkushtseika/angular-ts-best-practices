import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryRoutes } from './gallery.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GalleryRoutes)
  ]
})

export class GalleryModule {}
