import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPaypalComponent } from './button-paypal.component';

describe('ButtonPaypalComponent', () => {
  let component: ButtonPaypalComponent;
  let fixture: ComponentFixture<ButtonPaypalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPaypalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
