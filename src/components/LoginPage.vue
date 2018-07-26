<template>
  <div>
    <div id="title">Login Page</div>

    <input type="text" id="input_name" placeholder="请输入名字" v-model="name">
    <br>
    <input type="password" id="input_password" placeholder="请输入密码" v-model="password">
    <br>
    <button id="btn_login" @click="startLogin">Login</button>
    <popup-page :label="callback"></popup-page>
  </div>
</template>

<script>
  import login from './../service/login.js';
  import PopupPage from './PopupPage';
  export default {
    components:{PopupPage},
    data() {
      return {
        name: null,
        password: null,
        callback: {}
      };
    },
    methods: {
      startLogin() {
        login(this.name, this.password, (res, err) => {
          if (err) {
            // alert('Oh no! ' + err)
            this.callback = {
              from : err,
              to : err
            }
          } else {
            // alert('Result: ' + res['message'])
            this.callback = {
              from : res['message'],
              to : res['message']
            }
          }
        });
    },
    add(a, b) {
      return a + b;
      }
    }
  };
</script>

<style scoped>
  input {
    margin: 12px;
  }
</style>

