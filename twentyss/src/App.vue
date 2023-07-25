<script>
import Navbar from '../src/components/partials/Navbar.vue';
import Sidebar from '../src/components/partials/Sidebar.vue'
import Foooter from '../src/components/partials/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar, Sidebar, Foooter
  },
  async created() {
    window.onbeforeunload =function () {
      return 'Are you really want to perform the action?';
    }
  }
}
</script>
<template>
  <Navbar />
  <div class="row">
    <div class="col-md-2">
      <Sidebar />
    </div>
    <div class="col-md-10">
      <main>
        <router-view />
      </main>
      <Foooter />
    </div>
  </div>
</template>
