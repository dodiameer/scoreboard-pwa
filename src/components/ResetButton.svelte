<script>
  import { DEFAULT_VALUES, scores } from "$lib/stores";
  const reset = () => {
    const confirmed = confirm("Are you sure?");
    confirmed && scores.set({ ...DEFAULT_VALUES.scores });
  };
</script>

<button on:click="{reset}" class="svelte-component-hook reset-button">
  Reset scores
</button>
