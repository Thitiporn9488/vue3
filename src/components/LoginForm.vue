<template>
  <div>
    <h1>Login</h1>

    <div class="flex">
      <div class="flex-col">
        <label for="fname">username:</label>
        <input type="text" @keypress="handleUsername" />
      </div>
      <div class="flex-col">
        <label for="fname">password:</label>
        <input type="text" @keypress="handlePassword" />
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
      console.log(this.username, '/', this.password)
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
}
.button {
  width: 100px;
}
</style>
