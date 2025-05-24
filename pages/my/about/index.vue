<template>
  <div id="rule">
    <div class="main-container">
      <div class="container">
        <div class="card">
          <div class="card-header border-bottom ">
            <div class="row align-items-center">
              <div class="col-auto">
                <div class="icon icon-40 rounded bg-default-light">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                       fill="#fff">
                    <path
                      d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-623l280-161 280 161v286L440-176 160-337v-286Zm320 0Z"/>
                  </svg>
                </div>
              </div>
              <div class="col pl-0 align-self-center">
                <h6 class="mb-1 text-left">Về Viettel Post</h6>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>Viettel Post là một trong những công ty chuyển phát nhanh hàng đầu tại Việt Nam. Kể từ khi thành lập vào năm 2003, chúng tôi đã không ngừng phát triển để trở thành đối tác tin cậy của hàng triệu khách hàng cá nhân và doanh nghiệp trên toàn quốc.</p>

            <p>Với mạng lưới phủ sóng rộng khắp 63 tỉnh thành, Viettel Post tự hào sở hữu hơn 1.000 điểm giao dịch và hàng nghìn nhân viên chuyên nghiệp. Từ dịch vụ chuyển phát nhanh trong nước, quốc tế đến thương mại điện tử, chúng tôi cam kết mang đến giải pháp logistics toàn diện và hiệu quả cho mọi nhu cầu.</p>

            <p>Không chỉ là đơn vị chuyển phát, Viettel Post còn là đối tác đáng tin cậy trong lĩnh vực thương mại điện tử với nền tảng công nghệ hiện đại, hệ thống kho bãi tự động hóa và đội ngũ giao hàng chuyên nghiệp. Chúng tôi cung cấp dịch vụ fulfillment, cod và nhiều giải pháp logistics thông minh khác.</p>

            <p>Trong những năm qua, Viettel Post liên tục đầu tư vào công nghệ và con người để nâng cao chất lượng dịch vụ. Chúng tôi tự hào là đơn vị tiên phong trong việc ứng dụng công nghệ số vào hoạt động logistics, từ hệ thống theo dõi đơn hàng real-time đến giải pháp giao hàng thông minh. Với cam kết "Nhanh - Đúng - An toàn", Viettel Post không chỉ là công ty chuyển phát mà còn là cầu nối tin cậy trong nền kinh tế số.</p>

            <p>Hãy trải nghiệm dịch vụ chuyển phát chuyên nghiệp và tin cậy cùng Viettel Post - nơi kết nối những khoảng cách, mang đến sự thuận tiện cho cuộc sống hiện đại.</p>
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
  metaInfo: 'Về Viettel Post'
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
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .main-container {
    height: 900px;
    overflow-y: auto;
  }

  .card {
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  }

  .icon {
    background: linear-gradient(45deg, #1a237e, #311b92);
  }

  .card-header {
    background-color: #fff;
    padding: 1.25rem;

    h6 {
      font-size: 18px;
      font-weight: 600;
      color: #1a237e;
    }
  }

  .card-body {
    padding: 1.5rem;
  }
}
</style>
