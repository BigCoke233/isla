<script>
    import logo from '$lib/images/logo.png'
    import twitter from '$lib/images/twitter.svg'
    import bilibili from '$lib/images/bilibili.svg'
    import discord from '$lib/images/discord.svg'
    import github from '$lib/images/github.svg'

    let discord_dialog = false;

    export let data;
    let i = 0;

    import { breadcrumb as breadcrumb } from './stores';
    breadcrumb.set('岛')
</script>

<svelte:head>
    <title>Isla</title>
</svelte:head>

<section class="bg-gray-50 rounded-sm py-5 px-10
text-center md:text-left md:flex gap-6" id="banner">
    <img src={logo} alt="A cabin on a island" class="w-40 block mx-auto md:inline md:mx-0">
    <div>
        <h2 class="text-2xl font-bold mt-5 mb-3">每个人都是一座孤岛</h2>
        <p class="text-lg">欢迎来到 Isla，Eltrac 在互联网上的家。</p>
        <p class="mt-4 text-lg">
            <a class="arrow-btn" href=" /feed">订阅 Isla</a>
        </p>
    </div>
</section>

<ol class="text-lg py-0 px-4 md:px-10" id="blog">
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

    .arrow-btn {
        line-height: 1;
        color: #333;
        border: 1px solid #ccc;
        font-size: 1rem;
        padding: 0.5rem 2rem;
        transition: 0.3s;
        cursor: pointer;
        /* use flex to align text and arrow */
        display: inline-flex;
        align-items: center;
        /* style the arrow */
        position: relative;
        &:before {
            content: "→";
            color: gray;
            font-size: 1.25rem;
            font-weight: 100;
            position: absolute;
            left: 0.25rem;
            transform: scale(1.5, 1) translateX(-0.5rem);
            transition: 0.3s
        }
        &:hover {
            background-color: #333;
            color: #fff;
            &:before {
                transform: scale(1.5, 1) translateX(0);
                color: #fff
            }
        }
    }
</style>