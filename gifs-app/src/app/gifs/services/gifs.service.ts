import { environment } from "@/environments/environment";
import { HttpClient } from "@angular/common/http";
import { computed, effect, inject, Injectable, signal } from "@angular/core";
import type { GiphyResponse } from "../interfaces/giphy.interfaces";
import { GifMapper } from "../mapper/gif.mapper";
import { Gif } from "../interfaces/gif.interface";
import { map, tap } from "rxjs";

const GIFS_KEY = 'gifs';

const loadFromLocalStorage = (): Record<string, Gif[]> => {
  const gifsFromLocalStorage = localStorage.getItem(GIFS_KEY) ?? '{}'; // Record<string, Gif[]>
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);

  private trendingGifsPage = signal(0);

  tredingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 4) {
      groups.push(this.trendingGifs().slice(i, i + 4));
    }
    return groups;
  });

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed<string[]>(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historyString);
  });

  loadTrendingGifs() {
    if(this.trendingGifsLoading()) return;
    this.trendingGifsLoading.set(true);
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 32,
        offset: this.trendingGifsPage() * 32,
      }
    }).subscribe({
      // New form of subscribe
      next: (response) => {
        const gifs = GifMapper.mapGiphyItemsToGifsArray(response.data);
        this.trendingGifs.update((currentGifs) => [...currentGifs, ...gifs]);
        this.trendingGifsPage.update((currentPage) => currentPage + 1);
        this.trendingGifsLoading.set(false);
        console.log({ gifs });
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  // Example for use funcitons of Observable like as pipe
  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 32,
        q: query,
      }
    }).pipe(
      // Functions of pipe can concatenate more functions
      map(({ data }) => data),
      map((items) => {
        const gifs = GifMapper.mapGiphyItemsToGifsArray(items);
        return gifs;
      }),
      tap((items) => {
        this.searchHistory.update((history) => ({...history,  [query.toLowerCase()]: items}));
      })
    )
  }


  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query.toLowerCase()];
  }
}
