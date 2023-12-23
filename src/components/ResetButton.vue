<template>
  <button class="s-l-button" @click="onClick">
    <a>Reset</a>
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
  background-color: #242424;
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
  background-color: red;
  display: block;
  position: relative;
  padding: 30px 40px;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-shadow: 0px 1px 0px #000;

  -webkit-box-shadow:
    inset 0 1px 0 #ffe5c4,
    0 15px 0 rgb(183, 0, 0);
  -moz-box-shadow:
    inset 0 1px 0 #ffe5c4,
    0 15px 0 rgb(183, 0, 0);
  box-shadow:
    inset 0 1px 0 #ffe5c4,
    0 15px 0 rgb(183, 0, 0);

  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

.s-l-button a:active {
  top: 10px;
  background-color: rgb(222, 0, 0);

  -webkit-box-shadow:
    inset 0 1px 0 #ffe5c4,
    inset 0 -3px 0 rgb(183, 0, 0);
  -moz-box-shadow:
    inset 0 1px 0 #ffe5c4,
    inset 0 -3pxpx 0 rgb(183, 0, 0);
  box-shadow:
    inset 0 1px 0 #ffe5c4,
    inset 0 -3px 0 rgb(183, 0, 0);
}
</style>
