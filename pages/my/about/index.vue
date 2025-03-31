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
                <h6 class="mb-1 text-left">Về Crescent Mall</h6>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p>Crescent Mall là một trong những trung tâm thương mại cao cấp hàng đầu tại Việt Nam. Kể từ khi khai trương vào năm 2011, chúng tôi đã không ngừng phát triển để trở thành điểm đến mua sắm và giải trí được yêu thích của nhiều khách hàng thân thiết.</p>

            <p>Với tổng diện tích hơn 45.000m², Crescent Mall tự hào là nơi quy tụ của hơn 130 thương hiệu local và quốc tế hàng đầu. Từ thời trang cao cấp, mỹ phẩm, đồ điện tử đến ẩm thực phong phú, chúng tôi cam kết mang đến trải nghiệm mua sắm đẳng cấp và đa dạng cho mọi khách hàng.</p>

            <p>Không chỉ là điểm đến mua sắm, Crescent Mall còn là không gian giải trí hoàn hảo với rạp chiếu phim hiện đại, khu vui chơi trẻ em, và nhiều nhà hàng sang trọng. Thiết kế kiến trúc độc đáo của chúng tôi, lấy cảm hứng từ hình ảnh mặt trăng khuyết, tạo nên một không gian mua sắm sang trọng và đẳng cấp.</p>

            <p>Trong những năm qua, Crescent Mall liên tục đổi mới và nâng cấp để mang đến những trải nghiệm tốt nhất cho khách hàng. Chúng tôi tự hào là điểm đến của nhiều sự kiện văn hóa, nghệ thuật và thời trang lớn. Với hệ thống tiện ích đầy đủ cùng dịch vụ chuyên nghiệp, Crescent Mall không chỉ là trung tâm thương mại mà còn là biểu tượng của phong cách sống hiện đại.</p>

            <p>Hãy đến và trải nghiệm không gian mua sắm đẳng cấp cùng những dịch vụ tiện ích tốt nhất tại Crescent Mall - nơi phong cách sống thời thượng hội tụ.</p>
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
  metaInfo: 'Về Crescent Mall'
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
