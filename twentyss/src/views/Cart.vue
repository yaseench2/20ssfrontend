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
      userData:{},
      Purchase_Details: {
        user_Id: "",
        product_Data: [],
        whatsappNo:"",
        email:"",
        username:"",
        place:"",
        pincode:"",
        total_Price:""
      },
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
      this.userData=user
      this.Purchase_Details.user_Id=this.userData.id
      this.Purchase_Details.product_Data=this.cartItems
      this.Purchase_Details.whatsappNo=this.userData.contactNum
      this.Purchase_Details.email=this.userData.email
      this.Purchase_Details.username=this.userData.username
      this.Purchase_Details.pincode=this.userData.pinCode
      this.Purchase_Details.place=this.userData.place
      this.Purchase_Details.total_Price=this.totalPrice
    } else {
      this.userData=""
      Swal.fire('warning!', 'Please donot refresh after Login !', 'warning');
      await axios.post('LogoutUser')
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
    },
    discount(){
      return this.cartItems.reduce((sum,item)=>sum + Number(item.cutPrice),0)
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
        await axios.post('purchase_Order',this.Purchase_Details)
        .then((data) => {
				this.alerts=data.data.msg
				if (data.data.status) {
					Swal.fire('Success!',this.alerts, 'success');
						this.cartItems=data.data.cartItems
					}else{
						Swal.fire('Warning!','Technical Error Please Try after SomeTime','warning');
					}
				}).catch((e) => {
					console.log(e);
					Swal.fire('Error!', 'Data Collapsed/Could not connect server', 'error');
				})
      }
    },
  },
}
</script>

<template>
  <section class=" my-5">
    <div class=" container">
      <div class="row">
        <CartGrid :cartItem="cartItems" v-on:removeFromCart="removeCartItem($event)" v-if="cartItems.length > 0" />
        <div class="col-lg-3 mt-3">
          <Coupon />
          <div class="card shadow-0 border">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <p class="mb-2">Total price:</p>
                <p class="mb-2 text-success">Rs:- {{ totalPrice }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-2">Discount:</p>
                <p class="mb-2 text-warning">Rs:- {{ discount - totalPrice }}</p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="mb-2">Gst:</p>
                <p class="mb-2">Rs:- 0.00</p>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <p class="mb-2">Total price:</p>
                <p class="mb-2 fw-bold">RS:- {{ totalPrice }} </p>
              </div>
              <div class="mt-3">
                <form class="form-group"  @submit.prevent="CreateOrder" name="tab-tracker-form" autocomplete="off">
                  <button type="submit" class="btn btn-dark w-100 shadow-0 mb-2" v-if="cartItems.length!=0"> Make Purchase </button>
                  <button type="button" class="btn btn-warning w-100 shadow-0 mb-2" v-else> Cart Is Empty </button>
                </form>
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
.btn{
  border-radius: 2.10rem
}
</style>