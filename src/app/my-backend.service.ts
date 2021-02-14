import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MyBackendService {

  constructor(private httpClient : HttpClient) { }

  get(imdbId: string) {
    console.log("Service get", imdbId);

    return this.httpClient.get("http://localhost:8080/movies/" + imdbId);

  }

  update(movie: Movie){
    console.log("Service update", movie.title);

     return this.httpClient.put("http://localhost:8080/movies/" + movie.imdbId,
      {
        imdbId: movie.imdbId,
        title : movie.title,
        year  : movie.year,
        rating: movie.rating
      });

  };
}
