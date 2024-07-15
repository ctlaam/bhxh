<template>
  <div id="info">
    <div class="main-container">
      <div class="container">
        <div class="card card-content">
          <div class="alert alert-info text-left text-alert-info">Không Có Dữ Liệu</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  layout: 'info',
  meta: 'Thay đổi mật khẩu',
  data() {
    return {
      currentPassword: null,
      password: null,
      confirmPassword: null,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'login'})
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    compareToFirstPassword(rule, value, callback) {
      if (value && value != this.form.getFieldValue('password')) {
        callback('Mật khẩu chưa khớp');
      } else {
        callback();
      }
    },
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
.card-content {
  box-shadow: none;
  min-height: 150px;
}
.text-alert-info {
  font-size: 14px;
}

</style>

<style lang="css">
#info {

.ant-form-explain {
  text-align: left !important;
}

.ant-btn span {
  display: block;
  line-height: 1px;
}

.warning-text {
  font-size: 14px;
  color: #212529;
}

}
</style>
