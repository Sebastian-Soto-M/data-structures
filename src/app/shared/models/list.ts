import { IDataStructure, INode, NumberNode } from './data-structure';

export interface IOrderedList<T> extends IDataStructure<T> {
  add(item: T): void;
  find(item: T): boolean;
  removeAt(index: number): INode<T> | null;
}

export class OrderedList<T = number> implements IOrderedList<T> {
  constructor(public size = 0, public head: INode<T> = null) {}

  toArray(): T[] {
    const arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  add(item: T): void {
    let current = this.head;
    let previous = null;
    let stop = false;
    while (current !== null && !stop) {
      if (current.value > item) stop = true;
      else {
        previous = current;
        current = current.next;
      }
    }
    let temp = new NumberNode(item);
    if (previous === null) {
      temp.next = this.head;
      this.head = temp;
    } else {
      temp.next = current;
      previous.next = temp;
    }
    this.size++;
  }

  find(item: T): boolean {
    let current = this.head;
    let found = false;
    let stop = false;
    while (current !== null && !found && !stop) {
      if (current.value === item) found = true;
      else current.value > item ? (stop = true) : (current = current.next);
    }
    return found;
  }

  removeAt(index: number): INode<T> | null {
    let current = this.head;
    if (this.size <= 1) {
      this.head = null;
      return current;
    } else {
      let previous = null;
      let counter = 0;
      while (current !== null && counter < index) {
        counter++;
        previous = current;
        current = current.next;
      }
      previous === null
        ? (this.head = current.next)
        : (previous.next = current.next);
      return current;
    }
  }
}
