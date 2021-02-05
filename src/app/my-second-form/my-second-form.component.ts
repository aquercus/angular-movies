import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-second-form',
  templateUrl: './my-second-form.component.html',
  styleUrls: ['./my-second-form.component.css']
})
export class MySecondFormComponent implements OnInit {

  imdbId : string;
  title : string;
  year : number;
  rating : number;

  httpClient : HttpClient;

  @ViewChild('imdbID') inputImdbId : ElementRef;
  @ViewChild('title') inputTitle : ElementRef;
  @ViewChild('year') inputYear : ElementRef;
  @ViewChild('rating') inputRating : ElementRef;


  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }
  ngOnInit(): void {
  }

  get(): void{
    console.log("Get button clicked");

    this.imdbId = this.inputImdbId.nativeElement.value;
    console.log(this.imdbId);

    let obs = this.httpClient.get("http://localhost:8080/movies/" + this.imdbId);
    obs.subscribe((movie : any) =>{
      console.log(movie);
      this.imdbId = movie.imdbId;
      this.title = movie.title;
      this.year = movie.year;
      this.rating = movie.rating;
      this.populateFields();
    })


  }

  populateFields(){
    this.inputImdbId.nativeElement.value = this.imdbId;
    this.inputTitle.nativeElement.value = this.title;
    this.inputYear.nativeElement.value = this.year;
    this.inputRating.nativeElement.value = this.rating;

  }


  update() : void {
    console.log("Update button clicked");

    this.extractFields();
    let obs = this.httpClient.put("http://localhost:8080/movies/" + this.imdbId,
      {
        imdbId: this.imdbId,
        title : this.title,
        year  : this.year,
        rating: this.rating
      });
    obs.subscribe();
  }

  extractFields(){
    this.imdbId = this.inputImdbId.nativeElement.value;
    this.title = this.inputTitle.nativeElement.value;
    this.year = this.inputYear.nativeElement.value;
    this.rating = this.inputRating.nativeElement.value;
  }
}
