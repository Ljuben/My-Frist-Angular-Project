import { Component, OnInit, Output } from "@angular/core";
import { config } from "process";
import { MoviesService } from "src/app/shared/movies.service";
import { MovieModel } from "../../movies.model";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"],
})
export class MovieDetailComponent implements OnInit {
  movieDetail: MovieModel;
  movies = [];
  constructor(config: NgbCarouselConfig, private MoviesService: MoviesService) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.MoviesService.fetchMovies("batman").subscribe((data) => {
      this.movies = data[0];

      console.log(this.movies);
    });
  }
}
