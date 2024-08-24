// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}


// ============= Your Code Here =============
/**
 * [P in XXX] 理解为遍历类型，比如这里的 XXX 是 string | number
 * 那么第一次的 P 为 string，第二次的 P 为 number 
 * @example
 * ```ts
 * type C = 'user' | 'password'
 * type M = {
 *   [P in C]: string
 * }
 * // 上面代码可以理解成
 * type M = {
 *  user: string 
 *  password: string
 * }
 * ``` 
 * 
 */
type MyOmit<T, K extends keyof any> = {
  [P in Exclude<keyof T, K>]: T[P]
}
