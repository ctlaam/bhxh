<template>
  <div class="main-content">
    <Header></Header>
    <div id="content" ref="content">
      <Nuxt />
    </div>
    <Footer></Footer>
    <div class="yhy-append-wrap">
      <div id="yhy-append" class="yhy-append">
        <a
          href="javascript:void(0)"
          title="TRUNG TÂM GIÁM SÁT QUỐC GIA VỀ CHÍNH PHỦ SỐ"
          id="btnEMC"
          class="yhy-append-btn yhy-btn-emc"
          style="display: flex"
        >
          <span class="yhy-append-icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAANCAYAAACgu+4kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKeSURBVHgBhVJbSJNhGH6/7z9s/07mllvSby7JPBLVWHiiA6UUgV55ZbsJIrvzoouIuogiKCjopiCQMrwoTSExoRoGUwlEy+mFHbBp6qaba266/XP/4ev/ZXYAoQcevo+X533f73vfB8F2ODNgMVCchzC4ATBdATrKjmmaAEP7EQ3d+tDc05W+pjVNiv7NJMhQP3BRwewtoGgbMCQJa7OvlPT8JCKQBmtBAW0rcmNuR0qOTJ1P9XpCfwpUd1mPFi33nyj5Wn2Y/w7RUbRy2xtsCwT8Gbvp0ClEm8Rw3P9CkmIzumM3XLSzpiTZUf9gs0Cwp6xwNpH7rowPF6/HdeC9Xwi+meC1zpXAcnHhpYcteRJjhAy8XrdsjM29bYutjz4BC2+ExIKAo537eJZI/aXWSHE6ToGvYxckIzjpjc8Ome0NFzwOkWlF76GF9sFl87TO4ahqU3tqyTH13MCyTN0DCVUSCcHnkR0QnjYCpSiJ+fTqkpBfufcADgB7ZBUMzWEoTX8DdQ68mshnP67gQb94PZVipkmGQGDcAnp1WiaMbbt1ZpDk0KS34DiIn8wg9O4EX34dLHHJkNZ5a3TUyw+xWJ6JGnTauIMzI/Y9rITBAIRyc7ZI35ee9gl9VeOEs8notbnhcYpdjE09u0uS0Y9d5eVidyQib20Be2pz+Yqg+yZPsR4TUZBRgcyqkDjXvDQ8hY18I+g5RokGxmtZy/wjU0WNKIHgSgw9/9sH2j3nCu8+66KtV/MJKjOKMugE0SfImeE0UWgLpvezmCpdkAXvycToHVUfRtv4kOGAc7RanHW1dM5pp0y5WIRzMkT5uaikx/o2Im/aMz8mVN2iyhSC7aHFGZUm7VUquWw8qTKhUrOxtCX8H3CWm2vL8jd+AX3nDRFsNigEAAAAAElFTkSuQmCC"
              alt="EMC"
            />
          </span>
          <span class="yhy-append-txt">Đã kết nối EMC</span>
        </a>
        <a
          href="https://mic.gov.vn/"
          target="_blank"
          title="BỘ THÔNG TIN VÀ TRUYỀN THÔNG"
          id="btnBTTTT"
          class="yhy-append-btn yhy-btn-btttt"
          style="display: none"
        >
          <span class="yhy-append-icon">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAURSURBVHgB5VZbbFRVFF3nPmbmlg7tUKCRR6kGUaC1EQhoE8Qmgv2oiXxINaJGfkTjl8Yfo4YYoumHJJoYP1QIYowfRiPGN4IkJgZBm/ioUKStrZTWttMync7MfW7XKdOkNNNa/dSb3Jxzz9lnr73XfpwL/NcfNV/BnMgKh2M+D2WaqOTUj8UwmgWicmBMKeXPR8/fAhYKssYw4AQG1loKqVCQheDGSPCBbWKTCDKGiYHIw0A2iz+qqlTmXwGKSEUAbKDASo5/SoBcPsJWgq0giPYQlolB7nfYCl00ajvfjy2gk94O/CNAgjnkp14iNNGTS16EhjDCHgGBZPKUps8ksKGoge8pgrdxyy0z4QcFnHcc1VNKt1VqkR41RhHqvQDnAsFLEZBQgpdtC59T2XgsgWqTMZwQuKZgFY3aE4Q4SODDoUKnGKjMa6uV+n2mbmPmgi/SGBAxMnDGF7RRyZGqOFaZET4KQ+wXGz/mAxybCHBShTjCI6tTcbRYIVqiENsLIcS0sJpW1xCzbE5ACiS016aBOs/D4zHB3lRc7Ut7eCYycUAUDhqC6xYnsLAqgRS9fpi0Vo+5aE866FqUwAaG4Q4a/CvjutB1sWJOQBdMCGDcD+GRpsNJR53IevIQQTL04k5S+wP39455eHvUw2s8XVkZx1NWHLvGPTxBFTF+t5Kgm8WkujhCzPXQwxv0mAvk3uJ3xWVX7tfzrCv1IwU5UKAM1xfrvXRedmd80UDoG5blE4Hcpefjrqzl/lK+1RnKzgrI+DVR6Ca+a4qAy4ujNSHSoueX8lI7WpDXp85oA3KebCnOr6esKp5ZH4i0cqwrSSk3TEqWuyFq+NlTXB4qjiaj/wVlyh0D7zGRaqbOJZQ659ho1/M4cGGa7t5CgFpvRtjUdEBm4U6YKGRdPMZYXWTMzsZ8fJpMqg4tQy+XhT52MFFWMTirlYkvU5Z6a4oFxnUX67SRBi1jV/qKhuRYPt+yEZxFqScIZCff+9IF6R8mP4yZpF0pDOXlDSqsnJLjejNlurmW1N+Xc5NnhrT8CAuQ8yjjytMu9VGmviSl+qGHnczUJDNyPWtvyaI4amntI+R6E0vjt34mw6Q3EUZVgLu10zTohUDhFUPhTcvALSyNlSyXa0nv+2wCOgdy0zGu7jQxiM3CHQ9xDztHG+npUwZOxBQe9EgVlbybFdmxAPiONGlv9vHmuJVhaCb9mxHh+bSLdeypaa69aETopEvdJWNYjEMFY7M19NCbCVHHBlBBgY2sySZud1uCo2xbaysT6lECN/genqNRJyOF/azV49T2PUF72e4uOHFsYbf6LK7UL7MCFkFrWLgPeD4+oVdPQveDiGAWlOtjM63v4PerBNnNeKykBylSeZq9t4qytbyy3iHliywbg2TkNJlIz07plWeCi1/DRooeHGVGHmJlOV6IkPQeIoV1MQu3BWzujK++SbaxM7Vqy5mZH9KIZczeCmZzh4pdDVbSw6KXC9gPG1hDzSpCuyvspbwb9dXE5DhGwD7GeB2ZWMMESel2SK+fLXfQT/mltoFT9OxMKd2zXsC5nNRYDqpJ1e1UetHTVcMbgR7XxQyM8Ca5hvMegh1nNv/EDNfxF/4RDJbZ6pvZ9M75i6Fvj5yPetvmZRtE2wJl/EzKljB5+iILFdozMrExYeF85KMrsDFcplTfXDrn9RMlVxqwTgqTNKbCAEneeS5jPaL3C7yUEwnSqZSL//3zFxsemmKTwC3gAAAAAElFTkSuQmCC"
            />
          </span>
          <span class="yhy-append-txt">Trực thuộc BTTTT</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '../components/apps/footer.vue'
