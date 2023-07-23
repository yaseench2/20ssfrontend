<script>
import Gadgets from './Gadgets.vue'
import Dress from './Dress.vue'
import Banner from './Banner.vue'
import Sneakers from './Sneakers.vue'
import Watches from './Watches.vue'
export default {
  name: 'ProductList',
  props: ['products','Dresses','product','Gadgets','Watches','Sneakers','banner','bannerImage'],  
  components: {
    Gadgets, Dress, Banner, Sneakers, Watches
  },

}

</script>

<template>
  <div class="row pt-3">
      <div class="col-md-6 col-7">
        <div class="section-title text-light">
            <h3>Gadgets</h3>
        </div>
      </div>
      <div class="col-md-6 col-5">
        <div class="l-more">
          <router-link to="/allGadgets" id="gadegt">
            <a >
                See More<i class="fa fa-angle-right"></i>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  <div class="container ">
    <div class="row">
      <Gadgets v-for="product in Gadgets" :key="product.id" :product="product" />
    </div>
  </div>

  <div class="row pt-3">
      <div class="col-md-6 col-7">
        <div class="section-title text-light">
            <h3>Dress</h3>
        </div>
      </div>
      <div class="col-md-6 col-5">
        <div class="l-more">
          <router-link to="/allDressess" id="Dress">
                See More<i class="fa fa-angle-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  <div class="container ">
    <div class="row">
      <Dress v-for="product in Dresses" :key="product.id" :product="product" />
    </div>
  </div>

  <Banner v-for="bannerImage in banner" :key="bannerImage.id" :bannerImage="banner"/>

  <div class="row pt-3">
      <div class="col-md-6 col-7">
        <div class="section-title text-light">
            <h3>Watch</h3>
        </div>
      </div>
      <div class="col-md-6 col-5">
        <div class="l-more">
          <router-link to="/allWatches" id="Wacthes">
                See More<i class="fa fa-angle-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  <div class="container ">
    <div class="row">
      <Watches v-for="product in Watches" :key="product.id" :product="product" />
    </div>
  </div>

  <div class="row pt-3">
      <div class="col-md-6 col-7">
        <div class="section-title text-light">
            <h3>Sneakers</h3>
        </div>
      </div>
      <div class="col-md-6 col-5">
        <div class="l-more">
          <router-link to="/allSneakers" id="Sneakers">
                See More<i class="fa fa-angle-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  <div class="container ">
    <div class="row">
      <Sneakers v-for="product in Sneakers" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped>
.container {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding-top: 10px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  text-align: center;
  transition: all .8s ease;
}
.l-more {
    position: absolute;
    right: 30px;
}

.l-more a {
    font-size: 14px;
    color: white;
    text-decoration: none;
}

.l-more a i {
    font-size: 14px;
    margin-left: 3px;
}
.section-title{
  margin-left: 25%;
}
</style>