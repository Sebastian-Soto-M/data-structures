import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToListFormComponent } from './to-list-form.component';

describe('ToListFormComponent', () => {
  let component: ToListFormComponent;
  let fixture: ComponentFixture<ToListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
