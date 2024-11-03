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
                <h6 class="mb-1 text-left">Câu hoi thường gặp</h6>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="text-secondary"></p>

            <p>
              <strong>LƯU Ý:</strong> Vui lòng <strong>KHÔNG</strong> sử dụng
              cùng một thông tin giao hàng hoặc thanh toán để đăng ký nhiều tài
              khoản trên nền tảng. Nếu bị phát hiện, tài khoản của bạn có thể bị
              đóng băng và ảnh hưởng đến quá trình nhận hoa hồng.
            </p>

            <p>
              • Việc sử dụng nhiều tài khoản cá nhân để đặt và rà soát đơn hàng
              có thể dẫn đến việc tạm dừng tài khoản, ảnh hưởng đến uy tín và
              không được ghi nhận hoa hồng. Nền tảng cấm việc sử dụng cùng một
              địa chỉ giao hàng hoặc thông tin thanh toán cho nhiều tài khoản.
              Nếu vi phạm, tất cả các tài khoản liên quan có thể bị đóng băng
              hoặc khóa vĩnh viễn.
            </p>

            <p>
              • Nền tảng được thiết kế để ngăn chặn mọi hành vi gian lận hoặc sử
              dụng dịch vụ không hợp lệ nhằm đảm bảo tính minh bạch trong quá
              trình rà soát đơn hàng và nhận hoa hồng.
            </p>

            <p><strong>Câu hỏi thường gặp (FAQ)</strong></p>

            <p>
              • Để đảm bảo tiến độ nhận hoa hồng, vui lòng kiểm tra kỹ thông tin
              đơn hàng và đảm bảo rằng đơn hàng đã được xác nhận. Nếu gặp vấn đề
              không thể giải quyết trong quá trình rà soát đơn hàng, vui lòng
              liên hệ ngay với bộ phận hỗ trợ khách hàng. Đảm bảo thông tin giao
              hàng của đơn hàng được chính xác trước khi xác nhận.
            </p>

            <p><strong>1. Quy trình Rà soát và Xác nhận Đơn hàng</strong></p>

            <p>
              • Sau khi đơn hàng của bạn được xác nhận, bạn có thể bắt đầu quy
              trình rà soát và xác nhận để được ghi nhận hoa hồng. Vui lòng đợi
              hệ thống xử lý đơn hàng và đảm bảo hoàn thành rà soát đúng quy
              trình để không ảnh hưởng đến tỷ lệ hoa hồng của bạn.
            </p>

            <p><strong>2. Nhận Hoa hồng</strong></p>

            <p>
              Sau khi đơn hàng đã được rà soát và xác nhận, hoa hồng sẽ được ghi
              nhận vào tài khoản của bạn. Thời gian xử lý hoa hồng có thể thay
              đổi tùy thuộc vào điều kiện của từng đơn hàng.
            </p>

            <p><strong>3. Chương trình Giới thiệu và Nhận Hoa hồng</strong></p>

            <p>
              • Bạn có thể tham gia chương trình giới thiệu thành viên mới và
              nhận thêm hoa hồng từ các thành viên bạn đã giới thiệu. Hoa hồng
              sẽ được tính dựa trên % giá trị đơn hàng đã rà soát thành công.
            </p>

            <p><strong>4. Thời gian Rà soát Đơn hàng</strong></p>

            <p>
              • Giờ hoạt động của nền tảng là từ 10:00 đến 22:00 hàng ngày. Vui
              lòng thực hiện các hoạt động rà soát trong khung giờ này để đảm
              bảo hệ thống xử lý nhanh chóng.
            </p>

            <p>
              • Để đảm bảo hoa hồng được ghi nhận, vui lòng hoàn thành rà soát
              trong vòng 24 giờ kể từ khi nhận được yêu cầu.
            </p>

            <p>
              <strong>Lưu ý:</strong> Để biết thêm thông tin chi tiết, vui lòng
              liên hệ với dịch vụ chăm sóc khách hàng của chúng tôi.
            </p>
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
