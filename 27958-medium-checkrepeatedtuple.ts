// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'
import { ExpectFalse, NotEqual } from './test-utils'

type cases = [
  Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[]>, false>>,
  Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
]


// ============= Your Code Here =============
type Include<T extends unknown[], K> = T extends [infer X, ...infer Y] ? Equal<X, K> : Include<Y, K>
type CheckRepeatedTuple<T extends unknown[]> = T['length'] extends number
  ? T extends [infer X, ...infer Y]
  ? Include<Y, X>
  : false
  : false
