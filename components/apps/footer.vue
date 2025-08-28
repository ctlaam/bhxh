<template>
  <div
    class="footer col-md-offset-4 col-lg-offset-4 col-xl-offset-4"
  >
    <div class="row no-gutters justify-content-center">
      <!-- Tin nhắn -->
      <div class="col">
        <nuxt-link
          to="/mess"
          exact
          active-class="active"
          class="mui-tab-item1 item-footer"
        >
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path
                d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Z"
              />
            </svg>
          </div>
          <p>Tin nhắn</p>
        </nuxt-link>
      </div>

      <!-- Sổ địa chỉ -->
      <div class="col">
        <NuxtLink
          to="/address"
          exact
          active-class="active"
          class="mui-tab-item1"
        >
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path
                d="M200-246q54-53 125.5-83.5T480-360q83 0 154.5 30.5T760-246v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm69-80h422q-44-39-99.5-59.5T480-280q-56 0-112.5 20.5T269-200Zm211-320q-25 0-42.5-17.5T420-580q0-25 17.5-42.5T480-640q25 0 42.5 17.5T540-580q0 25-17.5 42.5T480-520Zm0 17Z"
              />
            </svg>
          </div>
          <p>Sổ địa chỉ</p>
        </NuxtLink>
      </div>

      <!-- Go!vietnam - Bouton central rouge -->
      <div class="col center-button-wrapper">
        <nuxt-link to="/game" class="mui-tab-item1 central-red-button">
          <div class="red-circle">
            <span class="go-text">Go!</span>
            <span class="vietnam-text">vietnam</span>
          </div>
        </nuxt-link>
      </div>

      <!-- Của tôi -->
      <div class="col">
        <NuxtLink
          to="/my"
          exact
          active-class="active"
          class="mui-tab-item1 item-footer"
        >
          <div class="icon-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path
                d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"
              />
            </svg>
          </div>
          <p>Của tôi</p>
        </NuxtLink>
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
    chamsockhachhang($event) {
      let chat = document.querySelector('.launcher-icon.launcher-minimize-icon')
      if (chat) {
        chat.click()
      }
    },
    keyRender() {
      this.$store.commit('profile/setKey', null)
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

.footer {
  background: #fff;
  z-index: 9;
  padding: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 99;
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #f0f0f0;
}

.center-button-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Bouton central rouge Go!vietnam */
.central-red-button {
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
}

.red-circle {
  width: 50px;
  height: 50px;
  background: #ff4444;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(255, 68, 68, 0.3);
  transition: all 0.3s ease;
}

.red-circle:hover {
  background: #ff3333;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(255, 68, 68, 0.4);
}

.go-text {
  font-size: 12px;
  line-height: 1;
  margin-bottom: -2px;
}

.vietnam-text {
  font-size: 8px;
  line-height: 1;
}

/* Icônes circulaires normales */
.icon-circle {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 8px auto;
  transition: all 0.3s ease;
}

.icon-circle:hover {
  background: #e0e0e0;
  transform: scale(1.05);
}

/* Styles des liens */
.footer a:not(.btn) {
  padding: 10px 0px;
  text-align: center;
  color: #666666;
  display: block;
  text-decoration: none;
}

.footer a:not(.btn) p {
  font-size: 12px;
  margin: 0;
  color: #666666;
}

.footer a:not(.btn).active .icon-circle {
  background: #ff4444;
}

.footer a:not(.btn).active .icon-circle svg {
  fill: white;
}

.footer a:not(.btn).active p {
  color: #ff4444;
  font-weight: 500;
}

/* Alignement des éléments */
.mui-tab-item1 {
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 70px;
}

.mui-tab-item1 p {
  margin-bottom: 0;
}

/* Slot vide */
.empty-slot {
  height: 70px;
}

/* Responsive */
@media (max-width: 480px) {
  .footer {
    padding: 10px;
  }

  .icon-circle {
    width: 35px;
    height: 35px;
  }

  .red-circle {
    width: 45px;
    height: 45px;
  }

  .footer a:not(.btn) p {
    font-size: 11px;
  }
}
</style>
