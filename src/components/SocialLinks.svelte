<script lang="ts">

</script>

<!-- svelte-ignore a11y-missing-content -->
<div class="logo-block">
    <a class="icon icon-github" href="https://github.com/andrew-lee2/"></a>
    <a class="icon icon-linkedin ml-20" href="https://www.linkedin.com/in/andrewlee10/"></a>
</div>

<style type="text/scss">
    @import '../styles/vars';
    .logo-block {
        display: flex;
        justify-content: flex-start;
        /*TODO change to rem*/
        width: 100%;
    }
    .icon {
        display: inline-block;
        width: 30px;
        height: 30px;
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

    @media (min-width: 640px) {
        .icon {
            width: 40px;
            height: 40px;
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