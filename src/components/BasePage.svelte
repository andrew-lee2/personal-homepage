<script lang="ts">
    import Navbar from '../components/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';

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