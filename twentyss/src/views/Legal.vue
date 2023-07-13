<script>
import Terms from '../components/privacy/Terms.vue';
import Privacy from '../components/privacy/Privacy.vue';
export default {
    name: 'Legal',
    components:{
        Terms,Privacy
    }
}
</script>

<template>
    <div>
        <div class="container p-2">
            <h5 class="p-4">Terms And Conditions</h5>
            <Terms/>
            <h5 class="p-4">Privacy And Policy</h5>
            <Privacy/>
        </div>
    </div>
</template>


