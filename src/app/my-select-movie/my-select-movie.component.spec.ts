import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySelectMovieComponent } from './my-select-movie.component';

describe('MySelectMovieComponent', () => {
  let component: MySelectMovieComponent;
  let fixture: ComponentFixture<MySelectMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySelectMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelectMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
