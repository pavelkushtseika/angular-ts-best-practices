import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GalleryRoutes } from './gallery.routing';
import { galleryReducer } from './store/gallery.reducer';
import { GalleryEffects } from './store/gallery.effects';
import { ImageviewComponent } from './components/imageview/imageview.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('gallery', galleryReducer),
    EffectsModule.forFeature([GalleryEffects]),
    RouterModule.forChild(GalleryRoutes)
  ],
  declarations: [
    ImageviewComponent
  ]
})

export class GalleryModule {}
