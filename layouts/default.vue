<template>
  <div class="d-flex app align-items-center justify-content-center">
    <div class="main-content">
      <Header :activeHeader="activeHeader"></Header>
      <div id="content" ref="content">
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
    Header,
  },
  data() {
    return {
      activeHeader: false,
    }
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
    console.log('Component mounted')
    this.$refs.content.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    this.$refs.content.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss">
.app {
}
.main-content {
  background-color: #fdfbef;
  max-width: 480px;
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
  background: url('~/assets/beach-phone.webp') no-repeat;
  height: 100vh;
}
#content::-webkit-scrollbar {
  width: 0;
  height: 0;
}

#content {
  scrollbar-width: none; /* Ẩn thanh cuộn */
}

#content {
  -ms-overflow-style: none; /* Ẩn thanh cuộn */
}

// @media only screen and (max-width: 1024px) {
//   .main-content {
//     padding: 2em 2em;
//   }
// }
</style>
