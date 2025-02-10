<template>
  <div class="d-flex app align-items-center justify-content-center">
    <div class="main-content">
      <Header :activeHeader="activeHeader"></Header>
      <div id="content" ref="content">
        <div
          class="container mb-4 text-center text-white"
          style="margin-top: 80px"
        >
          <Nuxt />
        </div>
      </div>
      <Footer></Footer>
    </div>
    <FullScreenModal> </FullScreenModal>
<!-- Start of LiveChat (www.livechat.com) code -->
<script>
    window.__lc = window.__lc || {};
    window.__lc.license = 19028982;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
</script>
<noscript><a href="https://www.livechat.com/chat-with/19028982/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a></noscript>
<!-- End of LiveChat code -->
    <div class="modal"></div>
  </div>
</template>

<script>
import Footer from '../components/apps/footer.vue'
import Header from '../components/apps/headerInfo'
import FullScreenModal from '../components/apps/FullScreenModal.vue'

export default {
  name: 'info',
  data() {
    return {
      activeHeader: false,
    }
  },
  components: {
    Header,
    Footer,
    FullScreenModal,
  },
  methods: {
    handleScroll() {
      // Lấy vị trí cuộn của phần tử "content"
      const scrollPosition = this.$refs.content.scrollTop

      // Thêm logic dựa trên vị trí cuộn
      if (scrollPosition > 50) {
        this.activeHeader = true
      } else if (scrollPosition == 0) {
        this.activeHeader = false
      }
    },
  },
  mounted() {
    this.$refs.content.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped></style>
