可以将 `infer` 工作原理简单理解成如下
| Typescript | 正则表达式 |
| - | - |
| `${infer A}` | `/(.*)/` |
| `${infer A}${infer B}` | 	`/(.+?)(.*)/` | 
| `${infer A}${infer B}${infer C}` |`/(.+?)(.+?)(.*)/` | 
