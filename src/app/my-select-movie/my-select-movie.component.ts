import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyBackendService} from '../my-backend.service';
import {Movie} from '../movie';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-select-movie',
  templateUrl: './my-select-movie.component.html',
  styleUrls: ['./my-select-movie.component.css']
})
export class MySelectMovieComponent implements OnInit {
  imdbId : string = '';
  title : string = '';
  year : number = 0;
  rating : number = 0;
  errorMessage : string = 'no error';
  ifError : boolean = false;


  constructor(private httpClient : HttpClient,
              private myBackendService : MyBackendService,
              private router: Router) {}


  ngOnInit(): void {
  }

  get(): void{
    console.log("Get button clicked");
    let obs = this.myBackendService.get(this.imdbId);
    //this.imdbId = this.inputImdbId.nativeElement.value;
    console.log(this.imdbId);

    obs.subscribe((movie : Movie) =>{
      console.log(movie);
      this.myBackendService.currentMovie = movie;
      this.imdbId = movie.imdbId;
      this.title = movie.title;
      this.year = movie.year;
      this.rating = movie.rating;
      this.router.navigateByUrl('update');
    },
      (error)=>{
      console.log("ERROR",error);
      this.errorMessage = 'Movie not found';
      this.ifError = true;
      })

  }

  changeImdbId(event: string)
  {
    console.log(event);
    this.imdbId = event;
  }

}
