<script>
    export let data;
</script>
  
<svelte:head>
  <title>{data.title} - Isla</title>
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
  <script src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
</svelte:head>

<div class="mt-10">
  <header class="text-center py-10">
    <h1 class="font-bold text-5xl">{ data.title }</h1>
    <p class="my-2 text-gray-600">{data.date} · {data.tags} · <span id="busuanzi_container_page_pv"><span id="busuanzi_value_page_pv"></span> 次阅读</span></p>
  </header>
  <article class="yue max-w-screen-md mb-10 mx-auto">
    <svelte:component this={data.content} />
  </article>
  <section id="comment" class="max-w-screen-md mb-10 mx-auto">
    <div class="giscus">Giscus 出了一点问题，刷新试试？</div>
  </section>
</div>