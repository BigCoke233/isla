<script>
    export let data
</script>
    
<!-- ...Post HTML here -->
    
{#if data.tag.length}
    <aside>
        <h2>Posted in:</h2>
        <ul>
          {#each data.tag as tag}
            <li>
              <a href="/blog/category/{tag}">
                {tag}
              </a>
            </li>
          {/each}
        </ul>
    </aside>
{/if}