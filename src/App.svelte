<script>
  import ResetButton from "$components/ResetButton.svelte";
  import Score from "$components/Score.svelte";
</script>

<header>
  <h1>Scores</h1>
</header>
<main>
  <Score team="{1}" />
  <Score team="{2}" />
  <ResetButton />
</main>

<style>
  header {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color);
    color: var(--text);
    margin-bottom: 1rem;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  main :global(.svelte-component-hook.score):first-of-type {
    margin-bottom: 2rem;
  }
  main :global(.svelte-component-hook.reset-button) {
    margin-top: 1rem;
  }
</style>
