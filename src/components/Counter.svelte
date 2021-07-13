<script lang="ts">
  import { writable } from 'svelte/store';

  const count = writable(0);

  export let id: string;
</script>

<button
  {id}
  on:click={() => $count += 1}
  data-testid={id}
  class="tabular-nums focus:border-opacity-100 w-48 px-8 py-4 text-red-600 border-2 border-transparent rounded-full outline-none"
>
  Clicks: {$count}
</button>

<style>
  button {
    background: rgba(var(--svelte-rgb), 0.05);
  }

  button:active {
    background: rgba(var(--svelte-rgb), 0.15);
  }
</style>