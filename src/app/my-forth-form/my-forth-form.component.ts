import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-forth-form',
  templateUrl: './my-forth-form.component.html',
  styleUrls: ['./my-forth-form.component.css']
})
export class MyForthFormComponent implements OnInit {
  imdbId : string = '';
  title : string = '';
  year : number = 0;
  rating : number = 0;

  httpClient : HttpClient;


  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }
  ngOnInit(): void {
  }

  get(): void{
    console.log("Get button clicked");

    //this.imdbId = this.inputImdbId.nativeElement.value;
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

  update() : void {
    console.log("Update button clicked");


    let obs = this.httpClient.put("http://localhost:8080/movies/" + this.imdbId,
      {
        imdbId: this.imdbId,
        title : this.title,
        year  : this.year,
        rating: this.rating
      });
    obs.subscribe();
  }



  changeImdbId(event: string)
  {
    console.log(event);
    this.imdbId = event;
  }

  changeTitle(event: string)
  {
    console.log(event);
    this.title = event;
  }

  changeYear(event: string)
  {
    console.log(event);
    this.year = Number(event);
  }

  changeRating(event: string)
  {
    console.log(event);
    this.rating = Number(event);
  }
}
