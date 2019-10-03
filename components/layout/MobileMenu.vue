<template>
  <md-list
    v-if="navMobileSectionStart"
    class="nav-mobile-menu nav-mobile-section-start"
  >
    <slot />
  </md-list>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    navMobileSectionStart: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped></style>
