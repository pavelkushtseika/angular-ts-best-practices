import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GalleryRoutes } from './gallery.routing';
import { galleryReducer } from './store/gallery.reducer';
import { GalleryEffects } from './store/gallery.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('gallery', galleryReducer),
    EffectsModule.forFeature([GalleryEffects]),
    RouterModule.forChild(GalleryRoutes)
  ]
})

export class GalleryModule {}
