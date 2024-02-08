<script>
export default {
    name: 'ProductRelatedPage',
}
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="image-container">

                        <div class="first">

                            <div class="d-flex justify-content-between align-items-center">

                                <span class="discount">-25%</span>
                                <span class="wishlist"><i class="fa fa-heart-o"></i></span>


                            </div>
                        </div>

                        <!-- <router-link :to="'/product_details/' + product.id + '/' + product.pName">
                            <img :src="product.imageUrl" alt="">
                        </router-link> -->
                    </div>
                    <div class="product-detail-container p-2">

                        <div class="d-flex justify-content-between align-items-center">

                            <!-- <h5 class="dress-name">{{ product.pName }}</h5> -->

                            <div class="d-flex flex-column mb-2">

                                <!-- <span class="new-price">Rs : {{ product.price }}</span> -->
                                <!-- <small class="old-price text-right">{{ product.cutPrice }}</small> -->
                            </div>

                        </div>
                        <div class="d-flex justify-content-between align-items-center pt-1">

                            <div class="color-select d-flex ">

                                <!-- Color :{{ product.color }} -->

                            </div>

                            <div class="d-flex ">

                                <!-- <div class="col-md-4 col-6" v-if="product.pitem != 'Watch' && product.pitem != 'Gadgets'">
                                    <label class="mb-2">Size</label>
                                    <select class="form-select border border-secondary" style="height: 35px;">
                                        <option v-for="size in product.size" :key="size">{{ size }}</option>
                                    </select>
                                </div> -->
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center pt-1">
                            <div>
                                <i class="fa fa-star-o rating-star"></i>
                                <span class="rating-number">4.8</span>
                            </div>

                            <span class="buy">BUY +</span>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="card voutchers">

                        <div class="voutcher-divider">

                            <div class="voutcher-left text-center">
                                <span class="voutcher-name">Monday Happy</span>
                                <h5 class="voutcher-code">#MONHPY</h5>

                            </div>
                            <div class="voutcher-right text-center border-left">
                                <h5 class="discount-percent">20%</h5>
                                <span class="off">Off</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {

    background-color: #fff;
    border: none;
    border-radius: 10px;
    width: 190px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.image-container {

    position: relative;
}

.thumbnail-image {
    border-radius: 10px !important;
}


.discount {

    background-color: red;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 4px;
    padding-right: 4px;
    font-size: 10px;
    border-radius: 6px;
    color: #fff;
}

.wishlist {

    height: 25px;
    width: 25px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.first {

    position: absolute;
    width: 100%;
    padding: 9px;
}


.dress-name {
    font-size: 13px;
    font-weight: bold;
    width: 75%;
}


.new-price {
    font-size: 13px;
    font-weight: bold;
    color: red;

}

.old-price {
    font-size: 8px;
    font-weight: bold;
    color: grey;
}


.btn {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    padding: 3px;
}

.creme {
    background-color: #fff;
    border: 2px solid grey;


}

.creme:hover {
    border: 3px solid grey;
}

.creme:focus {
    background-color: grey;

}


.red {
    background-color: #fff;
    border: 2px solid red;

}


.red:hover {
    border: 3px solid red;
}

.red:focus {
    background-color: red;
}



.blue {
    background-color: #fff;
    border: 2px solid #40C4FF;
}

.blue:hover {
    border: 3px solid #40C4FF;
}

.blue:focus {
    background-color: #40C4FF;
}

.darkblue {
    background-color: #fff;
    border: 2px solid #01579B;
}

.darkblue:hover {
    border: 3px solid #01579B;
}

.darkblue:focus {
    background-color: #01579B;
}

.yellow {
    background-color: #fff;
    border: 2px solid #FFCA28;
}

.yellow:hover {
    border-radius: 3px solid #FFCA28;
}

.yellow:focus {
    background-color: #FFCA28;
}


.item-size {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid grey;
    color: grey;
    font-size: 10px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
}


.rating-star {
    font-size: 10px !important;
}

.rating-number {
    font-size: 10px;
    color: grey;

}

.buy {
    font-size: 12px;
    color: purple;
    font-weight: 500;
}














.voutchers {
    background-color: #fff;
    border: none;
    border-radius: 10px;
    width: 190px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    overflow: hidden;

}

.voutcher-divider {

    display: flex;

}

.voutcher-left {
    width: 60%
}

.voutcher-name {
    color: grey;
    font-size: 9px;
    font-weight: 500;
}

.voutcher-code {
    color: red;
    font-size: 11px;
    font-weight: bold;
}

.voutcher-right {
    width: 40%;
    background-color: purple;
    color: #fff;
}

.discount-percent {
    font-size: 12px;
    font-weight: bold;
    position: relative;
    top: 5px;
}

.off {
    font-size: 14px;
    position: relative;
    bottom: 5px;
}
</style>
