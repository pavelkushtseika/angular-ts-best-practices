import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/types/app.state.interface";

export const selectFeature = (state: AppState) => state.gallery;

export const isLoadingSelector = createSelector(selectFeature, state => state.isLoading);

export const gallerySelector = createSelector(selectFeature, state => state.gallery);

export const errorSelector = createSelector(selectFeature, state => state.error);
