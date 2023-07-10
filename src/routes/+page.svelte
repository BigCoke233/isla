<script>
    import logo from '$lib/images/logo.png'
    import twitter from '$lib/images/twitter.svg'
    import bilibili from '$lib/images/bilibili.svg'
    import discord from '$lib/images/discord.svg'
    import github from '$lib/images/github.svg'
    import avatar from '$lib/images/avatar.png'

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

    export let data;
</script>

<svelte:head>
    <title>Isla</title>
</svelte:head>

<!-- Banner -->
<section id="banner" class="md:flex md:items-center">
    <img id="banner-img" src={logo} alt="a cabin on a small island" class="select-none block mx-auto md:mx-0" />
    <div id="banner-text">
        <h2 class="page-title">每个人都是一座孤岛。</h2>
        <p>而就在刚才，你，我尚不知晓姓名的朋友，误入了我的领海。</p>
        <p>欢迎来到 Isla，这是 Eltrac 在互联网上的家。</p>
    </div>
</section>

<!-- Intro -->
<section id="intro" class="md:grid md:grid-cols-5 md:p-3 gap-5">
    {#each intros as item}
    <div class="intro-item my-4 md:my-0" role="tooltip"
    on:mouseleave={tipFade}
    on:mousemove={() => tipPop(item[2])}>
        <h3>{item[0]}</h3>
        <p>{item[1]}</p>
    </div>
    {/each}
</section>

<!-- Biography -->
<section id="bio" class="p-3 mt-8 leading-normal md:grid">
    <div id="bio-left">
        <h3 on:mouseleave={tipFade} on:mousemove={() => tipPop('一个笨蛋')}>Eltrac</h3>
        <small>Elegant Track / L Track</small>
        <p>/'eltræc/</p>
    </div>
    <div id="bio-right">
        <p>Isla 的主人，思想混沌的理想主义者。</p>
        <p>喜欢创造一个世界的感觉，偶尔写一些低劣的小说，在<a href="http://backrooms-wiki-cn.wikidot.com/author:eltrac"  target="_blank"
        on:mouseleave={tipFade}
        on:mousemove={() => tipPop('一个网络怪谈接力小说')}>后室中文维基</a>留下了一些作品，立志成为一名游戏开发者。
        喜欢摆弄文字，甚至为此写了一个<a href="https://bi.guhub.cn/" target="_blank"
        on:mouseleave={tipFade}
        on:mousemove={() => tipPop('无色的绿色想法愤怒地睡觉')}>网页应用</a>。</p>
        <p>会点前端，会点 PHP，会看塔罗牌，读得懂世界地图，找得到键盘上哪个是开机键，被抢劫了知道打 110。喜欢玩 Minecraft，喜欢宝可梦，喜欢玩饥荒，
        不怎么看电影因为不习惯干坐着一动不动<span on:mouseleave={tipFade} on:mousemove={() => tipPop('呵，INFP。')}>但喜欢在没有灯的房间里有人陪的感觉。</span></p>
        <p>化身是一只考拉，因为考拉不是在睡觉，就是在吃饭<del>和做爱</del>做的事。</p>
    </div>
</section>

<!-- Latest Post -->
<section id="latest" class="px-3 py-6 m-3 mt-0 border-y text-lg text-center">
    <p><strong>Eltrac</strong> 在 {data.posts[0].meta.date} 发布了新文章
    <a href={data.posts[0].path} class="underline underline-offset-8 decoration-gray-300">「{data.posts[0].meta.title}」</a>，快来看看吧！</p>
</section>

<!-- Work Display -->
<section id="works" class="md:grid md:grid-cols-3 my-10 md:my-24">
    <div class="work md:border-r" on:mouseleave={tipFade} on:mousemove={() => tipPop('停更了，因为屎山堆太高')} role="banner">
        <h3>Miracles</h3>
        <p>简洁但不简单的 Typecho 主题</p>
        <p><a href="https://github.com/BigCoke233/miracles" target="_blank">访问 GitHub 仓库</a></p>
    </div>
    <div class="work md:border-r" on:mouseleave={tipFade} on:mousemove={() => tipPop('无色的绿色...... 我是不是说过这句话？')} role="banner">
        <h3>怪奇灵感生成器</h3>
        <p>猴子打字机式的创作</p>
        <p><a href="https://bi.guhub.cn/" target="_blank">访问网站</a></p>
    </div>
    <div class="work" on:mouseleave={tipFade} on:mousemove={() => tipPop('然而作者自己都不用')} role="banner">
        <h3>Textretty</h3>
        <p>一个简单的文字排版 CSS</p>
        <p><a href="https://github.com/BigCoke233/textretty.css">访问 GitHub 仓库</a></p>
    </div>
</section>

<!-- Social Media -->
<section id="media" class="p-3 my-8">
    <h3 class="text-center text-gray-500 text-2xl">Find me at</h3>
    <div id="media-links" class="grid grid-cols-2 md:flex justify-center gap-5 my-5">
        <!-- GitHub -->
        <a href="https://github.com/BigCoke233" target="_blank"
        on:mouseleave={tipFade}
        on:mousemove={() => tipPop('最近 Contribution 越来越白了')}><img src={github} /></a>
        <!-- Discord -->
        <button on:click={() => { discord_dialog=true }}
        on:mouseleave={tipFade}
        on:mousemove={() => tipPop('无序！')}><img src={discord} /></button>
        <!-- Twitter -->
        <a href="https://twitter.com/Eltrac233" target="_blank"
        on:mouseleave={tipFade}
        on:mousemove={() => tipPop('小蓝鸟，但是上锁了')}><img src={twitter} /></a>
        <!-- Bilibili -->
        <a href="https://space.bilibili.com/384247770" target="_blank"
        on:mouseleave={tipFade}
        on:mousemove={() => tipPop('做过听译，之后可能会更新原创内容？')}><img src={bilibili} /></a>
    </div>
    <p class="text-center text-gray-500">
        或者通过 <a href="mailto:hi@guhub.cn" target="_blank" class="monofont bg-gray-100 py-1 px-2 rounded-sm">hi@guhub.cn</a> 给我发邮件
    </p>
    <!-- Discord Dialog -->
    <dialog id="discord-dialog" open={discord_dialog == true} class="fixed inset-4">
        <button on:click={() => { discord_dialog=false }} class="rotate-45">+</button>
        <header>
            <h4>考拉 / Eltrac</h4>
            <p>eltrac#4794</p>
        </header>
        <img src={avatar} />
        <section>
            <p>主要使用的即时通信平台，有事可以通过 Discord 联系我。如果无法使用 Discord，可以通过邮箱 hi@guhub.cn</p>
        </section>
    </dialog>
</section>

<style lang="scss">
    #banner {
        gap: 3em;
        padding: 2em 0;

        #banner-text {
            @media screen and (max-width: 767px) {
                text-align: center
            }
            h2 {
                font-size: 400%;
                font-weight: 800;
                margin-bottom: 1rem;
                @media screen and (max-width: 767px) {
                    font-size: 200%
                }
            }
            p {
                font-size: 150%;
                color: #777;
                @media screen and (max-width: 767px) {
                    font-size: 90%
                }
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
                    height: 5em;
                    display: block;
                    margin: 0 auto
                }
            }
        }
    }

    #discord-dialog {
        border-radius: 1rem;
        box-shadow: 0 0.75rem 1rem rgba(0,0,0,0.15);
        background-color: #fafafa;
        padding: 0;
        overflow: hidden;
        max-width: 500px;
        animation: popup 0.3s;

        header, section {
            padding: 1.5rem;
            padding-left: 8.5rem;
        }

        header {
            background-color: rgba(0,0,0,0.08);
            padding-bottom: 0.75rem;
            h4 {
                font-weight: 800;
                font-size: 115%
            }
            p {
                color: #777
            }
        }

        section {
            padding-top: 0.75rem;
            font-size: 90%
        }

        button {
            position: absolute;
            top: 0.1rem;
            right: 0.35rem;
            font-size: 2rem;
            font-weight: 800
        }

        img {
            width: 6rem;
            position: absolute;
            left: 1rem;
            top: 1.5rem;
            border-radius: 100%;
            border: 0.5rem solid #fff
        }
    }

    #works {
        .work {
            text-align: center;
            h3, p {
                margin: 0.5em 0
            }
            h3 {
                font-size: 150%;
                font-weight: 700
            }
            a {
                text-decoration: underline;
                text-underline-offset: 6px;
                text-decoration-color: #ddd;
                color: #777;
                transition-duration: 0.3s;
                transition-property: text-decoration-color, color;
                &:hover {
                    color: #333;
                    text-decoration-color: #333;
                }
            }
            @media screen and (max-width: 767px) {
                margin: 3em 0
            }
        }
        @media screen and (min-width: 768px) {
            &:before {
                content: '';
                position: absolute;
                background-color: #fafafa;
                z-index: -1;
                left: 0;
                right: 0;
                height: 16rem;
                transform: translateY(-4rem)
            }
        }
    }
</style>