<script lang="ts">

</script>

<!-- svelte-ignore a11y-missing-content -->
<div class="logo-block">
    <a class="icon icon-github" href="https://github.com/andrew-lee2/" target="_blank"></a>
    <a class="icon icon-linkedin ml-20" href="https://www.linkedin.com/in/andrewlee10/" target="_blank"></a>
</div>

<style type="text/scss">
    @import '../styles/vars';
    .logo-block {
        display: flex;
        justify-content: flex-start;
        width: 100%;
    }
    .icon {
        display: inline-block;
        width: 25px;
        height: 25px;
        background-size: cover;
        filter: $primary-text-filter;
    }
    .ml-20 {
        margin-left: 20px;
    }
    .icon-github {
        background-image: url(../static/images/github.svg);
    }
    .icon-linkedin {
        background-image: url(../static/images/linkedin.svg);
    }
    .icon-github:hover,
    .icon-github:focus,
    .icon-linkedin:hover,
    .icon-linkedin:focus {
        filter: $primary-text-hover-filter; 
    }

    @media screen and (min-width: $small){
        .icon {
            width: 30px;
            height: 30px;
        }
    }

    :global(body.dark-mode)  {
        .icon {
            filter: $dark-text-filter;
        }
        .icon-github:hover,
        .icon-github:focus,
        .icon-linkedin:hover,
        .icon-linkedin:focus {
            filter: $dark-text-hover-filter; 
        }
    }

</style>