import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ArticleFormComponent} from './components/article-form/article-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BackendErrorMessagesModule} from "../backendErrorMessages/backendErrorMessages.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule,
    FormsModule
  ],
  exports: [ArticleFormComponent],
  declarations: [ArticleFormComponent]
})
export class ArticleFormModule {

}
