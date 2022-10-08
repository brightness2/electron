<!--
 * @Author: Brightness
 * @Date: 2021-02-09 15:34:23
 * @LastEditors: Brightness
 * @LastEditTime: 2021-02-18 09:23:11
 * @Description: file content
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ipcRenderer } from 'electron'
import { onMounted } from 'vue';
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup(){
    onMounted(()=>{
      ipcRenderer.send('open');
      ipcRenderer.on('ok',()=>{
        console.log('ok');
      })
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
