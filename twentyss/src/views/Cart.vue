<script>
import axios from 'axios'
import CartGrid from '../components/cart/CartGrid.vue'
import Coupon from '../components/cart/Coupon.vue'
import NotFoundErr from './NotFound.vue';
import Swal from 'sweetalert2';
export default {
  name: 'Cart',
  props: ['cartItem'],
  data() {
    return {
      alerts: {},
      cartItems: [],
    }
  },
  components: {
    CartGrid, Coupon, NotFoundErr
  },
  async created() {
    let user = this.$store.state.user
    if (user) {
      const result = await axios.get(`cart/user/${this.$route.params.userId}`)
      const product = result.data
      this.cartItems = product
    } else {
      Swal.fire('warning!', 'Please donot refresh after Login !', 'warning');
      setTimeout(() => {
        this.$router.push('/')
      }, 1000);
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price), 0,
      );
    }
  },
  methods: {
    async removeCartItem(event) {
      let productId = event
      let user = this.$store.state.user
      if (user) {
        let userId = this.$store.state.user.id
        const { data: product } = await axios.post(`DeleteCart/user/${userId}/product/${productId}`)
        if (product.status) {
          this.alerts = product.msg
          this.cartItems = product.cartItems
          Swal.fire('Success!', this.alerts, 'success');
        } else {
          Swal.fire('Warning!', 'Could not connect server', 'warning');
        }
      }
    },
    async CreateOrder() {
      let user = this.$store.state.user
      if (!user) {
        Swal.fire('Warning!', 'You Are Not Logged In', 'warning');
      } else {
        // let {data:CreatedOrder} =await axios.post('createOrder')
        Swal.fire('Warning!', 'Technical error', 'warning');
      }
    }
  }
}
</script>

<template>
  <section class=" my-5">
    <div class=" container">
      <div class="row">
        <CartGrid :cartItem="cartItems" v-on:removeFromCart="removeCartItem($event)" v-if="cartItems.length > 0" />
        <div v-else class="emptyDiv shadow">
          <p class="p-5">Cart Is Empty<span class="fa fa-warning"></span></p>
        </div>
        <div class="col-lg-3 mt-3">
          <Coupon />
          <div class="card shadow-0 border">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <p class="mb-2">Total price:</p>
                <p class="mb-2">Rs:- {{ totalPrice }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-2">Discount:</p>
                <p class="mb-2 text-success">Rs:- -60.00</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-2">TAX:</p>
                <p class="mb-2">Rs:- 14.00</p>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <p class="mb-2">Total price:</p>
                <p class="mb-2 fw-bold">RS:- {{ totalPrice }} </p>
              </div>
              <div class="mt-3">
                <a class="btn btn-warning w-100 shadow-0 mb-2" @click="CreateOrder"> Make Purchase </a>
                <router-link to="/home" id="home" class="btn btn-light w-100 border mt-2"> Back to home </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- summary -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.emptyDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  margin-left: 20%;
  font-size: 20px;
  color: rgb(211, 77, 77);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>