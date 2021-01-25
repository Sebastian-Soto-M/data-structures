import {
  IDataStructure,
  IMoveData,
  INode,
  NumberNode,
} from "../data-structure.model";
import { IList } from "./list.model";

export class NumberOrderedList<T = number>
  implements IList<T>, IDataStructure<T>, IMoveData<T> {
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

  indexOf(item: T, current: INode<T> = this.head, pos: number = 0): number {
    if (current.value === item) return pos;
    return current.value > item
      ? -1
      : this.indexOf(item, current.next, pos + 1);
  }

  getAt(index: number): T {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp.value;
  }

  removeAt(index: number): void {
    let temp = this.head;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = temp;
      temp = temp.next;
    }
    if (prev !== null && temp !== null) {
      prev.next = temp.next;
    } else this.head = temp.next;
  }

  getData(value: T): T {
    const index = this.indexOf(value);
    if (index !== -1) {
      this.removeAt(index);
      return value;
    } else return null;
  }

  setData(value: T): void {
    this.add(value);
  }

  sendToDataStructure(structure: IMoveData<T>, value: T): void {
    structure.setData(this.getData(value));
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
