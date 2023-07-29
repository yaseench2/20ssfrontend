<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { useStore } from 'vuex'
export default {
  name: "Sidebar",
  data() {
    return {
      alert: {},
      userId: {},
    }
  },
  methods: {
    async LogoutUser() {
        await axios.post('LogoutUser')
          .then((data) => {
            this.alerts = data.data.msg
            if (data.data.status) {
              this.$store.dispatch('setUntoken')
              Swal.fire('Success!', this.alerts, 'success');
              setTimeout(() => {
                this.$router.push('/login');
              }, 1000);
            } else {
              Swal.fire('warning!', this.alerts, 'warning');
              setTimeout(() => {
                this.$router.push('/');
              }, 1000);
            }
          }).catch((e) => {
            Swal.fire('Error!', 'Couid not connect server', 'error');
            setTimeout(() => {
              this.$router.push('/login');
            }, 1000);
          })
    },
    async UserCart() {
      let user = this.$store.state.user
      if (user) {
        let userId = this.$store.state.user.id
        this.$router.push(`/cart/user/${userId}`)
        user = ""
      } else {
        Swal.fire('warning!', 'You are Not Logged In !', 'warning');
      }
    }
  }
}
</script>

<template>
  <section class="sidebar">
    <ul class="sidebar-menu shadow">
      <li class="sidebar-header">20ss</li>
      <li>
        <router-link to="/home" id="home">
          <i class="fa fa-home"></i> <span>Home</span>
        </router-link>
      </li>
      <li v-if="$store.state.isLoggedIn">
        <router-link to="/profile" id="profile">
          <i class="fa fa-user"></i> <span>Profile</span>
        </router-link>
      </li>
      <li>
        <router-link to="" @click="UserCart()" id="cart">
          <i class="fa fa-shopping-cart"></i>
          <span>Cart</span>
        </router-link>
      </li>
      <li>
        <router-link to="/allGadgets" id="gadegt">
          <i class="fa fa-camera-retro"></i>
          <span>Gadgets</span>
        </router-link>
      </li>
      <li>
        <router-link to="/allDressess" id="Dress">
          <i class="fa fa-female"></i> <span>Dress</span>
        </router-link>
      </li>
      <li>
        <router-link to="/allSneakers" id="Sneakers">
          <i class="fa fa-paw"></i> <span>Sneakers</span>
        </router-link>
      </li>
      <li>

        <router-link to="/allWatches" id="Wacthes">
          <i class="fa fa-clock-o"></i> <span>Watches</span>
        </router-link>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-envelope"></i> <span>Web Updates</span>
          <small class="label pull-right text-warning">12</small>
        </a>
      </li>
      <li><a href="#"><i class="fa fa-truck"></i> <span>Delivery Tracking</span></a></li>

      <li class="sidebar-header">Join</li>

      <li v-if="!$store.state.isLoggedIn"><router-link to="/register" id="register"><i
            class="fa fa-sign-in"></i><span>Register</span></router-link></li>
      <li v-if="!$store.state.isLoggedIn"><router-link to="/login" id="login"><i class="fa fa-sign-out"></i> <span>Log
            In</span></router-link></li>

      <li><router-link to="" id="logout" @click="LogoutUser()"><i class="fa fa-power-off"></i>
          <span>LogOut</span></router-link></li>
    </ul>
  </section>
</template>

<style scoped>
.sidebar {
  height: 100%;
  width: 17%;
  position: fixed;
  z-index: 2;
  top: 0%;
  left: 0;
  overflow-x: hidden;
  transition: 0.5s;
}

.sidebar-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #222d32;
}

.sidebar-menu>li {
  position: relative;
  margin: 0;
  padding: 0;
}

.sidebar-menu>li>a {
  padding: 12px 5px 12px 15px;
  text-decoration: none;
  display: block;
  border-left: 3px solid transparent;
  color: #b8c7ce;
}

.sidebar-menu>li>a>.fa {
  width: 20px;
}

.sidebar-menu>li:hover>a,
.sidebar-menu>li.active>a {
  color: #fff;
  background: #1e282c;
  border-left-color: #3c8dbc;
}

