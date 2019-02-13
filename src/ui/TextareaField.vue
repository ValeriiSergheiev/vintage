<template>
  <div>
    <textarea
      rows="5"
      :placeholder="placeholder"
      @input="parse($event.target.value)"
      class="textareaField getFieldForClear"
    >
    </textarea>
  </div>
</template>

<script>
  export default {
    name: "TextareaField",
    props: {
      property: String,
      placeholder: String
    },
    methods: {
      parse (value) {
        this.$emit('inputValue', value, this.property)
      }
    }
  }
</script>

<style scoped lang="scss">

</style>