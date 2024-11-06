<template>
  <header class="header col-md-offset-4 col-lg-offset-4col-xl-offset-4" :class="{ active: activeHeader }" style="max-width:30rem;">
    <div class="row align-items-center">
      <div class="col-auto px-0">
        <button class="btn btn-40 btn-link back-btn" type="button" @click="previousPage">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
          </svg>
        </button>
      </div>
      <div class="text-left col align-self-center"><a class="navbar-brand" href="#">
        <h6 class="mb-0" style="font-size: 20px;">{{title}}</h6>
      </a>
      </div>
      <div class="ml-auto col-auto">
        <a to="#" class="avatar avatar-30 shadow-sm rounded-circle ml-2 text-white" @click="previousPage">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
            <path
              d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerInfo",
  props: ["activeHeader"],
  data() {
    return {
      title: null,
    }
  },
  methods: {
    previousPage() {
      if (['wallet-withdraw', 'wallet-recharge', 'wallet-history'].includes(this.$route.name)) {
        this.$router.push({ path: '/wallet' });
        return;
      } else {
        this.$router.go(-1);
      }
      // this.$router.push({ path: '/my' })
    }
  },
  created() {
    this.title = this.$route.query.title
  }
}
</script>

<style scoped>

</style>
