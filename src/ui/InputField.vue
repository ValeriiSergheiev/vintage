<template>
  <div>
    <label>
      <input
        :type="type"
        @input="parse($event.target.value)"
        class="inputField getFieldForClear"
      >
      <span>{{label}}</span>
    </label>
  </div>
</template>

<script>
  export default {
    name: "InputField",
    props: {
      label: String,
      type: String,
      property: String
    },
    methods: {
      parse (value) {
        this.$emit('inputValue', value, this.property)
      }
    }
  }
</script>

<style scoped lang="scss">
  .field-wrapper {
    position: relative;
  }
  
  label {
    display: block;
    margin-bottom: 15px;
    position: relative;
    span {
      position: absolute;
      left: 0;
      top: 20px;
      font-size: 18px;
    }
  }
</style>