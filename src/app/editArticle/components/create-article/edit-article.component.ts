import {Component, OnInit} from '@angular/core';
import {ArticleInputInterface} from "../../../shared/types/articleInput.interface";
import {Observable} from "rxjs";
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";
import {select, Store} from "@ngrx/store";

import {ActivatedRoute} from "@angular/router";
import {getArticleAction} from "../../store/actions/getArticle.action";
import {articleSelector, isSubmittingSelector} from "../../store/selectors";
import {validationErrorsSelector} from "../../../auth/store/selectors";
import {filter, map} from "rxjs/operators";
import {ArticleInterface} from "../../../shared/types/article.interface";
import {createArticleAction} from "../../../createArticle/store/actions/createArticle.action";
import {updateArticleAction} from "../../store/actions/updateArticle.action";

@Component({
  selector: 'mc-create-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  private slug: string;

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  isSubmitting$: Observable<boolean>;
  backendsErrors$: Observable<BackendErrorsInterface | null>;
  isLoading$: Observable<boolean>;
  initialValues$: Observable<ArticleInputInterface>;

  ngOnInit(): void {

    this.initializeValues();
    this.fetchData();
  }

  private fetchData() {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  private initializeValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendsErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(select(articleSelector), filter(Boolean), map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList
        };
      })
    );

  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(updateArticleAction({articleInput, slug: this.slug}));
  }
}
