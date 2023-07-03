<script>
    import { headerTipFade, headerTip as tip } from './stores';
</script>

<header class="fixed inset-x-0 top-0">
    <nav id="navigation" class="flex justify-between items-center max-w-screen-xl mx-auto">
        <div id="navigation-title">
            <a href="/">
                <h1>Isla</h1>
                <span>/</span>
                <p>岛</p>
            </a>
        </div>
        <div id="extra-info" class="transition-all duration-300"
        class:faded={$headerTipFade}>{$tip}</div>
        <div id="navigation-action">
            <ul class="flex gap-4">
                <li><a href="/blog">博客</a></li>
                <li>test2</li>
                <li>test3</li>
            </ul>
        </div>
    </nav>
</header>

<style lang="scss">
    /** navigation **/

    $text-color: #333;
    $subtext-color: #888;
    $decoration-color: #aaa;

    header {
        background-image: linear-gradient(to bottom, #f7f7f7 30%, transparent);
    }

    #navigation {
        padding: 1.75em 0;
        color: $text-color;

        #navigation-title {
            * {
                display: inline;
                vertical-align: middle;
            }
            h1 {
                font-weight: 600;
                font-size: 1.5em
            }
            p {
                color: $subtext-color;
            }
            span {
                color: $decoration-color;
                margin: 0 0.25em
            }
        }

        #navigation-action {
            li, li a {
                color: $text-color;
                font-size: 1.1em
            }
        }

        #extra-info {
            color: $decoration-color;
            font-size: 0.9em;
            font-style: italic
        }
    }
</style>