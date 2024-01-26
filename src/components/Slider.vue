<template>
  <div class="s-l-slide-container">
    <span class="s-l-slide-label">Delay (ms): {{ value }}</span>
    <input
      type="range"
      :min="MIN_SPEED"
      :max="MAX_SPEED"
      :value="value"
      class="s-l-slider"
      @input="onClick"
    />
  </div>
</template>

<script setup lang="ts">
import { MAX_SPEED, MIN_SPEED } from "../consts";

const { value } = defineProps<{
  value: number;
}>();

const emit = defineEmits<{
  (e: "update:value", value: number): void;
}>();

function onClick(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:value", parseInt(target.value, 10));
}
</script>

<style scoped>
.s-l-slide-container {
  display: flex;
}

.s-l-slide-label {
  font-size: 1.5rem;
  margin-right: 10px;
  width: 250px;
}

.s-l-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.s-l-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #ffa12b;
  cursor: pointer;
}

.s-l-slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #ffa12b;
  cursor: pointer;
}
</style>
