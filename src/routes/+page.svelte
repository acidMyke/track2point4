<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { readSaved } from '$lib/stores/data';

  onMount(() => {
    try {
      const storedData = readSaved();
      if (storedData.length === 0) {
        goto('/onboarding');
      } else if (storedData.at(-1)?.status === 'ended') {
        goto('/result/-1');
      } else {
        goto('/track');
      }
    } catch (e) {
      console.error(e);
    }
  });
</script>
