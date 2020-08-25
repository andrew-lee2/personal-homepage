<script lang="ts">
    import Navbar from '../components/Navbar.svelte';
	import Sidebar from '../components/Sidebar.svelte';

    let open: boolean = false;

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
