<script>
    import logo from '$lib/images/logo.png'
    import twitter from '$lib/images/twitter.svg'
    import bilibili from '$lib/images/bilibili.svg'
    import discord from '$lib/images/discord.svg'
    import github from '$lib/images/github.svg'
    import avatar from '$lib/images/avatar.png'

    let discord_dialog = false;

    export let data;
    let i = 0;

    import { breadcrumb as breadcrumb } from './stores';
    breadcrumb.set('岛')
</script>

<svelte:head>
    <title>Isla</title>
</svelte:head>

<section class="bg-gray-50 rounded-sm py-2 px-4 mt-5">
    <p>页面仍在施工，但多数页面可以正常访问</p>
</section>

<ol class="text-lg" id="blog">
    {#each data.posts as post}
        <li class="flex gap-8">
            <span class="post-date"> {post.meta.date}</span>
            <a class="post-link" href={post.path}>{post.meta.title}</a>
            <em class="post-tags">{post.meta.tags}</em>
        </li>
    {/each}
</ol>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap');
    #blog {
        margin: 1.5rem 0;
        li {
            margin: 1rem 0;
            width: 100%;
            span, a, em {
                display: block
            }
            span.post-date {
                font-family: 'IBM Plex Mono', monospace;
                width: 6.5rem;
                color: #999;
                @media screen and (max-width: 767px) {
                    letter-spacing: -0.1rem;
                    width: 4rem;
                    font-size: 90%
                }
            }
            a.post-link {
                flex-grow: 1;
                font-weight: 500
            }
            em.post-tags {
                color: #999;
                font-size: 60%;
                display: none;
                @media screen and (min-width: 768px) {
                    display: block
                }
            }
        }
    }
</style>