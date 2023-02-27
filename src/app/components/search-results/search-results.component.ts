import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ExtractService } from 'src/app/services/extract/extract.service';
import { SearchingService } from 'src/app/services/searching/searching.service';
import { TrendingService } from 'src/app/services/trending/trending.service';
import { Movie } from '../movie/movie';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  movies: Movie[] = [];

  constructor(private searchingService: SearchingService, private router: Router, private extractService: ExtractService) {
    this.gotASearchRequest(this.searchingService.searchedText);
    }

  gotASearchRequest(text: string) {
    console.log("searched for: " + text);
    this.router.navigateByUrl('/search');
    this.movies = [];
    this.searchingService.pageNumber = 1;

    let parsedText = this.searchingService.parseSearchText(text);
    let retrievedData = this.searchingService.searchForAMovie(parsedText);
    
    retrievedData.subscribe((data: any) => {
      let movies: Movie[] = this.extractService.extractMovies(data.body.results);
      console.log(movies);
      this.movies.push(...movies);
    });
    this.searchingService.searchedText = '';
  }

}
