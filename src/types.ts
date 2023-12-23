export const BACKTRACKING = 'backtracking'

export type SolverTypes = typeof BACKTRACKING

export type Grid = (number | null)[][];

export type Solver = (grid: Grid, row: number, col: number, delay: number) => boolean;
