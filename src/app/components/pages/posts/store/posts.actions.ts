import { createAction, props } from '@ngrx/store';
import { PostInfo } from '../types/post.interface';

export const getPosts = createAction('[Posts] Get Posts');

export const getPostsSuccess = createAction(
  '[Posts] Get Posts success',
  props<{ posts: PostInfo[] }>()
);

export const getPostsFailure = createAction(
  '[Posts] Get Posts failure',
  props<{ error: string }>()
);
