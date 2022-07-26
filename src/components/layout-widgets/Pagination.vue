<script setup lang="ts">
interface Props {
  page: number
  itemCount: number
  pageSlot?: number
  pageSize: number
}

const {
  page = 1,
  itemCount = 0,
  pageSlot = 7,
  pageSize = 7,
} = defineProps<Props>()
const emits = defineEmits(['update:page', 'update:pageSize'])

const pageSizes = [
  {
    label: '每页 7 条',
    value: 7,
  },
  {
    label: '每页 14 条',
    value: 14,
  },
  {
    label: '每页 28 条',
    value: 28,
  },
  {
    label: '每页 56 条',
    value: 56,
  },
]

const showSizePicker = computed(() => {
  return itemCount > pageSizes[1].value
})

function changePage(page: number) {
  emits('update:page', page)
}

function changePageSize(pageSize: number) {
  emits('update:pageSize', pageSize)
}
</script>

<template>
  <div flex items-center>
    <n-pagination
      :page="page"
      :page-size="pageSize"
      :item-count="itemCount"
      :page-slot="pageSlot"
      :show-size-picker="showSizePicker"
      :page-sizes="pageSizes"
      :on-update:page="changePage"
      :on-update:page-size="changePageSize"
    />
  </div>
</template>
