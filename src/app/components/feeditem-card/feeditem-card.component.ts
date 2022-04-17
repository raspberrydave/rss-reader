import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FeedItemInterface } from '../../interfaces/feeditem';

@Component({
  selector: 'app-feeditem-card',
  templateUrl: './feeditem-card.component.html',
  styleUrls: ['./feeditem-card.component.scss']
})

export class FeeditemCardComponent {

  @Input() item: FeedItemInterface | null = null;
  @Input() read = false;
  @Output() readChange = new EventEmitter<boolean>();

  markRead() {
    this.read = true;
    this.readChange.emit(true);
  }
  
  markUnread() {
    this.read = false;
    this.readChange.emit(false);
  }

  @HostListener("click") onClick() {
  }

}