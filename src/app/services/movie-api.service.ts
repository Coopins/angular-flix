import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {

  readonly MOVIE_URL = 'https://api.themoviedb.org/3/search/movie';
  readonly API_KEY = '0097f23921f387fdce95b2bb424fb6aa';

  constructor(private httpClient: HttpClient) { }

get(query: string): any {
  return this.httpClient.get<any>('${this.MOVIE_URL}/?api_key=${this.API_KEY}&query=${query}').toPromise();
}

}
