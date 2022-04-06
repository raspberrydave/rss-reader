import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedSearchComponent } from './feed-search/feed-search.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'feed-search',
    pathMatch: 'full'
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
