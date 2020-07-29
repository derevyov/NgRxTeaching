import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isLoggedInSelector} from "../../../../../auth/store/selectors";

@Component({
  selector: 'mc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null;
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
      this.initializeValues();
  }

  private initializeValues() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
