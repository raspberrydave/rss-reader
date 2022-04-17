import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { FeedInterface } from '../../interfaces/feed';
import { FeedItemInterface } from '../../interfaces/feeditem';

@Component({
  selector: 'app-feed-search',
  templateUrl: './feed-search.component.html',
  styleUrls: ['./feed-search.component.scss']
})
export class FeedSearchComponent implements OnInit {

  public feedItems: Array<FeedItemInterface> = [];
  public feeds: Array<FeedInterface> = [];
  public feedUrl = 'https://www.spiegel.de/schlagzeilen/tops/index.rss';

  private jsonApiUrl = 'https://api.rss2json.com/v1/api.json';

  constructor(private http: HttpClient ) {
  }

  ngOnInit(): void {
  }

  fetch(): void {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('rss_url', this.feedUrl)

    this.http.get(this.jsonApiUrl, { headers, params, responseType: 'text' }).subscribe(response => {
      let obj = JSON.parse(response);
      console.log(obj);
      this.feedItems = <FeedItemInterface[]>obj['items'];
      this.feeds = <FeedInterface[]>obj['feed'];
    });
  }

}