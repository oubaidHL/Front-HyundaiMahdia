import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSobflousComponent } from './button-sobflous.component';

describe('ButtonSobflousComponent', () => {
  let component: ButtonSobflousComponent;
  let fixture: ComponentFixture<ButtonSobflousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSobflousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSobflousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
