<script lang="ts">
  import { DEFAULT_VALUES, scores, teamNames } from "$lib/stores";
  export let team: number = 1;
  $: teamName = `team${team}`;

  const incrementScore = () => {
    $scores[teamName] += 1;
  };
  const decrementScore = () => {
    if ($scores[teamName] > 0) {
      $scores[teamName] -= 1;
    }
  };
  const changeTeamName = () => {
    const newName = prompt(
      "New team name (Leave blank to use default)",
      $teamNames[teamName]
    ).trim();
    $teamNames[teamName] =
      newName.length === 0 ? DEFAULT_VALUES.teamNames[teamName] : newName;
  };
</script>

<section class="svelte-component-hook score">
  <h1 on:dblclick="{changeTeamName}">{$teamNames[teamName]}</h1>
  <button
    class="main-button"
    on:click="{incrementScore}"
    style="--color: var(--{teamName}-color); --text: var(--{teamName}-text);">
    {$scores[teamName]}
  </button>
  <button on:click="{decrementScore}" class="decrement-button">-1</button>
</section>

<style>
  section {
    display: inline-flex;
    flex-direction: column;
  }
  h1 {
    margin: 0;
    text-align: center;
    margin-bottom: 1rem;
  }
  button.main-button {
    --dimensions: 18ch;
    width: var(--dimensions);
    height: var(--dimensions);
    border-radius: 8px;
    font-size: 1rem;
  }
  button.decrement-button {
    width: 50%;
    margin: 0.5rem auto;
  }
</style>
