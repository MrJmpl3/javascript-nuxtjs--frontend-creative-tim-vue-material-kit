<template>
  <div id="material-kit" :class="extraClasses">
    <div :class="{ 'nav-open': navbar }">
      <main-navbar :color-on-scroll="scrollColorNavbar" />
      <div>
        <nuxt />
      </div>
      <main-footer :background-color="backgroundColorFooter" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainNavbar from '../components/layout/MainNavbar'
import MainFooter from '../components/layout/MainFooter'

export default {
  components: { MainFooter, MainNavbar },
  computed: {
    ...mapState(['navbar']),
    extraClasses() {
      if (this.$route.name === 'index') {
        return 'index-page'
      }

      if (this.$route.name === 'login') {
        return 'login-page'
      }

      if (this.$route.name === 'landing') {
        return 'landing-page'
      }

      if (this.$route.name === 'profile') {
        return 'profile-page'
      }

      return ''
    },
    scrollColorNavbar() {
      if (this.$route.name === 'profile') {
        return 200
      }

      return 400
    },
    backgroundColorFooter() {
      if (this.$route.name === 'index') {
        return 'black'
      }

      if (this.$route.name === 'landing') {
        return 'black'
      }

      if (this.$route.name === 'profile') {
        return 'black'
      }

      return ''
    }
  }
}
</script>

<style scoped></style>
