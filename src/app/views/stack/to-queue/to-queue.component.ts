import { Component, OnInit } from '@angular/core';
import { QueueService } from '@core/services/queue.service';
import { StackService } from '@core/services/stack.service';

@Component({
  selector: 'app-to-queue',
  templateUrl: './to-queue.component.html',
  styleUrls: ['./to-queue.component.scss'],
})
export class ToQueueComponent implements OnInit {
  constructor(private qs: QueueService, private ss: StackService) {}

  ngOnInit(): void {}

  exchange(): void {
    this.ss.exchange(this.qs.queue);
    this.ss.refresh();
    this.qs.refresh();
  }
}
