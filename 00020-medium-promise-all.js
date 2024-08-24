const promiseAllTest1 = PromiseAll([1, 2, 3]);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);
const promiseAllTest4 = PromiseAll([1, 2, 3]);
export {};
/**
 * declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{
    [K in keyof T]: Awaited<T[K]>
  }>
 */
