---
title: 关于 Vue3 defineProps
date: 2021-05-19T16:00:00.000+00:00
lang: zh
duration: 2min
---

## defineProps
```ts
// index.ts
interface Props {
  name: string
}

const props = defineProps<Props>()

const props = defineProps({
  name: String,
})
// Props 类型只能在该文件中内定义, 目前并不能导入外部的类型。

// 带默认值
const props = withDefaults(defineProps<Props>(), {
  name: ''
})

or

const {
  name = ''
} = defineProps<Props>()

```
