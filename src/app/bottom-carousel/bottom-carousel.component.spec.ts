import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCarouselComponent } from './bottom-carousel.component';

describe('BottomCarouselComponent', () => {
  let component: BottomCarouselComponent;
  let fixture: ComponentFixture<BottomCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
