import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'country-list',
  imports: [RouterLink],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {
  countries = input<Country[]>([]);
}
