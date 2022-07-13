<script>
import Layout from './components/Layout.vue'
export default {
  name: 'App',
  components:{
    Layout
  }
}
</script>

<template>
<div class="main">
  <Layout>
    <router-view></router-view>
  </Layout>
</div>
</template>


