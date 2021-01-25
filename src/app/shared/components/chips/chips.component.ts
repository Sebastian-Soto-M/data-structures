import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '@core/services/list.service';
import { QueueService } from '@core/services/queue.service';
import { StackService } from '@core/services/stack.service';

@Component({
  selector: 'app-list-amount',
  template: `
    <mat-chip-list>
      <mat-chip selected [color]="color"> {{ text }} {{ amount }} </mat-chip>
    </mat-chip-list>
  `,
  styleUrls: ['./chips.component.scss'],
})
export class ListAmountChipComponent implements OnInit {
  @Input() text?: string;
  @Input() color?: 'primary' | 'warn' | 'accent';
  amount: number;

  constructor(private service: ListService) {}

  ngOnInit(): void {
    this.service.list$.subscribe((next) => {
      this.amount = next.length;
    });
  }
}

@Component({
  selector: 'app-stack-amount',
  template: `
    <mat-chip-list>
      <mat-chip selected [color]="color"> {{ text }} {{ amount }} </mat-chip>
    </mat-chip-list>
  `,
  styleUrls: ['./chips.component.scss'],
})
export class StackAmountChipComponent implements OnInit {
  @Input() text?: string;
  @Input() color?: 'primary' | 'warn' | 'accent';
  amount: number;

  constructor(private service: StackService) {}

  ngOnInit(): void {
    this.service.stack$.subscribe((next) => {
      this.amount = next.length;
    });
  }
}

@Component({
  selector: 'app-queue-amount',
  template: `
    <mat-chip-list>
      <mat-chip selected [color]="color"> {{ text }} {{ amount }} </mat-chip>
    </mat-chip-list>
  `,
  styleUrls: ['./chips.component.scss'],
})
export class QueueAmountChipComponent implements OnInit {
  @Input() text?: string;
  @Input() color?: 'primary' | 'warn' | 'accent';
  amount: number;

  constructor(private service: QueueService) {}

  ngOnInit(): void {
    this.service.queue$.subscribe((next) => {
      this.amount = next.length;
    });
  }
}
