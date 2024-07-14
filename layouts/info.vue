<template>
  <div class="d-flex app align-items-center justify-content-center">
    <div class="main-content">
      <Header></Header>
      <div id="content" ref="content">
        <div class="container mb-4 text-center text-white" style="margin-top: 80px">
          <Nuxt />
        </div>

      </div>
      <Footer></Footer>
    </div>
    <fullscreen-modal> </fullscreen-modal>
    <div class="modal"></div>
  </div>
</template>

<script>
import Footer from '../components/apps/footer.vue'
import Header from '../components/apps/headerInfo'

export default {
  name: "info",
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>

</style>
