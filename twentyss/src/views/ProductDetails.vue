<script>
import axios from 'axios';
import ProductDetailsGrid from '../components/productDetails/ProductDetailsGrid.vue';
import NotFoundErr from './NotFound.vue';
import { useMeta } from 'vue-meta';
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

        const meta = useMeta();
        meta.value.title = this.Product.pName;
        meta.value.metaTags.push({
            property: 'og:title',
            content: this.Product.pName,
        });
        meta.value.metaTags.push({
            property: 'og:description',
            content: this.Product.disc,
        });
        meta.value.metaTags.push({
            property: 'og:image',
            content: this.Product.imageUrl,
        });
        meta.value.metaTags.push({
            property: 'og:url',
            content: window.location.href, // or provide a dynamic URL to the product page
        });
    },
}
</script>
<template>
    <div v-if="Product" class="mt-2">
        <ProductDetailsGrid :products="Product" />
    </div>
    <div v-else>
        <NotFoundErr/>
    </div>
</template>


