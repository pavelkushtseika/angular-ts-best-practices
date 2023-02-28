import { createAction, props } from '@ngrx/store';
import { ImageInfo } from '../types/image.interface';

export const getGallery = createAction('[Gallery] Get Gallery');

export const getGallerySuccess = createAction(
  '[Gallery] Get Gallery success',
  props<{ gallery: ImageInfo[] }>()
);

export const getGalleryFailure = createAction(
  '[Gallery] Get Gallery failure',
  props<{ error: string }>()
);
