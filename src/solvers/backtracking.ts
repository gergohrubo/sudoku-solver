import { Grid } from "../types";
import { BOARD_SIZE } from "../consts";

export async function delayedSolveSudoku(
  grid: Grid,
  row: number,
  col: number,
  delay: number,
): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const result = await solveSudoku(grid, row, col, delay);
      resolve(result);
    }, delay);
  });
}
export async function solveSudoku(
  grid: Grid,
  row: number,
  col: number,
  delay: number,
): Promise<boolean> {
  if (row == BOARD_SIZE - 1 && col == BOARD_SIZE) return true;

  if (col == BOARD_SIZE) {
    row++;
    col = 0;
  }

  if (grid[row][col] != null)
    return delayedSolveSudoku(grid, row, col + 1, delay);

  for (let num = 1; num < 10; num++) {
    if (isSafe(grid, row, col, num)) {
      grid[row][col] = num;

      if (await delayedSolveSudoku(grid, row, col + 1, delay)) return true;
    }

    grid[row][col] = null;
  }
  return false;
}

function isSafe(grid: Grid, row: number, col: number, num: number) {
  for (let x = 0; x <= 8; x++) if (grid[row][x] == num) return false;

  for (let x = 0; x <= 8; x++) if (grid[x][col] == num) return false;

  const startRow = row - (row % 3),
    startCol = col - (col % 3);

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (grid[i + startRow][j + startCol] == num) return false;

  return true;
}
