// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]


// ============= Your Code Here =============
type StringToUnion<T extends string> = T extends `${infer X}${infer Y}` ? `${X}` | StringToUnion<Y> : never

type FirstUniqueCharIndex<T extends string, O extends string[] = []> = T extends `${infer X}${infer Y}`
  ? X extends StringToUnion<Y>
  ? FirstUniqueCharIndex<Y, [...O, X]>
  : X extends O[number]
  ? FirstUniqueCharIndex<Y, [...O, X]>
  : O['length']
  : -1
