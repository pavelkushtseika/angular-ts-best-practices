import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { GalleryService } from "../services/gallery.service";
import * as GalleryActions from './gallery.actions';

@Injectable()
export class GalleryEffects {
  getGallery$ = createEffect(() => 
    this.actions$.pipe(
      ofType(GalleryActions.getGallery),
      mergeMap(() => {
        return this.galleryService.getGallery().pipe(
          map((gallery) => GalleryActions.getGallerySuccess({ gallery })),
          catchError((error) =>
            of(GalleryActions.getGalleryFailure({ error: error.message }))
          )
        );
      })
    )
  );
  constructor(private actions$: Actions, private galleryService: GalleryService) {}
}
