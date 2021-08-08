import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQuickViewComponent } from './modal-quick-view.component';

describe('ModalQuickViewComponent', () => {
  let component: ModalQuickViewComponent;
  let fixture: ComponentFixture<ModalQuickViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalQuickViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalQuickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
