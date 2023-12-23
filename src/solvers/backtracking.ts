// import { Grid } from "../types";
//
// export const backtracking = (grid: Grid, row: number, col: number): boolean => {
//   if (row === 9) {
//     return true;
//   }
//
//   if (col === 9) {
//     return backtracking(grid, row + 1, 0);
//   }
//
//   if (grid[row][col] !== null) {
//     return backtracking(grid, row, col + 1);
//   }
//
//   for (let i = 1; i <= 9; i++) {
//     if (row === 1 && col === 6) {
//       console.log('i', i)
//       console.log('isValid', isValid(grid, row, col, i))
//     }
//     if (isValid(grid, row, col, i)) {
//       grid[row][col] = i;
//       if (backtracking(grid, row, col + 1)) {
//         return true;
//       }
//     }
//   }
//
//   grid[row][col] = 0;
//   console.log('returning false', row, col)
//   return false;
// }
//
// const isValid = (grid: Grid, row: number, col: number, value: number): boolean => {
//   for (let i = 0; i < 9; i++) {
//     if (grid[row][i] === value) {
//       if (row === 1 && col === 6) {
//         console.log('return false egy', grid[row][i], i, value, grid)
//       }
//       return false
//     }
//   }
//
//   for (let i = 0; i < 9; i++) {
//     if (grid[i][col] === value) {
//       if (row === 1 && col === 6) {
//         console.log('return false ketto')
//       }
//       return false
//     }
//   }
//
//   const rowStart = Math.floor(row / 3) * 3;
//   const colStart = Math.floor(col / 3) * 3;
//
//   for (let i = rowStart; i < rowStart + 3; i++) {
//     for (let j = colStart; j < colStart + 3; j++) {
//       if (grid[i][j] === value) {
//         if (row === 1 && col === 6) {
//           console.log('return false harom')
//         }
//         return false
//       }
//     }
//   }
//
//   return true
// }
// @ts-ignore
const N = 9

// @ts-ignore
export async function delayedSolveSudoku(grid, row, col, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      const result = await solveSudoku(grid, row, col, delay)
      resolve(result)
    }, delay)
  })
}
// @ts-ignore
export async function solveSudoku(grid, row, col, delay)
{

  /* If we have reached the 8th
     row and 9th column (0
     indexed matrix) ,
     we are returning true to avoid further
     backtracking       */
  if (row == N - 1 && col == N)
    return true;

  // Check if column value  becomes 9 ,
  // we move to next row
  // and column start from 0
  if (col == N)
  {
    row++;
    col = 0;
  }

  // Check if the current position
  // of the grid already
  // contains value >0, we iterate
  // for next column
  if (grid[row][col] != null)
    return delayedSolveSudoku(grid, row, col + 1, delay);

  for(let num = 1; num < 10; num++)
  {

    // Check if it is safe to place
    // the num (1-9)  in the given
    // row ,col ->we move to next column
    if (isSafe(grid, row, col, num))
    {

      /*  assigning the num in the current
      (row,col)  position of the grid and
      assuming our assigned num in the position
      is correct */
      grid[row][col] = num;

      // Checking for next
      // possibility with next column
      if (await delayedSolveSudoku(grid, row, col + 1, delay))
        return true;
    }

    /* removing the assigned num , since our
       assumption was wrong , and we go for next
       assumption with diff num value   */
    grid[row][col] = null;
  }
  return false;
}

// @ts-ignore
function isSafe(grid, row, col, num)
{

  // Check if we find the same num
  // in the similar row , we
  // return false
  for(let x = 0; x <= 8; x++)
    if (grid[row][x] == num)
      return false;

  // Check if we find the same num
  // in the similar column ,
  // we return false
  for(let x = 0; x <= 8; x++)
    if (grid[x][col] == num)
      return false;

  // Check if we find the same num
  // in the particular 3*3
  // matrix, we return false
  let startRow = row - row % 3,
    startCol = col - col % 3;

  for(let i = 0; i < 3; i++)
    for(let j = 0; j < 3; j++)
      if (grid[i + startRow][j + startCol] == num)
        return false;

  return true;
}

