import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostsRoutes } from './posts.routing';
import { postsReducer } from './store/posts.reducer';
import { PostsEffects } from './store/posts.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects]),
    RouterModule.forChild(PostsRoutes),
  ]
})

export class PostsModule {}
