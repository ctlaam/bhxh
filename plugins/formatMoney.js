import Vue from 'vue'

Vue.filter('formatVND', function (value) {
  if (!value) return '0 VNĐ'

  // Chuyển số thành chuỗi và thêm dấu phẩy
  const formattedNumber = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return formattedNumber + ' VNĐ'
})
