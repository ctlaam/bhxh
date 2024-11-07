<template>
  <div id="info">
    <div class="main-container">
      <div class="container">
        <div class="card card-content">
          <div class="alert "  :class="{'alert-warning': history.status === 'Pending','alert-success': history.status === 'Success', 'alert-danger': history.status === 'Reject'}" v-for="(history, index) in historys" :key="index">
            <div class="media">
              <div class="icon icon-40 bg-white text-success mr-2 rounded-circle">
                <svg data-v-dfd304d2="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                     width="24px" fill="#25a0fe ">
                  <path data-v-dfd304d2=""
                        d="M856-390 570-104q-12 12-27 18t-30 6q-15 0-30-6t-27-18L103-457q-11-11-17-25.5T80-513v-287q0-33 23.5-56.5T160-880h287q16 0 31 6.5t26 17.5l352 353q12 12 17.5 27t5.5 30q0 15-5.5 29.5T856-390ZM260-640q25 0 42.5-17.5T320-700q0-25-17.5-42.5T260-760q-25 0-42.5 17.5T200-700q0 25 17.5 42.5T260-640Z"></path>
                </svg>
              </div>
              <div class="media-inner">
                <h6 class="mb-0 font-weight-normal text-left">
                  <b>{{statusName[history.status]}}</b>
                  <br>
                <small class="text-mute">Số Lẻ
                  <b>
                    {{history.id}}
                  </b>
                </small>
                <br>
                <small class="text-mute">Số Tiền
                  <b>{{history.amount}}</b>
                </small>
                <br>
                <small class="text-mute">Thời Gian
                  <b>{{history.created_at | formatTime}}</b>
                </small>
                <br>
                <small class="text-mute" v-if="history.reject_reason">Lý do
                  <b>{{history.reject_reason}}</b>
                </small>
              </h6></div>
            </div>
          </div>
          <div v-if="!historys.length" class="alert alert-info text-left text-alert-info">Không Có Dữ Liệu</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import * as volatilityApi from '../../../api/volatility'
import moment from "moment";

export default {
  name: "index",
  layout: 'info',
  meta: 'Thay đổi mật khẩu',
  data() {
    return {
      currentPassword: null,
      password: null,
      confirmPassword: null,
      historys: [],
      statusName: {
        'Pending': 'Đang chờ xử lý',
        'Success': 'Thành công',
        'Reject': 'Từ chối',
      }
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'login'})
  },
  created() {
  },
  methods: {
    async getHistory() {
      try {
        await volatilityApi.historyWithDraw()
          .then((res) => {
            this.historys = _.get(res, 'data');
            console.log("this.historys", this.historys)
            this.historys = this.historys.map((i) => {
              return {
                ...i,
                id: i._id
              }
            })
            console.log("this.historys", this.historys)
          })
          .catch((e) => {
            console.log(e)
          })
      } catch (e) {
        console.log(e)
      }
    },


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
  },
  filters: {
    formatTime(value) {
      if (!value) return  '';

      return moment(value).format('YYYY-MM-DD HH:mm:ss')
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

.card-content {
  box-shadow: none;
  min-height: 150px;
}

.text-alert-info {
  font-size: 14px;
}

.media-inner {
  b {
    color: #777777;
  }
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
