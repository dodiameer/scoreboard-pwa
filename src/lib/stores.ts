import { writable } from "svelte/store";
import type { IScores } from "$lib/types/scores";
import type { ITeamNames } from "$lib/types/teamNames";

export const DEFAULT_VALUES = {
  scores: {
    team1: 0,
    team2: 0,
  },
  teamNames: {
    team1: "Team 1",
    team2: "Team 2",
  },
};
export const scores = writable<IScores>({ ...DEFAULT_VALUES.scores });
export const teamNames = writable<ITeamNames>({ ...DEFAULT_VALUES.teamNames });
