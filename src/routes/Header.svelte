<header>
    <nav id="navigation" class="flex justify-between items-center">
        <div id="navigation-title">
            <a href="/">
                <h1>Isla</h1>
                <span>/</span>
                <p>岛</p>
            </a>
        </div>
        <div id="extra-info"></div>
        <div id="navigation-action">
            <ul class="flex gap-4">
                <li>test1</li>
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

    #navigation {
        padding: 1.75em 1em;
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