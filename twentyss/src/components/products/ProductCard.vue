<script>
export default {
    name: 'ProductCard',
    props: ['products', 'ItemUrl'],
}
</script>

<template>
    <div class="col-lg-4 col-md-4 col-6  pt-md-0  mb-3" v-for="x in products" :key="x.id" >
        <div class="card d-flex flex-column align-items-center" >
            <div class="product-name mt-1"  >
                <h6>{{ x.pName }}</h6>
            </div>
            <router-link :to="'/product_details/' + x.id + '/' + x.pName">
                <div class="card-img">
                    <img :src="x.imageUrl" alt="" height="100" id="shirt">
                </div>
            </router-link>
            <div>
                Sizes :<div class="text-muted text-center p-1 d-inline mt-auto" v-for="size in x.size" :key="size">{{ size}}</div>
            </div>

            <div class="card-body pt-0">
                <div class="text-dark text-center mt-auto">Item:{{ x.pitem }}</div>
                <div class="text-muted text-center discrption mt-auto">Disciption:{{ x.disc }}</div>
                <div class="d-flex align-items-center price">
                    <div class="del mr-2"><span class="text-danger"><del>{{ x.cutPrice }}</del></span></div>
                    <div class="font-weight-bold">{{ x.price }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    cursor: pointer;
    transition: .3s all ease-in-out;
    height: 350px;
    border-radius: 20px;
}

.card:hover {
    box-shadow: 2px 2px 15px #fd9a6ce5;
    transform: scale(1.02)
}

.card .product-name {
    font-weight: 800
}

.card-body {
    padding-bottom: 0
}

.card .text-muted {
    font-size: 0.82rem
}

.card-img img {
    width: inherit;
    height: 180px;
    object-fit: fill;
    display: block;
}

.card-body .btn-group .btn {
    padding: 0;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 50%;
    position: relative
}

.card-body .btn-group>.btn-group:not(:last-child)>.btn,
.card-body .btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
    border-radius: 50%;
    transition: ease-in all .4s
}

.card-body input[type="radio"] {
    visibility: hidden
}

.card-body .btn:not(:disabled):not(.disabled).active::after,
.card-body .btn:not(:disabled):not(.disabled):active::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 4px;
    left: 4.2px;
    background-color: #fff;
    position: absolute;
    transition: ease-in all .4s
}

.card-body .btn.btn-light:not(:disabled):not(.disabled).active::after,
.card-body .btn.btn-light:not(:disabled):not(.disabled):active::after {
    background-color: #000
}

#avail-size input[type="checkbox"] {
    visibility: hidden
}

#avail-size input[type='checkbox']:checked {
    background-color: #16c79a;
    border: none
}

#avail-size .btn.btn-success {
    background-color: #ddd;
    color: #333;
    border: none;
    width: 20px;
    font-size: 0.7rem;
    border-radius: 0;
    padding: 0
}

#avail-size .btn.btn-success:hover {
    background-color: #aff1e1;
    color: #444
}

#avail-size .btn-success:not(:disabled):not(.disabled).active,
#avail-size .btn-success:not(:disabled):not(.disabled):active {
    background-color: #16c79a;
    color: #fff
}

#avail-size label {
    margin: 10px;
    margin-left: 0px
}

#shirt {
    height: 170px
}

.middle {
    position: relative;
    width: 100%;
    margin-top: 25px
}

@media(max-width:1199.5px) {
    .card {
        height: 350px
    }

    .price {
        font-size: 0.9rem
    }

    .product-name {
        font-size: 0.8rem
    }
}

@media(max-width: 991.5px) {
    .card {
        text-align: center;
        height: 300px;
        border-radius: 20px;
    }

    .price {
        font-size: 0.85rem
    }

    .discrption {
        display: none;
    }
}
</style>