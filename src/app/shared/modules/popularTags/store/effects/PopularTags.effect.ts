import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PopularTagsService} from "../../services/PopularTags.service";
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction
} from "../actions/PopularTags.action";
import {catchError, map, switchMap} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {PopularTagType} from "../../../../types/PopularTag.type";

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() => this.actions$.pipe(
    ofType(getPopularTagsAction),
    switchMap(({url}) => {
      return this.popularTagsService.getPopularTags(url).pipe(
        map((popularTags: PopularTagType[]) => {
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
