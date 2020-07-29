import {NgModule} from "@angular/core";
import {PopularTagsComponent} from './components/popular-tags/popular-tags.component';
import {PopularTagsService} from "./services/PopularTags.service";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {GetPopularTagsEffect} from "./store/effects/PopularTags.effect";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {ErrorMessageModule} from "../errorMessage/error-message.module";
import {LoadingModule} from "../loading/loading.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducers),
    ErrorMessageModule,
    LoadingModule,
    RouterModule,
  ],
  providers: [PopularTagsService]
})
export class PopularTagsModule {

}
