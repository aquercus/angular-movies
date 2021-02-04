import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-first-form',
  templateUrl: './my-first-form.component.html',
  styleUrls: ['./my-first-form.component.css']
})
export class MyFirstFormComponent implements OnInit {

  imdbId : string;
  title : string;
  year : number;
  rating : number;

  httpClient : HttpClient;

  @ViewChild('imdbID') inputImdbId : ElementRef;


  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }
  ngOnInit(): void {
  }

  onClick(): void{
    console.log("clicked");

    this.imdbId = this.inputImdbId.nativeElement.value;
    console.log(this.imdbId);

    let obs = this.httpClient.get("http://localhost:8080/movies/" + this.imdbId);
    obs.subscribe((movie : any) =>{
      console.log(movie);
      this.imdbId = movie.imdbId;
      this.title = movie.title;
      this.year = movie.year;
      this.rating = movie.rating;
    })


  }
}
