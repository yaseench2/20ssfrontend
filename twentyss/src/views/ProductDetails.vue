<script>
import axios from 'axios';
import ProductDetailsGrid from '../components/productDetails/ProductDetailsGrid.vue';
import NotFoundErr from './NotFound.vue';
export default {
    name: 'ProductDetails',
    props: ['products'],
    components: {
        ProductDetailsGrid, NotFoundErr
    },
    data() {
        return {
            Product: {},
        }
    },
    async created() {
        const result = await axios.get(`products/${this.$route.params.id}`)
        const product = result.data
        this.Product = product
    },
}
</script>
<template>
    <div v-if="Product" >
        <ProductDetailsGrid :products="Product" />
    </div>
    <div v-else>
        <NotFoundErr/>
    </div>
</template>


