import {Component, OnInit} from '@angular/core';
import {ArticleInputInterface} from "../../../shared/types/articleInput.interface";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";
import {select, Store} from "@ngrx/store";
import {createArticleIsSubmittingSelector, createArticleValidationErrorsSelector} from "../../store/selectors";
import {createArticleAction} from "../../store/actions/createArticle.action";

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit{

  constructor(private store: Store) {
  }

  isSubmitting$: Observable<boolean>;
  backendsErrors$: Observable<BackendErrorsInterface | null>;

  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };


  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput}));
  }

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(createArticleIsSubmittingSelector));
    this.backendsErrors$ = this.store.pipe(select(createArticleValidationErrorsSelector));
  }
}
