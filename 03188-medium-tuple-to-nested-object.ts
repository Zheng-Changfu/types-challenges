// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]


// ============= Your Code Here =============

/**
 * type TupleToNestedObject<T extends any[], U, O = {}> = T extends [infer X extends PropertyKey, ...infer Y]
  ? O & Record<X, TupleToNestedObject<Y, U, O>>
  : U
 */

/**
 * [P in X]: 利用遍历的思想设置动态 key
 */
type TupleToNestedObject<T, U> = T extends [infer F, ...infer R] ?
  {
    [K in F as (K extends PropertyKey ? K : never)]: TupleToNestedObject<R, U>
  }
  : U

