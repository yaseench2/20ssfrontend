<script>
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
    name: 'ProductDetailsCard',
    props: ['product'],
    data() {
        return {
            alerts: {},
            cartItem: [],
        }
    },
    methods: {
        async AddtoCart() {
            let user = this.$store.state.user
            if (user) {
                let productId = this.$route.params.id
                let userId = this.$store.state.user.id
                const result = await axios.post(`AddToCart/user/${userId}/product/${productId}`)
                this.alerts = result.data.msg
                if (result.data.status) {
                    Swal.fire('Success!', this.alerts, 'success');
                    setTimeout(() => {
                        this.$router.push({ path: `/cart/user/${userId}` });
                    }, 1000);
                } else {
                    Swal.fire('Warning!', 'Could not connect server', 'warining');
                }
            } else {
                Swal.fire('warning!', 'You are Not Logged In !', 'warning');
            }
        },
    },
    async created() {
        let user = this.$store.state.user
        if (user) {
            let userId = this.$store.state.user.id
            const result = await axios.get(`cart/user/${userId}`)
            const product = result.data
            this.cartItem = product
        }

    },
    computed: {
        itemInCart() {
            return this.cartItem.some(item => item.id === this.$route.params.id)
        }
    }
}
</script>

<template>
    <main class="col-lg-6">
        <div class="ps-lg-3">
            <h4 class="title text-dark">
                {{ product.pName }}
            </h4>
            <div class=" my-2">
                <span class="text-muted"><i class="fa fa-shopping-basket fa-sm mx-1"></i></span>
                <span class="text-success" >In stock</span>
            </div>

            <div class="mb-3">
                <span class="h5">Rs:{{ product.price }}</span>
                <span class="text-danger"><del>{{ product.cutPrice }}</del></span>
            </div>

            <p>
                Discription:{{ product.disc }}
            </p>

            <div class="row">
                <dt class="col-6">Item:</dt>
                <dd class="col-6">{{ product.pitem }}</dd>

                <dt class="col-6">Color</dt>
                <dd class="col-6">{{ product.color }}</dd>

                <dt class="col-6">Material</dt>
                <dd class="col-6">{{ product.cloth }}</dd>

                <dt class="col-6">Brand</dt>
                <dd class="col-6">{{ product.brand }}</dd>
            </div>

            <hr />

            <div class="row mb-4">
                <div class="col-md-4 col-6" v-if="product.pitem != 'Watch' && product.pitem != 'Gadgets'">
                    <label class="mb-2">Size</label>
                    <select class="form-select border border-secondary" style="height: 35px;">
                        <option v-for="size in product.size" :key="size">{{ size }}</option>
                    </select>
                </div>
                <!-- col.// -->
                <div class="col-md-4 col-6 mb-3">
                    <label class="mb-2 d-block">Quantity</label>
                    <div class="input-group mb-3" style="width: 170px;">
                        <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon1"
                            data-mdb-ripple-color="dark">
                            <i class="fa fa-minus text-dark"></i>
                        </button>
                        <input type="text" class="form-control text-center border border-secondary" placeholder="1"
                            aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        <button class="btn btn-white border border-secondary px-3" type="button" id="button-addon2"
                            data-mdb-ripple-color="dark">
                            <i class="fa fa-plus text-dark"></i>
                        </button>
                    </div>
                </div>
            </div>
            <button class="btn facilitatorSubmitBtn shadow" v-if="!itemInCart" @click="AddtoCart()"> <i
                    class="me-1 fa fa-plus"></i><i class="discText">Add To Cart</i> <i class="fa fa-shopping-cart"></i></button>
            <button class="btn facilitatorSubmitBtn text-success" v-if="itemInCart"> <i class="me-1 fa fa-check"></i><i class="discText">Already In Cart</i>  <i class="fa fa-shopping-cart"></i></button>
        </div>
    </main>
</template>
<style scoped>

.facilitatorSubmitBtn {
	width: 50%;
	color: rgb(0, 0, 0);
	border: 1px solid #000000;
	font-family: Montserrat;
}

.facilitatorSubmitBtn:hover {
	background-color: #000000;
	color: rgb(255, 255, 255);
    
	box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.099), 0 1px 50px 0 rgba(0, 0, 0, 0.099);
}

@media screen and (max-width: 620px) {
    main {
        text-align: right;
    }

    dt {
        text-align: right;
    }
}
</style>