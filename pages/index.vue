<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <img v-show="leafShow" :src="leaf4" alt="leaf4" class="leaf4" />
            <img v-show="leafShow" :src="leaf3" alt="leaf3" class="leaf3" />
            <img v-show="leafShow" :src="leaf2" alt="leaf2" class="leaf2" />
            <img v-show="leafShow" :src="leaf1" alt="leaf1" class="leaf1" />
            <div class="brand">
              <h1>Vue Material Kit</h1>
              <h3>A Badass Vue.js UI Kit made with Material Design.</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2>Basic Elements</h2>
          </div>
          <basic-elements-section></basic-elements-section>
        </div>
      </div>
      <div class="section section-navbars">
        <div class="container">
          <small-navigation-section></small-navigation-section>
        </div>
        <navigation-section></navigation-section>
      </div>
      <div class="section section-tabs">
        <div class="container">
          <tabs-section></tabs-section>
        </div>
      </div>
      <div class="section section-white">
        <div class="container">
          <nav-pills-section></nav-pills-section>
        </div>
      </div>
      <div class="section section-notifications">
        <div class="container">
          <div class="title">
            <h3>Notifications</h3>
          </div>
        </div>
        <notifications-section></notifications-section>
      </div>
      <div class="section">
        <div class="container">
          <typography-images-section></typography-images-section>
        </div>
      </div>
      <div class="section section-javascript">
        <div class="container">
          <javascript-components-section></javascript-components-section>
        </div>
      </div>
      <div class="section">
        <div class="container text-center">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
            >
              <h2>Completed with examples</h2>
              <h4>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. More importantly, looking at them will give you a picture of
                what you can built with this powerful kit.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-signup page-header" :style="signupImage">
        <div class="container">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-33 md-medium-size-40 md-small-size-50 md-xsmall-size-70 mx-auto text-center"
            >
              <login-card header-color="green">
                <h4 slot="title" class="card-title">Login</h4>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook-square"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-twitter"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-google-plus-g"></i>
                </md-button>
                <p slot="description" class="description">Or Be Classical</p>
                <md-field slot="inputs" class="md-form-group">
                  <md-icon>face</md-icon>
                  <label>First Name...</label>
                  <md-input v-model="firstname"></md-input>
                </md-field>
                <md-field slot="inputs" class="md-form-group">
                  <md-icon>email</md-icon>
                  <label>Email...</label>
                  <md-input v-model="email" type="email"></md-input>
                </md-field>
                <md-field slot="inputs" class="md-form-group">
                  <md-icon>lock_outline</md-icon>
                  <label>Password...</label>
                  <md-input v-model="password"></md-input>
                </md-field>
                <md-button slot="footer" class="md-simple md-success md-lg">
                  Get Started
                </md-button>
              </login-card>
            </div>
          </div>
        </div>
      </div>
      <div class="md-layout">
        <div class="md-layout-item text-center">
          <md-button to="login" class="md-simple md-success md-lg"
            >View Login Page</md-button
          >
        </div>
      </div>
      <div class="section section-examples">
        <div class="container-fluid text-center">
          <div class="md-layout">
            <div class="md-layout-item">
              <nuxt-link to="landing">
                <img
                  :src="landing"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </nuxt-link>
              <md-button to="landing" class="md-simple md-success md-lg">
                View Landing Page
              </md-button>
            </div>
            <div class="md-layout-item">
              <nuxt-link to="profile">
                <img
                  :src="profile"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </nuxt-link>
              <md-button to="profile" class="md-simple md-success md-lg">
                View Profile Page
              </md-button>
            </div>
          </div>
        </div>
      </div>
      <div id="downloadSection" class="section section-download">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2>Do you love this UI Kit?</h2>
              <h4>
                Cause if you do, it can be yours for FREE. Hit the buttons below
                to navigate to our website where you can find the kit. Our
                friends from
                <a
                  href="https://themeisle.com/?utm_campaign=mkfree-hestia&amp;utm_source=creativetim&amp;utm_medium=website"
                  target="_blank"
                  >ThemeIsle</a
                >
                created a Wordpress Theme which can be also downloaded for free.
                Start a new project or give an old Bootstrap project a new look!
              </h4>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <md-button
                href="https://www.creative-tim.com/product/material-kit"
                target="_blank"
                class="md-success md-lg"
                disabled
                ><i class="fab fa-html5"></i> Free HTML Download</md-button
              >
              <md-button
                href="https://themeisle.com/themes/hestia/?utm_campaign=mkfree-hestia&amp;utm_source=creativetim&amp;utm_medium=website"
                class="md-success md-lg"
                target="_blank"
                disabled
                ><i class="fab fa-wordpress"></i> Wordpress Theme</md-button
              >
            </div>
          </div>
          <br /><br />

          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2>Want more?</h2>
              <h4>
                We've just launched
                <a
                  href="https://www.creative-tim.com/product/nuxt-material-dashboard-pro?ref=utp-mk-demos"
                  target="_blank"
                  >Vue Material Dashboard PRO</a
                >
                and
                <a
                  href="https://www.creative-tim.com/product/nuxt-material-kit-pro?ref=utp-vmk-demos"
                  target="_blank"
                  >Vue Material Kit PRO</a
                >. Every product has a huge number of components, sections and
                example pages. Start Your Development With A Badass Bootstrap UI
                Kit inspired by Material Design.
              </h4>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <div class="btn-container">
                <md-button
                  href="https://www.creative-tim.com/product/vue-material-kit-pro?ref=utp-vmk-demos"
                  class="md-button md-success md-lg md-upgrade"
                  target="_blank"
                  disabled
                >
                  <md-icon>unarchive</md-icon>
                  Nuxt Material Kit PRO
                </md-button>
                <md-button
                  href="https://www.creative-tim.com/product/vue-material-dashboard-pro?ref=utp-vmd-demos"
                  class="md-button md-success md-lg md-upgrade"
                  target="_blank"
                  disabled
                >
                  <md-icon>unarchive</md-icon>
                  Nuxt Material Dashboard PRO
                </md-button>
              </div>
            </div>
          </div>

          <div class="sharing-area text-center">
            <div class="md-layout">
              <div class="md-layout-item">
                <h3>Thank you for supporting us!</h3>
              </div>
            </div>
            <social-sharing
              :url="shareUrl"
              inline-template
              title="Vue Material Kit - Material Design UI Kit for Vue.js"
              hashtags="vuejs, ui, kit, vuematerial"
              twitter-user="creativetim"
            >
              <div class="centered-buttons">
                <network network="twitter" class="md-button md-twitter">
                  <i class="fab fa-twitter"></i>Tweet
                </network>
                <network network="facebook" class="md-button md-facebook">
                  <i class="fab fa-facebook-square"></i> Share
                </network>
                <network network="googleplus" class="md-button md-google">
                  <i class="fab fa-google-plus"></i> Share
                </network>
                <md-button
                  class="md-github"
                  href="https://github.com/creativetimofficial/vue-material-kit"
                  target="_blank"
                  ><i class="fab fa-github"></i> Star</md-button
                >
              </div>
            </social-sharing>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from '../components/Parallax'
