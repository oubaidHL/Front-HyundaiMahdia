import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddToCartComponent } from './modal-add-to-cart.component';

describe('ModalAddToCartComponent', () => {
  let component: ModalAddToCartComponent;
  let fixture: ComponentFixture<ModalAddToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddToCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
