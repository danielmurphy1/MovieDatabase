import { Injectable } from '@angular/core';
import { API_KEY } from '../ApiKey';
import { HttpClient,HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movie } from '../Movie';

interface MovieSearchResponse {
  Search: [],
  totalResults: string,
  Response: string,
  Error?: string
}

@Injectable({
  providedIn: 'root'
})
export class MoviesDatabaseService {
  /*since this is a front-end only application, the APIKey will be exposed in the network
  tab because it is part of the query string. Nothing nefarious can be done with this 
  key; however, the ApiKey.ts file is added to gitignore to follow best practices
  to not expose API Keys in the source code or in source control.*/
  private apiKey: string = API_KEY;

  constructor(private http: HttpClient) { }

  searchMovies(searchString: string, page: number): Observable<MovieSearchResponse>{
    const url: string = `http://omdbapi.com/?apikey=${API_KEY}&s=${searchString}&type=movie&page=${page}`;
    
    return this.http.get<MovieSearchResponse>(url);
  }
}
