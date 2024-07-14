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
                      d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520h200L520-800v200Z"/>
                  </svg>
                </div>
              </div>
              <div class="col pl-0 align-self-center">
                <h6 class="mb-1 text-left">Về chúng tôi</h6>
              </div>
            </div>
          </div>
          <div class="card-body"><p class="text-secondary"></p>
            <p>TravelPerk được thành lập vào năm 2015 bởi Avi Meir, Javier Suarez và Ron Levin. Mục đích của họ là tạo
              ra một nền tảng tất cả trong một nhằm giúp việc quản lý các chuyến công tác trở nên dễ dàng hơn và khiến
              khách du lịch hài lòng.</p>

            <p>Ngay sau khi được thành lập, TravelPerk đã nhận được một vòng gọi vốn series A trị giá 7 triệu đô la do
              Spark Capital dẫn đầu. Vào tháng 10 năm 2018, công ty đã huy động được vòng Series B trị giá 21 triệu đô
              la do Target Global, Felix Capital, Spark Capital, Sunstone và Amplo dẫn đầu. Vào tháng 7 năm 2019, công
              ty đã hoàn tất khoản tài trợ sê-ri C gồm hai phần trị giá 104 triệu đô la được hỗ trợ bởi Kinnevik, Đối
              tác của DST Global, Target Global, Felix Capital, Sunstone và LocalGlobe.</p>

            <p>Vào năm 2020, do những thay đổi liên tục trong các quy định về du lịch và hướng dẫn về sức khỏe/an toàn
              do đại dịch, TravelPerk đã mua lại Albatross API, một công ty phần mềm đã phát triển API TravelSafe, cung
              cấp thông tin về sức khỏe và an toàn theo thời gian thực cho khách du lịch. Trong cùng năm đó, công ty
              cũng đã ra mắt thị trường trực tuyến, nơi khách hàng của họ có thể tích hợp các sản phẩm và dịch vụ của
              đối tác vào nền tảng và quy trình làm việc của riêng họ.</p>

            <p>Vào năm 2021, TravelPerk đã mua lại NexTravel (Thung lũng Silicon), một trong những nền tảng du lịch công
              tác lớn nhất ở Hoa Kỳ, ClickTravel (Birmingham), công ty hàng đầu về du lịch nội địa ở Vương quốc Anh và
              Susterra (London), một công ty tư vấn trách nhiệm doanh nghiệp để thúc đẩy TravelPerk's du lịch bền vững
              lên cấp độ tiếp theo. Trong cùng năm đó, công ty đã huy động được 160 triệu đô la trong vòng tài trợ sê-ri
              D và vào năm 2022, công ty đã huy động được thêm 115 triệu đô la cho vòng thứ hai của sê-ri D, mở ra trạng
              thái kỳ lân với mức định giá hơn 1 tỷ đô la.</p>

            <p>&nbsp;</p>
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
  metaInfo: 'Về chúng tôi'
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
