<template>
  <header class="header col-md-offset-4 col-lg-offset-4col-xl-offset-4" :class="{active: activeHeader}" style="max-width:30rem;">
    <div class="row">
      <div class="text-left col align-self-center"><a class="navbar-brand" href="#"><h5 class="mb-0">
        <img src="~/assets/logo-top.png" style="width: 12.5rem;">
      </h5>
      </a>
      </div>
      <div class="ml-auto col-auto pl-0"><a href="/index/order/index" class=" btn btn-40 btn-link">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
          <path
            d="M320-280q17 0 28.5-11.5T360-320q0-17-11.5-28.5T320-360q-17 0-28.5 11.5T280-320q0 17 11.5 28.5T320-280Zm0-160q17 0 28.5-11.5T360-480q0-17-11.5-28.5T320-520q-17 0-28.5 11.5T280-480q0 17 11.5 28.5T320-440Zm0-160q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm120 320h240v-80H440v80Zm0-160h240v-80H440v80Zm0-160h240v-80H440v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
        </svg>
        <span class=""></span>
      </a>
        <!--<a href="/index/my/index" class="avatar avatar-30 shadow-sm rounded-circle ml-2 text-white">-->
        <!--    <i class="material-icons">account_circle</i>--><!--</a>--></div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["activeHeader"],
  data() {
    return {
      active: false,
    }
  },
  methods: {
    handleScroll() {
      // Get the scroll position
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      console.log('Scroll position:', scrollPosition);
      // You can add your logic here based on the scroll position
      if (scrollPosition > 100) {
        console.log('Scrolled more than 100 pixels', scrollPosition);
        // Do something when scrolled more than 100 pixels
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="css">
.header {
  padding: 10px 15px;
  position: fixed;
  /*left: 0;*/
  top: 0;
  width: 100%;
  z-index: 99;
  background: transparent;
  border-radius: 0;
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
  background: rgb(19 120 198 / 95%);
}

.material-icons {
  font-family: 'Material Icons';
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
