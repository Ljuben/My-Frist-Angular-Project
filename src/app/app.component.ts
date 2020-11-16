import { Component, ElementRef, OnInit } from "@angular/core";
import { MoviesService } from "./shared/movies.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  // movies;
  constructor(private moviesService: MoviesService) {}
  // oneMovieTitle(event: string) {
  //   this.movies = this.moviesService.fetchMovies(event);
  // }

  ngOnInit() {}
}
