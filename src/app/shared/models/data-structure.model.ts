export interface INode<T> {
  value: T | null;
  next: INode<T> | null;
}

export class DataStructureNode<T> implements INode<T> {
  constructor(public value: T, public next: INode<T> = null) {}
}

export interface IDataStructure<T> {
  size: number;
  isEmpty(): boolean;
  toArray(): T[];
}

export interface IMoveData<T> {
  sendToDataStructure(structure: IMoveData<T>, value?: T): void;
  getData(value?: T): T;
  setData(value?: T): void;
}

export class NumberNode<T = number> extends DataStructureNode<T> {}
