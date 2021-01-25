export interface IQueue<T> {
  enqueue(value: T): void;
  dequeue(): T;
}
