<script>
export default {
    name: 'ProductSlider',
    props: ['product']
}
</script>

<template>
    <aside class="col-lg-6">
        <div class="product-d-slide">
            <div class="container">
                <div class="row p-3">
                    <div class="col-md-6 col-12">
                        <div class="banner-image shadow ">
                            <img :src="product.imageUrl" alt="">
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="banner-image shadow ">
                            <img :src="product.imageUrl2" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<style scoped>
.container {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: black;
    border-radius: 12px;
    border: 1px solid rgba(255, 0, 0, 0.125);
    text-align: center;
    transition: all .8s ease;
}
.banner-image{
    border-radius: 12px;
}
img {
    object-position: center;
    object-fit: fill;
    width: 100%;
    border-radius: 12px;
    transition: all .8s ease;
}

@media screen and (max-width: 620px) {
    img {
        height: 35vh;
        margin-top: 2vh;
    }
}
</style>
