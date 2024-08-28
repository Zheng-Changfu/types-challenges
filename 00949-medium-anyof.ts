// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]


// ============= Your Code Here =============
/**
 * 这里的 T[number] 是转为元组类型
 * 然后进行条件分发，挨个判断
 * { [key: string]: never } 理解：因为 { [key:string]: any } 可以有任意个包括0个，但是由于没有值是 never 类型
 * 所有将类型收窄为空对象
 */
type AnyOf<T extends readonly any[]> = T[number] extends 0 | '' | undefined | null | false | [] | { [key: string]: never } ? false : true
