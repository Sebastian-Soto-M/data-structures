interface IStackNode<T> {
  value: T | null;
  next: IStackNode<T> | null;
}

interface IStack<T> {
  size: number;
  top: StackNode<T> | null;
  bottom: StackNode<T> | null;
  push(val: T): number;
  pop(): StackNode<T> | null;
}

export class StackNode<T> implements IStackNode<T> {
  constructor(public value: T, public next = null) {}
}

export class Stack<T = number> implements IStack<T> {
  constructor(public size = 0, public top = null, public bottom = null) {}

  push(val: T) {
    const node = new StackNode(val);
    if (this.size === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const currentTop = this.top;
      this.top = node;
      this.top.next = currentTop;
    }

    this.size += 1;
    return this.size;
  }

  pop(): StackNode<T> | null {
    if (this.size > 0) {
      const nodeToBeRemove = this.top as StackNode<T>;
      this.top = nodeToBeRemove.next;
      this.size -= 1;
      nodeToBeRemove.next = null;
      return nodeToBeRemove;
    }
    return null;
  }
}
