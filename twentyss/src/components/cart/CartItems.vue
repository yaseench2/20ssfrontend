<script>
import axios from 'axios'
import Swal from 'sweetalert2';
export default{
    name:'CartItems',
    props:['products'],
    data(){
        return{
            alerts:{}
        }
    },
    // methods:{
    //     async removeCart(id){
    //         let user=this.$store.state.user
    //         if(user){
    //             let userId=this.$store.state.user.id
    //             let productId=id
    //             const result=await axios.post(`DeleteCart/user/${userId}/product/${productId}`)
    //             if(result.data.status){
    //                 this.alerts=result.data.msg
    //                 Swal.fire('Success!', this.alerts, 'success');
    //                 setTimeout(() => {
	// 						this.$router.push({path:`/cart/user/${userId}`});
	// 					}, 1000);
    //             }else{
    //                 Swal.fire('Warning!', 'Could not connect server', 'warining');
    //             }
    //         }
    //     }
    // }
}
</script>

<template>
    <div class="row gy-3 mb-4" v-for="x in products" :key="x.id">
        <div class="col-lg-5">
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
        <div class="col-lg-2 col-sm-8 col-8 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
            <div class=" ml-4">
                <select style="width: 60px;" class="form-select me-4">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div class="">
                <text class="h6 ml-2">Rs:- {{ x.price }}</text> <br />
                <small class="text-mute text-nowrap ml-2">Rs:- <del class="text-danger">{{ x.cutPrice }}</del></small>
            </div>
        </div>
        <div
            class="col-lg-12 col-sm-6 col-4 d-flex justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-end mb-2">
            <div class="float-right">
                <button class="btn btn-light border icon-hover-danger" v-on:click="$emit('removeCart',x.id)"> <i class="fa fa-remove text-danger fa-lg"></i></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon-hover-primary:hover {
  border-color: #3b71ca !important;
  background-color: white !important;
}

.icon-hover-primary:hover i {
  color: #3b71ca !important;
}

.icon-hover-danger:hover {
  border-color: #dc4c64 !important;
  background-color: white !important;
}

.icon-hover-danger:hover i {
  color: #dc4c64 !important;
}
</style>