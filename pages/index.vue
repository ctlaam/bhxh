<template>
  <div id="index-page">
    <main class="flex-shrink-0 main has-footer">
      <div class="head-top">
        <div class="banner-header">
          <a-carousel autoplay :autoplay-speed="1000" :dots="true">
            <div><img src="../assets/img-banner1.png" alt="" /></div>
            <div><img src="../assets/img-banner2.png" alt="" /></div>
            <div><img src="../assets/img-banner3.png" alt="" /></div>
            <div><img src="../assets/img-banner4.png" alt="" /></div>
            <div><img src="../assets/img-banner5.png" alt="" /></div>
          </a-carousel>
        </div>
      </div>
      <div class="main-container">
        <div class="row" style="width: 100%">
          <div class="col-1" style="margin-left: 12px"></div>
          <div class="card col ml-2" @click="$router.push('/my/member-rank')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <!-- Base of the crown -->
              <path
                d="M3 14l2.5-7.5L9 10l3-6 3 6 3.5-3.5L21 14v2H3v-2z"
                fill="none"
                stroke="#FFD700"
                stroke-width="1.5"
                stroke-linejoin="round"
              />

              <!-- Bottom band -->
              <path d="M3 16h18v1.5H3z" fill="#FFD700" />

              <!-- Jewels -->
              <circle cx="5.5" cy="7.5" r="1" fill="#FF0000" />
              <circle cx="12" cy="5" r="1" fill="#0066FF" />
              <circle cx="18.5" cy="7.5" r="1" fill="#50C878" />

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
          <div class="card col ml-2" @click="chamsockhachhang">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <!-- Định nghĩa gradients -->
              <defs>
                <linearGradient
                  id="goldGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style="stop-color: #ffd700" />
                  <stop offset="50%" style="stop-color: #ffa500" />
                  <stop offset="100%" style="stop-color: #ff8c00" />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient
                  id="shineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style="stop-color: rgba(255, 255, 255, 0.8)"
                  />
                  <stop
                    offset="50%"
                    style="stop-color: rgba(255, 255, 255, 0)"
                  />
                  <stop
                    offset="100%"
                    style="stop-color: rgba(255, 255, 255, 0.2)"
                  />
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
              <circle cx="12" cy="7" r="0.5" fill="#FFD700" />
              <circle cx="12" cy="17" r="0.5" fill="#FFD700" />
            </svg>
            <span>Nạp ngay</span>
          </div>
          <div class="card col" @click="rutnhanh">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <defs>
                <!-- Golden Gradients -->
                <linearGradient
                  id="goldBase"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style="stop-color: #ffd700" />
                  <stop offset="50%" style="stop-color: #fdb931" />
                  <stop offset="100%" style="stop-color: #ff8c00" />
                </linearGradient>

                <linearGradient
                  id="goldShine"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" style="stop-color: #fff5d4" />
                  <stop offset="50%" style="stop-color: #ffd700" />
                  <stop offset="100%" style="stop-color: #ffb800" />
                </linearGradient>

                <radialGradient
                  id="sparkle"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop
                    offset="0%"
                    style="stop-color: rgba(255, 255, 255, 0.9)"
                  />
                  <stop offset="70%" style="stop-color: rgba(255, 215, 0, 0)" />
                </radialGradient>

                <!-- Shine Effects -->
                <filter
                  id="goldenGlow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="0.5" result="blur" />
                  <feFlood flood-color="#FFD700" result="color" />
                  <feComposite
                    in="color"
                    in2="blur"
                    operator="in"
                    result="glow"
                  />
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <!-- Base Steps -->
              <path
                d="M2 20h20v2H2z"
                fill="url(#goldBase)"
                filter="url(#goldenGlow)"
              />
              <path
                d="M4 18h16v2H4z"
                fill="url(#goldShine)"
                filter="url(#goldenGlow)"
              />

              <!-- Main Building Structure -->
              <path
                d="M3 8h18v10H3z"
                fill="url(#goldBase)"
                filter="url(#goldenGlow)"
              />

              <!-- Columns -->
              <rect x="5" y="8" width="2" height="10" fill="url(#goldShine)" />
              <rect x="9" y="8" width="2" height="10" fill="url(#goldShine)" />
              <rect x="13" y="8" width="2" height="10" fill="url(#goldShine)" />
              <rect x="17" y="8" width="2" height="10" fill="url(#goldShine)" />

              <!-- Roof -->
              <path
                d="M2 8L12 2l10 6H2z"
                fill="url(#goldBase)"
                filter="url(#goldenGlow)"
              />

              <!-- Decorative Elements -->
              <circle cx="12" cy="5" r="0.8" fill="url(#sparkle)" />

              <!-- Sparkle Effects -->
              <circle cx="6" cy="10" r="0.3" fill="white" opacity="0.8" />
              <circle cx="18" cy="10" r="0.3" fill="white" opacity="0.8" />
              <circle cx="12" cy="15" r="0.3" fill="white" opacity="0.8" />

              <!-- Column Details -->
              <path
                d="M5 8h2M9 8h2M13 8h2M17 8h2"
                stroke="#FFE55C"
                stroke-width="0.5"
              />
              <path
                d="M5 18h2M9 18h2M13 18h2M17 18h2"
                stroke="#FFE55C"
                stroke-width="0.5"
              />

              <!-- Additional Shine Details -->
              <path
                d="M12 2L4 8"
                stroke="#FFFFFF"
                stroke-width="0.3"
                opacity="0.6"
              />
              <path
                d="M12 2L20 8"
                stroke="#FFFFFF"
                stroke-width="0.3"
                opacity="0.6"
              />

              <!-- Sparkling Accents -->
              <path
                d="M3 8l4-2M17 8l4-2"
                stroke="url(#sparkle)"
                stroke-width="0.2"
              />
              <path
                d="M7 19l2 1M15 19l-2 1"
                stroke="url(#sparkle)"
                stroke-width="0.2"
              />
            </svg>
            <span>Rút nhanh</span>
          </div>
          <div class="col-1"></div>
        </div>
        <div class="container mb-4">
          <div class="task-header">Cấp bậc hội viên</div>
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
                  v-if="level.background_urls.length"
                  :src="domain + level.background_urls[0]"
                  alt="Sản phẩm"
                  crossorigin="anonymous"
                  style="object-fit: contain"
                />
              </div>
              <a-button
                v-if="parseInt(vip.name.replace(/[^0-9]/g, '')) == index + 1"
                class="w-100"
                style="background-color: #232f3e; color: #fff"
                >Đang hoạt động</a-button
              >
              <a-button
                v-else
                class="w-100"
                style="background-color: #232f3e; color: #fff"
                >Mở khóa cấp độ</a-button
              >
            </div>
          </div>
        </div>
        <div class="container mb-4">
          <div class="row">
            <div class="col-6 mb-4">
              <div class="catalog-block" @click="navigateTo">
                <div class="name-catalog">Về chúng ta</div>
                <div class="icon-catalog">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style="font-size: 20px"
                  >
                    <path
                      d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="catalog-block" @click="navigateTo">
                <div class="name-catalog">Mô tả</div>
                <div class="icon-catalog">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style="font-size: 20px"
                  >
                    <path
                      d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="catalog-block" @click="navigateTo">
                <div class="name-catalog">Tài chính</div>
                <div class="icon-catalog">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style="font-size: 20px"
                  >
                    <path
                      d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="catalog-block" @click="navigateTo">
                <div class="name-catalog">Văn hóa</div>
                <div class="icon-catalog">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style="font-size: 20px"
                  >
                    <path
                      d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mb-4">
          <div class="profit-container">
            <div class="profit-header">
              <h3>LỢI NHUẬN NGƯỜI DÙNG TỰ HỆ THỐNG</h3>
            </div>

            <div class="profit-list">
              <transition-group name="slide-down" tag="div">
                <div
                  v-for="item in profitItems"
                  :key="item.userId"
                  class="profit-item"
                >
                  <span class="user-id">{{ item.userId }}</span>
                  <span class="profit-amount"
                    >Lợi nhuận: ${{ item.amount.toLocaleString() }}</span
                  >
                  <span class="date">{{ item.date }}</span>
                </div>
              </transition-group>
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
      domain: null,
      profitItems: [],
      interval: null,
      maxItems: 10,
      profile: null,
    }
  },

  beforeDestroy() {
    this.vip = null
    if (this.interval) {
      clearInterval(this.interval)
    }
  },
  created() {
    this.getProfile()
  },
  mounted() {
    this.domain = process.env.BASE_URL_IMAGE
    if (this.$store.state.profile.vip) {
      this.vip = this.$store.state.profile.vip
    }
    this.getLevel()
    // Ajouter quelques éléments initiaux
    this.addInitialItems()

    // Démarrer la génération automatique
    this.startAutoGeneration()
  },
  methods: {
    chamsockhachhang() {
      let chat = document.querySelector('.launcher-icon.launcher-minimize-icon')
      if (chat) {
        chat.click()
      }
    },
    navigateTo() {
      this.$router.replace('/my/about')
    },
    addInitialItems() {
      for (let i = 0; i < 3; i++) {
        this.addNewItem()
      }
    },

    startAutoGeneration() {
      this.interval = setInterval(() => {
        this.addNewItem()
      }, 2000) // Ajouter un nouvel élément toutes les 2 secondes
    },

    addNewItem() {
      if (this.profitItems.length >= this.maxItems) {
        // Supprimer le plus ancien
        this.profitItems.pop()
      }

      const newItem = {
        id: Date.now(),
        userId: this.generateUserId(),
        amount: this.generateAmount(),
        date: this.getCurrentDate(),
      }

      // Ajouter au début de la liste
      this.profitItems.unshift(newItem)
    },

    generateUserId() {
      const prefixes = ['U', 'F', 'p', 't', 'O', 'K', 'M', 'A', 'B', 'C']
      const suffixes = [
        'W',
        'E2',
        'xs',
        'JG',
        'nk',
        'RT',
        'PL',
        'QX',
        'YZ',
        'MN',
      ]

      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]
      const numbers = Math.floor(Math.random() * 90000) + 10000

      return `${prefix}${numbers.toString().substring(0, 1)}*****${suffix}`
    },

    generateAmount() {
      return Math.floor(Math.random() * 9000) + 100 // Entre $500 et $9,999
    },

    getCurrentDate() {
      const today = new Date()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')
      const year = String(today.getFullYear()).substring(2, 4) // Obtenir les deux derniers chiffres de l'année
      return `${month}-${day}-${year}`
    },
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
    async getProfile() {
      await volatilityApi.getProfileUser().then(async (res) => {
        this.profile = res.data
        await volatilityApi.getListVips(this.profile.level).then((data) => {
          this.vip = data.data
          this.profitRate = this.vip ? this.vip.commission_percent : 0
        })
      })
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
    ...mapState({
      user: (state) => state.profile.profile,
      bank: (state) => state.profile.profile.bank,
      isLogin: (state) => state.auth.isAuthenticated,
    }),
  },
}
</script>
<style lang="scss">
.profit-container {
  background-color: #001529;
  padding: 20px;
  border-radius: 8px;
  color: white;
  margin-bottom: 50px;
}

