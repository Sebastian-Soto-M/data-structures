import { Injectable } from '@angular/core';
import { IMoveData } from '@models/data-structure.model';
import { NumberQueue } from '@models/queue/number-queue.model';
import { NumberStack } from '@models/stack/number-stack.model';
import { IStack } from '@models/stack/stack.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StackService implements IStack<number> {
  stack = new NumberStack();
  stack$ = new BehaviorSubject<number[]>([]);

  constructor() {}

  push(item: number): void {
    this.stack.push(item);
    this.stack$.next(this.stack.toArray());
  }

  pop(): number {
    const removed = this.stack.pop();
    this.stack$.next(this.stack.toArray());
    return removed;
  }

  refresh(): void {
    this.stack$.next(this.stack.toArray());
  }

  exchange(structure: IMoveData<number>): void {
    this.stack.sendToDataStructure(structure);
  }
}
