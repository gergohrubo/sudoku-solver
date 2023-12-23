<template>
  <button :value="value" :class="classes" @click="onClick">
    <span>{{ value || "9" }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  value: number | null;
  extraClasses: string;
}>();
const emit = defineEmits<{
  (e: "update:value", value: number | null): void;
}>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function onClick(event: any) {
  let val;
  if (event.target.value === "" || event.target.value == null) {
    val = null;
  } else {
    val = parseInt(event.target.value, 10);
  }
  let newVal;
  if (val === 9) {
    newVal = null;
  } else if (val == null) {
    newVal = 1;
  } else {
    newVal = val + 1;
  }
  emit("update:value", newVal);
}

const classes = computed(() => {
  let classes = `s-l-tile ${props.extraClasses}`;
  if (props.value == null) {
    classes += " s-l-empty";
  }
  return classes;
});
</script>

<style scoped>
.s-l-empty {
  color: #1a1a1a;
}
.s-l-tile {
  display: inline-block;
  width: 7vw;
  height: 7vw;
  max-width: 4em;
  max-height: 4em;
  font-size: 1.5em;
  text-align: center;
  user-select: none;
  cursor: grab;
  outline: none;
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  padding: 0;
  border-radius: 0;
}

.s-l-tile:active {
  top: 2px;
}
</style>
