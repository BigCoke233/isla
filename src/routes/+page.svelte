<script>
    import logo from '$lib/images/logo.png'
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
<section id="intro" class="grid grid-cols-5 p-3">
    <div class="intro-item">
        <h3>INFP 和双子座</h3>
        <p>只是随便写写</p>
    </div>
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
            cursor: pointer;

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