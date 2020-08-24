<script lang="ts">
    import BasePage from '../components/BasePage.svelte';
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

<BasePage/>

<main>
    <div class="container">
        <div bind:this="{textElement}" class="text"></div>
    </div>
</main>


<style type="text/scss">
    @import '../styles/vars';
    // TODO look at using a different font-family?
    // TODO this should be temporary til we fix sidebar
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
    main {
        height: 100%;
        width: 100%;
        background-color: $primary-base;
		transition: background-color 0.3s;
    }

	:global(body.dark-mode)  {
        & main {
		    background-color: $dark-base-dark-grey;
        }
        & .text {
            color: $dark-text-color;
        }
	}
</style>