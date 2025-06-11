<template>
  <header
    class="ant-layout-header"
    style="background-color: var(--primary-color)"
  >
    <div class="ant-row ant-row-space-between sc-clIzBv jeRdoU">
      <div class="ant-col ant-col-xs-24 ant-col-md-6">
        <img
          alt="logo"
          src="../../assets/img/logo_web.png"
          style="width: 22%; min-width: 120px"
        />
      </div>
      <div
        class="ant-col tool ant-col-xs-0 ant-col-md-18"
        style="display: flex; justify-content: flex-end"
      >
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
      color: #fff;
      margin-right: 15px;
      font-size: 14px;
    }
  }
}

.header .btn-link {
  color: #fff;
}

.header .navbar-brand {
  line-height: 30px;
  color: #ffffff;
  margin-right: 0;
}

.header.active {
  background: #001529;
  .button {
    color: #001529;
    svg {
      fill: #001529;
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
