<script lang="ts">
    import type { ProjectDetails } from '../../common/types';
    export let projectDetails: ProjectDetails;
</script>

<div class="project-name-section">
    <h6>Project</h6>
    <div class="title-link-container">
        <h2 class="project-name">{projectDetails.name}</h2>
        <!-- svelte-ignore a11y-missing-content -->
        <a class="icon-github" href="{projectDetails.URL}" target="_blank"></a>
    </div>
</div>

<style type="text/scss">
    @import '../../styles/vars';

    .project-name-section {
        border-radius: 10px 10px 0 0;
        display: flex;
        flex-direction: column;
        background-color: $primary-highlight;
        padding: 1rem;
        
        @media screen and (min-width: $small) {
            min-width: 150px;
            border-radius: 10px 0 0 10px;
        }
    }

    .icon-github {
        width: 25px;
        height: 25px;
        filter: $dark-text-filter;
        // TODO something wierd going on
        z-index: 0;
        background-image: url(../static/images/github.svg);
        &:hover {
            filter: $dark-text-hover-filter;
        }

        @media screen and (min-width: $small) {
            margin-top: auto;
        }
    }

    h6 {
        margin-top: 0;
        margin-bottom: .5rem;
        color: $dark-text-color;
    }

    h2 {
        margin-top: 0;
        margin-bottom: 0;
        color: $dark-text-color;
    }

    .title-link-container {
        display: flex;
        align-items: flex-end;
        @media screen and (min-width: $small){
            flex-direction: column;
            align-items: flex-start;
            height: 100%;
        }
    }

    :global(body.dark-mode) {
        .project-name-section {
            background-color: $dark-card-project;
        }
    }
</style>