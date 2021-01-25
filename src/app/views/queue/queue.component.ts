import { Component, OnInit } from '@angular/core';
import { QueueService } from '@core/services/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})
export class QueueComponent implements OnInit {
  list: number[] = [];

  constructor(public qs: QueueService) {}

  ngOnInit(): void {
    this.qs.queue$.subscribe((arr: number[]) => {
      this.list = arr;
    });
  }

  refresh(): void {
    this.qs.refresh();
  }
}
