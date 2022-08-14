import { IFeed } from '../interfaces/feed';
import { IFeedItem } from '../interfaces/feeditem';

export class Feed implements IFeed {
    author: string;
    description: string;
    image: string;
    link: string;
    title: string;
    url: string;
    items: Array<IFeedItem> = [];

    constructor(author: string, description: string, image: string, link: string, title: string, url: string) {
        this.author = author;
        this.description = description;
        this.image = image;
        this.link = link;
        this.title = title;
        this.url = url;
    }

}