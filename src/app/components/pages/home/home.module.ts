import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { postsReducer } from '../posts/store/posts.reducer';
import { galleryReducer } from '../gallery/store/gallery.reducer';
import { PostsEffects } from '../posts/store/posts.effects';
import { GalleryEffects } from '../gallery/store/gallery.effects';
import { HomeRoutes } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', postsReducer),
    StoreModule.forFeature('gallery', galleryReducer),
    EffectsModule.forFeature([PostsEffects, GalleryEffects]),
    RouterModule.forChild(HomeRoutes)
  ]
})

export class HomeModule {}
