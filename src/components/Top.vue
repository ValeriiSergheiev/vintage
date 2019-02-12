<template>
  <div class="container">
    <div id="contacts">
      <h2>Contacts</h2>
    
      <div class="flex-wrapper">
        <div>
          <h3><span>GMS</span> Headquarters</h3>
          <div class="flex-wrapper-text">
            <div>
              <p>Global Message Services Ukraine LLC</p>
              <p>Bundesstrasse 5 | 3rd Floor</p>
              <p>6300 Zug</p>
              <p>Switzerland</p>
              <a class="tel-link" href="tel:+41415446200">+41 41 544 62 00</a>
            </div>
            <div>
              <p>Email</p>
              <a href="mailto:info@gms-worldwide.com">info@gms-worldwide.com</a>
              <p>Send message</p>
              <a href="#">Viber us</a>
              <p>Send form</p>
              <a href="#">Contact us</a>
            </div>
          </div>
        </div>
      
        <div>
          <h3>Technical support <span>24/7</span></h3>
          <p>GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.</p>
          <a class="tel-link" href="tel:+41415446206">+41 41 544 62 06</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Top"
  }
</script>

<style scoped lang="scss">
  #contacts {
    padding: 60px 60px 100px;
  }
  
  h2 {
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 30px;
  }
  
  h3 {
    font-size: 34px;
    font-weight: 300;
    margin-bottom: 20px;
    span {
      color: var(--green);
    }
  }
  
  p {
    font-size: 15px;
    margin-bottom: 7px;
  }
  
  a {
    display: block;
    font-size: 14px;
    margin-bottom: 7px;
    text-transform: uppercase;
    color: var(--green);
    font-family: 'SuisseIntlSemiBold';
  }
  
  .flex-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      width: 47%;
    }
  }
  
  .flex-wrapper-text {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      width: 48%;
    }
  }
  
  .tel-link {
    font-size: 26px;
    color: var(--green);
    margin-top: 20px;
    font-family: 'SuisseIntlLight';
  }
  
  /*Media*/
  @media only screen and (max-width : 768px) {
    #contacts {
      padding: 15px;
    }
    
    .flex-wrapper {
      & > div {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }

  @media only screen and (max-width : 480px) {
    .flex-wrapper-text {
      & > div {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
</style>