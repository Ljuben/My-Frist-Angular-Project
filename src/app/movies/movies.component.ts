import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { MoviesService } from "../shared/movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"],
})
export class MoviesComponent implements OnInit {
  movies = [];

  constructor(private http: HttpClient, private moviesService: MoviesService) {}
  ngOnInit() {}

  getMovies() {}

  // onGetMovies(event: string) {
  //   this.http
  //     .get("http://www.omdbapi.com/?apikey=d67080f4&s=" + event)
  //     .subscribe(
  //       (data: { Search: []; totalResults: string; Response: boolean }) => {
  //         this.movies = data.Search;
  //         console.log(this.movies);
  //       }
  //     );
  // }

  onGetMovies(event: string) {
    // this.moviesService.fetchMovies(event).subscribe((data) => {
    //   this.movies = data[0];
    //   console.log(this.movies)
    // });
  }
}
