<template>
  <template v-for="(row, rowIndex) in board" :key="rowIndex">
    <div class="s-l-row">
      <template v-for="(cell, cellIndex) in row" :key="cellIndex">
        <Tile
          :value="board[rowIndex][cellIndex]"
          :extra-classes="getClasses(rowIndex, cellIndex)"
          @update:value="($event) => onChange($event, rowIndex, cellIndex)"
        />
      </template>
    </div>
  </template>
</template>

<script setup lang="ts">
import Tile from "./Tile.vue";
import { BOARD_SIZE } from "../consts";

const { board } = defineProps<{
  board: number[][];
}>();

const emit = defineEmits<{
  (e: "update:board", board: number[][]): void;
}>();

function onChange(event: any, rowIndex: number, cellIndex: number) {
  const newBoard = [...board];
  newBoard[rowIndex][cellIndex] = event;
  emit("update:board", newBoard);
}

function appendVerticalBorderClass(classes: string, rowIndex: number): string {
  if (rowIndex === 0) {
    return classes + " double-bold-border-top";
  }
  if (rowIndex === BOARD_SIZE - 1) {
    return classes + " double-bold-border-bottom";
  }
  switch (rowIndex % 3) {
    case 0:
      return classes + " bold-border-top";
    case 1:
      return classes + " normal-border-horizontals";
    case 2:
      return classes + " bold-border-bottom";
  }
  return classes;
}

function appendHorizontalBorderClass(
  classes: string,
  cellIndex: number,
): string {
  if (cellIndex === 0) {
    return classes + " double-bold-border-left";
  }
  if (cellIndex === BOARD_SIZE - 1) {
    return classes + " double-bold-border-right";
  }
  switch (cellIndex % 3) {
    case 0:
      return classes + " bold-border-left";
    case 1:
      return classes + " normal-border-verticals";
    case 2:
      return classes + " bold-border-right";
  }
  return classes;
}

function getClasses(rowIndex: number, cellIndex: number) {
  let classes = "base-border ";
  classes += appendVerticalBorderClass(classes, rowIndex);
  classes += appendHorizontalBorderClass(classes, cellIndex);
  return classes;
}
</script>

<style scoped>
.base-border:hover {
  border-color: transparent;
}
.double-bold-border-top {
  border-top: 4px solid #d8d8d8;
}
.double-bold-border-top:hover {
  border-top: 4px solid #d8d8d8;
}
.double-bold-border-bottom {
  border-bottom: 4px solid #d8d8d8;
}
.double-bold-border-bottom:hover {
  border-bottom: 4px solid #d8d8d8;
}
.double-bold-border-left {
  border-left: 4px solid #d8d8d8;
}
.double-bold-border-left:hover {
  border-left: 4px solid #d8d8d8;
}
.double-bold-border-right {
  border-right: 4px solid #d8d8d8;
}
.double-bold-border-right:hover {
  border-right: 4px solid #d8d8d8;
}
.bold-border-top {
  border-top: 2px solid #d8d8d8;
}
.bold-border-top:hover {
  border-top: 2px solid #d8d8d8;
}
.bold-border-bottom {
  border-bottom: 2px solid #d8d8d8;
}
.bold-border-bottom:hover {
  border-bottom: 2px solid #d8d8d8;
}
.bold-border-left {
  border-left: 2px solid #d8d8d8;
}
.bold-border-left:hover {
  border-left: 2px solid #d8d8d8;
}
.bold-border-right {
  border-right: 2px solid #d8d8d8;
}
.bold-border-right:hover {
  border-right: 2px solid #d8d8d8;
}
.normal-border-horizontals {
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}
.normal-border-horizontals:hover {
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
}
.normal-border-verticals {
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
}
.normal-border-verticals:hover {
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
}
</style>
