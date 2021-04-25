<script>
  import ResetButton from "$components/ResetButton.svelte";
  import Score from "$components/Score.svelte";
  import { registerSW } from "virtual:pwa-register";
  import { toast, SvelteToast } from "@zerodevx/svelte-toast";

  (window as any).refreshSW = registerSW({
    onNeedRefresh() {
      toast.push(
        `New update! <button onclick="refreshSW(true)" style="pointer-events: all; margin-top: 0.5rem;">Click to update</button>`,
        { duration: 60000 }
      );
    },
    onOfflineReady() {
      toast.push("App is installed and can now be used offline!", {
        duration: 15000,
      });
    },
  });
</script>

<header>
  <h1>YNWAScore</h1>
</header>
<main>
  <div class="score-wrapper">
    <Score team="{1}" />
    <Score team="{2}" />
  </div>
  <ResetButton />
  <SvelteToast options="{{ reversed: true, intro: { y: 192 } }}" />
</main>

<style>
  header {
    padding: 0.5rem;
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
    padding-bottom: 5rem;
  }
  .score-wrapper {
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

  @media only screen and (min-width: 768px) {
    .score-wrapper {
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
    }

    main :global(.svelte-component-hook.score):first-of-type {
      margin-bottom: 0;
    }
    main :global(.svelte-component-hook.reset-button) {
      width: 50%;
      max-width: 20rem;
    }
    main {
      padding: 2rem 5rem;
      max-width: 1280px;
      margin: 0 auto;
    }
  }
</style>
