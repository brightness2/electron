<script setup>
import {storeToRefs} from 'pinia'
import useWebsiteStore from '@/store/webSiteStore'
const webSiteStore = useWebsiteStore()
const {versions} = storeToRefs(webSiteStore)
</script>

<template>
  <main>
    <h3>App Name : {{versions.app_name}}</h3>     <br>
   本应用正在使用 Chrome (v{{versions.chrome}}), Node.js (v{{versions.node}}), 和 Electron (v{{versions.electron}})
   <br>
  </main>

</template>

<style scoped>

</style>