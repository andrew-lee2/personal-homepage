<script lang="ts">
    import Navbar from '../components/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';
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

<div class="fix-home">
    <Sidebar bind:open/>
    <Navbar bind:sidebar={open}/>
    
    <main>
        <div class="container">
            <div bind:this="{textElement}" class="text"></div>
        </div>
    </main>
</div>


<style type="text/scss">
    @import '../styles/vars';
    // @import 'https://fonts.googleapis.com/css?family=Roboto+Mono:100';
    // html,
    // body {
    //     font-family: 'Roboto Mono', monospace;
    //     background: #FFFFFF;    
    //     position: fixed;
    // }

    // TODO this should be temporary til we fix sidebar
    .fix-home {
        position: fixed;
        width: 100%;
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
        font-size: 2rem;
        // color: #757575;
        // color: var(--text-color);
        color: #fafafa;
        padding: 0 2rem;
        margin-bottom: 15rem;
        @media screen and (min-width: $small){
            font-size: 3rem;
        }
    }
    .dud {
        color: #757575;
        // color: #fafafa;
        // color: var(--text-color);
    }

    main {
        // background-color: #FFFFFF;
        height: 100%;
        width: 100%;
        background-color: #f2eee2;
		color: #0084f6;
		transition: background-color 0.3s
    }

    // :global(body) {
	// 	background-color: #f2eee2;
	// 	color: #0084f6;
	// 	transition: background-color 0.3s
	// }
	:global(body.dark-mode) main {
		background-color: #1d3040;
		color: #bfc2c7;
	}
</style>