import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  ViewChild,
  Output,
} from "@angular/core";

@Component({
  selector: "app-headers",
  templateUrl: "./headers.component.html",
  styleUrls: ["./headers.component.css"],
})
export class HeadersComponent implements OnInit {
  // @Output() titleMovie = new EventEmitter<ElementRef>();
  // @Output() updatedCounter = new EventEmitter<number>();
  // counter = 0;

  @Output() titleMovie1 = new EventEmitter<ElementRef>();
  @ViewChild("movieNameInput") movieNameInput1: ElementRef;
  movie;
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.movie = this.movieNameInput1.nativeElement.value;
    this.titleMovie1.emit(this.movie);
  }
}
