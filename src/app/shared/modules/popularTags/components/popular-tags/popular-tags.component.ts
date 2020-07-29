import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {errorSelector, isLoadingSelector, popularTagsSelector} from "../../store/selectors";
import {getPopularTagsAction} from "../../store/actions/PopularTags.action";
import {PopularTagType} from "../../../../types/PopularTag.type";

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {

  constructor(private store: Store) {
  }

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  popularTags$: Observable<PopularTagType[] | null>;
  private url = '/tags';

  ngOnInit(): void {
    this.initializeValues();
    this.getData();
  }

  private initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
  }

  private getData() {
    this.store.dispatch(getPopularTagsAction({url: this.url}));
  }
}
