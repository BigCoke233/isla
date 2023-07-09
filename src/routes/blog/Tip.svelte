<script>
    import bell from '/src/lib/images/bell.svg'
</script>

<div class="post-tip flex gap-3 items-center">
    <img src={bell} alt="a bell" /> <slot /> 
</div>

<style lang="scss">
    div.post-tip {
        margin-bottom: 1rem;
        padding: 1rem 1.5rem;
        background-color: #f7f7f7;
        border-radius: 0.25rem;
        img {
            width: 0.85rem;
            opacity: 0.75
        }
    }
</style>