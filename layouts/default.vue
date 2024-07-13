<template>
  <div class="d-flex app align-items-center justify-content-center">
    <div class="main-content">
      <Header></Header>
      <div id="content">
        <Nuxt />
      </div>
      <Footer></Footer>
    </div>
    <fullscreen-modal> </fullscreen-modal>
    <div class="modal"></div>
  </div>
</template>

<script>
import Footer from '../components/apps/footer.vue'
import Header from '../components/apps/header.vue'

export default {
  components: {
    Footer,
    FullscreenModal,
    Header,
  },
  methods: {},
}
</script>

<style lang="scss">
.app {
}
.main-content {
  background-color: #fdfbef;
  max-width: 400px;
  color: #000;
  position: relative;
  width: 100vw;
  overflow-x: hidden;
}
#content {
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #e5e5e5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #e5e5e5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #888888;
  }
}

// @media only screen and (max-width: 1024px) {
//   .main-content {
//     padding: 2em 2em;
//   }
// }
</style>
