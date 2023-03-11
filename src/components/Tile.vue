<template>
 <input
     :value="value"
     @input="inputChanged"
     :class="classes"
 />
</template>

<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  value: string,
  extraClasses: string,
}>()
const emit = defineEmits<{
  (e: 'update:value', value: string): void
}>()

function inputChanged(event) {
  console.log('input changed', event.target.value)
  emit('update:value', event.target.value)
}

const classes = computed(() => {
  return `tile ${props.extraClasses}`
})
</script>

<style scoped>
.tile {
  width: 2em;
  height: 2em;
  font-size: 1.5em;
  text-align: center;
}
</style>
