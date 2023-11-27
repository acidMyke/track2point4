<script>
  import Logo from '$lib/components/Logo.svelte';
</script>

<div class="navbar">
  <div class="navbar-start">
    <Logo scale={0.5} />
  </div>
</div>

<main>
  <slot />
</main>
