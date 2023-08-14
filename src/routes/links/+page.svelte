<script>
    export let data;
    
    import { breadcrumb as breadcrumb } from '/src/routes/stores';
    breadcrumb.set('友人')
</script>

<svelte:head>
  <title>友人 - Isla</title>
</svelte:head>

<div class="p-3" id="links">
    <article class="max-w-screen-md mx-auto">
        <ul class="grid grid-cols-2 my-5 md:grid-cols-4 text-center gap-4">
        {#each data.links as link}
            <li class="text-lg">
                <a href={link.link} target="_blank">{link.name}</a>
            </li>
        {/each}
        </ul>
        <p>Eltrac 他有空会好好打理一下这个地方的，现在这里看起来太简陋了不是吗？</p>
        <p>即便如此，这里也不会再扩张了，友链申请基本上都会拒绝。如果你想和 Eltrac 做朋友的话，就常来 Isla 看看，在他的博客留言，这样他也会去关注你的。</p>
    </article>
</div>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap');
    #links {
        ul {
            background-color: #fafafa;
            padding: 2em 1em;
            border-radius: 0.25rem;
            a {
                text-decoration: underline;
                text-underline-offset: 6px;
                text-decoration-color: #ddd;
                transition: text-decoration-color 0.3s;
                &:hover {
                    text-decoration-color: #333;
                }
            }
        }
        p {
            font-size: 110%;
            margin: 0.5em 0;
        }
        
    }
</style>