<script>
import axios from 'axios'
import Swal from 'sweetalert2';
export default{
    name:'ItemsCart',
    props:['products'],
    data(){
        return{
            alerts:{}
        }
    },
}
</script>

<template>
    <div class="row gy-3 mb-4 shadow" v-for="x in products" :key="x.id">
        <div class="col-lg-5 col-md-5 col-10 ">
            <div class="me-lg-5">
                <div class="d-flex ml-4">
                    <router-link :to="'/product_details/' + x.id + '/' + x.pName">
                    <img :src="x.imageUrl"
                        class="border rounded me-3" style="width: 96px; height: 96px;" />
                    </router-link>
                    <div class="">
                        <a  class="nav-link ">{{ x.pName }}</a>
                        <p class="text-muted ml-3">{{ x.color }} -- {{ x.brand }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-12 col-sm-6 col-md-2 col-2 d-flex justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-end">
            <div class="float-right">
                <button class="btn  icon-hover-danger" v-on:click="$emit('removeCart',x.id)"> <i class="fa fa-remove text-danger fa-lg"></i></button>
            </div>
        </div>
        <div class="col-lg-2 col-sm-8 col-md-5 mt-1 col-8 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
            <div class=" ml-4">
                Quantity
                <select style="width: 60px;" class="form-select me-4">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div class="col-md-6 col-6 text-center">
                <text class="h4 text-dark ml-2">Rs:- {{ x.price }}</text> <br />
                <small class="text-mute text-nowrap ml-2">Rs:- <del class="text-danger">{{ x.cutPrice }}</del></small>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.icon-hover-danger:hover {
  border-color: #dc4c64 !important;
  background-color: rgb(0, 0, 0) !important;
}

.icon-hover-danger:hover i {
  color: #ffffff !important;
}
.row{
    border-radius: 20px;
}
</style>