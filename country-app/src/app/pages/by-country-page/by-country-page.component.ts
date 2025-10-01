import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../country/components/search-input/search-input.component";
import { CountryListComponent } from "../../country/components/country-list/country-list.component";
import { CountryService } from '../../country/services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  countryService = inject(CountryService);
  query = signal<string>('');

  // With resources
  countryResource = rxResource({
    params: () => ( {query: this.query()} ),
    stream: ({params}) => {
      // When the query is empty, return an empty observable array
      if(!params.query) return of([]);
      return this.countryService.searchByCountry(params.query);
    },
  });
 }
