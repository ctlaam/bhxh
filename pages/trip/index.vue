<template>
  <div style="margin-top: 80px;margin-bottom: 80px;">
    <div class="row w-100">
      <div class="col-6 mt-3 text-center"><h5 class="text-white">0.00</h5>
        <p class="text-white mb-4 fz14">Tổng Tài Sản</p></div>
      <div class="col-6 mt-3 text-center"><h5 class="text-white">0</h5>
        <p class="text-white mb-4 fz14">Hoa Hồng Hôm Nay</p></div>
    </div>
    <div class="row w-100">
      <div class="col-6 mt-3 text-center"><h5 class="text-white">20</h5>
        <p class="text-white mb-4 fz14">Hành Trình Hàng Ngày</p></div>
      <div class="col-6 mt-3 text-center"><h5 class="text-white">0</h5>
        <p class="text-white mb-4 fz14">Hành Trình Đã Đi</p></div>
    </div>
    <div class="main-container w-100"><!-- page content start -->
      <div class="product-area" style="max-width: 100%; overflow-x: hidden;">
        <div class="d-flex align-items-center mb-2 animate-area-0 animated slideOutLeft infinite">
          <img src="~/assets/trips/8d4eb2242bdc6c89.jpg" class="border-radius-1 dashboard-product-image me-2">
          <img src="~/assets/trips/f9f8a5ee7c8e297b.jpg" class="border-radius-1 dashboard-product-image me-2">
          <img src="~/assets/trips/b882993b95877f40.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/314c90afcc377d26.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/7632eb27e143f06f.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/c2b309c08fb91240.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/712ab7ee3dceb7c1.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/e26a108d537a2e28.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/7c453bbbe50f1b22.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/2282a6ab28b2951c.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/151ac364b0bd6381.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/5cbfe07073e0bb48.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/3411546ffa2763bf.jpg" class="border-radius-1 dashboard-product-image me-2"><img
          src="~/assets/trips/6b710f89313c3364.jpg" class="border-radius-1 dashboard-product-image me-2">
        </div><!-- PWA add to home display -->
        <div class="container mb-4 card">
          <div class="tigerBg">
            <div class="num_box" style="visibility:hidden;">
              <div class="tiger"></div>
              <div class="tiger"></div>
              <div class="tiger"></div>
            </div>
          </div>
          <button type="button" class="openmode" style=" visibility: hidden; " data-toggle="modal"
                  data-target="#exampleModalScrollable">
            Launch demo modal scroll
          </button>
          <button class="btn btn-block btn-default rounded play text-white" style="background-color: #25a0fe;font-weight:600"
                  id="addtohome">Tour Hành Trình
          </button>
          <style>
            .btn-default[disabled] {
              background-color: #25a0fe !important;
              color: #ffffff;
            }

          </style>
        </div>
        <div class="container mb-3" style="text-align:center;font-weight:600;font-size:1rem; color: #212529">
          Explore Tours
        </div>
        <div class="hotels" data-v-91fdc248="">
          <div class="hotel-item" data-v-91fdc248=""><img src="~/assets/hotels/486f5d68fac4f5d1.jpg" alt=""
                                                          class="left" data-v-91fdc248="">
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Vịnh Hạ Long</div>
              <div class="subtitle" data-v-91fdc248="">Vịnh Hạ Long được Unesco nhiều lần công nhận là Di sản thiên
                nhiên của Thế giới với hàng nghìn hòn đảo được làm nên bởi tạo hoá kỳ vĩ và sống động. Vịnh Hạ Long có
                phong cảnh tuyệt đẹp nên nơi đây là một điểm du lịch rất hấp dẫn với du khách trong nước và quốc tế.
              </div>
            </div>
          </div>
          <div class="hotel-item" data-v-91fdc248=""><img src="~/assets/hotels/93985c9deee79d51.jpg" alt=""
                                                          class="left" data-v-91fdc248="">
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Hội An</div>
              <div class="subtitle" data-v-91fdc248="">Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn, thuộc
                vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách thành phố Đà Nẵng khoảng 30 km về phía Nam.
              </div>
            </div>
          </div>
          <div class="hotel-item" data-v-91fdc248=""><img src="~/assets/hotels/3740631511d46098.jpg" alt=""
                                                          class="left" data-v-91fdc248="">
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Sài Gòn</div>
              <div class="subtitle" data-v-91fdc248="">Nhà thờ Đức Bà là một điểm check-in không thể bỏ lỡ khi đến TP.
                Hồ Chí Minh. Với kiến trúc cổ của Pháp cùng không gian sang trọng từ bên ngoài đến bên trong thánh
                đường, địa điểm này được coi là công trình nhà thờ Công giáo có quy mô lớn nhất Việt Nam và cũng là một
                trong những biểu tượng của Sài Gòn.
              </div>
            </div>
          </div>
          <div class="hotel-item" data-v-91fdc248=""><img src="~/assets/hotels/5d8f7d8945d11842.jpg" alt=""
                                                          class="left" data-v-91fdc248="">
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Phú Quốc</div>
              <div class="subtitle" data-v-91fdc248="">Phú Quốc là một thành phố đảo trực thuộc tỉnh Kiên Giang, Việt
                Nam. Đảo Phú Quốc cùng các đảo nhỏ lân cận và quần đảo Thổ Chu hợp lại tạo thành Thành phố Phú Quốc ở
                vịnh Thái Lan, đây là thành phố đảo đầu tiên được thành lập của Việt Nam.
              </div>
            </div>
          </div>
          <div class="hotel-item" data-v-91fdc248=""><img src="~/assets/hotels/b25c586e79f5bb15.jpg" alt=""
                                                          class="left" data-v-91fdc248="">
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Đà Lạt</div>
              <div class="subtitle" data-v-91fdc248="">Thành phố ngàn hoa – Đà Lạt chính là địa điểm được rất nhiều du
                khách quan tâm. Nơi đây nổi tiếng với khí hậu ôn hòa, dễ chịu, cảnh sắc thiên nhiên thơ mộng, lãng mạn,
                nhiều khu nghỉ dưỡng, vui chơi. Đà Lạt cũng chính là điểm đến mơ ước của các tín đồ mê du lịch, của cả
                du khách trong và ngoài nước
              </div>
            </div>
          </div>
          <div class="hotel-item" data-v-91fdc248=""><img src="~/assets/hotels/522d377ca561061c.jpg" alt=""
                                                          class="left" data-v-91fdc248="">
            <div class="right" data-v-91fdc248="">
              <div class="title" data-v-91fdc248="">Sapa</div>
              <div class="subtitle" data-v-91fdc248="">Sa Pa là một huyện vùng cao của tỉnh Lào Cai, nằm ở phía Tây Bắc
                của Việt Nam, thị trấn Sa Pa ở độ cao 1.600 mét so với mực nước biển, cách thành phố Lào Cai 38 km và
                376 km tính từ Hà Nội. Ngoài con đường chính từ thành phố Lào Cai, để tới SaPa còn một tuyến giao thông
                khác, quốc lộ 4D nối từ xã Bình Lư, Lai Châu.
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
  name: "index"
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/my.scss';
@import '~/assets/animate/animate.min.css';
</style>

