import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { MoviesService } from "src/app/shared/movies.service";
import { MovieModel } from "../../movies.model";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-movie-movie",
  templateUrl: "./movie-movie.component.html",
  styleUrls: ["./movie-movie.component.css"],
})
export class MovieMovieComponent implements OnInit {
  movie;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.moviesService.fetchMoviesById(id).subscribe((data) => {
      this.movie = data;
      console.log(this.movie);
      console.log(this.movie.Ratings[0].Value);
    });
  }
}