.sidebar-menu>li .label,
.sidebar-menu>li .badge {
  margin-top: 3px;
  margin-right: 5px;
}

.sidebar-menu li.sidebar-header {
  text-align: center;
  font-family: 'Leckerli One', cursive;
  padding: 10px 25px 10px 15px;
  font-size: 12px;
  color: #ffffff;
  background: #1a2226;
}

.sidebar-menu li>a>.fa-angle-left {
  width: auto;
  height: auto;
  padding: 0;
  margin-right: 10px;
  margin-top: 3px;
}

.sidebar-menu li.active>a>.fa-angle-left {
  transform: rotate(-90deg);
}

.sidebar-menu li.active>.sidebar-submenu {
  display: block;
}

.sidebar-menu a {
  color: #b8c7ce;
  text-decoration: none;
}


.sidebar-menu .sidebar-submenu .sidebar-submenu {
  padding-left: 20px;
}

.sidebar-menu .sidebar-submenu>li>a {
  padding: 5px 5px 5px 15px;
  display: block;
  font-size: 14px;
  color: #8aa4af;
}

.sidebar-menu .sidebar-submenu>li>a>.fa {
  width: 20px;
}

.sidebar-menu .sidebar-submenu>li>a>.fa-angle-left,
.sidebar-menu .sidebar-submenu>li>a>.fa-angle-down {
  width: auto;
}

.sidebar-menu .sidebar-submenu>li.active>a,
.sidebar-menu .sidebar-submenu>li>a:hover {
  color: #fff;
}

.sidebar-menu-rtl {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #222d32;
}

.sidebar-menu-rtl>li {
  position: relative;
  margin: 0;
  padding: 0;
}

.sidebar-menu-rtl>li>a {
  padding: 12px 15px 12px 5px;
  display: block;
  border-left: 3px solid transparent;
  color: #b8c7ce;
}

.sidebar-menu-rtl>li>a>.fa {
  width: 20px;
}

.sidebar-menu-rtl>li:hover>a,
.sidebar-menu-rtl>li.active>a {
  color: #fff;
  background: #1e282c;
  border-left-color: #3c8dbc;
}

.sidebar-menu-rtl>li .label,
.sidebar-menu-rtl>li .badge {
  margin-top: 3px;
  margin-right: 5px;
}

.sidebar-menu-rtl li.sidebar-header {
  padding: 10px 15px 10px 25px;
  font-size: 12px;
  color: #4b646f;
  background: #1a2226;
}

.sidebar-menu-rtl li>a>.fa-angle-left {
  width: auto;
  height: auto;
  padding: 0;
  margin-right: 10px;
  margin-top: 3px;
}

.sidebar-menu-rtl li.active>a>.fa-angle-left {
  transform: rotate(-90deg);
}

.sidebar-menu-rtl li.active>.sidebar-submenu {
  display: block;
}

.sidebar-menu-rtl a {
  color: #b8c7ce;
  text-decoration: none;
}

.sidebar-menu-rtl .sidebar-submenu {
  display: none;
  list-style: none;
  padding-right: 5px;
  margin: 0 1px;
  background: #2c3b41;
}

.sidebar-menu-rtl .sidebar-submenu .sidebar-submenu {
  padding-right: 20px;
}

.sidebar-menu-rtl .sidebar-submenu>li>a {
  padding: 5px 15px 5px 5px;
  display: block;
  font-size: 14px;
  color: #8aa4af;
}

.sidebar-menu-rtl .sidebar-submenu>li>a>.fa {
  width: 20px;
}

.sidebar-menu-rtl .sidebar-submenu>li>a>.fa-angle-left,
.sidebar-menu-rtl .sidebar-submenu>li>a>.fa-angle-down {
  width: auto;
}

.sidebar-menu-rtl .sidebar-submenu>li.active>a,
.sidebar-menu-rtl .sidebar-submenu>li>a:hover {
  color: #fff;
}

@media screen and (max-width: 620px) {
  span {
    display: none;
  }


  .sidebar-menu>li .label,
  .sidebar-menu>li .badge {
    display: none;
  }

  .sidebar {
    top: 5%;
    border-radius: 0px 20px;
    width: 13%;
  }

  i {
    color: rgb(255, 255, 255);
  }
}</style>