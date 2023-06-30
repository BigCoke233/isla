<script>
    import "../app.css";
    import Header from './Header.svelte'
</script>

<!-- meta and basics -->

<svelte:head>
    <title>Isla</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<!-- page structure -->

<Header />

<main>
    <slot />
</main>
