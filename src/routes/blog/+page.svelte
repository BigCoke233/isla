<script>
    export let data;
    import Title from '../Title.svelte';

    let i = 0;
</script>

<svelte:head>
  <title>博客 - Isla</title>
</svelte:head>

<div class="p-3 my-20" id="blog">
    <Title des="Isla 上唯一的资料库">树洞图书馆</Title>

    <ol class="my-16 max-w-screen-md mb-10 mx-auto text-lg">
        {#each data.posts as post}
            <li class="flex gap-8">
                <span class="post-date"> {post.meta.date}</span>
                <a class="post-link" href={post.path}>{post.meta.title}</a>
                <em class="post-tags">{post.meta.tags}</em>
            </li>
        {/each}
    </ol>
</div>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
    #blog {
        ol li {
            margin: 1rem 0;
            width: 100%;
            span, a, em {
                display: block
            }
            span.post-date {
                font-family: 'IBM Plex Mono', monospace;
                width: 6rem;
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