import { createReducer, on } from '@ngrx/store';
import { GalleryState } from '../types/gallery.state.interface';
import * as GalleryActions from './gallery.actions';

export const initialState: GalleryState = {
  isLoading: false,
  gallery: [],
  error: null,
};

export const galleryReducer = createReducer(
  initialState,
  on(GalleryActions.getGallery, (state) => ({ ...state, isLoading: true })),
  on(GalleryActions.getGallerySuccess, (state, action) => ({
    ...state,
    isLoading: false,
    gallery: action.gallery
  })),
  on(GalleryActions.getGalleryFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
