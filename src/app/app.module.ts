import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { MoviesComponent } from "./movies/movies.component";
import { ArtistsComponent } from "./artists/artists.component";
import { ArtistComponent } from "./artists/artist/artist.component";
import { MovieComponent } from "./movies/movie/movie.component";

import { HttpClientModule } from "@angular/common/http";
import { HeadersComponent } from "./headers/headers.component";

import { Headers1Component } from "./movies/headers1/headers1.component";
import { CarouselComponent } from "./movies/carousel/carousel.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RightCarouselComponent } from "./movies/right-carousel/right-carousel.component";
import { MovieDetailComponent } from "./movies/movie/movie-detail/movie-detail.component";

import { MovieMovieComponent } from "./movies/headers1/movie-movie/movie-movie.component";
import { BottomCarouselComponent } from './bottom-carousel/bottom-carousel.component';

const moviesRoutes: Routes = [
  { path: "", component: HeadersComponent },
  { path: "movies-detail", component: MovieDetailComponent },

  {
    path: "headers1",
    component: Headers1Component,
  },
  {
    path: "headers1/:id",
    component: MovieMovieComponent,
  },
  {
    path: "users/:id",
    component: MovieComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ArtistsComponent,
    ArtistComponent,
    MovieComponent,
    HeadersComponent,
    Headers1Component,
    CarouselComponent,
    RightCarouselComponent,
    MovieDetailComponent,
    BottomCarouselComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(moviesRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
