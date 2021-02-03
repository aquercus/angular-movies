import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  @Input()  name: string;

  imdbId : string;
  title : string;
  year : number;
  rating : number;

  httpClient : HttpClient;

  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }

  ngOnInit(): void {

    let obs = this.httpClient.get("http://localhost:8080/movies/3230854");
    obs.subscribe((movie : any) =>{
      console.log(movie);
      this.imdbId = movie.imdbId;
      this.title = movie.title;
      this.year = movie.year;
      this.rating = movie.rating;
    })

  }

  getName(): string{
    return this.name;
  }
}
