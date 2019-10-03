<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Nuxt Material Kit</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu :nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <li v-if="!showDownload" class="md-list-item">
                <div
                  class="item md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <dropdown direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">apps</i>
                        <p>Components</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <nuxt-link to="/">
                            <i class="material-icons">layers</i>
                            <p>All Components</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <a
                            href="https://demos.creative-tim.com/nuxt-material-kit/documentation/"
                          >
                            <i class="material-icons">content_paste</i>
                            <p>Documentation</p>
                          </a>
                        </li>
                      </ul>
                    </dropdown>
                  </div>
                </div>
              </li>

              <md-list-item
                v-if="showDownload"
                href="https://demos.creative-tim.com/nuxt-material-kit/documentation/"
                target="_blank"
              >
                <i class="material-icons">content_paste</i>
                <p>Documentation</p>
              </md-list-item>

              <md-list-item
                v-if="showDownload"
                href="javascript:void(0)"
                @click="scrollToElement()"
              >
                <i class="material-icons">cloud_download</i>
                <p>Download</p>
              </md-list-item>

              <li v-else class="md-list-item">
                <div
                  class="item md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <dropdown direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">view_carousel</i>
                        <p>Examples</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li>
                          <nuxt-link to="/landing">
                            <i class="material-icons">view_day</i>
                            <p>Landing Page</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/login">
                            <i class="material-icons">fingerprint</i>
                            <p>Login Page</p>
                          </nuxt-link>
                        </li>
                        <li>
                          <nuxt-link to="/profile">
                            <i class="material-icons">account_circle</i>
                            <p>Profile Page</p>
                          </nuxt-link>
                        </li>
                      </ul>
                    </dropdown>
                  </div>
                </div>
              </li>

              <md-list-item
                href="https://twitter.com/CreativeTim"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
                <p class="hidden-lg">Twitter</p>
                <md-tooltip md-direction="bottom">
                  Follow us on Twitter
                </md-tooltip>
              </md-list-item>
              <md-list-item
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
              >
                <i class="fab fa-facebook-square"></i>
                <p class="hidden-lg">Facebook</p>
                <md-tooltip md-direction="bottom">
                  Like us on Facebook
                </md-tooltip>
              </md-list-item>
              <md-list-item
                href="https://www.instagram.com/CreativeTimOfficial"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
                <p class="hidden-lg">Instagram</p>
                <md-tooltip md-direction="bottom">
                  Follow us on Instagram
                </md-tooltip>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
import Dropdown from '../Dropdown'
import MobileMenu from './MobileMenu'

let resizeTimeout
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null
      actualResizeHandler()
      // The actualResizeHandler will execute at a rate of 15fps
    }, 66)
  }
}

export default {
  name: 'MainNavbar',
  components: {
    MobileMenu,
    Dropdown
  },
  props: {
    type: {
      type: String,
      default: 'white',
      validator(value) {
        return [
          'white',
          'default',
          'primary',
          'danger',
          'success',
          'warning',
          'info'
        ].includes(value)
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: '',
      toggledClass: false
    }
  },
  computed: {
    showDownload() {
      const excludedRoutes = ['login', 'landing', 'profile']
      return excludedRoutes.every((r) => r !== this.$route.name)
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    bodyClick() {
      if (process.browser) {
        const bodyClick = document.getElementById('bodyClick')
        if (bodyClick === null) {
          const body = document.querySelector('body')
          const elem = document.createElement('div')
          elem.setAttribute('id', 'bodyClick')
          body.appendChild(elem)

          const bodyClick = document.getElementById('bodyClick')
          bodyClick.addEventListener('click', this.toggleNavbarMobile)
        } else {
          bodyClick.remove()
        }
      }
    },
    toggleNavbarMobile() {
      this.$store.commit('toggleNavbar')
      this.toggledClass = !this.toggledClass
      this.bodyClick()
    },
    handleScroll() {
      const scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop
      const navbarColor = document.getElementById('toolbar')
      this.currentScrollValue = scrollValue

      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`
        navbarColor.classList.remove('md-transparent')
      } else if (this.extraNavClasses) {
        this.extraNavClasses = ''
        navbarColor.classList.add('md-transparent')
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll)
    },
    scrollToElement() {
      if (process.browser) {
        const elementId = document.getElementById('downloadSection')

        if (elementId) {
          elementId.scrollIntoView({ block: 'end', behavior: 'smooth' })
        }
      }
    }
  }
}
</script>

<style scoped></style>
