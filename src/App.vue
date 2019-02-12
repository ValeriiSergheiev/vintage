<template>
  <div id="app">
    <Top/>
    <Middle/>
    <Bottom/>
  </div>
</template>

<script>
import Top from './components/Top.vue'
import Middle from './components/Middle'
import Bottom from './components/Bottom'

export default {
  name: 'app',
  components: {
    Top,
    Middle,
    Bottom
  }
}
</script>

<style lang="scss">
  :root {
    --green: #3db565;
    --black: #262626;
  }
  
  body {
    margin: 0;
    padding: 0;
    min-width: 320px;
  }
  
  #app {
    font-family: 'SuisseIntlLight', sans-serif;
    color: #333333;
    background-color: #fff;
  }
  
  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    &:hover {
      opacity: .7;
    }
  }
  
  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
</style>
