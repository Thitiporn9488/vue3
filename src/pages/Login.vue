<template>
  <div>
    <LoginForm @login="login" />
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    LoginForm,
  },
  methods: {
    login(e) {
      axios
        .post('http://172.16.3.33:8100/api/login', {
          username: e.username,
          password: e.password,
        })
        .then(function (response) {
          if (response.data.responseCode === 200) {
            window.location.href = `/home?username=${e.username}`
          } else if (response.data.responseCode === 401) {
            alert(response.data.message)
          } else {
            alert('try agian')
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
  },
}
</script>
