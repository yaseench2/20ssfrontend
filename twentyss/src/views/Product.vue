<script>
import axios from 'axios'
import Filterbar from '../components/products/Filterbar.vue';
import ProductCard from '../components/products/ProductCard.vue';
export default {

    name: 'ProductPage',
    components: {
        Filterbar,
        ProductCard,
    },
    data() {
        return {
            Products: [],
        }
    },
    props: ['products'],
    async created() {
        let prevUrl = undefined;
        setInterval(async () => {
            const currUrl = window.location.pathname;
            if (currUrl != prevUrl) {
                prevUrl = currUrl;
                const { data: Products } = await axios.get(currUrl)
                this.Products = Products
            }
        }, 60);
    },

}
</script>

<template>
    <div class="container mt-4">
        <Filterbar />
        <div id="products">
            <div class="row mx-0">
                <ProductCard :products="Products" />
            </div>
        </div>
    </div>
</template>


