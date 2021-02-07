import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThirdFormComponent } from './my-third-form.component';

describe('MyThirdFormComponent', () => {
  let component: MyThirdFormComponent;
  let fixture: ComponentFixture<MyThirdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyThirdFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyThirdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
