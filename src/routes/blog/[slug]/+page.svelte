<script>
    export let data;
</script>
  
<div class="mt-10">
  <header class="text-center py-10">
    <h1 class="font-bold text-5xl">{ data.title }</h1>
    <p class="my-2 text-gray-600">{data.date} · {data.tags}</p>
  </header>
  <article class="yue max-w-screen-md mb-10 mx-auto">
    <svelte:component this={data.content} />
  </article>
  <section id="comment" class="max-w-screen-md mb-10 mx-auto">
    <div class="giscus" />
    <script src="https://giscus.app/client.js"
        data-repo="BigCoke233/isla-giscus"
        data-repo-id="R_kgDOJ3CBvg"
        data-category="Announcements"
        data-category-id="DIC_kwDOJ3CBvs4CXpL6"
        data-mapping="pathname"
        data-strict="1"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="noborder_light"
        data-lang="zh-CN"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
    </script>
  </section>
</div>