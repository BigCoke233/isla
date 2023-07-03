<script>
    export let data
    console.log(data.posts)
</script>

<div class="p-3 my-20" id="blog">
    <header class="page-title">
        <h2>树洞图书馆</h2>
        <p>Isla 上唯一的资料库，目前还没有多少内容</p>
    </header>

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
        .page-title {
            text-align: center;

            h2 {
                font-weight: 800;
                font-size: 300%;
            }
        }
        ol li {
            border-bottom: 1px dashed #ccc;
            &:hover {
                border-color: #333
            }
        }
    }
</style>