import BasicElementsSection from '../components/sections/BasicElementsSection'
import SmallNavigationSection from '../components/sections/SmallNavigationSection'
import NavigationSection from '../components/sections/NavigationSection'
import TabsSection from '../components/sections/TabsSection'
import NavPillsSection from '../components/sections/NavPillsSection'
import NotificationsSection from '../components/sections/NotificationsSection'
import TypographyImagesSection from '../components/sections/TypographyImagesSection'
import JavascriptComponentsSection from '../components/sections/JavascriptComponentsSection'
import LoginCard from '../components/cards/LoginCard'

export default {
  components: {
    Parallax,
    BasicElementsSection,
    SmallNavigationSection,
    NavigationSection,
    TabsSection,
    NavPillsSection,
    NotificationsSection,
    TypographyImagesSection,
    JavascriptComponentsSection,
    LoginCard
  },
  data() {
    return {
      image: '/img/vue-mk-header.jpg',
      leaf4: '/img/leaf4.png',
      leaf3: '/img/leaf3.png',
      leaf2: '/img/leaf2.png',
      leaf1: '/img/leaf1.png',
      signup: '/img/city.jpg',
      landing: '/img/landing.jpg',
      profile: '/img/profile.jpg',
      firstname: null,
      email: null,
      password: null,
      shareUrl: 'https://www.creative-tim.com/product/vue-material-kit',
      leafShow: true
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      }
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      }
    }
  },
  mounted() {
    this.leafActive()
    if (process.browser) {
      window.addEventListener('resize', this.leafActive)
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener('resize', this.leafActive)
    }
  },
  methods: {
    leafActive() {
      this.leafShow = window.innerWidth >= 768
    }
  }
}
</script>

<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
