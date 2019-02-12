<template>
  <div>
    <form @submit.prevent="sendForm">
      <input type="text" v-model="name">
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  
  export default {
    name: "Bottom",
    data() {
      return {
        name: 'Name'
      }
    },
    methods: {
      sendForm() {
        axios.post('http://httpbin.org/post', {
          firstName: this.name
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>