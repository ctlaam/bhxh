<template>
    <div class="main-content">
      <div id="content" ref="content">
        <Nuxt />
      </div>
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
}
</script>

<style lang="scss">
</style
