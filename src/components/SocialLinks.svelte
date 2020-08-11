<script lang="ts">

</script>

<!-- svelte-ignore a11y-missing-content -->
<div class="logo-block">
    <a class="icon icon-github" href="https://github.com/andrew-lee2/"></a>
    <a class="icon icon-linkedin" href="https://www.linkedin.com/in/andrewlee10/"></a>
</div>

<style>
    .logo-block {
        display: flex;
        justify-content: flex-end;
        /*TODO change to rem*/
        width: 90%;
    }
    .icon {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-size: cover;
        margin-left: 20px
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
        /*hex color #a9a9a9*/
        filter: invert(86%) sepia(4%) saturate(0%) hue-rotate(7deg) brightness(82%) contrast(76%);
    }

    @media (min-width: 640px) {
        .logo-block {
            justify-content: flex-end;
        }
        .icon {
            width: 40px;
            height: 40px;
        }
    }

</style>