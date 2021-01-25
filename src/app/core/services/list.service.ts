import { Injectable } from '@angular/core';
import { IMoveData } from '@models/data-structure.model';
import { IList } from '@models/list/list.model';
import { NumberOrderedList } from '@models/list/number-ordered-list.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService implements IList<number> {
  list = new NumberOrderedList();
  list$ = new BehaviorSubject<number[]>([]);

  constructor() {}

  getAt(index: number): number {
    return this.list.getAt(index);
  }

  add(item: number): void {
    this.list.add(item);
    this.refresh();
  }

  indexOf(item: number): number {
    return this.list.indexOf(item);
  }

  removeAt(index: number): void {
    this.list.removeAt(index);
    this.refresh();
  }

  exchange(structure: IMoveData<number>, value: number): void {
    this.list.sendToDataStructure(structure, value);
  }

  refresh(): void {
    this.list$.next(this.list.toArray());
  }
}
