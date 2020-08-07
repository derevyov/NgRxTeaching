import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {CreateArticleComponent} from "./components/create-article/create-article.component";
import {ArticleFormModule} from "../shared/modules/articleForm/articleForm.module";
import {ReactiveFormsModule} from "@angular/forms";

import {EffectsModule} from "@ngrx/effects";
import {CreateArticleEffect} from "./store/effects/createArticle.effect";
import {StoreModule} from "@ngrx/store";

import {CreateArticleService} from "./services/createArticle.service";
import {reducers} from "./store/reducers";

const routes: Routes = [
  {
    path: 'articles/new', component: CreateArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers)
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService]
})
export class CreateArticleModule {

}
