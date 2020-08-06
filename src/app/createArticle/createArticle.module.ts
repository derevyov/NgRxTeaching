import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ArticleFormComponent} from "../shared/modules/articleForm/components/article-form/article-form.component";
import {RouterModule, Routes} from "@angular/router";
import {CreateArticleComponent} from "./components/create-article/create-article.component";
import {ArticleFormModule} from "../shared/modules/articleForm/articleForm.module";
import {ReactiveFormsModule} from "@angular/forms";

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
  ],
  declarations: [CreateArticleComponent]
})
export class CreateArticleModule {

}
