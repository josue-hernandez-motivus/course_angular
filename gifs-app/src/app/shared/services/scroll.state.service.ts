import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ScrollStateService {

  trendingGifsScrollState = signal<number>(0);
  constructor() { }

}
