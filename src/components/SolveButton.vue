<template>
  <button type="button" class="s-l-button" @click="onClick">
    <a>Solve</a>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "click"): void;
}>();

function onClick() {
  emit("click");
}
</script>

<style scoped>
.s-l-button {
  padding: 0;
  outline: none;
}

.s-l-button:hover {
  border-color: transparent;
}

.s-l-button a {
  color: white;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  text-decoration: none;
  background-color: #ffa12b;
  display: block;
  position: relative;
  padding: 20px 40px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;

  -webkit-box-shadow:
    inset 0 1px 0 #ffe5c4,
    0 10px 0 #915100;
  -moz-box-shadow:
    inset 0 1px 0 #ffe5c4,
    0 10px 0 #915100;
  box-shadow:
    inset 0 1px 0 #ffe5c4,
    0 10px 0 #915100;

  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.s-l-button a:active {
  top: 10px;
  background-color: #f78900;

  -webkit-box-shadow:
    inset 0 1px 0 #ffe5c4,
    inset 0 -3px 0 #915100;
  -moz-box-shadow:
    inset 0 1px 0 #ffe5c4,
    inset 0 -3pxpx 0 #915100;
  box-shadow:
    inset 0 1px 0 #ffe5c4,
    inset 0 -3px 0 #915100;
}
</style>
