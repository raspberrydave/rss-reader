export interface IFeedItem {
    title: string;
    link: string;
    description: string;
    categories: Array<string>;
    author: string;
    thumbnail: string;
    guid: string;
    pubDate: Date;
}