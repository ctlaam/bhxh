import Vue from 'vue'

Vue.filter('formatVND', function (value) {
  if (!value) return '0 VNĐ'

  // Làm tròn số và ép kiểu về integer
  const rounded = Math.round(Number(value))

  // Chuyển số thành chuỗi và thêm dấu phẩy ngăn cách
  const formattedNumber = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  return formattedNumber + ' VNĐ'
})
