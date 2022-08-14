import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Feed } from '../../classes/feed';
import { IFeedItem } from 'src/app/interfaces/feeditem';
import { FeedService } from '../../services/feed.service';

@Component({
  selector: 'app-feed-search',
  templateUrl: './feed-search.component.html',
  styleUrls: ['./feed-search.component.scss']
})
export class FeedSearchComponent implements OnInit {

  //public feed: FeedInterface | null = null;
  public feed: Feed;
  public feedUrl = 'https://www.spiegel.de/schlagzeilen/tops/index.rss';
  private jsonApiUrl = 'https://api.rss2json.com/v1/api.json';

  constructor(private http: HttpClient, private feedService: FeedService ) {
    this.feed = new Feed('', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  save(): void {
    this.feedService.save(this.feed); 
  }

  fetch(): void {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('rss_url', this.feedUrl)

    this.http.get(this.jsonApiUrl, { headers, params, responseType: 'text' }).subscribe(response => {
      let obj = JSON.parse(response);

      console.log(obj);

      this.feed = <Feed>obj['feed'];
      this.feed.items = <IFeedItem[]>obj['items'];
    });
  }

}