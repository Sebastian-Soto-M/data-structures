import { Component, OnInit } from '@angular/core';
import { QueueService } from '@core/services/queue.service';
import { StackService } from '@core/services/stack.service';

@Component({
  selector: 'app-to-stack',
  templateUrl: './to-stack.component.html',
  styleUrls: ['./to-stack.component.scss'],
})
export class FromQueueToStackComponent implements OnInit {
  constructor(private qs: QueueService, private ss: StackService) {}

  ngOnInit(): void {}

  exchange(): void {
    this.qs.exchange(this.ss.stack);
    this.ss.refresh();
    this.qs.refresh();
  }
}