import Header from '../components/apps/heaeder.vue'
export default {
  components: {
    Footer,
    Header,
  },
  data() {
    return {}
  },
  methods: {},
  watch: {},
  beforeDestroy() {},
}
</script>

<style lang="scss">
.main-content {
  max-width: 100vw;
  overflow-x: hidden;
}
#content {
  min-height: calc(100vh - 250px);
}
.yhy-append-wrap {
  overflow: hidden;
  width: 100%;
  height: 40px;
  padding-top: 10px;
}

.yhy-append {
  display: flex;
  align-items: center;
}

.yhy-append .yhy-append-btn {
  display: flex;
  align-items: center;
  margin-right: 5px;
  padding: 5px 8px;
  background: #ec3237;
  box-shadow: 0px -1px 30px rgb(0 0 0 / 15%);
  border-radius: 10px 10px 0px 0px;
  border: 0;
  font-family: 'Arial';
  cursor: pointer;
  text-decoration: none;
}

.yhy-append .yhy-append-icon {
  width: 24px;
  height: 24px;
}

.yhy-append .yhy-append-icon {
  width: 24px;
  height: 24px;
}

.yhy-append .yhy-btn-btttt .yhy-append-icon {
  width: 28px;
  height: 26px;
}

.yhy-append .yhy-btn-btttt .append-icon > img {
  width: 100%;
}

.yhy-append .yhy-btn-emc .yhy-append-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 50%;
}

.yhy-append .yhy-append-txt {
  margin-left: 5px;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
}
ul {
  padding-left: 0rem !important;
}
.ant-message .anticon {
  top: -2px !important;
}
</style>
