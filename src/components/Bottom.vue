<template>
  <div id="bottom">
    <div class="container">
      <div class="bottom-main">
        <h3>Contuct Us</h3>
        <div class="errors" v-show="errors.length">
          <h5>Please correct the following:</h5>
          <ul>
            <li
              v-for="(error, index) in errors"
              :key="index"
            >{{error}}</li>
          </ul>
        </div>
        <form @submit.prevent="sendForm" class="flex-wrapper">
          <div>
            <InputField
              label="Name"
              property="name"
              type="text"
              @inputValue="getinputValue"
            />
  
            <InputField
              label="Phone"
              property="phone"
              type="tel"
              @inputValue="getinputValue"
            />
  
            <InputField
              label="E-mail"
              property="email"
              type="email"
              @inputValue="getinputValue"
            />
          </div>
          
          <div>
            <TextareaField
              property="msg"
              :placeholder="placeholder"
              @inputValue="getinputValue"
            />
          </div>
          <div>
            <label class="checkbox">
              <input
                type="checkbox"
                v-model="checked"
              >
              I agree the processing of personal data
            </label>
            <button
              type="submit"
              :disabled="!checked"
            >Get in touch</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import InputField from '@/ui/InputField'
  import TextareaField from '@/ui/TextareaField'
  
  export default {
    name: "Bottom",
    components: {
      InputField,
      TextareaField
    },
    data() {
      return {
        dataInput: {},
        errors: [],
        checked: false,
        placeholder: 'Please tell us more about your request and give us info about your company and country'
      }
    },
    methods: {
      getinputValue(value, property) {
        this.dataInput[property] = value
        let el = document.getElementsByTagName('input')
        let text = document.getElementsByTagName('textarea')
        for (let i = 0; i < (el.length - 1); i++) {
          if (el[i].value) {
            el[i].classList.remove('fieldEmpty')
            el[i].classList.add('fieldNotEmpty')
          } else {
            el[i].classList.remove('fieldNotEmpty')
          }
        }
        if (text[0].value) {
          text[0].classList.add('textFieldNotEmpty')
        }
      },
      
      sendForm() {
        let _this = this
        if (this.dataInput.name && this.dataInput.phone && this.dataInput.email) {
          axios.post('http://httpbin.org/post', {
            Name: this.dataInput.name,
            Phone: this.dataInput.phone,
            Email: this.dataInput.email,
            Message: this.dataInput.msg
          })
          .then(function (response) {
            console.log(response)
            _this.checked = false
            let el = document.getElementsByClassName('getFieldForClear')
            for (let i = 0; i < el.length; i++) {
              el[i].value = null
              el[i].classList.remove('fieldNotEmpty')
              // el[i].classList.remove('fieldEmpty')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
        }
        this.errors = []
        if (!this.dataInput.name) {
          this.errors.push('Name required!')
          this.checked = false
        }
        if (!this.dataInput.phone) {
          this.errors.push('Phone required!')
          this.checked = false
        }
        if (!this.dataInput.email) {
          this.errors.push('E-mail required!')
          this.checked = false
        }
        
        let el = document.getElementsByTagName('input')
        for (let i = 0; i < (el.length - 1); i++) {
          if (!el[i].value) {
            el[i].classList.remove('fieldNotEmpty')
            el[i].classList.add('fieldEmpty')
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  #bottom {
    background-image: url('../assets/pattern.png');
    background-size: cover;
  }
  
  .bottom-main {
    padding: 90px 60px;
  }
  
  h3 {
    font-size: 34px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #fff;
  }
  
  .errors {
    color: #9e211c;
    h5 {
      font-size: 16px;
    }
    li {
      font-size: 14px;
      font-family: 'SuisseIntl';
    }
  }
  
  .flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      width: 47%;
    }
  }

  .checkbox {
    display: block;
    font-size: 18px;
    font-family: 'SuisseIntlLight';
    margin-bottom: 50px;
    input {
      vertical-align: bottom;
    }
  }
  
  button[type="submit"] {
    width: 279px;
    height: 83px;
    background-color: var(--black);
    border: none;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    &:disabled {
      opacity: .7;
      cursor: not-allowed;
    }
  }

  @media only screen and (max-width : 992px) {
    .flex-wrapper {
      & > div {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width : 480px) {
    button[type="submit"] {
      width: 200px;
      height: 60px;
    }
  }
</style>