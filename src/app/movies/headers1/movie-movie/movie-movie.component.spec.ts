import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMovieComponent } from './movie-movie.component';

describe('MovieMovieComponent', () => {
  let component: MovieMovieComponent;
  let fixture: ComponentFixture<MovieMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
