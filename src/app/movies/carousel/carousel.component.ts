import { Component, OnInit, Input } from "@angular/core";
import { MoviesService } from "src/app/shared/movies.service";
import { MovieModel } from "../movies.model";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
})
export class CarouselComponent implements OnInit {
  moivesImg = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.fetchMovies("batman").subscribe((data) => {
      console.log(data + "1234");
    });
  }
}
