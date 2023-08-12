<script>
import Navbar from '../src/components/partials/Navbar.vue';
import Sidebar from '../src/components/partials/SidebarNew.vue'
import Foooter from '../src/components/partials/Footer.vue'
import Social from './components/partials/Social.vue';
export default {
  name: 'App',
  components: {
    Navbar, Sidebar, Foooter,Social
  },
  async created() {
    window.onbeforeunload =function () {
      return 'Are you really want to perform the action?';
    }
  }
}
</script>
<template>
  <div class="row">
    <div class="col-md-2">
      <Sidebar />
    </div>
    <div class="col-md-10">
      <Navbar />
      <main>
        <router-view />
      </main>
      <Foooter />
    </div>
  </div>
  <Social/>
</template>
