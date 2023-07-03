<script>
    export let des
</script>

<header class="page-title">
    <h2><slot /></h2>
    <p>{des}</p>
</header>

<style lang="scss">
    .page-title {
        text-align: center;
        h2 {
            font-weight: 800;
            font-size: 300%;
        }
    }
</style>