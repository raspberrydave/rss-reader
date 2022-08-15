import { Injectable } from '@angular/core';
import { Feed } from '../classes/feed';

@Injectable({ providedIn: 'root' })
export class FeedService {

  feeds: Array<Feed> = [];

  constructor() { }

  load() {
    
  }

  save(feed: Feed) {
    console.log('Feed "' + feed.title + '" saved');
  }

}