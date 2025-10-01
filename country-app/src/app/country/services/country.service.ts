import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/res-countries.interfaces';
import { CountryMapper } from '../mappers/country.mapper';
import { map, Observable, catchError, throwError } from 'rxjs';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountries(resp)),
      catchError((err) => {
        console.error('Error en la búsqueda:', err);
        return throwError(() => new Error(err.message));
      })
    );
  }

}
