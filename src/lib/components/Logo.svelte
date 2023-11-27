<script>
  import Icon from '@iconify/svelte';

  export let scale = 1;
  $: bgImageWidthHeight = 72 * scale;
</script>

<div class="grid grid-cols-1 grid-rows-1 rounded-xl bg-base-300 p-2">
  <Icon
    icon="mdi:run"
    class="col-start-1 row-start-1 mx-auto block w-full stroke-primary text-primary"
    width={bgImageWidthHeight}
    height={bgImageWidthHeight}
  />
  <p class="col-start-1 row-start-1 text-center font-mono text-2xl font-black text-base-content opacity-50">
    Track 2.4
  </p>
</div>
