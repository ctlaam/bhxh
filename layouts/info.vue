<template>
  <div class="d-flex app align-items-center justify-content-center">
    <div class="main-content">
      <Header :activeHeader="activeHeader"></Header>
      <div id="content" ref="content">
        <div
          class="container mb-4 text-center text-white"
          style=""
        >
          <Nuxt />
        </div>
      </div>
      <Footer></Footer>
    </div>
    <FullScreenModal> </FullScreenModal>
    <!-- <script
      id="chatway"
      async="true"
      src="https://cdn.chatway.app/widget.js?id=xhmDgdx6Q2M9"
    ></script> -->
    <div class="modal"></div>
  </div>
</template>

<script>
import Footer from '../components/apps/footer.vue'
import Header from '../components/apps/headerInfo'
import FullScreenModal from '../components/apps/FullScreenModal.vue'

export default {
  name: 'info',
  data() {
    return {
      activeHeader: false,
    }
  },
  components: {
    Header,
    Footer,
    FullScreenModal,
  },
  methods: {
    handleScroll() {
      // Lấy vị trí cuộn của phần tử "content"
      const scrollPosition = this.$refs.content.scrollTop

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
  },
}
</script>

<style scoped></style>
