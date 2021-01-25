import { Component, OnInit } from '@angular/core';
import { StackService } from '@core/services/stack.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent implements OnInit {
  stack: number[] = [];

  constructor(public ss: StackService) {}

  ngOnInit(): void {
    this.ss.stack$.subscribe((arr: number[]) => {
      this.stack = arr;
    });
  }

  refresh(): void {
    this.ss.refresh();
  }
}
