// import { writable } from "svelte/store";
import persistedStore from "$lib/utils/presistedStore";
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
export const scores = persistedStore<IScores>("scores", {
  ...DEFAULT_VALUES.scores,
});
export const teamNames = persistedStore<ITeamNames>("teamNames", {
  ...DEFAULT_VALUES.teamNames,
});
