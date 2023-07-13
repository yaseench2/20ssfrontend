<script>
import Navbar from '../src/components/partials/Navbar.vue';
import Sidebar from '../src/components/partials/Sidebar.vue'
import Foooter from '../src/components/partials/Footer.vue'
export default{
  name:'App',
  components:{
    Navbar,Sidebar,Foooter
  }
}
</script>
<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-10">
      <Navbar/>
      <Sidebar/>
      <main>
        <router-view />
      </main>
      <Foooter/>
    </div>
  </div>
</template>
