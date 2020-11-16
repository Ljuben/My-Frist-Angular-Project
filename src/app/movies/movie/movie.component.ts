import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { MovieModel } from "../movies.model";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"],
})
export class MovieComponent implements OnInit {
  @Input() movie: MovieModel;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log("#####" + this.movie);
  }
}
