<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from '@/views/Home.vue'
import useWebsiteStore  from '@/store/webSiteStore'
const webSiteStore = useWebsiteStore()
const func = async ()=>{
    const respone = await window.versions.ping()
    console.log(respone);
    let versions = {
      chrome:window.versions.chrome(),
      node:window.versions.node(),
      electron:window.versions.electron(),
    }
    if (window.versions?.app_name) {
         versions.app_name = await window.versions.app_name()
    }
    webSiteStore.setVersions(versions)    
}
func()



</script>

<template>
  <div>
    <router-link class="link" to="/">Home </router-link>
    <router-link class="link" to="/about">About</router-link>
    <router-view></router-view>
  </div>

</template>

<style scoped>
.link{
  color: blue;
  padding-right: 10px;
}
.link.router-link-active{
  color: red ;
}
</style>
