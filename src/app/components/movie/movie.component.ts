import { Component, HostListener } from '@angular/core';
import { ExtractService } from 'src/app/services/extract/extract.service';
import { TrendingService } from 'src/app/services/trending/trending.service';
import { Movie } from './movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  constructor(private trendingService: TrendingService, private extractService: ExtractService, private router: Router) { }

  retrievedData: any;
  movies: Movie[] = [];

  ngOnInit(): void {
    this.getMoreTrendingMovies();
  }
  @HostListener("window:scroll", ["$event"]) onWindowScroll() {
  let scrollingPosition = document.documentElement.scrollTop;
  let maxPosition = document.documentElement.scrollHeight;

  if(Math.ceil(scrollingPosition) >= Math.ceil(maxPosition - 725)) {
    this.getMoreTrendingMovies();
    }
  }
  
  getMoreTrendingMovies(){
    this.retrievedData = this.trendingService.getTrendingMovies();
    this.retrievedData.subscribe((data: any) => {
      let movies: Movie[] = this.extractService.extractMovies(data.body.results);
      this.movies.push(...movies);
      //console.log(movies);
    }) 
  }
}
