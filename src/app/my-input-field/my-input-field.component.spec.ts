import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputFieldComponent } from './my-input-field.component';

describe('MyInputFieldComponent', () => {
  let component: MyInputFieldComponent;
  let fixture: ComponentFixture<MyInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
