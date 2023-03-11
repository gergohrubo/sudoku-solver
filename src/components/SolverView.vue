<template>
  <h1>Sudoku solver</h1>

  <div class="card">
    <button type="button" @click="onClick">count is {{ count }}</button>
  </div>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  <template v-for="(row, rowIndex) in board">
    <div class="row">
      <template v-for="(cell, cellIndex) in row">
        <Tile v-model:value="board[rowIndex][cellIndex]" :extraClasses="getClasses(rowIndex, cellIndex)" />
      </template>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Tile from "./Tile.vue";

const count = ref(0)
const board = ref(Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => null)))

function onClick() {
  count.value++
  console.log('the board is', board.value)
}

function getClasses(rowIndex, cellIndex) {
  let classes = ''
  if (rowIndex % 3 === 2) {
    classes += 'border-bottom'
  }
  if (cellIndex % 3 === 2) {
    classes += ' border-right'
  }
  return classes
}
</script>

<style>
.border-bottom {
  border-bottom: 2px solid white;
}
.border-right {
  border-right: 2px solid white;
}
</style>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
