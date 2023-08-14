<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { useStore } from 'vuex'
export default {
    name: "SidebarNew",
    data() {
        return {
            alert: {},
            userId: {},
            UserName: {}
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
                        this.UserName = " "
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
                let userId = user.id
                this.$router.push(`/cart/user/${userId}`)
                user = ""
            } else {
                Swal.fire('warning!', 'You are Not Logged In !', 'warning');
            }
        },
        ChangeTogg(){
            const icon = document.getElementById('ChangeToBtn');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-remove');
                icon.style.color='red'
            } else {
                icon.classList.remove('fa-remove');
                icon.classList.add('fa-bars');
                icon.style.color='black'
            }
        }
        
    },
    created() {
        let user = this.$store.state.user
        if (user) {
            this.UserName = user.username
        } else {
            this.UserName = " "
        }
        $(function () {
            // Sidebar toggle behavior
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar, #content').toggleClass('active');
            });
        });
    }
}
</script>
<template>
    <div class="vertical-nav bg-white" id="sidebar">
        <p class="text-gray font-weight-bold text-uppercase px-1 smallmb-0 mt-5"
            style="font-family: 'Leckerli One', cursive;">Twentyss</p>
        <ul class="nav flex-column bg-white mb-0">
            <li class="nav-item" for="home">
                <router-link to="/home" id="home" class="text-decoration-none">
                    <a class="nav-link text-dark font-italic bg-light">
                        <i class="fa fa-th-large mr-3 text-dark fa-fw"></i>
                        Home
                    </a>
                </router-link>
            </li>
            <li class="nav-item" v-if="$store.state.isLoggedIn">
                <router-link to="/profile" id="profile" class="text-decoration-none">
                    <a class="nav-link text-dark font-italic">
                        <i class="fa fa-address-card mr-3 text-dark fa-fw"></i>
                        {{ UserName }} Profile
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="" @click="UserCart()" id="cart" class="text-decoration-none">
                    <a class="nav-link text-dark font-italic">
                        <i class="fa fa-shopping-cart mr-3 text-dark fa-fw"></i>
                        Shopping Cart
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/allGadgets" class="text-decoration-none">
                    <a href="#" class="nav-link text-dark font-italic">
                        <i class="fa fa-camera-retro mr-3 text-dark fa-fw"></i>
                        Gadgets
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/allDressess" class="text-decoration-none">
                    <a href="#" class="nav-link text-dark font-italic">
                        <i class="fa fa-female mr-3 text-dark fa-fw"></i>
                        Dresses
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/allSneakers" class="text-decoration-none">
                    <a href="#" class="nav-link text-dark font-italic">
                        <i class="fa fa-paw mr-3 text-dark fa-fw"></i>
                        Sneakers
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/allWatches" class="text-decoration-none">
                    <a href="#" class="nav-link text-dark font-italic">
                        <i class="fa fa-clock-o mr-3 text-dark fa-fw"></i>
                        Watches
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="" class="text-decoration-none">
                    <a href="#" class="nav-link text-dark font-italic">
                        <i class="fa fa fa-envelope mr-3 text-dark fa-fw"></i>
                        Web Updates
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="text-decoration-none">
                    <a href="#" class="nav-link text-dark font-italic">
                        <i class="fa fa fa fa-phone mr-3 text-dark fa-fw"></i>
                        About Us
                    </a>
                </router-link>
            </li>
        </ul>

        <p class="text-gray font-weight-bold text-uppercase px-3 small py-1 mb-0"
            style="font-family: 'Leckerli One', cursive;">Entry</p>

        <ul class="nav flex-column bg-white mb-0">
            <li class="nav-item" v-if="!$store.state.isLoggedIn">
                <router-link to="/register" class="text-decoration-none">
                    <a href="#" class="nav-link text-dark font-italic">
                        <i class="fa fa-sign-in mr-3 text-dark fa-fw"></i>
                        Register
                    </a>
                </router-link>
            </li>
            <li class="nav-item" v-if="!$store.state.isLoggedIn">
                <router-link to="/login" class="text-decoration-none">
                    <a href="#" class="nav-link text-dark font-italic">
                        <i class="fa fa-sign-out mr-3 text-dark fa-fw"></i>
                        Login
                    </a>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/login" class="text-decoration-none" @click="LogoutUser()">
                    <a href="#" class="nav-link text-dark font-italic">
                        <i class="fa fa-power-off mr-3 text-dark fa-fw"></i>
                        Log Out
                    </a>
                </router-link>
            </li>
        </ul>
    </div>
    <!-- End vertical navbar -->

    <div class="page-content" id="content">
        <button id="sidebarCollapse" type="button" class="btn btn-light bg-white rounded-pill shadow-sm mt-2 ml-2 "><i id="ChangeToBtn" @click="ChangeTogg" class="fa fa-bars mr-auto ml-auto"></i></button>
    </div>
</template>
<style scoped>
#sidebarCollapse {
    display: none;
}

.vertical-nav {
    min-width: 13rem;
    width: 13.5rem;
    height: 100vh;
    z-index: 3;
    position: fixed;
    left: 0;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.4s;
}

#sidebar.active {
    margin-left: -17rem;
}

#content.active {
    width: 100%;
    margin: 0;
    transition: all 0.4s;
}

@media (max-width: 768px) {
    #sidebar {
        margin-left: -17rem;
    }

    #sidebar.active {
        margin-left: 0;
    }

    #content {
        width: 100%;
        margin: 0;
    }

    #sidebarCollapse {
        display: block;
        z-index: 2;
        position: fixed;
    }

    #content.active {
        margin-left: 14rem;
        width: calc(100% - 17rem);
        transition: all 0.4s;
    }
}
</style>