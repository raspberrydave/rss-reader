import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { FeedItem } from '../../feeditem';

@Component({
  selector: 'app-feed-search',
  templateUrl: './feed-search.component.html',
  styleUrls: ['./feed-search.component.scss']
})
export class FeedSearchComponent implements OnInit {

  public feeds: Array<FeedItem> = [];
  public feedUrl = 'https://www.spiegel.de/schlagzeilen/tops/index.rss';
  private jsonApiUrl = 'https://api.rss2json.com/v1/api.json';

  constructor(private http: HttpClient) { }

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
      this.feeds = <FeedItem[]>obj['items'];
    });

    /*
    this.http.get<FeedItem[]>(this.jsonApiUrl).subscribe({
      next: (feeds) => {
        this.feeds = feeds;
      },
      error: (err) => {
        console.error('Error', err);
      }
    }); */
    

  }

}