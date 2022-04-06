import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FeedSearchComponent } from './feed-search/feed-search.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component'; 

@NgModule({
   imports: [
      AppRoutingModule,
      BrowserModule,
      HttpClientModule,
      FormsModule,
      MatButtonModule,
      MatCardModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      FeedSearchComponent,
      FeedCardComponent,
      AboutComponent,
      NotFoundComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
