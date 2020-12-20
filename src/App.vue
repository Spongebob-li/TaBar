<template>
 <div class="app">

   <router-view/>
   <main-tab-bar/>
 </div>
</template>

<script>

import MainTabBar from './components/content/mainTabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar,
  
  }
}
</script>

<style>
/* import { getProductDetails } from "@/api/products" */
@import "assets/css/base.css" ;


</style>
