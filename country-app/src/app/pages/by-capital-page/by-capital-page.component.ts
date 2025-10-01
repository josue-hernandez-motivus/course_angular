import { Component, inject, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SearchInputComponent } from "../../country/components/search-input/search-input.component";
import { CountryListComponent } from "../../country/components/country-list/country-list.component";
import { CountryService } from '../../country/services/country.service';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);
  query = signal<string>('');

  countryResource = rxResource({
    params: () => ( {query: this.query()} ),
    stream: ({params}) => {
      // When the query is empty, return an empty observable array
      if(!params.query) return of([]);
      return this.countryService.searchByCapital(params.query);
    },
  });

  // With resources
  // countryResource = resource({
  //   params: () => ({query: this.query()}),
  //   loader: async({params}) => {
  //     if(!params.query) return [];
  //     return await firstValueFrom(this.countryService.searchByCapital(params.query));
  //   },
  // });


  // isLoading = signal<boolean>(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string) {
  //   if(this.isLoading()) return;
  //   this.isLoading.set(true);


  //   this.countryService.searchByCapital(query).subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error: (error) => {
  //       this.isLoading.set(false);
  //       this.isError.set(error);
  //       this.countries.set([]);
  //     }
  //   });
  // }
}
