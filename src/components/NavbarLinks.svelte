<script lang="ts">
    export let showHome: any = true;

</script>

{#if showHome}
    <p class="navbar-link">
        <a href="/">Home</a>
    </p>
{/if}
<p class="navbar-link">
    <a href="/about">About</a>
</p>
<p class="navbar-link">
    <a href="/projects">Projects</a>
</p>

<style type="text/scss">
    @import '../styles/vars';
    
    .navbar-link {
        font-size: 18px;
        color: #FFFFFF;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    p {
    background: $color;

    > a {
      color: pink;
    }
  }
</style>