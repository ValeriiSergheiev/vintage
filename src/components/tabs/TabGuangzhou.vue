<template>
  <div>
    <h4>Global Message Services {{country}} LLC</h4>
  
    <ul>
      <li>{{city}}</li>
      <li>454565</li>
      <li>{{country}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TabGuangzhou",
    props: {
      city: String
    },
    data() {
      return {
        country: 'China'
      }
    }
  }
</script>

<style scoped lang="scss">
  h4 {
    font-size: 26px;
    font-weight: 300;
    margin: 30px 0;
  }
  
  ul {
    list-style-type: none;
    li {
      font-size: 11px;
      font-family: 'SuisseIntl';
      margin-bottom: 5px;
    }
  }
</style>