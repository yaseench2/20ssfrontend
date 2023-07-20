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
            Itemurl: {},
            searchValue: '',
        }
    },
    props: ['products', 'ItemUrl'],
    async created() {
        let prevUrl = undefined;
        setInterval(async () => {
            const currUrl = window.location.pathname;
            if (currUrl != prevUrl) {
                prevUrl = currUrl;
                const { data: Products } = await axios.get(currUrl)
                this.Products = Products
                let newUrlitem = currUrl.slice(4);
                this.Itemurl = newUrlitem
            }
        }, 60);
    },
    computed: {
        ProductList() {
            if (this.searchValue.trim().length > 0) {
                return this.Products.filter((p) => p.pName.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
            }
            return this.Products
        }
    }
}
</script>

<template>
    <div class="container mt-4">
        <Filterbar :ItemUrl="Itemurl" />
        <div id="products">
            <div class="row">
                <div class="container mb-3">
                    <div class="col-md-12">
                        <form class="form">
                            <i class="fa fa-search"></i>
                            <input type="text" class="form-control form-input" :placeholder="Itemurl" v-model="searchValue">
                            <span class="left-pan"><i class="fa fa-microphone"></i></span>
                        </form>
                    </div>
                </div>
                <ProductCard :products="ProductList" :ItemUrl="Itemurl" v-if="ProductList.length" />
                <div v-else class="wariningSearch">
                    <div class="alert alert-warning" role="alert">
                        Product Not Found For {{ searchValue }} !!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media(max-width: 525.5px) {
    .wariningSearch {
        margin-left:    20%;
    }

}

.form {

    position: relative;
}

.form .fa-search {

    position: absolute;
    top: 20px;
    left: 20px;
    color: #9ca3af;

}

.form span {

    position: absolute;
    right: 17px;
    top: 13px;
    padding: 2px;
    border-left: 1px solid #d1d5db;

}

.left-pan {
    padding-left: 7px;
}

.left-pan i {

    padding-left: 10px;
}

.form-input {

    height: 55px;
    text-indent: 33px;
    border-radius: 10px;
}

.form-input:focus {

    box-shadow: none;
    border: none;
}
</style>

