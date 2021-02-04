import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstFormComponent } from './my-first-form.component';

describe('MyFirstFormComponent', () => {
  let component: MyFirstFormComponent;
  let fixture: ComponentFixture<MyFirstFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFirstFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
