import { Component, inject, linkedSignal, signal } from '@angular/core';
import { SearchInputComponent } from "../../country/components/search-input/search-input.component";
import { CountryListComponent } from "../../country/components/country-list/country-list.component";
import { CountryService } from '../../country/services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  countryService = inject(CountryService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal<string>(() => this.queryParam);

  // With resources
  countryResource = rxResource({
    params: () => ( {query: this.query()} ),
    stream: ({params}) => {
      // When the query is empty, return an empty observable array
      if(!params.query) return of([]);

      // Update URL with the new query
      this.router.navigate(['/country/by-country'], {
        queryParams: {
          query: params.query,
        },
      });
      return this.countryService.searchByCountry(params.query);
    },
  });
 }
