import { Country } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/res-countries.interfaces";

export class CountryMapper {
  static mapRestCountryToCountry(country: RESTCountry): Country {
    return {
      cca2: country.cca2,
      flag: country.flag,
      flagSvg: country.flags.svg,
      name: country.name.common,
      capital: country.capital.join(','),
      population: country.population,
    };
  }

  static mapRestCountriesToCountries(countries: RESTCountry[]): Country[] {
    return countries.map(this.mapRestCountryToCountry);
  }
}
