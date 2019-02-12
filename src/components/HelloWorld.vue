<template>
  <div>
    <input type="text" v-model="text">
    <p>{{computedText}}</p>
    <button @click="testClick">click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      text: 'some text'
    }
  },
  props: {
    msg: String
  },
  methods: {
    testClick() {
      alert('hello')
    }
  },
  computed: {
    computedText: function () {
      return this.text
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
