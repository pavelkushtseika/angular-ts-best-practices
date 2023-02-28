import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsRoutes } from './posts.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PostsRoutes)
  ]
})

export class PostsModule {}
