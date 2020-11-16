import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/shared/movies.service";
import { MoviesComponent } from "../movies.component";

@Component({
  selector: "app-right-carousel",
  templateUrl: "./right-carousel.component.html",
  styleUrls: ["./right-carousel.component.css"],
})
export class RightCarouselComponent implements OnInit {
  robinMovies = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.fetchMovies("game of thrones").subscribe((data) => {
      console.log(data);
      this.robinMovies = data[0];
      console.log(this.robinMovies);
    });
  }
}
