<template>
  <div class="d-flex app align-items-center justify-content-center">
    <div class="main-content">
      <Header :activeHeader="activeHeader"></Header>
      <div id="content" ref="content">
        <Nuxt />
      </div>
      <script
        id="chatway"
        async="true"
        src="https://cdn.chatway.app/widget.js?id=Vmqw286gYXqa"
      ></script>
      <Footer></Footer>
    </div>
    <FullScreenModal> </FullScreenModal>
    <div class="modal"></div>
  </div>
</template>

<script>
import * as volatilityApi from '../api/volatility.js'
import Footer from '../components/apps/footer.vue'
import FullScreenModal from '../components/apps/FullScreenModal.vue'
import Header from '../components/apps/header.vue'
export default {
  components: {
    Footer,
    Header,
    FullScreenModal,
  },
  data() {
    return {
      activeHeader: false,
    }
  },
  methods: {
    handleScroll() {
      const scrollPosition = this.$refs.content.scrollTop
      if (scrollPosition > 50) {
        this.activeHeader = true
      } else if (scrollPosition == 0) {
        this.activeHeader = false
      }
    },
  },
  async mounted() {
    this.$store.dispatch('loading/setModalLoading', true)
    const currentURL = window.location.href
    this.$refs.content.addEventListener('scroll', this.handleScroll)
    await volatilityApi
      .getProfileUser()
      .then(async (res) => {
        let profile = res.data
        this.$store.dispatch('profile/saveProfile', profile)
        await volatilityApi.getListVips(profile.level).then((data) => {
          this.$store.dispatch('profile/saveVip', data.data)
        })
      })
      .catch((err) => {
        console.log(this.$router.current?.name)
        if (
          err == 'Phiên đăng nhập đã hết hạn' &&
          currentURL != 'https://vietnamtour.pro/' &&
          currentURL != 'https://vietnamtour.pro/login/' &&
          currentURL != 'https://vietnamtour.pro/login/signup/'
        ) {
          this.$router.push('/login')
        }
      })
      setTimeout(() => {
        this.$store.dispatch('loading/setModalLoading', false)
      }, 1500)

  },
  watch: {
    $route(to, from) {
      volatilityApi
        .getProfileUser()
        .then(async (res) => {
          let profile = res.data
          this.$store.dispatch('profile/saveProfile', profile)
          await volatilityApi.getListVips(profile.level).then((data) => {
            this.$store.dispatch('profile/saveVip', data.data)
          })
        })
        .catch((err) => {
          if (
            err == 'Phiên đăng nhập đã hết hạn' &&
            currentURL != 'https://vietnamtour.pro/' &&
            currentURL != 'https://vietnamtour.pro/login/' &&
            currentURL != 'https://vietnamtour.pro/login/signup/'
          ) {
            this.$router.push('/login')
            return
          }
        })
    },
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
#content div::-webkit-scrollbar {
  width: 0;
  height: 0;
}

#content .profile {
  scrollbar-width: none; /* Ẩn thanh cuộn */
  overflow-y: auto;
  height: 900px;
  padding-bottom: 50px;
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
