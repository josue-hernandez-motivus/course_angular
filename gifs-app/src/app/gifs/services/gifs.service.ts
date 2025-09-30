import { environment } from "@/environments/environment";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import type { GiphyResponse } from "../interfaces/giphy.interfaces";
import { GifMapper } from "../mapper/gif.mapper";
import { Gif } from "../interfaces/gif.interface";
import { map, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);

  trendingGifsLoading = signal(true);
  trendingGifs = signal<Gif[]>([]);


  constructor() {
    this.loadTrendingGifs();
    console.log('GifsService initialized');
  }

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
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
        console.log({gifs});
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  // Example for use funcitons of Observable like as pipe
  searchGifs(value: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit:20,
        q: value,
      }
    }).pipe(
      // Functions of pipe can concatenate more functions
      map(({data}) => data),
      map((items) => {
        const gifs = GifMapper.mapGiphyItemsToGifsArray(items);
        return gifs;
      })
    )
  }
}
