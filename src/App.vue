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
  
  button {
    outline: none;
  }
  
  input {
    border: none;
  }
  
  .container {
    max-width: 1280px;
    margin: 0 auto;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .inputField {
    display: block;
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid var(--black);
    padding: 20px 20px 20px 100px;
    box-sizing: border-box;
    font-size: 18px;
    font-family: 'SuisseIntlLight';
    color: var(--black);
    &:focus {
      color: #fff;
      border-bottom: 1px solid #fff;
      & + span {
        color: #fff;
      }
    }
  }

  .fieldEmpty {
    color: #9e211c !important;
    border-bottom: 1px solid #9e211c;
    & + span {
      color: #9e211c;
    }
  }
  .fieldNotEmpty {
    color: #fff;
    border-bottom: 1px solid #fff;
    & + span {
      color: #fff;
    }
  }
  
  .textareaField {
    width: 100%;
    resize: none;
    font-size: 18px;
    font-family: 'SuisseIntlLight';
    color: var(--black);
    background-color: transparent;
    border: none;
    &::placeholder {
      font-size: 18px;
      font-family: 'SuisseIntlLight';
      color: var(--black);
    }
    &:focus {
      color: #fff;
    }
  }
  
  .textFieldNotEmpty {
    color: #fff;
  }
</style>
