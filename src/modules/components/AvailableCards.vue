<script lang="ts" setup>
import Card from '@/components/shared/Card.vue'
import { itemType } from '@/types/Item'


defineProps<{
  items: itemType[]
}>()

const emit = defineEmits<{
  (e: 'select', value: itemType): void
}>()

const selectItem = (value: itemType) => {
  emit('select', value)
}
</script>

<template>
  <div :class="$style['items']">
    <Card @change="selectItem" v-for="item in items" :item="item"></Card>
  </div>
</template>

<style lang="scss" module>
.items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  background-color: #3e48ff;
  padding: 10px 20px;
}
</style>
