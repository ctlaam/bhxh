<template>
  <div id="rule">
    <div class="main-container">
      <div class="container">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="row">
              <div class="col-auto">
                <div class="icon icon-40 rounded bg-default-light">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520h200L520-800v200Z"/></svg>
                </div>
              </div>
              <div class="col pl-0 align-self-center"><h6 class="mb-1 text-left">Điều khoản và điều kiện</h6></div>
            </div>
          </div>
          <div class="card-body"><p class="text-secondary"></p>
            <p><span style="display: none;">&nbsp;</span></p>

            <p>1. Mỗi người dùng được yêu cầu hoàn thành tất cả các đơn đơn hành trình&nbsp;trước khi có thể rút
              tiền.</p>

            <p>2. Mỗi số điện thoại chỉ được&nbsp;đăng ký một tài khoản.</p>

            <p>3. Vui lòng không liên kết cùng một địa chỉ ví với tài khoản khác để xếp hạng. Chúng tôi sẽ đóng băng các
              tài khoản nếu được tìm thấy.</p>

            <p>4. Vui lòng không tiết lộ mật khẩu tài khoản và mật khẩu rút tiền của bạn cho người khác. Nền tảng của
              chúng tôi sẽ không chịu trách nhiệm cho bất kỳ tổn thất nào gây ra.</p>

            <p>5. Tất cả các Gói du lịch đều được hệ thống phân bổ ngẫu nhiên và một khi hành trình đã được hệ thống
              chấp nhận và phân bổ, tuyệt đối không được phép thay đổi, hủy bỏ hoặc từ bỏ đặt chỗ.</p>

            <p>6. Hành động pháp lý sẽ được thực hiện trong trường hợp sử dụng tài khoản không phù hợp.</p>

            <p>7. Vui lòng xác nhận địa chỉ ví tiền gửi với dịch vụ khách hàng trước khi chuyển tiền.</p>

            <p>8. Nếu tiền gửi được thực hiện sai địa chỉ ví tiền gửi, nền tảng sẽ không chịu bất kỳ trách nhiệm
              nào.</p>

            <p>9. Số dư ít hơn 100 điểm&nbsp;không được phép bắt đầu bất kỳ hành trình nào, các thành viên phải đảm bảo
              rằng họ có số dư 100 điểm trước khi bắt đầu xếp hạng.</p>

            <p>10. Sau khi thành viên bắt đầu một hành trình, hành trình đó phải được hoàn thành trong vòng một ngày,
              nếu không thể hoàn thành trong một ngày, vui lòng thông báo cho bộ phận chăm sóc khách hàng càng sớm càng
              tốt.</p>

            <p>11. Mọi tài khoản nếu muốn thay đổi địa chỉ ví đều phải có CMND, Hộ chiếu, Giấy phép lái xe, v.v.</p>

            <p>Kính gửi thành viên, vui lòng đọc kỹ mô tả quy tắc của chúng tôi, cảm ơn sự hợp tác của bạn.</p>

            <p>Bản quyền © 2023 TravelPerk. Đã đăng ký Bản quyền.</p>

            <p>&nbsp;</p>

            <p><span style="display: none;">&nbsp;</span></p>
            <p></p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
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
