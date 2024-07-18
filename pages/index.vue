<template>
  <div id="index-page">
    <main class="flex-shrink-0 main has-footer">
      <div class="head-top">
        <div class="swipper">
          <marquee
            direction="left"
            scrollamount="7"
            class="img-gen-v-slider marquee2"
          >
            <div class="d-flex list-image-left">
              <img src="../assets/swiper/beach1.jpg" alt="" /><img
                src="../assets/swiper/beach2.jpg"
                alt=""
              /><img src="../assets/swiper/beach3.jpg" alt="" /><img
                src="../assets/swiper/beach4.jpg"
                alt=""
              /><img src="../assets/swiper/beach5.jpg" alt="" /><img
                src="../assets/swiper/beach6.jpg"
                alt=""
              /><img src="../assets/swiper/beach7.jpg" alt="" />
            </div>
          </marquee>
        </div>
      </div>
      <div class="main-container">
        <div class="container mb-4">
          <div class="vip-wrap">
            <div class="tab">
              <div class="tabItem activeItem">Membership Level</div>
              <div class="tabItem">Partners</div>
            </div>
            <div class="vip-list">
              <div class="vip-item">
                <div class="vip-wrap-inset">
                  <a href=""
                    ><div class="vip-icon">
                      <img src="../assets/img/1.png" alt="" /></div
                  ></a>
                  <div class="vip-name flex-auto">Level1</div>
                  <div class="num ml10">20%</div>
                </div>
                <div class="status" style="display: ">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAoCAYAAAACJPERAAAAAXNSR0IArs4c6QAAAsJJREFUWEftlz9oFFEQxr/Z5IiBCCkMaKegYCMENMGATUBIse/d3sGRYCEYbAQbRQsDkVMQDNikCMTuUkQIEVnI2z0Um4BNCkWLiI1gBEGLKxTCEdjsjjxJjs1m73Y35x+E2/Z9M7/3ZmbfzCOk+MrlcvfQ0NAYgBKAcwBOA+hm5u8A1onoOREtmqb5OYU7UJLIcZwxZp4jopMJ2m1mXgAwJaWstdK2hCqlHhLRnaSNRda/ACgIId40s2sKdRznEYDbGYG/5My8yczn8/n8+zj7WKhSaoKIliIG2wAeB0HwJJ/Pr+m15eXlvp6enkJXV9ctAIMR/Ua9Xj8zPj6+GQXvg1YqlUMDAwOfABwNib/5vi8ty3odt3NdaMPDw2Vmng6vE9E90zTvJ0Jd172uCyck3PI8b6RYLL5LCrXruvPMfG1Xp6u7Vqsdm5yc3Nqzmagjx3FeAbgQMpyRUk4lAfW6bdv9uVzuQzhKRFQyTfNZEtTT/+CuyPf9U5ZlfUwD1Rql1DwRNU4LYFYIcbMp1Lbt47lcTuezUYVSysNpgVq3srJyxTCMSshmSQhxKTUUwIYQ4kSb0FUhxGgHqqtvT0474W1VWDHVu7+Qdn7oq0TUx8z9AG6EbxTDMGazVG8QBINEVAjZbBCRbnm6EawJIV6Q4zgvAVzM4rhNrdBQbtNJVvO5fwFd6ECb5omZdceZY+YfhmGcBaA7SqMrpUhw5vCu1+v1kfAIopQqEdHTFLBdSTao7/uXLctajGn8b2NmpGb7yAZl5lEp5WrUm1LKjlwIrQ6eGfpASnk37LHJIPf7oAD0gFUSQrjaqx5Be3t7K3oO+mM53XHcmCZiLvc07Gzh7UDTxDSk6YS3ZcD0602/QfUk0EdER/5GeDMy9skPlNP/F/o18gBu9yRJ9tNUrVYngiDQY2b45Z1keND1Vc/zij8B/KWP4xaca+gAAAAASUVORK5CYII="
                    width="12"
                  />
                </div>
              </div>
              <div class="vip-item">
                <div class="vip-wrap-inset">
                  <a href=""
                    ><div class="vip-icon">
                      <img src="../assets/img/2.png" alt="" /></div
                  ></a>
                  <div class="vip-name flex-auto">Level2</div>
                  <div class="num ml10">20%</div>
                </div>
                <div class="status" style="display: ">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAoCAYAAAACJPERAAAAAXNSR0IArs4c6QAAAsJJREFUWEftlz9oFFEQxr/Z5IiBCCkMaKegYCMENMGATUBIse/d3sGRYCEYbAQbRQsDkVMQDNikCMTuUkQIEVnI2z0Um4BNCkWLiI1gBEGLKxTCEdjsjjxJjs1m73Y35x+E2/Z9M7/3ZmbfzCOk+MrlcvfQ0NAYgBKAcwBOA+hm5u8A1onoOREtmqb5OYU7UJLIcZwxZp4jopMJ2m1mXgAwJaWstdK2hCqlHhLRnaSNRda/ACgIId40s2sKdRznEYDbGYG/5My8yczn8/n8+zj7WKhSaoKIliIG2wAeB0HwJJ/Pr+m15eXlvp6enkJXV9ctAIMR/Ua9Xj8zPj6+GQXvg1YqlUMDAwOfABwNib/5vi8ty3odt3NdaMPDw2Vmng6vE9E90zTvJ0Jd172uCyck3PI8b6RYLL5LCrXruvPMfG1Xp6u7Vqsdm5yc3Nqzmagjx3FeAbgQMpyRUk4lAfW6bdv9uVzuQzhKRFQyTfNZEtTT/+CuyPf9U5ZlfUwD1Rql1DwRNU4LYFYIcbMp1Lbt47lcTuezUYVSysNpgVq3srJyxTCMSshmSQhxKTUUwIYQ4kSb0FUhxGgHqqtvT0474W1VWDHVu7+Qdn7oq0TUx8z9AG6EbxTDMGazVG8QBINEVAjZbBCRbnm6EawJIV6Q4zgvAVzM4rhNrdBQbtNJVvO5fwFd6ECb5omZdceZY+YfhmGcBaA7SqMrpUhw5vCu1+v1kfAIopQqEdHTFLBdSTao7/uXLctajGn8b2NmpGb7yAZl5lEp5WrUm1LKjlwIrQ6eGfpASnk37LHJIPf7oAD0gFUSQrjaqx5Be3t7K3oO+mM53XHcmCZiLvc07Gzh7UDTxDSk6YS3ZcD0602/QfUk0EdER/5GeDMy9skPlNP/F/o18gBu9yRJ9tNUrVYngiDQY2b45Z1keND1Vc/zij8B/KWP4xaca+gAAAAASUVORK5CYII="
                    width="12"
                  />
                </div>
              </div>
              <div class="vip-item">
                <div class="vip-wrap-inset">
                  <a href=""
                    ><div class="vip-icon">
                      <img src="../assets/img/3.png" alt="" /></div
                  ></a>
                  <div class="vip-name flex-auto">Level3</div>
                  <div class="num ml10">20%</div>
                </div>
                <div class="status" style="display: ">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAoCAYAAAACJPERAAAAAXNSR0IArs4c6QAAAsJJREFUWEftlz9oFFEQxr/Z5IiBCCkMaKegYCMENMGATUBIse/d3sGRYCEYbAQbRQsDkVMQDNikCMTuUkQIEVnI2z0Um4BNCkWLiI1gBEGLKxTCEdjsjjxJjs1m73Y35x+E2/Z9M7/3ZmbfzCOk+MrlcvfQ0NAYgBKAcwBOA+hm5u8A1onoOREtmqb5OYU7UJLIcZwxZp4jopMJ2m1mXgAwJaWstdK2hCqlHhLRnaSNRda/ACgIId40s2sKdRznEYDbGYG/5My8yczn8/n8+zj7WKhSaoKIliIG2wAeB0HwJJ/Pr+m15eXlvp6enkJXV9ctAIMR/Ua9Xj8zPj6+GQXvg1YqlUMDAwOfABwNib/5vi8ty3odt3NdaMPDw2Vmng6vE9E90zTvJ0Jd172uCyck3PI8b6RYLL5LCrXruvPMfG1Xp6u7Vqsdm5yc3Nqzmagjx3FeAbgQMpyRUk4lAfW6bdv9uVzuQzhKRFQyTfNZEtTT/+CuyPf9U5ZlfUwD1Rql1DwRNU4LYFYIcbMp1Lbt47lcTuezUYVSysNpgVq3srJyxTCMSshmSQhxKTUUwIYQ4kSb0FUhxGgHqqtvT0474W1VWDHVu7+Qdn7oq0TUx8z9AG6EbxTDMGazVG8QBINEVAjZbBCRbnm6EawJIV6Q4zgvAVzM4rhNrdBQbtNJVvO5fwFd6ECb5omZdceZY+YfhmGcBaA7SqMrpUhw5vCu1+v1kfAIopQqEdHTFLBdSTao7/uXLctajGn8b2NmpGb7yAZl5lEp5WrUm1LKjlwIrQ6eGfpASnk37LHJIPf7oAD0gFUSQrjaqx5Be3t7K3oO+mM53XHcmCZiLvc07Gzh7UDTxDSk6YS3ZcD0602/QfUk0EdER/5GeDMy9skPlNP/F/o18gBu9yRJ9tNUrVYngiDQY2b45Z1keND1Vc/zij8B/KWP4xaca+gAAAAASUVORK5CYII="
                    width="12"
                  />
                </div>
              </div>
              <div class="vip-item active">
                <div class="vip-wrap-inset">
                  <a href=""
                    ><div class="vip-icon">
                      <img src="../assets/img/4.png" alt="" /></div
                  ></a>
                  <div class="vip-name flex-auto">Level4</div>
                  <div class="num ml10">30%</div>
                </div>
                <div class="status" style="display: none">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAoCAYAAAACJPERAAAAAXNSR0IArs4c6QAAAsJJREFUWEftlz9oFFEQxr/Z5IiBCCkMaKegYCMENMGATUBIse/d3sGRYCEYbAQbRQsDkVMQDNikCMTuUkQIEVnI2z0Um4BNCkWLiI1gBEGLKxTCEdjsjjxJjs1m73Y35x+E2/Z9M7/3ZmbfzCOk+MrlcvfQ0NAYgBKAcwBOA+hm5u8A1onoOREtmqb5OYU7UJLIcZwxZp4jopMJ2m1mXgAwJaWstdK2hCqlHhLRnaSNRda/ACgIId40s2sKdRznEYDbGYG/5My8yczn8/n8+zj7WKhSaoKIliIG2wAeB0HwJJ/Pr+m15eXlvp6enkJXV9ctAIMR/Ua9Xj8zPj6+GQXvg1YqlUMDAwOfABwNib/5vi8ty3odt3NdaMPDw2Vmng6vE9E90zTvJ0Jd172uCyck3PI8b6RYLL5LCrXruvPMfG1Xp6u7Vqsdm5yc3Nqzmagjx3FeAbgQMpyRUk4lAfW6bdv9uVzuQzhKRFQyTfNZEtTT/+CuyPf9U5ZlfUwD1Rql1DwRNU4LYFYIcbMp1Lbt47lcTuezUYVSysNpgVq3srJyxTCMSshmSQhxKTUUwIYQ4kSb0FUhxGgHqqtvT0474W1VWDHVu7+Qdn7oq0TUx8z9AG6EbxTDMGazVG8QBINEVAjZbBCRbnm6EawJIV6Q4zgvAVzM4rhNrdBQbtNJVvO5fwFd6ECb5omZdceZY+YfhmGcBaA7SqMrpUhw5vCu1+v1kfAIopQqEdHTFLBdSTao7/uXLctajGn8b2NmpGb7yAZl5lEp5WrUm1LKjlwIrQ6eGfpASnk37LHJIPf7oAD0gFUSQrjaqx5Be3t7K3oO+mM53XHcmCZiLvc07Gzh7UDTxDSk6YS3ZcD0602/QfUk0EdER/5GeDMy9skPlNP/F/o18gBu9yRJ9tNUrVYngiDQY2b45Z1keND1Vc/zij8B/KWP4xaca+gAAAAASUVORK5CYII="
                    width="12"
                  />
                </div>
              </div>
              <div class="vip-item">
                <div class="vip-wrap-inset">
                  <a href=""
                    ><div class="vip-icon">
                      <img src="../assets/img/5.png" alt="" /></div
                  ></a>
                  <div class="vip-name flex-auto">Level5</div>
                  <div class="num ml10">30%</div>
                </div>
                <div class="status" style="display: ">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAoCAYAAAACJPERAAAAAXNSR0IArs4c6QAAAsJJREFUWEftlz9oFFEQxr/Z5IiBCCkMaKegYCMENMGATUBIse/d3sGRYCEYbAQbRQsDkVMQDNikCMTuUkQIEVnI2z0Um4BNCkWLiI1gBEGLKxTCEdjsjjxJjs1m73Y35x+E2/Z9M7/3ZmbfzCOk+MrlcvfQ0NAYgBKAcwBOA+hm5u8A1onoOREtmqb5OYU7UJLIcZwxZp4jopMJ2m1mXgAwJaWstdK2hCqlHhLRnaSNRda/ACgIId40s2sKdRznEYDbGYG/5My8yczn8/n8+zj7WKhSaoKIliIG2wAeB0HwJJ/Pr+m15eXlvp6enkJXV9ctAIMR/Ua9Xj8zPj6+GQXvg1YqlUMDAwOfABwNib/5vi8ty3odt3NdaMPDw2Vmng6vE9E90zTvJ0Jd172uCyck3PI8b6RYLL5LCrXruvPMfG1Xp6u7Vqsdm5yc3Nqzmagjx3FeAbgQMpyRUk4lAfW6bdv9uVzuQzhKRFQyTfNZEtTT/+CuyPf9U5ZlfUwD1Rql1DwRNU4LYFYIcbMp1Lbt47lcTuezUYVSysNpgVq3srJyxTCMSshmSQhxKTUUwIYQ4kSb0FUhxGgHqqtvT0474W1VWDHVu7+Qdn7oq0TUx8z9AG6EbxTDMGazVG8QBINEVAjZbBCRbnm6EawJIV6Q4zgvAVzM4rhNrdBQbtNJVvO5fwFd6ECb5omZdceZY+YfhmGcBaA7SqMrpUhw5vCu1+v1kfAIopQqEdHTFLBdSTao7/uXLctajGn8b2NmpGb7yAZl5lEp5WrUm1LKjlwIrQ6eGfpASnk37LHJIPf7oAD0gFUSQrjaqx5Be3t7K3oO+mM53XHcmCZiLvc07Gzh7UDTxDSk6YS3ZcD0602/QfUk0EdER/5GeDMy9skPlNP/F/o18gBu9yRJ9tNUrVYngiDQY2b45Z1keND1Vc/zij8B/KWP4xaca+gAAAAASUVORK5CYII="
                    width="12"
                  />
                </div>
              </div>
              <div class="vip-item">
                <div class="vip-wrap-inset">
                  <a href=""
                    ><div class="vip-icon">
                      <img src="../assets/img/6.png" alt="" /></div
                  ></a>
                  <div class="vip-name flex-auto">Level6</div>
                  <div class="num ml10">40%</div>
                </div>
                <div class="status" style="display: ">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAoCAYAAAACJPERAAAAAXNSR0IArs4c6QAAAsJJREFUWEftlz9oFFEQxr/Z5IiBCCkMaKegYCMENMGATUBIse/d3sGRYCEYbAQbRQsDkVMQDNikCMTuUkQIEVnI2z0Um4BNCkWLiI1gBEGLKxTCEdjsjjxJjs1m73Y35x+E2/Z9M7/3ZmbfzCOk+MrlcvfQ0NAYgBKAcwBOA+hm5u8A1onoOREtmqb5OYU7UJLIcZwxZp4jopMJ2m1mXgAwJaWstdK2hCqlHhLRnaSNRda/ACgIId40s2sKdRznEYDbGYG/5My8yczn8/n8+zj7WKhSaoKIliIG2wAeB0HwJJ/Pr+m15eXlvp6enkJXV9ctAIMR/Ua9Xj8zPj6+GQXvg1YqlUMDAwOfABwNib/5vi8ty3odt3NdaMPDw2Vmng6vE9E90zTvJ0Jd172uCyck3PI8b6RYLL5LCrXruvPMfG1Xp6u7Vqsdm5yc3Nqzmagjx3FeAbgQMpyRUk4lAfW6bdv9uVzuQzhKRFQyTfNZEtTT/+CuyPf9U5ZlfUwD1Rql1DwRNU4LYFYIcbMp1Lbt47lcTuezUYVSysNpgVq3srJyxTCMSshmSQhxKTUUwIYQ4kSb0FUhxGgHqqtvT0474W1VWDHVu7+Qdn7oq0TUx8z9AG6EbxTDMGazVG8QBINEVAjZbBCRbnm6EawJIV6Q4zgvAVzM4rhNrdBQbtNJVvO5fwFd6ECb5omZdceZY+YfhmGcBaA7SqMrpUhw5vCu1+v1kfAIopQqEdHTFLBdSTao7/uXLctajGn8b2NmpGb7yAZl5lEp5WrUm1LKjlwIrQ6eGfpASnk37LHJIPf7oAD0gFUSQrjaqx5Be3t7K3oO+mM53XHcmCZiLvc07Gzh7UDTxDSk6YS3ZcD0602/QfUk0EdER/5GeDMy9skPlNP/F/o18gBu9yRJ9tNUrVYngiDQY2b45Z1keND1Vc/zij8B/KWP4xaca+gAAAAASUVORK5CYII="
                    width="12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mb-4">
          <div class="banner-list">
            <div class="list-item">
              <img
                src="../assets/img/486f5d68fac4f5d1.jpg"
              />
              <div class="right">
                <p class="title">Vịnh Hạ Long</p>
                <p class="subtitle">
                  Vịnh Hạ Long được Unesco nhiều lần công nhận là Di sản thiên
                  nhiên của Thế giới với hàng nghìn hòn đảo được làm nên bởi tạo
                  hoá kỳ vĩ và sống động. Vịnh Hạ Long có phong cảnh tuyệt đẹp
                  nên nơi đây là một điểm du lịch rất hấp dẫn với du khách trong
                  nước và quốc tế.
                </p>
              </div>
            </div>
            <div class="list-item">
              <img
                src="../assets/img/93985c9deee79d51.jpg"
              />
              <div class="right">
                <p class="title">Hội An</p>
                <p class="subtitle">
                  Phố cổ Hội An là một đô thị cổ nằm ở hạ lưu sông Thu Bồn,
                  thuộc vùng đồng bằng ven biển tỉnh Quảng Nam, Việt Nam, cách
                  thành phố Đà Nẵng khoảng 30 km về phía Nam.
                </p>
              </div>
            </div>
            <div class="list-item">
              <img
                src="../assets/img/3740631511d46098.jpg"
              />
              <div class="right">
                <p class="title">Sài Gòn</p>
                <p class="subtitle">
                  Nhà thờ Đức Bà là một điểm check-in không thể bỏ lỡ khi đến
                  TP. Hồ Chí Minh. Với kiến trúc cổ của Pháp cùng không gian
                  sang trọng từ bên ngoài đến bên trong thánh đường, địa điểm
                  này được coi là công trình nhà thờ Công giáo có quy mô lớn
                  nhất Việt Nam và cũng là một trong những biểu tượng của Sài
                  Gòn.
                </p>
              </div>
            </div>
            <div class="list-item">
              <img
                src="../assets/img/5d8f7d8945d11842.jpg"
              />
              <div class="right">
                <p class="title">Phú Quốc</p>
                <p class="subtitle">
                  Phú Quốc là một thành phố đảo trực thuộc tỉnh Kiên Giang, Việt
                  Nam. Đảo Phú Quốc cùng các đảo nhỏ lân cận và quần đảo Thổ Chu
                  hợp lại tạo thành Thành phố Phú Quốc ở vịnh Thái Lan, đây là
                  thành phố đảo đầu tiên được thành lập của Việt Nam.
                </p>
              </div>
            </div>
            <div class="list-item">
              <img
                src="../assets/img/b25c586e79f5bb15.jpg"
              />
              <div class="right">
                <p class="title">Đà Lạt</p>
                <p class="subtitle">
                  Thành phố ngàn hoa – Đà Lạt chính là địa điểm được rất nhiều
                  du khách quan tâm. Nơi đây nổi tiếng với khí hậu ôn hòa, dễ
                  chịu, cảnh sắc thiên nhiên thơ mộng, lãng mạn, nhiều khu nghỉ
                  dưỡng, vui chơi. Đà Lạt cũng chính là điểm đến mơ ước của các
                  tín đồ mê du lịch, của cả du khách trong và ngoài nước
                </p>
              </div>
            </div>
            <div class="list-item">
              <img
                src="../assets/img/522d377ca561061c.jpg"
              />
              <div class="right">
                <p class="title">Sapa</p>
                <p class="subtitle">
                  Sa Pa là một huyện vùng cao của tỉnh Lào Cai, nằm ở phía Tây
                  Bắc của Việt Nam, thị trấn Sa Pa ở độ cao 1.600 mét so với mực
                  nước biển, cách thành phố Lào Cai 38 km và 376 km tính từ Hà
                  Nội. Ngoài con đường chính từ thành phố Lào Cai, để tới SaPa
                  còn một tuyến giao thông khác, quốc lộ 4D nối từ xã Bình Lư,
                  Lai Châu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<!-- End of LiveChat code -->

