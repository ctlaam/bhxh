<template>
  <div id="rule">
    <div class="main-container">
      <div class="container">
        <div class="card">
          <div class="card-header border-bottom">
            <div class="row align-items-center">
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
                      d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-40-343 237-137-237-137-237 137 237 137ZM160-623l280-161 280 161v286L440-176 160-337v-286Zm320 0Z"
                    />
                  </svg>
                </div>
              </div>
              <div class="col pl-0 align-self-center">
                <h6 class="mb-1 text-left">Về Viettel Post</h6>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>
              Viettel Post là một trong những đơn vị cung cấp dịch vụ bưu chính
              và logistics hàng đầu tại Việt Nam. Kể từ khi thành lập, chúng tôi
              đã không ngừng phát triển và cải tiến để trở thành đối tác tin cậy
              của hàng triệu khách hàng trong việc vận chuyển và giao nhận hàng
              hóa.
            </p>

            <p>
              Với mạng lưới rộng khắp trên toàn quốc, Viettel Post tự hào là nơi
              cung cấp các dịch vụ chuyển phát nhanh, bưu phẩm, hàng hóa và giải
              pháp logistics chất lượng cao. Chúng tôi cam kết mang đến cho
              khách hàng dịch vụ an toàn, nhanh chóng và hiệu quả, giúp kết nối
              mọi miền đất nước.
            </p>

            <p>
              Không chỉ là đơn vị vận chuyển, Viettel Post còn cung cấp các dịch
              vụ gia tăng như thu hộ, phát tận nơi, dịch vụ kho vận, và thanh
              toán điện tử. Chúng tôi luôn lắng nghe và đáp ứng mọi nhu cầu của
              khách hàng, từ các doanh nghiệp lớn đến những cá nhân có nhu cầu
              gửi nhận hàng hóa.
            </p>

            <p>
              Với đội ngũ nhân viên chuyên nghiệp và hệ thống công nghệ hiện
              đại, Viettel Post liên tục nâng cấp và cải tiến dịch vụ để mang
              đến cho khách hàng trải nghiệm tốt nhất. Chúng tôi tự hào là đối
              tác chiến lược của nhiều doanh nghiệp, góp phần vào sự phát triển
              của thương mại điện tử và nền kinh tế số tại Việt Nam.
            </p>

            <p>
              Hãy đến với Viettel Post để trải nghiệm dịch vụ chuyển phát nhanh,
              an toàn và tiện lợi. Chúng tôi cam kết luôn đồng hành cùng bạn
              trong mọi hành trình gửi và nhận hàng hóa.
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
  metaInfo: 'Về Crescent Mall',
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
