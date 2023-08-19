<script>
    import { breadcrumb as breadcrumb } from './stores';
</script>

<header>
    <nav id="navigation" class="flex justify-between items-center border-b p-4 md:px-10">
        <div id="navigation-title">
            <a href="/">
                <h1>Isla</h1>
                <span>/</span>
                <p>{$breadcrumb}</p>
            </a>
        </div>
        <div id="navigation-action">
            <ul class="flex gap-4">
                <li><a href="/links">友人</a></li>
            </ul>
        </div>
    </nav>
</header>

<style lang="scss">
    /** navigation **/

    $text-color: #333;
    $subtext-color: #888;
    $decoration-color: #aaa;

    #navigation {
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
            }
        }

        #extra-info {
            color: $decoration-color;
            font-size: 0.9em;
            font-style: italic;
            background-color: #fafafa
        }
    }
</style>