<template>
  <div>
    <Home :msg="$route.query.username" />
  </div>
</template>

<script>
import Home from '../components/Home.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Home,
  },
  methods: {},
}
</script>
