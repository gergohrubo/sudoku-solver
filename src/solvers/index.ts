import { BACKTRACKING, Solver, SolverTypes } from "../types";
import {delayedSolveSudoku, solveSudoku} from "./backtracking";

export const solverMap: { [key in SolverTypes]: Solver } = {
  [BACKTRACKING]: delayedSolveSudoku,
}
