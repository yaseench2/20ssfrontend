<script>
export default {
  name: 'WelcomeHome',
  props: ['products'],
}
</script>

<template>
  <div class="container ">
    <div class="row">
      <div class="col-md-4 col-4" v-for="x in products" :key="x.id">
        <div class="wrapper">
          <div class="banner-image shadow ">
            <router-link :to="'/product_details/' + x.id+ '/' +x.pName">
            <img :src="x.imageUrl" alt="">
          </router-link>
          </div>
          <h1></h1>
        </div>
        <div class="button-wrapper mb-4">
          <router-link :to="'/product_details/' + x.id+ '/' +x.pName">
            <button class="btn outline">DETAILS</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.25);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding-top: 10px;
  filter: drop-shadow(0 30px 10px rgba(0, 0, 0, 0.125));
  text-align: center;
  transition: all .8s ease;
}


img {
  object-position: center;
  object-fit: fill;
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.255);
  transition: all .8s ease;
}

h1 {
  color: rgba(255, 255, 255, 0.98);
  font-size: 2.4rem;
  padding-top: 10px;
}


.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;
  letter-spacing: 2px;
  cursor: pointer;
}

.btn+.btn {
  margin-left: 10px;
}

.outline {
  background: transparent;
  color: rgba(0, 212, 255, 0.9);
  border: 1px solid rgba(0, 212, 255, 0.6);
  transition: all .8s ease;

}

.outline:hover {
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all .8s ease;
}

.fill {
  background: rgba(0, 212, 255, 0.9);
  color: rgba(255, 255, 255, 0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all .3s ease;
}

.fill:hover {
  transform: scale(1.125);
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.125));
  transition: all .3s ease;
}
@media screen and (max-width: 620px) {
  img{
    height: 15vh;
  }
  .outline{
    display: none;
  }
  .btn{
    font-size: 10px;
  }
  h1{
    font-size: 1.4rem;
  }
}
</style>