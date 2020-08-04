import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {ArticleService} from "../../services/article.service";
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction
} from "../actions/deleteArticle.action";
import {Router} from "@angular/router";

@Injectable()
export class DeleteArticleEffect {
  deleteArticle$ = createEffect(() => this.actions$.pipe(
    ofType(deleteArticleAction),
    switchMap(({slug}) => {
      return this.articleService.deleteArticle(slug).pipe(
        map(() => {
          return deleteArticleSuccessAction();
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(deleteArticleFailureAction());
        })
      );
    })
  ));

  redirectAfterDelete$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteArticleSuccessAction),
      tap(() => {
        this.router.navigate(['/'])
      })
    ), {dispatch: false}
  )

  constructor(private actions$: Actions,
              private articleService: ArticleService,
              private router: Router
  ) {
  }
}
