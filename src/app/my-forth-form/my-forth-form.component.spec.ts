import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyForthFormComponent } from './my-forth-form.component';

describe('MyForthFormComponent', () => {
  let component: MyForthFormComponent;
  let fixture: ComponentFixture<MyForthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyForthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyForthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
