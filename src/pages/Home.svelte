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
    // TODO look at using a different font-family?

    // TODO this should be temporary til we fix sidebar
    .fix-home {
        position: fixed;
        width: 100%;
        height: 100%;
    }
    .container {
        height: 65%;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .text {
        font-weight: 100;
        font-size: 2rem;
        color: $primary-text-color;
        padding: 0 2rem;
        @media screen and (min-width: $small){
            font-size: 3rem;
        }
    }
    // TODO do we need this?
    // .dud {
    //     color: pink;
    // }

    main {
        height: 100%;
        width: 100%;
        background-color: $primary-base;
        // TODO make this a variable?
		transition: background-color 0.3s;
    }

	:global(body.dark-mode)  {
        & main {
		    background-color: $dark-base-dark-grey;
		    color: #bfc2c7;
        }
        & .text {
            color: $dark-text-color;
        }
	}
</style>