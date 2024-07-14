<template>
  <div id="rule">
    <div class="main-container">
      <div class="container">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="row">
              <div class="col-auto">
                <div class="icon icon-40 rounded bg-default-light">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#fff">
                    <path
                      d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520h200L520-800v200Z"/>
                  </svg>
                </div>
              </div>
              <div class="col pl-0 align-self-center"><h6 class="mb-1 text-left">Câu hoi thường gặp</h6></div>
            </div>
          </div>
          <div class="card-body"><p class="text-secondary"></p>
            <p>LƯU Ý: Vui lòng KHÔNG sử dụng cùng một thông tin địa chỉ ví để đăng ký nhiều tài khoản người dùng trên
              nền tảng, nếu bị hệ thống phát hiện, ID tài khoản sẽ bị đóng băng.</p>

            <p>• Hành trình đánh giá nhiều tài khoản cá nhân sẽ dẫn đến việc tạm dừng cửa hàng của người bán, ảnh hưởng
              đến uy tín của người bán và đánh giá không hợp lệ. Nền tảng cấm cùng một địa chỉ ví được liên kết với
              nhiều tài khoản, vui lòng KHÔNG sử dụng nhiều tài khoản riêng lẻ, nếu một địa chỉ ví được liên kết với
              nhiều tài khoản, sẽ khiến tất cả tiền bị đóng băng trong tối đa 90 ngày hoặc tài khoản bị khóa vĩnh
              viễn.</p>

            <p>• Nền tảng này được thiết kế để ngăn chặn mọi người rửa tiền một cách ác ý hoặc rút tiền từ một loạt các
              hành vi không phù hợp.</p>

            <p>Câu hỏi thường gặp (FAQ)</p>

            <p>• Để đảm bảo tiến độ gửi tiền được thực hiện nhanh chóng, vui lòng đảm bảo rằng tên của người chuyển và
              số tiền bạn chuyển giống như đã cung cấp. Nếu bạn gặp phải bất kỳ vấn đề không thể giải quyết nào trong
              quá trình gửi tiền, vui lòng liên hệ ngay với dịch vụ chăm sóc&nbsp;khách hàng của nền tảng. Do số lượng
              giao dịch lớn, vui lòng đảm bảo xác nhận địa chỉ ví của nền tảng này một cách cẩn thận trước khi gửi tiền.
              Nền tảng thỉnh thoảng thay đổi địa chỉ ví.</p>

            <p>1. Xếp hạng Hành trình</p>

            <p>• Sau khi gửi tiền vào tài khoản của bạn, bạn có thể bắt đầu xếp hạng, nhấp vào "Bắt đầu hành trình" trên
              trang để chuyển hướng đến trang xếp hạng. Kiên nhẫn đợi hệ thống khớp và gửi sau khi gửi xếp hạng bật lên
              để hoàn thành xếp hạng. Hoàn thành các&nbsp;xếp hạng mỗi ngày để thực hiện rút tiền.</p>

            <p>2. Rút tiền</p>

            <p>Trước khi rút tiền, vui lòng liên kết thông tin rút tiền của bạn trong nền tảng. Trước khi tiếp tục, các
              đại lý rút tiền phải hoàn thành yêu cầu gửi các đơn hành trình&nbsp;. Trong giờ làm việc của nền tảng, bạn
              có thể rút tiền của mình trong giao diện "Rút tiền". Nhấp vào nút "Rút tiền" sau khi nhập số tiền bạn muốn
              rút và nhập mật khẩu để rút tiền. Thời gian đến cụ thể tùy thuộc vào ví.</p>

            <p>3. Mạng liên kết nền tảng</p>

            <p>•Người dùng nền tảng có thể trở thành đại lý nền tảng bằng cách giới thiệu thành viên mới và có thể nhận
              thêm phần thưởng năng động. Phần thưởng là 30% lợi nhuận hàng ngày của người dùng cấp một trực tiếp.</p>

            <p>4. Thời gian tham gia hành trình</p>

            <p>•Giờ hoạt động của nền tảng là từ 10:00 đến 22:00 hàng ngày, các thành viên có thể xếp hạng hành trình&nbsp;trong
              giờ hoạt động của nền tảng.</p>

            <p>•Để tránh sai sót trong dữ liệu xếp hạng của bạn, hãy nhớ hoàn thành xếp hạng trong vòng 24 giờ</p>

            <p>Lưu ý: Để làm rõ thêm, vui lòng liên hệ với dịch vụ chăm sóc&nbsp;khách hàng của nền tảng.</p>
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
