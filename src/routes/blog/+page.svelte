<script>
    export let data
    console.log(data.posts)
</script>

<div class="p-3 my-20" id="blog">
    <h2 class="page-title">文字填埋场</h2>

    <ol class="my-10">
        {#each data.posts as post}
            <li class="list-none py-4 transition text-lg flex items-end gap-4">
                <span> {post.meta.date}</span>
                <a href={post.path} class="font-semibold block flex-grow">{post.meta.title}</a>
                <em class="text-gray-400 text-sm">{post.meta.tags}</em>
            </li>
        {/each}
    </ol>
</div>

<style lang="scss">
    #blog {
        h2.page-title {
            font-weight: 800;
            font-size: 300%
        }
        ol li {
            border-bottom: 1px dashed #ccc;
            &:hover {
                border-color: #333
            }
        }
    }
</style>