<script lang="ts">
    export let tag: string;
</script>


<span class="tech-tag">{tag}</span>

<style type="text/scss">
    @import '../../styles/vars';

    .tech-tag {
        border-radius: 9999px;
        background-color: $primary-base;
        font-weight: 600;
        font-size: 12px;
        padding: 0.35rem 4% 0.35rem 4%;
        display: inline-block;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }
    
</style>
