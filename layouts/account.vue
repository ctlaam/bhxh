<template>
  <div class="account-content">
    <Nuxt />
    <!-- <fullscreen-modal> </fullscreen-modal> -->
    <script id="chatway" async="true" src="https://cdn.chatway.app/widget.js?id=ccDOAoV7M2zs"></script>
  </div>
</template>
<script>
// import FullscreenModal from '../components/apps/FullscreenModal.vue'
export default {
  components: {
    // FullscreenModal,
  },
}
</script>

<style scoped>
.account-content {
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  transition: all 0.7s, z-index 0s;
  overflow-x: auto;
  overflow-y: hidden;
  background: url(../assets/crescent-mall-quan-7-1712070085.jpg) no-repeat
    center center fixed;
  background-size: cover;
}
</style>
