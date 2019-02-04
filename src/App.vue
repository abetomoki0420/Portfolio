<template>
  <div id="app">
    <Header></Header>
    <!-- Content -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

  body{
     font-family: 'Lato', sans-serif;
  }

  #app{
    margin: 0 auto ;
    background: rgba(0,0,0,0.03);
    -webkit-font-smoothing: antialiased ;
  }

</style>
