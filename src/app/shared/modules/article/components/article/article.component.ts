import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {combineLatest, Observable, Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {getArticleAction} from "../../store/actions/getArticle.action";
import {ArticleInterface} from "../../../../types/article.interface";
import {articleSelector, errorSelector, isLoadingSelector} from "../../store/selectors";
import {currentUserSelector} from "../../../../../auth/store/selectors";
import {map} from "rxjs/operators";
import {CurrentUserInterface} from "../../../../types/currentUser.interface";
import {deleteArticleAction} from "../../store/actions/deleteArticle.action";


@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  constructor(private store: Store,
              private router: Router,
              private route: ActivatedRoute) {
  }

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  article: ArticleInterface | null;
  s1: Subscription;
  isAuthor$: Observable<boolean>;

  slug: string;


  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  private initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));

    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))])
      .pipe(
        map(
          ([article, currentUser]: [
            ArticleInterface | null,
            CurrentUserInterface | null]) => {
            if (!article || !currentUser) {
              return false;
            }
            return currentUser.username === article.author.username;
          }
        )
      );
  }

  private initializeListeners() {

    this.s1 = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article;
      });
  }


  private fetchData() {
    this.store.dispatch(getArticleAction({slug: this.slug}));
  }

  ngOnDestroy(): void {
    this.s1.unsubscribe();
  }

  deleteArticle() {
    this.store.dispatch(deleteArticleAction({slug: this.slug}));
  }
}
