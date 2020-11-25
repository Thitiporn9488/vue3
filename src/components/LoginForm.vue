<template>
  <div>
    <h1>Login</h1>
    <div class="flex">
      <div class="flex-col">
        <label for="username">username:</label>
        <input type="text" @keyup="handleUsername" />
      </div>
      <div class="flex-col">
        <label for="password">password:</label>
        <input type="text" @keyup="handlePassword" />
      </div>
      <div class="flex-col">
        <button class="button" @click="login()">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    login() {
      this.$emit('login', { username: this.username, password: this.password })
    },
    handlePassword(e) {
      this.password = e.target.value
    },
    handleUsername(e) {
      this.username = e.target.value
    },
  },
}
</script>
<style>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.flex-col {
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.button {
  width: 100px;
}
h1 {
  text-align: center;
}
</style>
