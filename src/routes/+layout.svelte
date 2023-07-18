<script>
    import "../app.css";
    import Header from './Header.svelte';

    import svelteLogo from '$lib/images/svelte-logo.svg'
    import tailwindLogo from '$lib/images/tailwindcss-logo.svg'
    import logo from '$lib/images/logo.png'

    /* Handle Header Tip*/
    import { headerTipFade, headerTip as tip } from './stores';
    function tipPop(content='') { headerTipFade.set(false); tip.set(content) } 
    function tipFade() { headerTipFade.set(true) }

    import { fade } from 'svelte/transition'
    export let data
</script>

<!-- meta and basics -->

<svelte:head>
    <title>Isla</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/svg" href={logo} />
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-0LLN4ST85R"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-0LLN4ST85R');
    </script>
</svelte:head>

<!-- page structure -->

<Header />

{#key data.currentRoute}
  <main class="mt-20" in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}

<footer class="flex justify-between items-center py-8">
    <div>&copy; 2023 Eltrac · <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh" target="_blank">CC BY-NC-SA 4.0</a></div>
    <div>Built with <img src={svelteLogo} alt="svelte" on:mouseleave={tipFade} on:mousemove={() => tipPop('Svelte，难用死了')} /> + 
    <img src={tailwindLogo} alt="Tailwind" on:mouseleave={tipFade} on:mousemove={() => tipPop('其实是 Tailwind 和 SCSS 混用')} /></div>
</footer>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap');
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