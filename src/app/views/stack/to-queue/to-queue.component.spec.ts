import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToQueueComponent } from './to-queue.component';

describe('ToQueueComponent', () => {
  let component: ToQueueComponent;
  let fixture: ComponentFixture<ToQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToQueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
