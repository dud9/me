---
title: 关于 Vue3 defineProps
date: 2022-06-29T21:10:30.000+00:00
lang: zh
duration: 2min
---

## defineProps
```ts
// index.ts
interface Props {
  name: string
  things: string[]
}

const props = defineProps<Props>()

const props = defineProps({
  name: String,
  things: Array,
})
// Props 类型只能在该文件中内定义, 目前并不能导入外部的类型。

// 带默认值
const props = withDefaults(defineProps<Props>(), {
  name: '',
  things: () => ([]) // 需要使用箭头函数
})

or

const {
  name = '',
  things = [],
} = defineProps<Props>()

```
