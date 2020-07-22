import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from './components/feed/feed.component';
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "./store/effects/getFeed.effect";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {FeedService} from "./services/feed.service";
import {RouterModule} from "@angular/router";
import {ErrorMessageModule} from "../errorMessage/error-message.module";
import {LoadingModule} from "../loading/loading.module";


@NgModule({
  declarations: [FeedComponent],
  exports: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
  ],
  providers: [FeedService]
})
export class FeedModule {
}
