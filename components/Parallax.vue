<template>
  <div :style="styles">
    <slot />
  </div>
</template>

<script>
function debounce(func, wait, immediate) {
  let timeout

  return function() {
    const context = this
    const args = arguments

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }, wait)

    if (immediate && !timeout) func.apply(context, args)
  }
}

export default {
  name: 'Parallax',
  data() {
    return {
      styles: {},
      debounceTimeout: 6
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('scroll', () => {
        if (window.innerWidth > 991) {
          this.checkForParallax(window.scrollY)
        }
      })
    }
  },
  methods: {
    handleScroll(scrollVal) {
      const oVal = scrollVal / 3
      this.styles = {
        transform: `translate3d(0, ${oVal}px,0)`
      }
    },
    checkForParallax(scrollVal) {
      const fn = debounce(
        () => this.handleScroll(scrollVal),
        this.debounceTimeout
      )

      fn()
    }
  }
}
</script>

<style scoped></style>
