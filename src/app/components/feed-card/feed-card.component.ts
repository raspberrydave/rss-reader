import { Component, Input, OnInit } from '@angular/core';
import { FeedItem } from '../../feeditem';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {

  @Input() item: FeedItem | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
