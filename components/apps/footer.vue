<template>
  <div
    class="footer col-md-offset-4 col-lg-offset-4col-xl-offset-4"
    style="max-width: 480px"
  >
    <div class="row no-gutters justify-content-center">
      <div class="col" @click="keyRender">
        <nuxt-link
          to="/"
          exact
          active-class="active"
          class="mui-tab-item1 item-footer"
        >
          <a-icon class="home" theme="filled" type="home" />
          <p>Trang Chủ</p>
        </nuxt-link>
      </div>
      <div class="col">
        <NuxtLink
          to="/order?title=Lịch sử"
          exact
          active-class="active"
          class="mui-tab-item1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#909090"
          >
            <path
              d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"
            />
          </svg>
          <p>Lịch sử</p>
        </NuxtLink>
      </div>
      <div class="col">
        <NuxtLink to="/trip" exact active-class="active" class="mui-tab-item1">
          <img
            src="../../assets/crescentmall.png"
            alt=""
            width="40px"
            style="border-radius: 50%; border: 1px solid #eee; padding: 5px;
            background: cornflowerblue"
          />
        </NuxtLink>
      </div>
      <div class="col" >
        <NuxtLink
          to="#"
          @click.native.prevent="chamsockhachhang"
          active-class="active"
          class="mui-tab-item1"
        >
          <a-icon class="home" type="message" theme="filled" />
          <p>Hỗ trợ</p>
        </NuxtLink>
      </div>
      <div class="col">
        <NuxtLink
          to="/my"
          exact
          active-class="active"
          class="mui-tab-item1 item-footer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#999999"
          >
            <path
              d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"
            />
          </svg>
          <p>Tài khoản</p></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home',
    }
  },
  methods: {
    chamsockhachhang($event){
      let chat = document.querySelector(".launcher-icon.launcher-minimize-icon");
      if (chat) {
        chat.click();
      }
    },
    keyRender() {
      console.log('alo')
      this.$store.commit('profile/setKey', null)
      console.log(this.$store.state)
    },
  },
}
</script>

<style lang="css">
.row .col {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-top: var(--bs-gutter-y);
}
.main.has-footer {
  padding-bottom: 85px;
}

/* 8. main container */
.footer {
  background: #fff;
  z-index: 9;
  padding: 0 15px;
  border-radius: 20px 20px 0 0;
  position: fixed;
  bottom: -1px;
  /*left: 0;*/
  width: 100%;
  z-index: 99;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 -3px 7px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0 -3px 7px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 -3px 7px rgba(0, 0, 0, 0.15);
  -ms-box-shadow: 0 -3px 7px rgba(0, 0, 0, 0.15);
  /*
    -webkit-backdrop-filter: saturate(125%) blur(10px);
    -moz-backdrop-filter: saturate(125%) blur(10px);
    -ms-backdrop-filter: saturate(125%) blur(10px);
    backdrop-filter: saturate(125%) blur(10px);*/
}

.footer a:not(.btn) {
  padding: 10px 0px;
  text-align: center;
  color: #999999;
  display: block;
  text-decoration: none;
  border-top: 4px solid transparent;
}

.footer a:not(.btn) i,
.footer a:not(.btn) span {
  width: 24px;
  height: 24px;
  text-align: center;
  margin-bottom: 15px;
  display: block;
  margin: 0 auto;
  overflow: hidden;
}

.footer a:not(.btn) p {
  font-size: 13px;
}

.footer a:not(.btn).active {
  color: #25a0fe;
  border-color: #25a0fe;
}

.footer a:not(.btn).active i,
.footer a:not(.btn).active span {
  color: #25a0fe;
}

.footer.no-bg-shadow {
  background: none;
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
}

.home {
  font-size: 20px;
}
.mui-tab-item1 p {
  margin-bottom: 0;
  color: #000;
}
a.mui-tab-item1.nuxt-link-exact-active.nuxt-link-active {
  border-color: #25a0fe;
  color: #25a0fe;
}
</style>
