<template>
  <header
    class="header col-md-offset-4 col-lg-offset-4col-xl-offset-4"
    :class="{ active: activeHeader }"
    style="max-width: 30rem"
  >
    <div class="row">
      <div class="text-left col align-self-center">
        <a class="navbar-brand" href="#"
          ><h5 class="mb-0 ml-2">
            <img
              src="~/assets/logoviettelpost.png"
              style="width: 100px; margin-left: 10px"
            />
          </h5>
        </a>
      </div>
      <div class="ml-auto col-auto pl-0">
        <div class="d-flex group-buttons">
          <div class="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path
                d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"
              />
            </svg>
            Thông báo
          </div>
          <div class="button" @click="chamsockhachhang">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#ffffff"
            >
              <path
                d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z"
              />
            </svg>
            Hỗ trợ
          </div>
        </div>
        <!--<a href="/index/my/index" class="avatar avatar-30 shadow-sm rounded-circle ml-2 text-white">-->
        <!--    <i class="material-icons">account_circle</i>--><!--</a>-->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['activeHeader'],
  data() {
    return {
      active: false,
    }
  },
  methods: {
    chamsockhachhang() {
      let chat = document.querySelector('.launcher-icon.launcher-minimize-icon')
      if (chat) {
        chat.click()
      }
    },
    handleScroll() {
      // Get the scroll position
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop
      // You can add your logic here based on the scroll position
      if (scrollPosition > 100) {
        // Do something when scrolled more than 100 pixels
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss">
.header {
  padding: 10px 15px;
  position: fixed;
  /*left: 0;*/
  top: 0;
  width: 100%;
  z-index: 99;
  background: transparent;
  border-radius: 0;
  .group-buttons {
    .button {
      color: #ffffff;
      margin-right: 15px;
      font-size: 14px;
    }
  }
}

.header .btn-link {
  color: #ffffff;
}

.header .navbar-brand {
  line-height: 30px;
  color: #ffffff;
  margin-right: 0;
}

.header.active {
  background: #fff;
  .button {
    color: #ed1b2f;
    svg {
      fill: #ed1b2f;
    }
  }
}

.material-icons {
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
</style>
