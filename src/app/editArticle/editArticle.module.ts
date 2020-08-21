import {RouterModule, Routes} from "@angular/router";
import {LoadingModule} from "../shared/modules/loading/loading.module";
import {EffectsModule} from "@ngrx/effects";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {NgModule} from "@angular/core";
import {EditArticleComponent} from "./components/create-article/edit-article.component";
import {EditArticleService} from "./services/editArticle.service";
import {ArticleFormModule} from "../shared/modules/articleForm/articleForm.module";
import {UpdateArticleEffect} from "./store/effects/updateArticle.effect";
import {ReactiveFormsModule} from "@angular/forms";
import {ArticleService as SharedArticleService} from 'src/app/shared/services/article.service';
import {reducers} from 'src/app/editArticle/store/reducers';
import {GetArticleEffect} from './store/effects/getArticle.effect';


const routes: Routes = [
  {
    path: 'articles/:slug/edit', component: EditArticleComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService]
})
export class EditArticleModule {

}
