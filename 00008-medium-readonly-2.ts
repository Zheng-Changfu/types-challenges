// ============= Test Cases =============
import type { Alike, Expect } from './test-utils'

type cases = [
  Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
  Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
  Expect<Alike<MyReadonly2<Todo2, 'description'>, Expected>>,
]

type error = MyReadonly2<Todo1, 'title' | 'invalid'>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  description?: string
  completed: boolean
}

interface Expected {
  readonly title: string
  readonly description?: string
  completed: boolean
}


// ============= Your Code Here =============
type MyReadonly2<T, K extends keyof any> = {
  readonly [P in K]: T[P]
}
type A = MyReadonly2<Todo1, 'title' | 'description'>
