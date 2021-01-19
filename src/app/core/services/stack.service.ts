import { Injectable } from '@angular/core';
import { INode } from '@models/data-structure';
import { IStack, Stack } from '@models/stack';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StackService implements IStack<number> {
  private stack = new Stack();
  stack$ = new BehaviorSubject<number[]>([]);

  constructor() {}

  push(item: number): void {
    this.stack.push(item);
    this.stack$.next(this.stack.toArray());
  }

  pop(): INode<number> {
    const removed = this.stack.pop();
    this.stack$.next(this.stack.toArray());
    return removed;
  }
}
