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
import {TagListModule} from "../tag-list/tagList.module";
import {ArticleService} from "./services/article.service";
import {DeleteArticleEffect} from "./store/effects/deleteArticle.effect";

const routes = [{
  path: 'articles/:slug', component: ArticleComponent
}];

@NgModule({
  declarations: [ArticleComponent],
  exports: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,


  ],
  providers: [SharedArticleService, ArticleService]
})
export class ArticleModule {
}
