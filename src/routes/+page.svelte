<script>
    import logo from '$lib/images/logo.png'

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
</script>

<!-- Banner -->
<section id="banner" class="flex items-center">
    <img id="banner-img" src={logo} alt="a cabin on a small island" class="select-none" />
    <div id="banner-text">
        <h2>每个人都是一座孤岛。</h2>
        <p>而就在刚才，你，我尚不知晓姓名的朋友，误入了我的领海。</p>
        <p>欢迎来到 Isla，这是 Eltrac 在互联网上的家。</p>
    </div>
</section>

<!-- Intro -->
<section id="intro" class="grid grid-cols-5 p-3 gap-5">
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
<section id="bio">
    
</section>

<style lang="scss">
    #banner {
        gap: 3em;
        padding: 2em 0;

        #banner-text {
            h2 {
                font-size: 400%;
                font-weight: 800;
                background-image: linear-gradient(to right, #333, #666);
                -webkit-text-fill-color: transparent;
                background-clip: text;
                -webkit-background-clip: text;
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
            border: 0.215rem solid #333;
            transition-property: box-shadow, transform;
            transition-duration: 0.3s;

            h3 {
                font-size: 160%;
                font-weight: 600
            }
            p {
                margin: 0.5em 0 0 0;
            }

            &:hover {
                transform: translateY(-1em);
                box-shadow: 0 0.3em 2em rgba(0,0,0,0.15)
            }
        }
    }
</style>