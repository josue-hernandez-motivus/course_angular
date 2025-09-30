import { environment } from "@/environments/environment";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import type { GiphyItem, GiphyResponse } from "../interfaces/giphy.interfaces";
import { GifMapper } from "../mapper/gif.mapper";

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGifs = signal<GiphyItem[]>([]);

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
      }
    }).subscribe({
      // New form of subscribe
      next: (response) => {
        const gifs = GifMapper.mapGiphyItemsToGifsArray(response.data);
        console.log(gifs);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
