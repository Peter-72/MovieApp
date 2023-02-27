import { Injectable } from '@angular/core';
import { Movie } from 'src/app/components/movie/movie';

@Injectable({
  providedIn: 'root'
})
export class ExtractService {

  constructor() { }

  extractMovies(data: any){
    let movies: Movie[] = [];
    for(let i = 0; i < data.length; i++){
      let movie: Movie = {
        title: data[i].title ? data[i].title : data[i].original_name,
        img: 'https://image.tmdb.org/t/p/original' + data[i].poster_path,
        releaseDate: data[i].release_date? data[i].release_date : data[i].first_air_date,
        mediaType: data[i].media_type ? data[i].media_type.charAt(0).toUpperCase() + data[i].media_type.slice(1): 'Movie/TV Show',
        overview: data[i].overview,     
      }
      movies.push(movie);
    }
    return movies;
  }
}
