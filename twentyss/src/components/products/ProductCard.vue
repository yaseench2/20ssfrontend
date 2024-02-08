<script>
export default {
    name: 'ProductCardPage',
    props: ['products', 'ItemUrl'],
}
</script>

<template>
    <div class="row text-center mb-4 p-2">
        <div class="col-md-4 col-6 mt-3" v-for="product in products" :key="product.id">
            <div class="card shadow">
                <router-link :to="'/product_details/' + product.id + '/' + product.pName">
                    <div class="imgBox">
                        <img :src="product.imageUrl" class="mouse">
                    </div>
                </router-link>
                <div class="contentBox">
                    <h3>{{ product.pName }}</h3>
                    <h2 class="price">RS:{{ product.price }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    position: relative;
    width: 100%;
    height: auto;
    background: #191919;
    border-radius: 20px;
    overflow: hidden;
    border: none;
}

.card::before {
    content: "";
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background: #ffffff;
    transform: skewY(345deg);
    transition: 0.5s;
}

.card:hover::before {
    top: -70%;
    transform: skewY(390deg);
}

.card::after {
    content: "20SS";
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 6em;
    color: rgba(0, 0, 0, 0.29);
}

.card .imgBox {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}
.card .imgBox img {
    border-radius: 20px;
    max-width: 80%;
    transition: .5s;
}


.card:hover .imgBox img {
    max-width: 100%;
}

.card .contentBox {
    position: relative;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
}

.card .contentBox h3 {
    font-size: 18px;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.card .contentBox .price {
    font-size: 24px;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
}
</style>