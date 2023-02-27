import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchingService {
  constructor(private http: HttpClient, private router: Router) {}
  
  searchedText: string = '';
  pageNumber: number = 1;
  
  parseSearchText(text: string) {
    let parsedText = text.split(' ');
    let parsedString: string = '';
    for(let i = 0; i < parsedText.length; i++) {
      parsedString += parsedText[i];
      if(i < parsedText.length - 1){
        parsedString += "+";
      }
    }
    return parsedString;
  }

  searchForAMovie(parsedString: string){
    const request = new HttpRequest(
      'GET',
      'https://api.themoviedb.org/3/search/movie?api_key=4cb7a0aff62a11541acc580956f8d611&query=' 
      + parsedString + '&page=' + this.pageNumber,
      {reportProgress: true},
    )
    this.pageNumber++;
    return this.http.request(request);
  }
  
}
