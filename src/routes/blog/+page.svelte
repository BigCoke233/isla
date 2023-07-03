<script>
    export let data;
    import Title from '../Title.svelte'
</script>

<div class="p-3 my-20" id="blog">
    <Title des="Isla 上唯一的资料库">树洞图书馆</Title>

    <ol class="my-10 grid grid-cols-3 gap-5">
        {#each data.posts as post}
            <li class="list-none py-4 transition text-lg">
                <span> {post.meta.date}</span>
                <a href={post.path} class="font-semibold block flex-grow">{post.meta.title}</a>
                <em class="text-gray-400 text-sm">{post.meta.tags}</em>
            </li>
        {/each}
    </ol>
</div>

<style lang="scss">
    #blog {
        ol li {
            border-bottom: 1px dashed #ccc;
            &:hover {
                border-color: #333
            }
        }
    }
</style>