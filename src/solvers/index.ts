import { BACKTRACKING, Solver, SolverTypes } from "../types";
import { delayedSolveSudoku } from "./backtracking";

export const solverMap: { [key in SolverTypes]: Solver } = {
  [BACKTRACKING]: delayedSolveSudoku,
};
