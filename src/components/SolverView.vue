<template>
  <h1>Sudoku solver</h1>

  <Slider v-model:value="speed" />

  <div class="s-l-button-container">
    <SolveButton @click="onSolve" />
    <ResetButton @click="onReset" />
  </div>

  <Board :board="board" @update:board="onBoardClick" />
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import SolveButton from "./SolveButton.vue";
import Slider from "./Slider.vue";
import Board from "./Board.vue";
import { BACKTRACKING, Grid, UpdateGridEvent } from "../types";
import { solverMap } from "../solvers";
import ResetButton from "./ResetButton.vue";
import { BOARD_SIZE } from "../consts";

const solverType = BACKTRACKING;
const speed = ref(100);
let board: Ref<Grid> = ref([...generateEmptyBoard()]);

function generateEmptyBoard(): null[][] {
  return Array.from({ length: BOARD_SIZE }, () =>
    Array.from({ length: BOARD_SIZE }, () => null),
  );
}

function onBoardClick(event: UpdateGridEvent) {
  board.value[event.row][event.col] = event.value;
}

function onSolve() {
  solverMap[solverType](board.value, 0, 0, speed.value);
}

function onReset() {
  board.value = generateEmptyBoard();
}
</script>

<style scoped>
.s-l-button-container {
  display: flex;
  justify-content: space-around;
  margin: 3em 0;
}
</style>
