<script lang="ts" setup>
import { itemType } from '@/types/Item'

defineProps<{
  item: itemType
}>()

const emit = defineEmits<{
  (e: 'change', value: itemType): void
}>()

</script>

<template>
  <div @click="emit('change', item)" :class="$style['item']">
    {{ item.name }}
  </div>
</template>

<style lang="scss" module>
.item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #535bf2;
  border: 2px solid #747bff;
  padding: 15px 20px;
  flex: 70px;
}
</style>
