import { Component } from '@angular/core';
import { SearchInputComponent } from "../../country/components/search-input/search-input.component";
import { CountryListComponent } from "../../country/components/country-list/country-list.component";

@Component({
  selector: 'app-by-region-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent { }
