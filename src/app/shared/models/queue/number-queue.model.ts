import {
  IDataStructure,
  IMoveData,
  INode,
  NumberNode,
} from "../data-structure.model";
import { IQueue } from "./queue.model";

export class NumberQueue<T = number>
  implements IQueue<T>, IDataStructure<T>, IMoveData<T> {
  size: number = 0;
  private head: INode<T> = null;

  enqueue(value: T): void {
    const node = new NumberNode(value);
    if (this.size === 0) {
      this.head = node;
    } else {
      let temp = this.head;
      while (temp.next !== null) temp = temp.next;
      temp.next = node;
    }
    this.size += 1;
  }

  dequeue(): T {
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  toArray(): T[] {
    const arr = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  getData(): T {
    return this.dequeue();
  }

  setData(value?: T): void {
    this.enqueue(value);
  }

  sendToDataStructure(structure: IMoveData<T>): void {
    structure.setData(this.getData());
  }
}
