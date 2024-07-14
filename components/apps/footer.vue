<template>
  <div class="footer col-md-offset-4 col-lg-offset-4col-xl-offset-4" style="max-width: 480px">
    <div class="row no-gutters justify-content-center">
      <div class="col-3" >
        <nuxt-link to="/" class="mui-tab-item1">
          <a-icon class="home" theme="filled" type="home"/>
          <p>Trang Chủ</p>
        </nuxt-link>
      </div>
      <div class="col-3">
        <a href="/index/rot_order/index.html?cid=1" class="mui-tab-item1">
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24"
               width="24">
            <rect fill="none" height="24" width="24"/>
            <path
              fill="#999999"
              d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"/>
          </svg>
          <p>Tour</p>
        </a>
      </div>
      <div class="col-3">
        <nuxt-link to="/wallet" class="mui-tab-item1">
        <a-icon class="home" theme="filled" type="wallet"/>
        <p>Ví Tiền</p>
      </nuxt-link>
      </div>
      <div class="col-3"><a href="/my" class="mui-tab-item1 active">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#999999">
          <path
            d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
        </svg>
        <p>Hỗ Trợ</p></a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home'
    }
  }
}
</script>

<style lang="css">
.main.has-footer {
  padding-bottom: 85px;
}

/* 8. main container */
.footer {
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
  padding: 10px 15px;
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
  font-size: 9px;
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
.mui-tab-item1  p{
  margin-bottom: 0;
}
</style>
