<script>
   let showClicked = false;
   function handleClick() {
       showClicked = !showClicked;
   }
</script>

<div class="project-card" class:clicked="{showClicked === true}">
    <div class="project-name-section">
        <h6 class="project-header">Project</h6>
        <!-- TODO make this a var -->
        <h2 class="project-name">Resveration Framework</h2>
        <!-- TODO make href a var -->
        <!-- svelte-ignore a11y-missing-content -->
        <a class="icon-github" href="https://github.com/andrew-lee2/"></a>
    </div>
    <div class="project-details">
        <h6 class="description-header">Description</h6>
        <p class="description">this is a random sentence. this is a random sentence.this is a random sentence.this is a random sentence.this is a random sentence.this is a random sentence.this is a random sentence.this is a random sentence.this is a random sentence.</p>
        <button
            on:click={handleClick}
            >Show More
        </button>
        <div class="tag-container">
            <span class="tech-tag">Python</span>
        </div>
    </div>
</div>

<style type="text/scss">
    @import '../styles/vars';
    button {
        border: none;
        background-color: $primary-sidebar-background;
        font-size: 0.67em;
        font-weight: 600;
        text-align: left;
        padding-left: 0;
        cursor: pointer;
    }


    .tag-container {
        display: block;
    }

    .tech-tag {
        border-radius: 9999px;
        background-color: #FFFFFF;
        font-weight: 600;
        // padding: 0.75rem;
        padding: 0.5rem 4% 0.5rem 4%;
        display: inline-block;
    }

    h6 {
        margin-top: 0;
        margin-bottom: .5rem;
        color: $primary-text-color;
        &.project-header {
            color: $dark-text-color;
        }
    }

    h2 {
        margin-top: 0;
        margin-bottom: 0;
        color: $dark-text-color;
    }

    p {
        margin: 0;
    }

    .icon-github {
        margin-top: auto;
        display: inline-block;
        width: 25px;
        height: 25px;
        background-size: cover;
        filter: $dark-text-filter;
        background-image: url(../static/images/github.svg);
        &:hover {
            filter: $dark-text-hover-filter;
        }
    }

    .clicked {
        // TODO might need to make this larger
        height: 225px !important;
    }

    .description {
        // TODO will need to adjust this
        height: 125px;
        overflow: hidden;
    }

    .project-card {
        margin: 1rem;
        min-width: 300px;
        height: 175px;
        display: flex; 
    }

    .project-name-section {
        border-radius: 10px 0 0 10px;
        display: flex;
        flex-direction: column;
        background-color: $primary-highlight;
        // TODO need to change this
        min-width: 150px;
        padding: 1rem;
    }

    .project-details {
        display: flex;
        flex-direction: column;
        border-radius: 0 10px 10px 0;
        background-color: $primary-sidebar-background;
        width: 100%;
        padding: 1rem;
    }
</style>