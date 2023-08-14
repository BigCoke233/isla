<script>
    export let data;

    import { breadcrumb as breadcrumb } from '/src/routes/stores';
    breadcrumb.set('博客');

    let taglink = "/blog/tag/" + data.tags
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
</svelte:head>

<div class="mt-10">
  <header class="text-center mb-10">
    <h1 class="font-bold text-3xl">{ data.title }</h1>
    <p class="my-2 text-gray-600">{data.date} · <a href={taglink}>{data.tags}</a></p>
  </header>
  <article class="yue max-w-screen-md mb-10 mx-auto">
    <svelte:component this={data.content} />
  </article>
  <section id="comment" class="max-w-screen-md mb-10 mx-auto">
    <div class="giscus">Giscus 出了一点问题，刷新试试？</div>
  </section>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans+SC:wght@100;300;400;500;700;900&display=swap');
</style>