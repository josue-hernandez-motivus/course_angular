import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'gifs-history-page',
  imports: [GifListComponent],
  templateUrl: './gif-history-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryPageComponent {

  gifsService = inject(GifsService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map((params) => params['query'])
  ));

  gifsByKey = computed(() => this.gifsService.getHistoryGifs(this.query()));

}
