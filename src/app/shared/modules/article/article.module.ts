import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from './components/article/article.component';
import {EffectsModule} from "@ngrx/effects";
import {GetArticleEffect} from "./store/effects/getArticle.effect";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {ArticleService as SharedArticleService} from "../../services/article.service";
import {RouterModule} from "@angular/router";
import {ErrorMessageModule} from "../errorMessage/error-message.module";
import {LoadingModule} from "../loading/loading.module";


@NgModule({
  declarations: [ArticleComponent],
  exports: [ArticleComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,


  ],
  providers: [SharedArticleService]
})
export class ArticleModule {
}