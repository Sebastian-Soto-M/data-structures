import { Injectable } from '@angular/core';
import { INode } from '@models/data-structure';
import { IOrderedList, OrderedList } from '@models/list';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService implements IOrderedList<number> {
  private list = new OrderedList();
  list$ = new BehaviorSubject<number[]>([]);

  constructor() {}

  add(item: number): void {
    this.list.add(item);
    this.list$.next(this.list.toArray());
  }

  find(item: number): boolean {
    return this.list.find(item);
  }

  removeAt(index: number): INode<number> {
    const removed = this.list.removeAt(index);
    this.list$.next(this.list.toArray());
    return removed;
  }
}
