import { Injectable } from '@angular/core';
import { IMoveData } from '@models/data-structure.model';
import { NumberQueue } from '@models/queue/number-queue.model';
import { IQueue } from '@models/queue/queue.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueueService implements IQueue<number> {
  queue = new NumberQueue();
  queue$ = new BehaviorSubject<number[]>([]);

  constructor() {}

  enqueue(value: number): void {
    this.queue.enqueue(value);
    this.refresh();
  }

  dequeue(): number {
    const res = this.queue.dequeue();
    this.refresh();
    return res;
  }

  exchange(structure: IMoveData<number>): void {
    this.queue.sendToDataStructure(structure);
  }

  refresh(): void {
    this.queue$.next(this.queue.toArray());
  }
}
