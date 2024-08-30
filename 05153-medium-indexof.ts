// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
  Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
]


// ============= Your Code Here =============
/**
 * 这里的 Equal<X,U> 如果下次自己忘记了，请参考 https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
 */
type IndexOf<T extends any[], U, Count extends 1[] = []> = T extends [infer X, ...infer Y]
  ? Equal<X, U> extends true
  ? Count['length']
  : IndexOf<Y, U, [1, ...Count]>
  : -1
