import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {ArticleService as SharedArticleService} from "../../../../services/article.service";
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from "../actions/getArticle.action";
import {ArticleInterface} from "../../../../types/article.interface";

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() => this.actions$.pipe(
    ofType(getArticleAction),
    switchMap(({slug}) => {
      return this.articleService.getArticle(slug).pipe(
        map((article: ArticleInterface) => {
          return getArticleSuccessAction({article});
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(getArticleFailureAction());
        })
      );
    })
  ));

  constructor(private actions$: Actions,
              private articleService: SharedArticleService
  ) {
  }
}
