<template>
    <div class="main-content">
      <div id="content" ref="content">
        <Nuxt />
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../components/apps/footer.vue'
export default {
  components: {
    Footer,
  },
  data() {
    return {}
  },
  methods: {},
  watch: {},
  beforeDestroy() {},
}
</script>

<style lang="scss">
</style
