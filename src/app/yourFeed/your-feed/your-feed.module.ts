import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YourFeedComponent} from "./components/yourFeed/your-feed.component";
import {RouterModule} from "@angular/router";
import {FeedModule} from "../../shared/modules/feed/feed.module";
import {BannerModule} from "../../shared/modules/banner/banner.module";
import {PopularTagsModule} from "../../shared/modules/popularTags/PopularTags.module";
import {FeedTogglerModule} from "../../shared/modules/feedTogler/feedToggler.module";

const routes = [
  {path: 'feed', component: YourFeedComponent}
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ]
})
export class YourFeedModule {
}
