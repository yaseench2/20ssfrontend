<script>
import CartItems from './CartItems.vue'
export default{
    name:'CartGrid',
    props:['products','cartItem'],
    components:{
        CartItems,
    }
}
</script>

<template>
    <div class="col-lg-9">
        <div class="card border shadow">
            <div class="m-4">
                <h4 class="card-title mb-4">Your shopping cart</h4>
                <CartItems :products="cartItem" v-on:removeCart="$emit('removeFromCart',$event)" />
                <div class="border-top pt-4 mx-4 mb-4">
                    <p><i class="fa fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                    <p class="text-muted">
                        Terms And Condition Apply.We Appreciate For Parchasing From Us.
                        We Hoping Your Come Back Soon... Thank You...!
                    </p>
                </div>
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