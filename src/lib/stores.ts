import { writable } from "svelte/store";
import type { IScores } from "$lib/types/scores";

export const DEFAULT_VALUES = {
  scores: {
    team1: 0,
    team2: 0,
  },
};
export const scores = writable<IScores>({ ...DEFAULT_VALUES.scores });
