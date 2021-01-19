export interface INode<T> {
  value: T | null;
  next: INode<T> | null;
}

export class NumberNode<T = number> implements INode<T> {
  constructor(public value: T, public next: INode<T> = null) {}
}

interface IDataStructure<T> {
  size?: number;
  head?: INode<T> | null;
  toArray?(): T[];
}

export interface IOrderedList<T> {
  add(item: T): void;
  find(item: T): boolean;
}

export class OrderedList<T = number>
  implements IDataStructure<T>, IOrderedList<T> {
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
}
