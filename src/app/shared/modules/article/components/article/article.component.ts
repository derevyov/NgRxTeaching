import {Component, OnChanges, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {GetArticleResponseInterface} from "../../../../types/getArticleResponse.interface";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnChanges {
  constructor(private store: Store, private router: Router,
              private route: ActivatedRoute) {
  }

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  article$: Observable<GetArticleResponseInterface | null>;




  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners()
  }

  private initializeValues(): void {

  }

  private initializeListeners() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }


}
