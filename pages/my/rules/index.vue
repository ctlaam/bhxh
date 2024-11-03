<template>
  <div id="rule">
    <div class="main-container">
      <div class="container">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="row">
              <div class="col-auto">
                <div class="icon icon-40 rounded bg-default-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#fff"
                  >
                    <path
                      d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520h200L520-800v200Z"
                    />
                  </svg>
                </div>
              </div>
              <div class="col pl-0 align-self-center">
                <h6 class="mb-1 text-left">Điều khoản và điều kiện</h6>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="text-secondary"></p>
            <p><span style="display: none">&nbsp;</span></p>

            <p>
              1. Mỗi khách hàng cần hoàn thành tất cả các đơn hàng trước khi có
              thể yêu cầu hỗ trợ hoặc khiếu nại.
            </p>

            <p>
              2. Mỗi số điện thoại chỉ được sử dụng để đăng ký một tài khoản
              khách hàng tại Crescent Mall.
            </p>

            <p>
              3. Vui lòng không liên kết cùng một địa chỉ giao hàng với nhiều
              tài khoản khác nhau để đảm bảo tính chính xác của đơn hàng. Nếu
              phát hiện hành vi bất thường, tài khoản của bạn có thể bị tạm thời
              đóng băng.
            </p>

            <p>
              4. Vui lòng bảo mật thông tin tài khoản và không chia sẻ mật khẩu
              với người khác. Crescent Mall sẽ không chịu trách nhiệm cho bất kỳ
              mất mát nào gây ra do vi phạm bảo mật.
            </p>

            <p>
              5. Tất cả các sản phẩm và dịch vụ được cung cấp theo chính sách và
              quy định của trung tâm thương mại. Một khi đơn hàng đã được xác
              nhận và thanh toán, không thể thay đổi, hủy bỏ hoặc hoàn trả trừ
              khi có lý do hợp lệ theo quy định.
            </p>

            <p>
              6. Hành động pháp lý sẽ được thực hiện trong trường hợp sử dụng
              tài khoản hoặc dịch vụ không hợp lệ.
            </p>

            <p>
              7. Vui lòng xác nhận địa chỉ giao hàng với bộ phận chăm sóc khách
              hàng trước khi đặt đơn hàng để tránh sai sót.
            </p>

            <p>
              8. Crescent Mall không chịu trách nhiệm trong trường hợp địa chỉ
              giao hàng không chính xác được cung cấp bởi khách hàng.
            </p>

            <p>
              9. Tài khoản khách hàng có số dư tích điểm ít hơn 100 điểm sẽ
              không đủ điều kiện để tham gia các chương trình khuyến mãi hoặc
              giảm giá đặc biệt.
            </p>

            <p>
              10. Đơn hàng phải được xác nhận hoàn thành trong vòng 24 giờ sau
              khi giao hàng. Nếu có vấn đề phát sinh, vui lòng liên hệ với bộ
              phận chăm sóc khách hàng của chúng tôi để được hỗ trợ.
            </p>

            <p>
              11. Mọi thay đổi địa chỉ giao hàng phải có giấy tờ xác thực như
              CMND, Hộ chiếu hoặc Giấy phép lái xe.
            </p>

            <p>
              Kính gửi khách hàng, vui lòng đọc kỹ các quy định của chúng tôi.
              Xin cảm ơn sự hợp tác của quý khách.
            </p>

            <p>Bản quyền © 2023 Crescent Mall. Đã đăng ký Bản quyền.</p>

            <p>&nbsp;</p>

            <p><span style="display: none">&nbsp;</span></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  layout: 'info',
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/my.scss';

.btn-login:focus {
  outline: none;
}
#rule {
  p {
    font-size: 14px;
    text-align: left;
    color: #212529;
  }
  .main-container {
    height: 900px;
    overflow-y: auto;
  }
}
</style>
