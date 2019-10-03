<template>
  <md-card class="md-card-login" :class="{ 'md-card-hidden': cardHidden }">
    <md-card-header :class="getClass(headerColor)">
      <slot name="title"></slot>
      <div class="social-line">
        <slot name="buttons"></slot>
      </div>
    </md-card-header>

    <md-card-content>
      <slot name="description"></slot>
      <slot name="inputs"></slot>
    </md-card-content>

    <md-card-actions>
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'LoginCard',
  props: {
    headerColor: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      cardHidden: true
    }
  },
  beforeMount() {
    setTimeout(this.showCard, 400)
  },
  methods: {
    showCard() {
      this.cardHidden = false
    },
    getClass(headerColor) {
      return 'md-card-header-' + headerColor + ''
    }
  }
}
</script>

<style scoped></style>
