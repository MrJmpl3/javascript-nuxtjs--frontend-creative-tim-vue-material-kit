<template>
  <component :is="tag" class="badge" :class="`badge-${type}`">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    type: {
      type: String,
      default: 'default',
      validator: (value) => {
        const acceptedValues = [
          'primary',
          'info',
          'success',
          'warning',
          'danger',
          'rose',
          'default'
        ]
        return acceptedValues.includes(value)
      }
    }
  }
}
</script>

<style></style>
