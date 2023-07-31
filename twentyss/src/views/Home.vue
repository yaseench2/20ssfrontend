<template>
    <div>
        <Welcome :products="Products" />
    </div>
    <ProductList :products="Products" :Dresses="ProductsDresses" :Gadgets="ProductsGadgets" :Watches="ProductsWatches"
        :Sneakers="ProductsSneakers" :banner="Banner" />
</template>

<script>
import axios from 'axios'
import Welcome from '../components/home/WelcomeHome.vue'
import ProductList from '../components/home/ProductList.vue'
import Swal from 'sweetalert2';

export default {
    name: 'Home',
    props: ['products', 'Dresses', 'Gadgets', 'Watches', 'Sneakers', 'banner'],
    components: {
        Welcome, ProductList
    },
    data() {
        return {
            Products: [],
            ProductsDresses: [],
            ProductsGadgets: [],
            ProductsWatches: [],
            ProductsSneakers: [],
            Banner: [],
        }
    },

    async created() {
        const result = await axios.get('products')
        const Products = result.data
        this.Products = Products

        const resultDress = await axios.get('Dress')
        const ProductsDress = resultDress.data
        this.ProductsDresses = ProductsDress

        const resultGadgets = await axios.get('Gadgets')
        const ProductsGadgets = resultGadgets.data
        this.ProductsGadgets = ProductsGadgets

        const resultWatches = await axios.get('Watches')
        const ProductsWatches = resultWatches.data
        this.ProductsWatches = ProductsWatches

        const resultSneakers = await axios.get('Sneakers')
        const ProductsSneakers = resultSneakers.data
        this.ProductsSneakers = ProductsSneakers

        const resultBanner = await axios.get('banner')
        const Banner = resultBanner.data
        this.Banner = Banner
    },
}
</script>