<script>
    import BackgroundType from '../components/BackgroundType.svelte';
    let navClicked = false;

    function handleClick() {
        navClicked = !navClicked;
        console.log(navClicked);
    }
</script>

<main>
<!--    TODO make own component eventually-->
    <div class="logo-container">
        <img
                on:click={handleClick}
                class="logo"
                src="./static/images/logo.svg"
                alt="logo for website"
        />
    </div>
<!--    TODO need to make a navbar that becomes visable on click of logo-->
    <div class="navbar">
<!--        TODO idk if we want to duplicate this-->
        <img class="logo"
             src="./static/images/logo.svg"
             alt="logo for website"/>
        <p>
            <a href="/about">About</a>
        </p>
    </div>
    <div class="text-container">
        <BackgroundType/>
    </div>
</main>

<style>
    main {
        text-align: center;
        margin: 0 auto;
        height: 100%;
        overflow: hidden;
        display: grid;
        grid-template-columns: 25px auto auto 25px;
        grid-template-rows: auto auto auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    .text-container {
        grid-area: 2 / 2 / 2 / 4;
    }
    .logo-container {
        grid-area: 1 / 1 / 1 / 1;
    }
    .logo {
        height: 45px;
        width: 45px;
    }
    .navbar {
        grid-area: 1 / 1 / 4 / 1;
        /*TODO choose different color*/
        background-color: grey;
    }
    @media (min-width: 640px) {
        main {
            grid-template-columns: 100px auto auto 100px;
        }
        .text-container {
            grid-area: 2 / 2 / 2 / 2;
        }
    }
</style>