<script setup lang="ts">
import {useStoreItem} from '@/stores'
import AvailableCards from './components/AvailableCards.vue'
import SelectCards from './components/SelectCards.vue'
import {itemType} from "@/types/Item";

const storeItem = useStoreItem()

const selectAvailableItem = (value: itemType) => {
  storeItem.selectAvailableItem(value)
}
const selectPersonalItem = (value: itemType) => {
  storeItem.selectPersonalItem(value)
}
const deletePersonalItem = (value: itemType) => {
  console.log(value)
  storeItem.deleteItemInPersonalItem(value)
}
const deleteAvailableItem = (value: itemType) => {
  storeItem.deleteItemInAvailableItem(value)
}

</script>

<template>
  <div :class="$style['row']">
    <SelectCards @delete="deletePersonalItem"
                 :items="storeItem.selectedPersonalItem"
                 :selected-count="storeItem.selectedPersonalItem.length"
                 :selected-max="storeItem.maxPersonalSelected"></SelectCards>
    <SelectCards @delete="deleteAvailableItem"
                 :items="storeItem.selectedAvailableItem"></SelectCards>
  </div>
  <div :class="$style['row']">
    <AvailableCards @select="selectPersonalItem" :items="storeItem.personalItem"></AvailableCards>
    <AvailableCards @select="selectAvailableItem" :items="storeItem.availableItem"></AvailableCards>
  </div>
</template>

<style lang="scss" module>
.row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  & > div {
    width: 50%;
  }
}

</style>
