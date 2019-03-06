<template>
  <div class="message-alert">
    <div
      class="alert alert-dismissible font-weight-bold"
      :class="'alert-' + item.status"
      v-for="(item, i) in messages"
      :key="i"
    >
      {{ item.message }}
      <button
        type="button"
        class="close"
        @click="removeMessage(i)"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      messages: []
    };
  },
  methods: {
    updateMessage(message) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        timestamp
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 3000);
    }
  },
  created() {
    const vm = this;

    // 自定義名稱 'messsage:push'
    // message: 傳入參數
    // status: 樣式，預設值為 warning
    vm.$bus.$on("message:push", (message ) => {
      vm.updateMessage(message);
    });
  }
};
</script>

<style scope>
/* custom alert modal  */
.alert {
  position: fixed;
  max-width: 50%;
  background-color: rgba(43, 42, 42, 0.9);
  border-radius: 5px;
  color: rgb(104, 187, 212);
  top: 56px;
  right: 20px;
  z-index: 1100;
  transition: 0.5s
}
.message-alert {
  display: flex;
  justify-content: center;
  align-items: center;
}
.alert:hover {
  background-color: rgba(255,255,255,0.9);
}
</style>