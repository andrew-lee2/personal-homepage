<script lang="ts">
    // import BackgroundType from '../components/BackgroundType.svelte';
    // import Hoverable from '../utils/Hoverable.svelte';
    // import {clickOutside} from '../utils/clickOutside';
    // import { fade, fly } from 'svelte/transition';
    // import Navbar from '../components/Navbar.svelte';
    import NavbarDesktop from '../components/NavbarDesktop.svelte';
	import NavbarSidebar from '../components/NavbarSidebar.svelte';
    import { onMount } from 'svelte';
    import { TextScramble } from '../utils/textScramble';
    
    const phrases: string[] = [
        'Hello!',
        'Welcome to my site!',
        'Please take a look around!',
        '- Andrew',
    ]
    
    let textElement: any;
    onMount(() => { 
        const fx = new TextScramble(textElement)
    
        let counter = 0;
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                // this will increase the phrase pause
                setTimeout(next, 1200)
            })
            counter = (counter + 1) % phrases.length
        }
        
        next()
    });

    let open: boolean = false;
</script>

<NavbarSidebar bind:open/>
<NavbarDesktop bind:sidebar={open}/>

<main>
    <div class="container">
        <div bind:this="{textElement}" class="text"></div>
    </div>
</main>


<style type="text/scss">
    @import 'https://fonts.googleapis.com/css?family=Roboto+Mono:100';
    html,
    body {
        font-family: 'Roboto Mono', monospace;
        background: #FFFFFF;
        height: 100%;
    }
    .container {
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .text {
        font-weight: 100;
        font-size: 28px;
        color: #757575;
        // color: #fafafa;
    }
    .dud {
        // color: #757575;
        color: #fafafa;
    }

    main {
        background-color: #FFFFFF;
        height: 100%;
        width: 100%;
    }
</style>