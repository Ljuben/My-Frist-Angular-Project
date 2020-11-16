import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MovieModel } from "../movies/movies.model";

@Injectable({ providedIn: "root" })
export class MoviesService {
  loadedArray: [];
  movie1;
  constructor(private http: HttpClient) {}

  fetchMovies(movie: string) {
    return this.http
      .get("http://www.omdbapi.com/?apikey=d67080f4&s=" + movie)
      .pipe(
        map((responsData) => {
          console.log(responsData + "@@@@@");
          const postArray = [];
          for (const key in responsData) {
            if (responsData.hasOwnProperty(key)) {
              postArray.push(responsData[key]);
            }
          }
          console.log(postArray);
          return postArray;
        })
      );
  }

  fetchMoviesById(id: string) {
    return this.http.get(
      "http://www.omdbapi.com/?i=" + id + "&apikey=d67080f4"
    );
  }
}
