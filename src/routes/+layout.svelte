<script>
    import "../app.css";
    import Header from './Header.svelte';

    import svelteLogo from '$lib/images/svelte-logo.svg'
    import tailwindLogo from '$lib/images/tailwindcss-logo.svg'
</script>

<!-- meta and basics -->

<svelte:head>
    <title>Isla</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<!-- page structure -->

<Header />

<main class="mt-16">
    <slot />
</main>

<footer class="flex justify-between items-center py-8">
    <div>&copy; 2023 Eltrac</div>
    <div>Built with <img src={svelteLogo} alt="svelte" /> + <img src={tailwindLogo} alt="Tailwind" /></div>
</footer>

<style lang="scss">
    footer {
        color: #777;
        font-size: 110%;

        img {
            width: 1.2em;
            display: inline-block;
            vertical-align: middle;
            filter: grayscale(1)
        }
    }
</style>