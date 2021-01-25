import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FromQueueToStackComponent } from './to-stack.component';

describe('ToStackComponent', () => {
  let component: FromQueueToStackComponent;
  let fixture: ComponentFixture<FromQueueToStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FromQueueToStackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromQueueToStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
