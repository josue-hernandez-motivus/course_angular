import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from "../../country/components/search-input/search-input.component";
import { CountryListComponent } from "../../country/components/country-list/country-list.component";
import { CountryService } from '../../country/services/country.service';
import { Country } from '../../country/interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  isLoading = signal<boolean>(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if(this.isLoading()) return;
    this.isLoading.set(true);


    this.countryService.searchByCapital(query).subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (error) => {
        this.isLoading.set(false);
        this.isError.set(error);
        this.countries.set([]);
      }
    });
  }
}
