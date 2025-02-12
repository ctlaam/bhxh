<template>
  <div id="index-page">
    <main class="flex-shrink-0 main has-footer">
      <div class="head-top">
        <div class="swipper">
          <div class="scroll-container">
            <div class="scroll-content">
              <div class="image-list">
                <img src="../assets/ip16.webp" alt="" />
                <img src="../assets/tulanh.webp" alt="" />
                <img src="../assets/vali.webp" alt="" />
                <img src="../assets/hutbui.webp" alt="" />
                <img src="../assets/ipad.webp" alt="" />
                <img src="../assets/sp8.webp" alt="" />
                <img src="../assets/ruou.webp" alt="" />
                <img src="../assets/macbook.webp" alt="" />
              </div>
              <!-- Clone để tạo hiệu ứng infinite scroll -->
              <div class="image-list">
                <img src="../assets/ip16.webp" alt="" />
                <img src="../assets/tulanh.webp" alt="" />
                <img src="../assets/vali.webp" alt="" />
                <img src="../assets/hutbui.webp" alt="" />
                <img src="../assets/ipad.webp" alt="" />
                <img src="../assets/sp8.webp" alt="" />
                <img src="../assets/ruou.webp" alt="" />
                <img src="../assets/macbook.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container">
        <div class="row" style="width: 100%">
          <div class="col-1" style="margin-left: 12px;"></div>
          <div class="card col ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <!-- Base of the crown -->
              <path
                d="M3 14l2.5-7.5L9 10l3-6 3 6 3.5-3.5L21 14v2H3v-2z"
                fill="none"
                stroke="#FFD700"
                stroke-width="1.5"
                stroke-linejoin="round"
              />

              <!-- Bottom band -->
              <path
                d="M3 16h18v1.5H3z"
                fill="#FFD700"
              />

              <!-- Jewels -->
              <circle cx="5.5" cy="7.5" r="1" fill="#FF0000"/>
              <circle cx="12" cy="5" r="1" fill="#0066FF"/>
              <circle cx="18.5" cy="7.5" r="1" fill="#50C878"/>

              <!-- Decorative details -->
              <path
                d="M6 12l1.5-1.5M12 12l-1-2m1 2l1-2M18 12l-1.5-1.5"
                stroke="#FFD700"
                stroke-width="1"
                stroke-linecap="round"
              />
            </svg>
            <span>Nâng cấp</span>
          </div>
          <div class="card col ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <!-- Định nghĩa gradients -->
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#FFD700"/>
                  <stop offset="50%" style="stop-color:#FFA500"/>
                  <stop offset="100%" style="stop-color:#FF8C00"/>
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:rgba(255,255,255,0.8)"/>
                  <stop offset="50%" style="stop-color:rgba(255,255,255,0)"/>
                  <stop offset="100%" style="stop-color:rgba(255,255,255,0.2)"/>
                </linearGradient>
              </defs>

              <!-- Outer Ring -->
              <circle
                cx="12"
                cy="12"
                r="11"
                fill="none"
                stroke="url(#goldGradient)"
                stroke-width="2"
                filter="url(#glow)"
              />

              <!-- Inner Circle -->
              <circle
                cx="12"
                cy="12"
                r="9"
                fill="url(#goldGradient)"
                opacity="0.1"
              />

              <!-- Dollar Symbol -->
              <path
                d="M12 5v14M15 8.5c0-1.5-1.5-2.5-3.5-2.5S8 7 8 8.5s1.5 2.5 3.5 2.5 3.5 1 3.5 2.5-1.5 2.5-3.5 2.5S8 14.5 8 13"
                fill="none"
                stroke="url(#goldGradient)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                filter="url(#glow)"
              />

              <!-- Decorative Elements -->
              <path
                d="M7 7l1.5-1.5M17 17l-1.5 1.5"
                stroke="url(#goldGradient)"
                stroke-width="1.5"
                stroke-linecap="round"
              />

              <!-- Shine Effect -->
              <path
                d="M6 6l12 12"
                stroke="url(#shineGradient)"
                stroke-width="0.5"
                opacity="0.6"
              />

              <!-- Corner Accents -->
              <path
                d="M5 10l-1-1M19 14l1 1"
                stroke="url(#goldGradient)"
                stroke-width="1.5"
                stroke-linecap="round"
              />

              <!-- Small Decorative Dots -->
              <circle cx="12" cy="7" r="0.5" fill="#FFD700"/>
              <circle cx="12" cy="17" r="0.5" fill="#FFD700"/>
            </svg>
            <span >Nạp ngay</span>
          </div>
          <div class="card col" @click="rutnhanh">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <defs>
                <!-- Golden Gradients -->
                <linearGradient id="goldBase" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#FFD700"/>
                  <stop offset="50%" style="stop-color:#FDB931"/>
                  <stop offset="100%" style="stop-color:#FF8C00"/>
                </linearGradient>

                <linearGradient id="goldShine" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#FFF5D4"/>
                  <stop offset="50%" style="stop-color:#FFD700"/>
                  <stop offset="100%" style="stop-color:#FFB800"/>
                </linearGradient>

                <radialGradient id="sparkle" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" style="stop-color:rgba(255,255,255,0.9)"/>
                  <stop offset="70%" style="stop-color:rgba(255,215,0,0)"/>
                </radialGradient>

                <!-- Shine Effects -->
                <filter id="goldenGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="0.5" result="blur"/>
                  <feFlood flood-color="#FFD700" result="color"/>
                  <feComposite in="color" in2="blur" operator="in" result="glow"/>
                  <feMerge>
                    <feMergeNode in="glow"/>
                    <feMergeNode in="glow"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <!-- Base Steps -->
              <path d="M2 20h20v2H2z" fill="url(#goldBase)" filter="url(#goldenGlow)"/>
              <path d="M4 18h16v2H4z" fill="url(#goldShine)" filter="url(#goldenGlow)"/>

              <!-- Main Building Structure -->
              <path d="M3 8h18v10H3z" fill="url(#goldBase)" filter="url(#goldenGlow)"/>

              <!-- Columns -->
              <rect x="5" y="8" width="2" height="10" fill="url(#goldShine)"/>
              <rect x="9" y="8" width="2" height="10" fill="url(#goldShine)"/>
              <rect x="13" y="8" width="2" height="10" fill="url(#goldShine)"/>
              <rect x="17" y="8" width="2" height="10" fill="url(#goldShine)"/>

              <!-- Roof -->
              <path d="M2 8L12 2l10 6H2z" fill="url(#goldBase)" filter="url(#goldenGlow)"/>

              <!-- Decorative Elements -->
              <circle cx="12" cy="5" r="0.8" fill="url(#sparkle)"/>

              <!-- Sparkle Effects -->
              <circle cx="6" cy="10" r="0.3" fill="white" opacity="0.8"/>
              <circle cx="18" cy="10" r="0.3" fill="white" opacity="0.8"/>
              <circle cx="12" cy="15" r="0.3" fill="white" opacity="0.8"/>

              <!-- Column Details -->
              <path d="M5 8h2M9 8h2M13 8h2M17 8h2" stroke="#FFE55C" stroke-width="0.5"/>
              <path d="M5 18h2M9 18h2M13 18h2M17 18h2" stroke="#FFE55C" stroke-width="0.5"/>

              <!-- Additional Shine Details -->
              <path d="M12 2L4 8" stroke="#FFFFFF" stroke-width="0.3" opacity="0.6"/>
              <path d="M12 2L20 8" stroke="#FFFFFF" stroke-width="0.3" opacity="0.6"/>

              <!-- Sparkling Accents -->
              <path d="M3 8l4-2M17 8l4-2" stroke="url(#sparkle)" stroke-width="0.2"/>
              <path d="M7 19l2 1M15 19l-2 1" stroke="url(#sparkle)" stroke-width="0.2"/>
            </svg>
            <span >Rút nhanh</span>
          </div>
          <div class="col-1"></div>
        </div>
        <div class="container mb-4">
          <div class="task-header">Sảnh nhiệm vụ</div>
        </div>
        <div class="container mb-4">
          <div class="banner-list">
            <div
              class="list-item"
              v-for="(level, index) in levels"
              :key="index"
            >
              <div class="title">{{ level.name }}</div>
              <div class="discount">{{ level.commission_percent }}%</div>
              <div class="categories">
                <span>Thời trang</span> | <span>Phụ kiện</span> |
                <span>Điện thoại</span>
              </div>
              <div class="product-image">
                <img
                  v-if="level.background_urls.length && level.name == 'Gói thành viên SILVER'"
                  src="https://salt.tikicdn.com/cache/w1200/ts/product/54/a5/26/0d683eea627278ac4fd5bda56fe99e3f.jpg"
                  alt="Sản phẩm"
                  crossorigin="anonymous"
                  style="object-fit: contain"
                />
                <img
                  v-if="level.background_urls.length && level.name == 'Gói thành viên GOLD'"
                  src="https://salt.tikicdn.com/cache/750x750/ts/product/41/eb/db/218d7434c84a275df78d50e71dfd4755.jpg.webp"
                  alt="Sản phẩm"
                  crossorigin="anonymous"
                  style="object-fit: contain"
                />
                <img
                  v-if="level.background_urls.length && level.name == 'Gói thành viên PLATINUM'"
                  src="https://salt.tikicdn.com/cache/750x750/ts/product/08/9b/82/596cbffa77acc3b8b8aa9f06e7b63c88.jpg.webp"
                  alt="Sản phẩm"
                  crossorigin="anonymous"
                  style="object-fit: contain"
                />
                <img
                  v-if="level.background_urls.length && level.name == 'Gói thành viên SAPPHIRE'"
                  src="https://salt.tikicdn.com/cache/750x750/ts/product/91/31/61/165d9fdbc7243090ac9ee5f1ee1e2ab5.jpg.webp"
                  alt="Sản phẩm"
                  crossorigin="anonymous"
                  style="object-fit: contain"
                />
                <img
                  v-if="level.background_urls.length && level.name == 'Gói thành viên DIAMON'"
                  src="https://salt.tikicdn.com/cache/750x750/ts/product/ae/52/99/cb304509b00be96cd89104ee097d95d3.png.webp"
                  alt="Sản phẩm"
                  crossorigin="anonymous"
                  style="object-fit: contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import * as volatilityApi from '../api/volatility'

import { mapState } from 'vuex'
import { getListLevel } from '../api/volatility'

export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {
      vip: {
        name: '',
        background_urls: [],
      },
      levels: null,
      domain: 'https://api.soatdonctv.online/',
    }
  },
  beforeDestroy() {
    this.vip = null
  },
  mounted() {
    if (this.$store.state.profile.vip) {
      this.vip = this.$store.state.profile.vip
    }
    this.getLevel()
  },
  methods: {
    async getLevel() {
      volatilityApi.getListLevel().then((data) => {
        this.levels = data.data
      })
    },
    redirectPath() {
      const hasBank = this.$store.state?.profile?.profile?.bank
      if (hasBank) {
        this.$router.push('/recharge')
      } else {
        this.$router.push('/my/bankAccount')
      }
    },
    rutnhanh() {
      const hasBank = this.$store.state.profile?.profile?.bank
      if (hasBank) {
        this.$router.push('/wallet/withdraw')
      } else {
        this.$router.push('/my/bankAccount')
      }
    },
  },
  watch: {
    '$store.state.profile.vip': {
      handler: function (val) {
        if (val) {
          this.vip = this.$store.state.profile.vip || { name: '' }
        }
      },
      deep: true,
    },
  },
  filters: {
    roundToTwoDecimalPlaces(num) {
      if (!num) return 0
      return Math.round(num * 100) / 100
    },
  },
  computed: {
    computed: {
      ...mapState({
        user: (state) => state.profile.profile,
        bank: (state) => state.profile.profile.bank,
        isLogin: (state) => state.auth.isAuthenticated,
      }),
    },
  },
}
</script>
<style scpoed lang="scss">
/* #content {
  padding: 75px 10px 10px 10px;
} */
#index-page {
  margin-top: 80px;

  .main .main-container {
    background-color: #ffffff;
    border-radius: 20px;
    padding-top: 15px;
    padding-bottom: 15px;

    .card {
      width: 100px;
      height: 100px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    .task-header {
      display: flex;
      align-items: center;
      padding: 10px;
      font-size: 16px;
      color: #333;
      background-color: #f9f9f9;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin: 0 auto;
    }

    .task-header::before {
      content: '';
      width: 4px;
      height: 20px;
      background-color: #2c5fd8; /* Màu xanh cho thanh bên */
      margin-right: 10px;
      border-radius: 2px;
    }
  }

  .vip-wrap .tab {
    background: #e8e8e8;
    -webkit-box-shadow: 0 0.04rem 0.06667rem 0 rgba(0, 0, 0, 0.11);
    box-shadow: 0 0.04rem 0.06667rem #0000001c;
    padding: 0.05333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 2.5rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-radius: 1.25rem;
  }

  .vip-wrap .vip-list {
    margin-top: 0.53333rem;
    padding: 0.13333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-image: url(../assets/img/bg2.jpg);
    background-size: cover;
    border-radius: 10px;
  }

  .vip-wrap .tab .tabItem {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;
    color: #939393;
  }

  .vip-wrap .vip-list .active {
    background-color: #fff !important;
    -webkit-box-shadow: 0.3rem 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.16) !important;
    box-shadow: 0.3rem 0.3rem 0.3rem #00000029 !important;
  }

  .vip-wrap .vip-list .active .vip-name,
  .vip-wrap .vip-list .active .num {
    color: #c62a1c;
    text-shadow: 2px 1px 2px #dddddd;
    font-weight: 700;
  }

  .vip-wrap .vip-list .active .status {
    display: none;
  }

  .vip-wrap .vip-list .vip-item {
    -webkit-flex-basis: 32%;
    -ms-flex-preferred-size: 32%;
    flex-basis: 32%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    border-radius: 10px;
    -webkit-box-shadow: 0 0.05333rem 0.10667rem 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0.05333rem 0.10667rem #00000029;
    text-align: center;
    margin-bottom: 0.4rem;
  }

  .vip-wrap .vip-list .vip-wrap-inset,
  .vip-wrap .vip-list .partner-item {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 16px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 5px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .vip-wrap .vip-list .num {
    color: #fff;
    font-weight: 600;
    font-size: 0.9rem;
    text-shadow: 2px 1px 2px #000000;
  }

  .header {
    padding: 10px 15px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99;
    background: transparent;
    border-radius: 0;
  }

  .swipper {
    img {
      height: 150px;
      margin: 0 10px;
      border-radius: 25px;
    }
  }

  .vip-wrap .vip-list .vip-icon img {
    width: 100px;
  }

  .vip-wrap .tab .activeItem {
    background: #ffffff;
    border-radius: 1.25rem;
  }

  .banner-list {
    width: 100%;
    margin: 0.53333rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .banner-list .list-item {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 15px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    padding: 5px 10px;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

    .title {
      font-size: 18px !important;
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
      text-transform: uppercase;
    }

    .discount {
      font-size: 16px;
      color: #2ecc71; /* Màu xanh cho phần trăm giảm giá */
      margin-bottom: 10px;
    }

    .categories {
      font-size: 14px;
      color: #666;
      margin-bottom: 15px;
    }

    .categories span {
      margin-right: 5px;
    }

    .product-image {
      border-radius: 5px;
      overflow: hidden;
      display: inline-block;
      height: 200px;
      width: 100%;
    }

    .product-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .banner-list .list-item img {
    display: block;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .banner-list .list-item .right {
    overflow: hidden;
    padding: 0.5rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .banner-list .list-item .title {
    font-weight: bolder;
    font-size: 0.9rem;
    display: block;
    margin-top: 0.2rem;
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    margin-bottom: 0.2rem;
  }

  .banner-list .list-item .subtitle {
    color: #8b8b8b;
    margin-top: 0.1rem;
    line-height: 1.5;
    font-size: 14px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}

.scroll-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.scroll-content {
  display: flex;
  animation: scroll 20s linear infinite;
  /* Sử dụng transform để tận dụng GPU acceleration */
  will-change: transform;
}

.image-list {
  display: flex;
  flex-shrink: 0;
}

.image-list img {
  height: 200px; /* Điều chỉnh theo nhu cầu */
  width: auto;
  margin-right: 10px;
  /* Tối ưu rendering */
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* Tạm dừng animation khi user hover */
.scroll-container:hover .scroll-content {
  animation-play-state: paused;
}

@media (max-width: 768px) {
  :root {
    --scroll-speed: 3s; /* Tốc độ trên mobile */
  }

  .image-list img {
    height: 150px;
  }
}
</style>
