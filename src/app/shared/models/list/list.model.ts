export interface IList<T> {
  add(value: T): void;
  indexOf(value: T): number;
  getAt(index: number): T;
  removeAt(index: number): void;
}
