import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedSearchComponent } from './components/feed-search/feed-search.component';
import { FeeditemCardComponent } from './components/feeditem-card/feeditem-card.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoaderComponent } from './components/shared/loader/loader.component';

import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FeedsComponent } from './components/feeds/feeds.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { FeedService } from './services/feed.service';

@NgModule({
   imports: [
      AppRoutingModule,
      BrowserModule,
      HttpClientModule,
      FormsModule,
      MatButtonModule,
      MatCardModule,
      MatProgressSpinnerModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      FeedSearchComponent,
      FeeditemCardComponent,
      AboutComponent,
      NotFoundComponent,
      LoaderComponent,
      FeedsComponent,
      FeedCardComponent
   ],
   providers: [
      FeedService,
      LoaderService,
      { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
