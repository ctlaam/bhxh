<template>
  <div id="info">
    <div class="main-container">
      <div class="container">
        <div class="card">
          <div class="container mb-4">
            <div class="alert alert-success d-none" id="successmessage">Refferal link copied</div>
            <div class="input-group mb-3">
              <input v-model="inviteCode" type="text" class="form-control" readonly placeholder="refferal Link" value="7BYZ9S" id="invite_code">
              <div class="input-group-append">
                <button class="btn btn-default rounded" type="button" copy="" data-clipboard-target="#invite_code" @click="copy">sao chép
                </button>
              </div>
            </div>
            <p class="text-center text-secondary">chia sẻ với bạn bè</p>
            <div class="row justify-content-center">
              <div class="col-auto">
                <div class="avatar avatar-40 rounded mx-2">
                  <div class="background" ><img height="40px" width="40px"
                    src="~/assets/line.png"> </div>
                </div>
                <div class="avatar avatar-40 rounded mx-2">
                  <div class="background" ><img height="40px" width="40px"
                    src="~/assets/facebook.png"></div>
                </div>
                <div class="avatar avatar-40 rounded mx-2">
                  <div class="background" ><img height="40px" width="40px"
                    src="~/assets/instagram.png"></div>
                </div>
                <div class="avatar avatar-40 rounded mx-2">
                  <div class="background" ><img height="40px" width="40px"
                    src="~/assets/twitter.png" ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'info',
  data() {
    return {
      inviteCode: '7BYZ9S'
    }
  },
  methods: {
    copy() {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(this.inviteCode).then(() => {
          this.$message.success('Sao chép mã mời thành công')
        }).catch(err => {
          console.error('Failed to copy: ', err);
        });
      } else {
        // Fallback nếu navigator.clipboard không hỗ trợ
        const textarea = document.createElement('textarea');
        textarea.value = this.inviteCode;
        textarea.style.position = 'fixed';  // Đảm bảo không làm thay đổi bố cục trang
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
          document.execCommand('copy');
          this.$message.success('Sao chép mã mời thành công')
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textarea);
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/my.scss';

.btn-login:focus {
  outline: none;
}

input {
  border: 1px solid rgb(217, 217, 217);
  padding: 0 10px;
}

</style>

<style lang="css">
#info {

}
</style>
