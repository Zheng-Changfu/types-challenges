// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type obj = {
  person: {
    name: string
    age: {
      value: number
    }
  }
}

type cases = [
  Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
  Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
  Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
  Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string; age: {} } }>>,
]


// ============= Your Code Here =============
type DeepOmit<T extends Record<string, any>, K extends string, R = Omit<T, K>> = K extends `${infer X}.${infer Y}`
  ? {
    [P in keyof T]: P extends X ? DeepOmit<T[P], Y> : T[P]
  }
  : {
    [P in keyof R]: R[P]
  }

type A = DeepOmit<obj, 'person.name'>
