import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'gifs-history-page',
  imports: [],
  templateUrl: './gif-history-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryPageComponent {

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map((params) => params['query'])
  ));

}
