// import { Gif } from "../interfaces/gif.interfaces";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
  static mapGiphyItemToGif(giphyItem: GiphyItem) {
    return {
      id: giphyItem.id,
      title: giphyItem.title,
      url: giphyItem.images.original.url,
    };
  }

  static mapGiphyItemsToGifsArray(items: GiphyItem[]) {
    return items.map(this.mapGiphyItemToGif);
  }
}