.profit-header h3 {
  margin: 0 0 20px 0;
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-align: center;
}

.profit-list {
  max-height: 400px;
  overflow: hidden;
}

.profit-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  border-left: 3px solid rgba(255, 255, 255, 0.1);
}

.user-id {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  min-width: 80px;
}

.profit-amount {
  font-size: 14px;
  font-weight: 500;
  color: white;
  flex: 1;
  text-align: center;
}

.date {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  min-width: 50px;
  text-align: right;
}

/* Animations */
.slide-down-enter-active {
  transition: all 0.5s ease;
}

.slide-down-leave-active {
  transition: all 0.5s ease;
}

.slide-down-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.slide-down-move {
  transition: transform 0.5s ease;
}
.catalog-block {
  padding: 8px;
  background-image: linear-gradient(
    90deg,
    rgb(50, 195, 194) 0%,
    rgb(42, 132, 197) 45%,
    rgb(12, 82, 209) 100%
  );
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border-radius: 12px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
}
</style>
<style scpoed lang="scss">
/* #content {
  padding: 75px 10px 10px 10px;
} */
#index-page {
  max-width: 100vw;
  overflow: hidden;

  .main .main-container {
    background-color: #ffffff;
    border-radius: 20px;
    padding-top: 30px;
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
<style lang="scss">
// Thêm CSS cho carousel
.banner-header {
  .ant-carousel {
    .slick-slide {
      text-align: center;
      height: 200px;
      line-height: 200px;
      background: #364d79;
      overflow: hidden;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
      }
    }

    .slick-dots {
      li {
        button {
          background: #fff;
          opacity: 0.5;

          &:hover {
            opacity: 0.8;
          }
        }

        &.slick-active button {
          background: #1890ff;
          opacity: 1;
        }
      }
    }
  }
}

// CSS hiện có của bạn...
</style>
