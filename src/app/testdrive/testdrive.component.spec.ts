import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdriveComponent } from './testdrive.component';

describe('TestdriveComponent', () => {
  let component: TestdriveComponent;
  let fixture: ComponentFixture<TestdriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestdriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
