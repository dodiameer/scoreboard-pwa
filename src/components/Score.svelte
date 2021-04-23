<script lang="ts">
  import { scores } from "$lib/stores";
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
</script>

<div class="svelte-component-hook score">
  <button
    class="main-button"
    on:click="{incrementScore}"
    style="--color: var(--{teamName}-color); --text: var(--{teamName}-text);">
    {$scores[teamName]}
  </button>
  <button on:click="{decrementScore}" class="decrement-button">-1</button>
</div>

<style>
  div {
    display: inline-flex;
    flex-direction: column;
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
