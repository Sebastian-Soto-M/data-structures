import {
  IDataStructure,
  IMoveData,
  INode,
  NumberNode,
} from "../data-structure.model";
import { IStack } from "./stack.model";

export class NumberStack<T = number>
  implements IStack<T>, IDataStructure<T>, IMoveData<T> {
  size: number = 0;
  private head: INode<T> = null;

  constructor() {}

  toArray(): T[] {
    const arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  push(value: T): void {
    const node = new NumberNode(value);
    if (this.size === 0) {
      this.head = node;
    } else {
      const currentTop = this.head;
      this.head = node;
      this.head.next = currentTop;
    }
    this.size += 1;
  }

  pop(): T {
    if (this.size > 0) {
      const toRemove = this.head;
      this.head = toRemove.next;
      this.size -= 1;
      toRemove.next = null;
      return toRemove.value;
    }
    return null;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  getData(): T {
    return this.pop();
  }

  setData(value: T): void {
    this.push(value);
  }

  sendToDataStructure(structure: IMoveData<T>): void {
    structure.setData(this.getData());
  }
}
