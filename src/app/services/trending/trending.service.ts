import { HttpClient, HttpClientModule, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http: HttpClient) { }

  pageNumber: number = 1;

  getTrendingMovies(){
    const request = new HttpRequest(
      'GET',
      'https://api.themoviedb.org/3/trending/all/week?api_key=4cb7a0aff62a11541acc580956f8d611&page=' + this.pageNumber,
      {reportProgress: true},
    )
    this.pageNumber++;
    return this.http.request(request);
  }
}
