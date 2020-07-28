import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PopularTagsService} from "../../services/PopularTags.service";
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "../actions/PopularTags.action";
import {catchError, map, switchMap} from "rxjs/operators";
import {GetPopularTagsResponseInterface} from "../../types/getPopularTagsResponse.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(({url}) => {
      return this.popularTagsService.getPopularTags(url).pipe(
        map((popularTags: GetPopularTagsResponseInterface) => {
          return getPopularTagsSuccessAction({popularTags});
        }), catchError((errorResponse: HttpErrorResponse) => {
          return of(getPopularTagsFailureAction);
        })
      );
    })
  ));

  constructor(private actions$: Actions,
              private popularTagsService: PopularTagsService) {
  }
}
