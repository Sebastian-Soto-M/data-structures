import { Injectable } from '@angular/core';
import { OrderedList } from '@models/data-structure';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
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
}
