<script>
import ProductDetailsCard from './ProductDetailsCard.vue';
import ProductSlider from './ProductImageSlider.vue';
export default {
    name: 'ProductDetailsGridPage',
    props:['products'],
    components:{
    ProductDetailsCard,
    ProductSlider,
}
}
</script>

<template>
    <section class="py-5 p-2">
        <div class="container pDetails py-3">
            <div class="row gx-5">
                <ProductSlider :product="products"/>
                    <ProductDetailsCard :product="products"/>
            </div>
        </div>
    </section>
</template>

<style scoped>
.pDetails{
    background-color: white;
    border-radius: 20px;
  }
  </style>