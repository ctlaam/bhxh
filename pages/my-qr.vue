<template>
  <div class="main-content">
    <div class="title-points-container">
      <h1 class="text-xl">Quý khách</h1>
      <div class="points">
        <span class="text-2xl">{{ formatCurrency(user?.balance || 0) }}</span>
        <i class="fas fa-coins text-yellow-400"></i>
      </div>
    </div>

    <div class="barcode-card">
      <div class="mb-4">
        <img
          id="barcode"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAABaCAYAAAAYTYuTAAAEt0lEQVR4AezUC26cMBQF0Nzuf89pJee1HSsIhoEBOydq9Oov9nF0f336IUCAwEUCvz78ECBA4CIBAXQRvM8SIPDxIYD8FVwm4MMEBJC/AQIELhMQQJfR+zABAgLI3wABApcJXBZAl93YhwkQuI2AALrNUzgIgZ8nIIB+3pu7MYHbCGwOoCQfyb/fukHS+qpdNWn9yWOt8arJtvGaXzVp66rd16SNJ60ujff9fTt5XJ+0dtJqzU9aO3ms/Xi1+5q0dWv9SZuXfF/X1u8dT9r3an3y2O77kzaetFrjVZPWn7S61l/jVZPv19V4X5P/5veDf9rJ43jS2kmrf6Z8+y9p40mrNSlp7aTVtf4ar5q0dUmr1V81+b6/xqsmj/OS1k5arXl9Tdp48lhrXtL6+3by2F/jS3VzAC1toJ8AAQJ7BQTQXjnrCBB4WUAAvUxoAwIE9gr8vADaK2UdAQKHCwigw0ltSIDAVgEBtFXKPAIEDhcQQIeT2pDAkoD+XkAA9SLaBAi8TUAAvY3ahwgQ6AUEUC+iTYDA2wQE0NuofYgAgV5AAPUi2gQIvE1AAL2N2ocIEOgFBFAvok1gPoHb3kgA3fZpHIzA/AICaP43dkMCtxUQQLd9GgcjML+AAJr/jd2QwG0FBNBtn8bBCMwvIIDmf2M3JHBbAQF026dxMALjC6zdQACtCRknQOA0AQF0Gq2NCRBYExBAa0LGCRA4TUAAnUZrYwIE1gQE0JqQcQIEThMQQKfR2pgAgTUBAbQmZJwAgdMETgug005sYwIEphEQQNM8pYsQGE9AAI33Zk5MYBoBATTNU7rIXwH/GUZAAA3zVA5KYD4BATTfm7oRgWEEBNAwT+WgBOYTmC+A5nsjNyIwrYAAmvZpXYzA/QUE0P3fyAkJTCsggKZ9Whd7v4AvPisggJ4VM58AgcMEBNBhlDYiQOBZAQH0rJj5BAgcJiCADqO0EQECzwoIoGfFzCdA4DABAXQYpY0IEHhWQAA9K2Y+gfsJDHsiATTs0zk4gfEFBND4b+gGBIYVEEDDPp2DExhfQACN/4ZuQGBYAQE07NM5OIHxBQTQ+G/oBgSGFRBAwz6dgxO4XuDVEwigVwWtJ0Bgt4AA2k1nIQECrwoIoFcFrSdAYLeAANpNZyEBAq8KCKBXBa0nQGC3gADaTWchAQKvCgigVwWtJ0Bgt8DuANr9RQsJECDwJSCAviAUAgTeLyCA3m/uiwQIfAkIoC8IZSABR51GQABN85QuQmA8AQE03ps5MYFpBATQNE/pIgTGExgvgMYzdmICBBYEBNACjG4CBM4X2BxAn5+fH///1tGqr9pVq7+vNV5163jNr1rrqt3XGq+6NN739+1+fbWr1vxq97Ufr3Zfa91af81bqmvr947X92p93+77a7xqjVet/qpr/TVedWldjfe1n782XvOr9vOrXeNV9/bXuqq1X9Xqr7rUX+NV+3nVrlrz+lrjfa151d+3+/4aX6qbA2hpA/0Efo6Amx4tIICOFrUfAQKbBQTQZioTCRA4WkAAHS1qPwIENgsIoM1UJhIgcLSAADpa1H4ECGwWEECbqUwkQOBoAQF0tKj9CBwvMO2OAmjap3UxAvcX+A0AAP//zzPNpQAAAAZJREFUAwAAj/CApQ9VTgAAAABJRU5ErkJggg=="
        />
      </div>
      <div class="text-black text-lg">0961 5181 3517 4034 30</div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'account',
  data() {
    return {
      user: null,
    }
  },
  mounted() {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      this.user = JSON.parse(savedUser)
    }
  },
  methods: {
    formatCurrency(val) {
      return Number(val).toLocaleString('vi-VN') + ' VNĐ'
    },
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  width: 100%;
}

.title-points-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 400px;
}

.points {
  display: flex;
  align-items: center;
  gap: 5px;
}

.barcode-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  width: 90%;
  max-width: 400px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 15px;
}

.nav-buttons {
  display: flex;
  justify-content: space-around;
}

.nav-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.nav-button.active {
  color: #3b82f6;
}

.nav-button.inactive {
  color: #9ca3af;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(250 204 21 / var(--tw-text-opacity, 1));
}
</style>
