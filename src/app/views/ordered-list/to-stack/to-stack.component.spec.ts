import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToStackComponent } from './to-stack.component';

describe('ToStackComponent', () => {
  let component: ToStackComponent;
  let fixture: ComponentFixture<ToStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
