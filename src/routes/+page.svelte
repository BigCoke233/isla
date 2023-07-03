<script>
    import logo from '$lib/images/logo.png'
    import twitter from '$lib/images/twitter.svg'
    import bilibili from '$lib/images/bilibili.svg'
    import discord from '$lib/images/discord.svg'

    /* Handle Header Tip*/
    import { headerTipFade, headerTip as tip } from './stores';
    function tipPop(content='') { headerTipFade.set(false); tip.set(content) } 
    function tipFade() { headerTipFade.set(true) }

    /* Intro Data */
    let intros = [
        ['INFP 和双子座','以没用的事情为乐','上升星座是处女'],
        ['前端攻城狮','对，不是工程师','仅仅是自娱自乐'],
        ['讲故事的人','喜欢写写小说','喜欢创造一个世界的感觉'],
        ['离经叛道的文字','是个独立博客博主','但更新总是断断续续']
    ]

    let discord_dialog = false;
</script>

<svelte:body class:no-scroll={discord_dialog=true} />

<!-- Banner -->
<section id="banner" class="flex items-center">
    <img id="banner-img" src={logo} alt="a cabin on a small island" class="select-none" />
    <div id="banner-text">
        <h2 class="page-title">每个人都是一座孤岛。</h2>
        <p>而就在刚才，你，我尚不知晓姓名的朋友，误入了我的领海。</p>
        <p>欢迎来到 Isla，这是 Eltrac 在互联网上的家。</p>
    </div>
</section>

<!-- Intro -->
<section id="intro" class="md:grid md:grid-cols-5 p-3 gap-5">
    {#each intros as item}
    <div class="intro-item" role="tooltip"
    on:mouseleave={tipFade}
    on:mousemove={() => tipPop(item[2])}>
        <h3>{item[0]}</h3>
        <p>{item[1]}</p>
    </div>
    {/each}
</section>

<!-- Biography -->
<section id="bio" class="p-3 my-8 leading-normal grid">
    <div id="bio-left">
        <h3>Eltrac</h3>
        <small>Elegant Track / L Track</small>
        <p>/'eltræc/</p>
    </div>
    <div id="bio-right">
        <p>Isla 的主人，思想混沌的理想主义者。</p>
        <p>喜欢创造一个世界的感觉，偶尔写一些低劣的小说，在<a href="http://backrooms-wiki-cn.wikidot.com/author:eltrac"  target="_blank">后室中文维基</a>留下了一些作品，立志成为一名游戏开发者。
        喜欢摆弄文字，甚至为此写了一个<a href="https://bi.guhub.cn/" target="_blank">网页应用</a>。</p>
        <p>化身是一只考拉，因为考拉不是在睡觉，就是在吃饭<del>和做爱</del>。</p>
    </div>
</section>

<!-- Social Media -->
<section id="media" class="p-3 my-8">
    <h3 class="text-center text-gray-500 text-2xl">Find me at</h3>
    <div id="media-links" class="flex justify-center gap-5 my-5">
        <!-- Discord -->
        <button on:click={() => { discord_dialog=true }}><img src={discord} /></button>
        <!-- Twitter -->
        <a href="https://twitter.com/Eltrac233" target="_blank"
        on:mouseleave={tipFade}
        on:mousemove={() => tipPop('小蓝鸟，但是上锁了')}><img src={twitter} /></a>
        <!-- Bilibili -->
        <a href="https://space.bilibili.com/384247770" target="_blank"
        on:mouseleave={tipFade}
        on:mousemove={() => tipPop('做过听译，之后可能会更新原创内容？')}><img src={bilibili} /></a>
    </div>
    <!-- Discord Dialog -->
    <dialog id="discord-dialog" open={discord_dialog == true} class="fixed inset-0">
        <button on:click={() => { discord_dialog=false }} class="rotate-45">+</button>
        <header>
            <h4>考拉 / Eltrac</h4>
            <p>eltrac#4794</p>
        </header>
        <img src={discord} />
        <section>
            <p>主要使用的即时通信平台，有事可以通过 Discord 联系我。</p>
            <p>如果无法使用 Discord，可以通过邮箱 hi@guhub.cn</p>
        </section>
    </dialog>
</section>

<style lang="scss">
    #banner {
        gap: 3em;
        padding: 2em 0;

        #banner-text {
            h2 {
                font-size: 400%;
                font-weight: 800;
                margin-bottom: 1rem
            }
            p {
                font-size: 150%;
                color: #777
            }
        }
    }

    #intro {
        .intro-item {
            padding: 1.5em;
            background-color: #f7f7f7;
            border-radius: 0.25rem;
            transition-property: box-shadow, transform;
            transition-duration: 0.3s;
            border: 1px solid transparent;

            h3 {
                font-size: 140%;
                font-weight: 600
            }
            p {
                margin: 0.5em 0 0 0;
            }

            &:hover {
                transform: translateY(-1em);
                box-shadow: 0 0.4em 0.8em rgba(0,0,0,0.175);
                border-color: #ddd
            }
        }
    }

    #bio {
        grid-template-columns: 2fr 5fr 1fr;

        #bio-left {
            h3 {
                font-size: 250%;
                font-weight: 700
            }
            small {
                font-size: 90%;
                color: #777;
                display: block
            }
            p {
                margin: 0.5em 0;
                font-size: 110%
            }
        }

        #bio-right {
            font-size: 120%;
            margin: 1em 0;

            p {
                margin: 0.35em 0
            }
        }

        a {
            text-decoration: underline;
            text-underline-offset: 0.35rem;
            text-decoration-color: #bbb;
            transition: text-decoration-color 0.3s;
            &:hover {
                text-decoration-color: #000;
            }
        }
    }

    #media {
        h3 {
            position: relative;
            width: fit-content;
            margin: 0 auto;
            &:after {
                content: '';
                background-color: rgba(0,0,0,0.1);
                height: 0.5em;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0
            }
        }
        #media-links {
            a, button {
                padding: 1em;
                display: block;
                opacity: 0.6;
                transition: opacity 0.3s;
                &:hover {
                    opacity: 0.8
                }
                img {
                    width: 5em;
                    height: 5em
                }
            }
        }
    }

    #discord-dialog {
        border-radius: 1rem;
        box-shadow: 0 0.75em 1em rgba(0,0,0,0.15);
        background-color: #fafafa;
        padding: 1em;
    }
</style>