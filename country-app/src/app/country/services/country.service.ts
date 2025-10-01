import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/res-countries.interfaces';
import { CountryMapper } from '../mappers/country.mapper';
import { map, Observable, catchError, throwError, delay, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  private queryCacheCapital = new Map<string, Country[]>();

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    if(this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query)!);
    }

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountries(resp)),
      tap((countries) => {
        this.queryCacheCapital.set(query, countries);
      }),
      catchError((err) => {
        console.error('Error en la búsqueda:', err);
        return throwError(() => new Error(err.message));
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountries(resp)),
      delay(1000),
      catchError((err) => {
        console.error('Error en la búsqueda:', err);
        return throwError(
          () => new Error('No se pudo obtener países con ese query: ' + err.message)
        );
      })
    );
  }

  searchByCountryByAlphaCode(code: string) {
    code = code.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((resp) => CountryMapper.mapRestCountriesToCountries(resp)),
      map(countries => countries.at(0)),
      catchError((err) => {
        console.error('Error en la búsqueda:', err);
        return throwError(
          () => new Error('No se pudo obtener países con ese código: ' + code)
        );
      })
    );
  }
}
