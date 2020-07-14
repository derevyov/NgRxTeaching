import {Component, OnInit} from '@angular/core';
import {OnIdentifyEffects} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {getCurrentUserAction} from "./auth/store/actions/getCurrentUser.action";

@Component({
  selector: 'mc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction())
  }
}
