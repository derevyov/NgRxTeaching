import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {TopBarModule} from "./shared/modules/topBar/topBar.module";
import {PersistenceService} from "./shared/services/persistence.service";
import {AuthInterceptor} from "./shared/services/authinterceptor.service";
import {GlobalFeedModule} from "./globalFeed/global-feed.module";
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {YourFeedModule} from "./yourFeed/your-feed/your-feed.module";
import {TagFeedModule} from "./tagFeed/tag-feed.module";
import {CreateArticleModule} from "./createArticle/createArticle.module";
import {ArticleModule} from "./shared/modules/article/article.module";
import {EditArticleModule} from "./editArticle/editArticle.module";

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,

    StoreModule.forRoot({
      router: routerReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    CreateArticleModule,
    ArticleModule,
    EditArticleModule
  ],
  providers: [
    PersistenceService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
