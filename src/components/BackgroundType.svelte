<script>
    import Typewriter from 'svelte-typewriter';
    import { fade, fly } from 'svelte/transition';

    let isDone = false;
    let cats = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat', url: 'https://google.com' },
        { id: 'z_AbfPXTKms', name: 'Maru', url: 'https://github.com' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat', url: 'https://linkedin.com' }
    ];

    function handleDone() {
      isDone = true;
    }
</script>

<hr>

<!--TODO do we need to have another sentence?-->
<Typewriter interval={250} cursor={false} on:done={handleDone}>
    <h1>Hello!</h1>
</Typewriter>

{#if isDone}
<!--TODO make these loop components-->
    {#each cats as { id, name, url }, i}
        <a href={url} in:fade="{{ duration: 2000, delay: i * 200 }}" out:fade>
            {name}
        </a>
    {/each}
{/if}
