import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonClicktopayComponent } from './button-clicktopay.component';

describe('ButtonClicktopayComponent', () => {
  let component: ButtonClicktopayComponent;
  let fixture: ComponentFixture<ButtonClicktopayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonClicktopayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonClicktopayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
