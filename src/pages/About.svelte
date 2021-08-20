<script lang="ts">
    import SocialLinks from '../components/SocialLinks.svelte';
    // https://github.com/EmilTholin/svelte-routing/issues/122
    export let location: any;
    const src: string = '../static/images/about_profile_pic2.jpg';
</script>

<main>
    <div class="container">
        <div class="profile-pic-container">
            <img {src} alt="Profile picture for about page">
        </div>
        <div class="bio-container">
            <p>
                Hello! I’m Andrew. I am currently a software engineer at Indeed on the Hiring Events team. Previously I worked in analytics at Indeed and Teradata.
            </p>
            <p>MS in Industrial Engineering from NC State</p>
            <p>BS in Math from Clemson</p>
            <p>Outside of work I enjoy traveling, tennis, board games, swimming, cooking, sports analytics, and watching dramas.</p>
        </div>
        <div class="footer">
            <SocialLinks></SocialLinks>
        </div>
    </div>
</main>

<style type="text/scss">
    @import '../styles/vars';
    .footer {
        margin: 1rem 0 4rem 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 60%;
        margin: 4rem auto 0 auto;
        @media screen and (min-width: $small) {
            width: 25%;
        }
    }
    .profile-pic-container {
        min-height: 18rem;
        margin: 1rem 0;
        display: flex;
        justify-content: center;
        @media screen and (min-width: $small) {
            min-height: 32rem;
        }
    }
    img {
        max-width: 100%;
        max-height: 100%;
    }
    main {
        height: 100%;
        width: 100%;
        background-color: $primary-base;
		transition: background-color 0.3s;
    }

    p {
        color: $primary-text-color;
    }

    :global(body.dark-mode)  {
        & main {
		    background-color: $dark-base-dark-grey;
        }
        p {
            color: $dark-text-color;
        }
    }
</style>