import { IDataStructure, INode, NumberNode } from './data-structure';

export interface IStack<T> extends IDataStructure<T> {
  tail?: INode<T> | null;
  push(item: T): void;
  pop(): INode<T> | null;
}

export class Stack<T = number> implements IStack<T> {
  constructor(public size = 0, public head = null, public tail = null) {}

  toArray(): T[] {
    const arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  push(val: T) {
    const node = new NumberNode(val);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const currentTop = this.head;
      this.head = node;
      this.head.next = currentTop;
    }

    this.size += 1;
    return this.size;
  }

  pop(): INode<T> | null {
    if (this.size > 0) {
      const toRemove = this.head;
      this.head = toRemove.next;
      this.size -= 1;
      toRemove.next = null;
      return toRemove;
    }
    return null;
  }
}
