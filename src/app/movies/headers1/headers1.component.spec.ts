import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headers1Component } from './headers1.component';

describe('Headers1Component', () => {
  let component: Headers1Component;
  let fixture: ComponentFixture<Headers1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Headers1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Headers1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