<script>
export default {
  name: 'IndexPage',
  components: {},
  data() {
    return {}
  },
}
</script>
<style scpoed lang="scss">
/* #content {
  padding: 75px 10px 10px 10px;
} */
#index-page {
  margin-top: 80px;
  .main .main-container {
    background-color: #ffffff;
    border-radius: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .vip-wrap .tab {
    background: #e8e8e8;
    -webkit-box-shadow: 0 0.04rem 0.06667rem 0 rgba(0, 0, 0, 0.11);
    box-shadow: 0 0.04rem 0.06667rem #0000001c;
    padding: 0.05333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 2.5rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border-radius: 1.25rem;
  }
  .vip-wrap .vip-list {
    margin-top: 0.53333rem;
    padding: 0.13333rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-image: url(../assets/img/bg2.jpg);
    background-size: cover;
    border-radius: 10px;
  }
  .vip-wrap .tab .tabItem {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
    cursor: pointer;
    color: #939393;
  }
  .vip-wrap .vip-list .vip-item {
    -webkit-flex-basis: 32%;
    -ms-flex-preferred-size: 32%;
    flex-basis: 32%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    border-radius: 10px;
    -webkit-box-shadow: 0 0.05333rem 0.10667rem 0 rgba(0, 0, 0, 0.16);
    box-shadow: 0 0.05333rem 0.10667rem #00000029;
    text-align: center;
    margin-bottom: 0.4rem;
  }
  .vip-wrap .vip-list .vip-wrap-inset,
  .vip-wrap .vip-list .partner-item {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 16px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 5px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .vip-wrap .vip-list .num {
    color: #fff;
    font-weight: 600;
    font-size: 0.9rem;
    text-shadow: 2px 1px 2px #000000;
  }
  .header {
    padding: 10px 15px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99;
    background: transparent;
    border-radius: 0;
  }
  .swipper {
    img {
      height: 250px;
      margin: 0 10px;
      border-radius: 25px;
    }
  }
  .vip-wrap .vip-list .vip-icon img {
    width: 100px;
  }
  .vip-wrap .tab .activeItem {
    background: #ffffff;
    border-radius: 1.25rem;
  }
  .banner-list {
    width: 100%;
    margin: 0.53333rem 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .banner-list .list-item {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 15px;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  .banner-list .list-item img {
    display: block;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .banner-list .list-item .right {
    overflow: hidden;
    padding: 0.5rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .banner-list .list-item .title {
    color: #2d2926;
    font-weight: bolder;
    font-size: 0.9rem;
    display: block;
    margin-top: 0.2rem;
    overflow: hidden;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    margin-bottom: 0.2rem;
  }
  .banner-list .list-item .subtitle {
    color: #8b8b8b;
    margin-top: 0.1rem;
    line-height: 1.5;
    font-size: 14px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
