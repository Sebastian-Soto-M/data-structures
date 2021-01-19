export interface INode<T> {
  value: T | null;
  next: INode<T> | null;
}

export interface IDataStructure<T> {
  size?: number;
  head?: INode<T> | null;
  toArray?(): T[];
}

export class NumberNode<T = number> implements INode<T> {
  constructor(public value: T, public next: INode<T> = null) {}
}
