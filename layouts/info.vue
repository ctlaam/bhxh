<template>
  <div class="d-flex app align-items-center justify-content-center">
    <div class="main-content">
      <Header :activeHeader="activeHeader"></Header>
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
  data() {
    return {
      activeHeader: false,
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    handleScroll() {
      // Lấy vị trí cuộn của phần tử "content"
      const scrollPosition = this.$refs.content.scrollTop
      console.log('Scroll position:', scrollPosition)

      // Thêm logic dựa trên vị trí cuộn
      if (scrollPosition > 50) {
        this.activeHeader = true
      } else if (scrollPosition == 0) {
        this.activeHeader = false
      }
    },
  },
  mounted() {
    this.$refs.content.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>

</style>
