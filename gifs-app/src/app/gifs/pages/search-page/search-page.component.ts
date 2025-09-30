import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-dashboard-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent {

  gifsService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  searchGifs(value: string) {
    this.gifsService.searchGifs(value).subscribe({
      next: (gifs) => {
        this.gifs.set(gifs);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
 }

