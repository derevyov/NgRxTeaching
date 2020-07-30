import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FeedModule} from "../shared/modules/feed/feed.module";
import {BannerModule} from "../shared/modules/banner/banner.module";
import {PopularTagsModule} from "../shared/modules/popularTags/PopularTags.module";
import {FeedTogglerModule} from "../shared/modules/feedTogler/feedToggler.module";
import {TagFeedComponent} from "./components/tag-feed/tag-feed.component";


const routes = [
  {path: 'tags/:slug', component: TagFeedComponent}
];

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule,
  ]
})
export class TagFeedModule { }
