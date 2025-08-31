<template>
  <div class="bhxh-footer portal-home" style="position: relative; height: 60px">
    <div id="footer">
      <div class="container">
        <div class="footer">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-8">
              <p>©2024 – 2025 - Bản quyền thuộc về Bảo hiểm xã hội Việt Nam.</p>
              <p>
                Khi sử dụng lại thông tin từ website này, xin vui lòng ghi rõ
                nguồn “Cổng thông tin điện tử BHXH Việt Nam”
              </p>
            </div>
            <div class="col-12 col-sm-12 col-md-4">
              <div class="row">
                <div class="col-12 col-sm-12 col-md-12">
                  <ul>
                    <li>
                      <a href="javascript:void(0)"
                        ><img alt="image" src="../../assets/img/facicon.svg"
                      /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"
                        ><img alt="image" src="../../assets/img/twticon.svg"
                      /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"
                        ><img alt="image" src="../../assets/img/google.svg"
                      /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"
                        ><img alt="image" src="../../assets/img/ytubeicon.svg"
                      /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"
                        ><img alt="image" src="../../assets/img/snap.svg"
                      /></a>
                    </li>
                    <li>
                      <a href="javascript:void(0)"
                        ><img alt="image" src="../../assets/img/in.svg"
                      /></a>
                    </li>
                  </ul>
                </div>
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
  data() {
    return {
      active: 'home',
    }
  },
  methods: {},
}
</script>

<style lang="css">
#footer {
  bottom: 0;
  width: 100%;
  height: auto;
  background: #142b50;
  font-size: 14px;
  line-height: 1.42857143;
}

.footer {
  padding: 10px 0;
}

.footer p {
  color: #fff;
  margin-bottom: 0;
}

.footer ul {
  padding: 0;
  text-align: right;
  margin-top: 3px;
}

.footer ul li {
  display: inline-block;
  padding: 5px 3px;
}

.footer ul li img {
  height: 25px;
}

.footer .trusted-box {
  text-align: right;
}

@media (max-width: 1000px) {
  .footer {
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .footer,
  .footer .trusted-box,
  .footer ul {
    text-align: center;
  }
}
</style>
