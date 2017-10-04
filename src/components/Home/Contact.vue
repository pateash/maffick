<template>
  <div class="tc-contact">

    <div class="contact-container">
      <!--<div class="contact-details">
        <table>
          <caption>Statement Summary</caption>
          <thead>
          <tr>
            <th scope="col">Account</th>
            <th scope="col">Due Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Period</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td data-label="Account">Visa - 3412</td>
            <td data-label="Due Date">04/01/2016</td>
            <td data-label="Amount">$1,190</td>
            <td data-label="Period">03/01/2016 - 03/31/2016</td>
          </tr>
          <tr>
            <td scope="row" data-label="Account">Visa - 6076</td>
            <td data-label="Due Date">03/01/2016</td>
            <td data-label="Amount">$2,443</td>
            <td data-label="Period">02/01/2016 - 02/29/2016</td>
          </tr>
          <tr>
            <td scope="row" data-label="Account">Corporate AMEX</td>
            <td data-label="Due Date">03/01/2016</td>
            <td data-label="Amount">$1,181</td>
            <td data-label="Period">02/01/2016 - 02/29/2016</td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">Visa - 3412</td>
            <td data-label="Due Date">02/01/2016</td>
            <td data-label="Amount">$842</td>
            <td data-label="Period">01/01/2016 - 01/31/2016</td>
          </tr>
          </tbody>
        </table>
      </div>-->
      <h2>Feel free to get in touch.</h2>
      <ul class="actions">
        <li><a href="javascript:void(0)" id="contact" class="button big">Contact Us</a></li>
      </ul>
    </div>

    <div class="cd-popup contact" role="alert">
      <form name="contactform" id="contactform" class="contact-form">
        <div class="cd-popup-container" style="">
          <p style="">
            <a href="javascript:void(0)" class="cd-popup-close cd-close-button">
              <i class="fa fa-times" style="pointer-events:none;"></i>
            </a>
          </p>

          <div class="name">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div class="email">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div class="message">
            <label for="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <br>
          <div style="text-align:left">
            <input type="checkbox" id="human" name="human" />
            <label for="human">I am a human and not a robot.</label>
          </div>
          <br>
          <div class="submit">
            <p class="user-message" id="contactblurb"> Questions, suggestions, and general comments are all welcome!</p>
            <input type="submit" name="submit" id="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>

    <div class="cd-popup notification" role="alert">
      <div class="cd-popup-container">
        <a href="javascript:void(0)" id="notif-close-btn" class="cd-popup-close cd-close-button"><i class="fa fa-times" style="pointer-events:none;"></i></a>
        <!--<p>-->
        <h3 id="notification-text">Thanks for getting in touch!</h3>
        <!--</p>-->
      </div>
    </div>

    <div class="google-maps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10222.577028784523!2d77.39981020179475!3d23.214072713391662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc74245bb15638ab9!2sMaulana+Azad+National+Institute+of+Technology!5e0!3m2!1sen!2sin!4v1506938764263" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    mounted() {
      // Check for valid email syntax
      function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      function closeForm() {
        document.contactform.name.value = '';
        document.contactform.email.value = '';
        document.contactform.message.value = '';

        emailDiv.classList.remove('typing');
        nameDiv.classList.remove('typing');
        messageDiv.classList.remove('typing');

        document.querySelector('.cd-popup').classList.remove('is-visible');
        document.querySelector('.notification').classList.add('is-visible');
        document.querySelector('#notification-text').innerHTML = "Thanks for contacting us!";
      }

      /*Variables*/
      const contactBtn = document.getElementById('contact');
      const contactPopup = document.querySelector('.cd-popup')
      const contactBlurb = document.getElementById('contactblurb')

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const nameDiv = document.querySelector('.name');
      const emailDiv = document.querySelector('.email');
      const messageDiv = document.querySelector('.message');

      /* ------------------------- */
      /* Contact Form Interactions */
      /* ------------------------- */
      contactBtn.addEventListener('click', function(event) {
        event.preventDefault();

        contactBlurb.innerHTML = 'Questions, suggestions, and general comments are all welcome!';
        contactPopup.classList.add('is-visible');

        if (nameInput.value.length != 0) {
          nameDiv.classList.add('typing');
        }
        if (emailInput.value.length != 0) {
          emailDiv.classList.add('typing');
        }
        if (messageInput.value.length != 0) {
          messageDiv.classList.add('typing');
        }
      });

      //close popup when clicking x or off popup
      contactPopup.addEventListener('click', function(event) {
        console.log('popup', event)
        if (event.target === document.querySelector('.cd-popup-close') || event.target === contactPopup) {
          event.preventDefault();
          this.classList.remove('is-visible');
        }
      });

      //close popup when clicking the esc keyboard button
      document.addEventListener('keyup', function(event) {
        if (event.keyCode == '27') {
          contactPopup.classList.remove('is-visible');
        }
      });

      /* ------------------- */
      /* Contact Form Labels */
      /* ------------------- */
      nameInput.addEventListener('keyup', function() {
        nameDiv.classList.add('typing');
        if (this.value.length == 0) {
          nameDiv.classList.remove('typing');
        }
      });
      emailInput.addEventListener('keyup', function() {
        emailDiv.classList.add('typing');
        if (this.value.length == 0) {
          emailDiv.classList.remove('typing');
        }
      });
      messageInput.addEventListener('keyup', function() {
        messageDiv.classList.add('typing');
        if (this.value.length == 0) {
          messageDiv.classList.remove('typing');
        }
      });

      /* ----------------- */
      /* Handle submission */
      /* ----------------- */
      document.getElementById('contactform').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log(event);
        var name = nameInput.value;
        var email = emailInput.value;
        var message = messageInput.value;
        var human = document.querySelector('#human:checked').value;

        if (human) {
          if (validateEmail(email)) {
            if (name) {
              if (message) {
                closeForm();
              } else {
                document.getElementById('notification-text').innerHTML = "<strong>Please let us know what you're thinking!</strong>";
                document.querySelector('.notification').classList.add('is-visible');
              }
            } else {
              document.getElementById('notification-text').innerHTML = '<strong>Please provide a name.</strong>';
              document.querySelector('.notification').classList.add('is-visible');
            }
          } else {
            document.getElementById('notification-text').innerHTML = '<strong>Please use a valid email address.</strong>';
            document.querySelector('.notification').classList.add('is-visible');
          }
        } else {
          document.getElementById('notification-text').innerHTML = '<h3><strong><em>Warning: Please prove you are a human and not a robot.</em></strong></h3>';
          document.querySelector('.notification').classList.add('is-visible');
        }

//          return false;
      });

      /* For the notification close */
      document.getElementById('notif-close-btn').addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelector('.notification').classList.remove('is-visible');
      })
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .google-maps {
    position: relative;
    /*padding-bottom: 75%; // This is the aspect ratio*/
    padding-bottom: 30%; // This is the aspect ratio
  height: 0;
    overflow: hidden;
  }
  @media screen and (max-width: 500px) {
    .google-maps {
      /*padding-bottom: 120%; // This is the aspect ratio*/
      overflow: visible;
      margin-bottom: 200px;
      background-color: #fff;
    }
  }
  .google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    /*height: 100% !important;*/
    height: 400px !important;
  }

  /* For the contact form */
  /*@import url("https://fonts.googleapis.com/css?family=Lato:300,700");*/
  /*@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");*/
  /*@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");*/

  /* Body */

  body {
    background: #2c3e50;
  }

  body,
  input,
  select,
  textarea {
    background: none;
    color: #646464;
    /*font-family: "Lato", Helvetica, sans-serif;*/
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    font-size: 15pt;
    font-weight: 300;
    line-height: 1.75em;
  }

  input,
  textarea {
    border: none !important;
    outline: none !important;
    resize: none !important;
    width: 100% !important;
    -moz-appearance: none !important;
    -webkit-appearance: none !important;
    -o-appearance: none;
    -ms-appearance: none;
    appearance: none;
  }

  h2,
  h3 {
    color: #545454;
    font-weight: 700;
    line-height: 1.5em;
    margin: 0 0 1em 0;
    letter-spacing: -0.01em;
  }

  h2 {
    font-size: 1.75em;
  }

  h3 {
    font-size: 1.25em;
  }

  ul {
    list-style: disc;
    margin: 0 0 2em 0;
    padding-left: 1em;
  }

  ul.actions {
    cursor: default;
    list-style: none;
    padding-left: 0;
  }

  ul.actions li {
    display: inline-block;
    padding: 0 1em 0 0;
    vertical-align: middle;
  }

  ul.actions li:last-child {
    padding-right: 0;
  }

  .contact-container {
    width: 100%;
    /*   padding-top: 20%; */
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    padding-top: 80px;
    padding-bottom: 50px;
  }


  /* Checkbox */

  input[type="checkbox"] {
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    appearance: none;
    display: block;
    float: left;
    margin-right: -2em;
    opacity: 0;
    width: 1em;
    z-index: -1;
  }

  input[type="checkbox"] + label {
    text-decoration: none;
    color: #646464;
    cursor: pointer;
    display: inline-block;
    font-size: 1em;
    font-weight: 300;
    padding-left: 2.4em;
    padding-right: 0.75em;
    position: relative;
  }

  input[type="checkbox"] + label:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }

  input[type="checkbox"] + label:before {
    background: rgba(144, 144, 144, 0.075);
    border-radius: 0.5em;
    border: solid 1px rgba(144, 144, 144, 0.25);
    content: '';
    display: inline-block;
    height: 1.65em;
    left: 0;
    line-height: 1.58125em;
    position: absolute;
    text-align: center;
    top: 0;
    width: 1.65em;
  }

  input[type="checkbox"]:checked + label:before {
    background: #494d53;
    border-color: #494d53;
    color: #ffffff;
    content: '\f00c';
  }

  input[type="checkbox"]:focus + label:before {
    border-color: #47cdd9;
    box-shadow: 0 0 0 1px #47cdd9;
  }

  input[type="checkbox"] + label:before {
    border-radius: 0.5em;
  }


  /* Buttons */

  input[type="submit"],
  input[type="reset"],
  input[type="button"],
  .button {
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -o-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    background-color: transparent;
    border-radius: 0.5em;
    border: solid 1px rgba(144, 144, 144, 0.25) !important;
    color: #545454 !important;
    cursor: pointer;
    display: inline-block;
    font-size: 0.8em;
    font-weight: 700;
    height: 3.5em;
    letter-spacing: 0.1em;
    line-height: 3.5em;
    overflow: hidden;
    padding: 0 2em;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
  }

  input[type="submit"]:hover,
  input[type="reset"]:hover,
  input[type="button"]:hover,
  .button:hover {
    background-color: rgba(144, 144, 144, 0.075);
    color: #545454 !important;
  }

  input[type="submit"]:active,
  input[type="reset"]:active,
  input[type="button"]:active,
  .button:active {
    background-color: rgba(144, 144, 144, 0.2);
  }

  input[type="submit"].icon,
  input[type="reset"].icon,
  input[type="button"].icon,
  .button.icon {
    padding-left: 1.35em;
  }

  input[type="submit"].icon:before,
  input[type="reset"].icon:before,
  input[type="button"].icon:before,
  .button.icon:before {
    margin-right: 0.5em;
  }

  #submit {
    background: #47cdd9;
    color: #fff !important;
    border-color: #fff !important
  }


  /* Popup */

  .cd-popup {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(94, 110, 141, 0.9);
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity 0.3s 0s, visibility 0s 0.3s;
    -moz-transition: opacity 0.3s 0s, visibility 0s 0.3s;
    transition: opacity 0.3s 0s, visibility 0s 0.3s;
    overflow-y: auto;
    z-index: 10000;
  }

  .cd-popup.is-visible {
    opacity: 1;
    visibility: visible;
    -webkit-transition: opacity 0.3s 0s, visibility 0s 0s;
    -moz-transition: opacity 0.3s 0s, visibility 0s 0s;
    transition: opacity 0.3s 0s, visibility 0s 0s;
  }

  .cd-popup-container {
    overflow-x: hidden;
    border: none;
    position: relative;
    width: 82% !important;
    max-width: 82% !important;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background: #fff;
    border-radius: .25em .25em .4em .4em;
    text-align: center;
    box-shadow: none;
    -webkit-transform: translateY(-40px);
    -moz-transform: translateY(-40px);
    -ms-transform: translateY(-40px);
    -o-transform: translateY(-40px);
    transform: translateY(-40px);
    /* Force Hardware Acceleration in WebKit */
    -webkit-backface-visibility: hidden;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    -moz-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }

  .cd-popup-container p {
    margin: 0;
    padding: 3em 1em;
    padding-top: 1em;
  }

  .cd-popup-container .cd-popup-close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 30px;
    height: 30px;
  }

  .cd-close-button {
    color: #545454;
    border-bottom: none;
  }

  .cd-popup-container .cd-popup-close::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 8px;
  }

  .cd-popup-container .cd-popup-close::after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 8px;
  }

  .is-visible .cd-popup-container {
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  @media only screen and (min-width: 1170px) {
    .cd-popup-container {
      margin: 2em auto;
    }
  }


  /* Contact Form */

  label:hover {
    cursor: text !important;
  }

  .contact-form {
    background: #ffffff !important;
    height: auto;
    margin: 100px auto;
    max-width: 82%;
    overflow: hidden !important;
    width: 100%;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-box-shadow: rgba(26, 26, 26, 0.1) 0 1px 3px 0;
    -webkit-box-shadow: rgba(26, 26, 26, 0.1) 0 1px 3px 0;
    box-shadow: rgba(26, 26, 26, 0.1) 0 1px 3px 0;
  }

  @media (max-width: 500px) {
    .contact-form {
      margin: 0;
      padding-top: 1em;
      width: 100% !important;
      max-width: 100% !important;
      -moz-border-radius: 0px;
      -webkit-border-radius: 0px;
      border-radius: 0px;
      -moz-box-shadow: rgba(26, 26, 26, 0.1) 0 0px 0px 0;
      -webkit-box-shadow: rgba(26, 26, 26, 0.1) 0 0px 0px 0;
      box-shadow: rgba(26, 26, 26, 0.1) 0 0px 0px 0;
    }
  }

  .contact-form .email,
  .contact-form .message,
  .contact-form .name {
    overflow-x: hidden;
    position: relative !important;
    -moz-border-radius: 0% !important;
    -webkit-border-radius: 0% !important;
    border-radius: 0% !important;
  }

  .contact-form .email input:focus,
  .contact-form .email textarea:focus,
  .contact-form .message input:focus,
  .contact-form .message textarea:focus,
  .contact-form .name input:focus,
  .contact-form .name textarea:focus {
    background: #f4f5f6 !important;
  }

  .contact-form .email label,
  .contact-form .message label,
  .contact-form .name label {
    color: #cbd0d3 !important;
    left: 23px !important;
    position: absolute !important;
    top: 23px !important;
    -moz-transition: all, 150ms !important;
    -o-transition: all, 150ms !important;
    -webkit-transition: all, 150ms !important;
    transition: all, 150ms !important;
  }

  .contact-form .email.typing label,
  .contact-form .message.typing label,
  .contact-form .name.typing label {
    color: #3498db !important;
    font-size: 10px !important;
    top: 7px !important;
  }

  .contact-form .email,
  .contact-form .name {
    width: calc(50% - 1px) !important;
  }

  @media (max-width: 500px) {
    .contact-form .email,
    .contact-form .name {
      width: 100% !important;
    }
  }

  .contact-form .email input,
  .contact-form .name input {
    padding: 23px 0 8px 23px !important;
  }

  .contact-form .email {
    border-left: 1px #e6e6e6 solid !important;
    float: right !important;
  }

  @media (max-width: 500px) {
    .contact-form .email {
      border-left: none !important;
      border-top: 1px #e6e6e6 solid !important;
    }
  }

  .contact-form .message {
    border-bottom: 1px #e6e6e6 solid !important;
    border-top: 1px #e6e6e6 solid !important;
    clear: both !important;
  }

  .contact-form .message textarea {
    height: 200px !important;
    padding: 23px !important;
  }

  .contact-form .name {
    float: left !important;
  }

  .contact-form .submit {
    background: #f4f5f6 !important;
    display: block !important;
    overflow: hidden !important;
    padding: 23px !important;
    margin-bottom: 2em;
  }

  .contact-form .submit .user-message {
    float: left !important;
    padding-top: 22px !important;
  }

  @media screen and (max-width: 500px) {
    .contact-form .submit .user-message {
      float: none !important;
      padding: 0 0 10px !important;
    }
  }

  .contact-container h2 {
    color: #fff;
  }
  .contact-container .button {
    border: solid 1px #fff !important;
    color: #fff !important;
  }


  /* FOr the contact table */
  /*table {*/
    /*border: 1px solid #ccc;*/
    /*border-collapse: collapse;*/
    /*margin: 0;*/
    /*padding: 0;*/
    /*width: 100%;*/
    /*table-layout: fixed;*/
  /*}*/
  /*table caption {*/
    /*font-size: 1.5em;*/
    /*margin: .5em 0 .75em;*/
  /*}*/
  /*table tr {*/
    /*background: #f8f8f8;*/
    /*border: 1px solid #ddd;*/
    /*padding: .35em;*/
  /*}*/
  /*table th,*/
  /*table td {*/
    /*padding: .625em;*/
    /*text-align: center;*/
  /*}*/
  /*table th {*/
    /*font-size: .85em;*/
    /*letter-spacing: .1em;*/
    /*text-transform: uppercase;*/
  /*}*/
  /*@media screen and (max-width: 600px) {*/
    /*table {*/
      /*border: 0;*/
    /*}*/
    /*table caption {*/
      /*font-size: 1.3em;*/
    /*}*/
    /*table thead {*/
      /*border: none;*/
      /*clip: rect(0 0 0 0);*/
      /*height: 1px;*/
      /*margin: -1px;*/
      /*overflow: hidden;*/
      /*padding: 0;*/
      /*position: absolute;*/
      /*width: 1px;*/
    /*}*/
    /*table tr {*/
      /*border-bottom: 3px solid #ddd;*/
      /*display: block;*/
      /*margin-bottom: .625em;*/
    /*}*/
    /*table td {*/
      /*border-bottom: 1px solid #ddd;*/
      /*display: block;*/
      /*font-size: .8em;*/
      /*text-align: right;*/
    /*}*/
    /*table td:before {*/
      /*!**/
      /** aria-label has no advantage, it won't be read inside a table*/
      /*content: attr(aria-label);*/
      /**!*/
      /*content: attr(data-label);*/
      /*float: left;*/
      /*font-weight: bold;*/
      /*text-transform: uppercase;*/
    /*}*/
    /*table td:last-child {*/
      /*border-bottom: 0;*/
    /*}*/
  /*}*/
</style>
