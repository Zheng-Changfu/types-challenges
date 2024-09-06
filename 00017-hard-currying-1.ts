// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)
const curried3 = Currying(() => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
  Expect<Equal<typeof curried3, () => true>>,
]


// ============= Your Code Here =============
type Currying<T extends Function> =
  T extends (...args: infer Args) => infer R
  ? Args['length'] extends 0 | 1
  ? T
  : Args extends [infer A, ...infer Rest]
  ? (x: A) => Currying<(...args: Rest) => R>
  : never
  : never
declare function Currying<T extends Function>(fn: T): Currying<T>

