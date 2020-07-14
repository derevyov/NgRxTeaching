import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {of} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistenceService} from "../../../shared/services/persistence.service";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "../actions/getCurrentUser.action";

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser99999$ = createEffect(() => this.actions$
    .pipe(ofType(getCurrentUserAction), switchMap(() => {
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCurrentUserFailureAction())
          })
        )
      })
    ))

  constructor(private actions$: Actions,
              private authService: AuthService,
              private persistenceService: PersistenceService
  ) {
  }
}
