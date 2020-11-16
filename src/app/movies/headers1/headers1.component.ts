import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
  EventEmitter,
} from "@angular/core";
import { MoviesService } from "src/app/shared/movies.service";

@Component({
  selector: "app-headers1",
  templateUrl: "./headers1.component.html",
  styleUrls: ["./headers1.component.css"],
})
export class Headers1Component implements OnInit {
  @Output() titleMovie = new EventEmitter<ElementRef>();
  @ViewChild("movieNameInput") movieNameInput: ElementRef;
  movie: ElementRef;
  movies = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit() {}

  onClick() {
    this.movie = this.movieNameInput.nativeElement.value;
    // console.log(this.movie);
    // this.titleMovie.emit(this.movie);
    this.moviesService
      .fetchMovies(this.movieNameInput.nativeElement.value)
      .subscribe((data) => {
        console.log(data);
        this.movies = data[0];
        console.log(this.movies);
      });
  }
}
