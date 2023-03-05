<script lang="ts" setup>
import Card from '@/components/shared/Card.vue'
import {itemType} from '@/types/Item'


defineProps<{
  items: itemType[]
  selectedCount?: number
  selectedMax?: number
}>()

const emit = defineEmits<{
  (e: 'delete', value: itemType): void
}>()

const deleteItem = (value: itemType) => {
  emit('delete', value)
}
</script>

<template>
  <div :class="$style['items']">
    <Card @change="deleteItem" v-for="item in items" :item="item"></Card>

    <div v-if="selectedCount && selectedMax" :class="$style['counter']">Selected {{selectedCount}}/{{selectedMax}}</div>
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
  padding: 7px 15px;
}

.counter {
  margin: auto;
}
</style>
