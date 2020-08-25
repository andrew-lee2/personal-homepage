<script lang="ts">
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
    import Navbar from '../components/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';
    import { darkMode } from '../store.js';

    let open: boolean = false;

    onMount(() => {
        let isDarkMode: any = get(darkMode); 
        if (get(isDarkMode) === true) {
            window.document.body.classList.toggle('dark-mode');
        }
    });


</script>

<div class="fix-navbar">
    <Sidebar bind:open/>
    <Navbar bind:sidebar={open}/>
</div>

<style type="text/scss">
    @import '../styles/vars';
    .fix-navbar {
        position: fixed;
        width: 100%;
        height: 100%;
    }
</style>
