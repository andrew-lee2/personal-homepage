<script lang="ts">
    let clazz: any;
	export { clazz as class };
</script>

<img 
    class={`logo ${clazz || ''}`}
    src="./static/images/logo.svg"
    alt="logo for website"
/>

<style>
    .logo {
        height: 45px;
        width: 45px;
    }
</style>