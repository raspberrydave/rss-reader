import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedSearchComponent } from './components/feed-search/feed-search.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FeedsComponent } from './components/feeds/feeds.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed-search',
    pathMatch: 'full'
  },
  {
    path: 'feeds',
    component: FeedsComponent
  },
  {
    path: 'feed-search',
    component: FeedSearchComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
