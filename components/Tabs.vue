<template>
  <md-card
    class="md-card-tabs"
    :class="[
      { 'flex-column': flexColumn },
      { 'nav-pills-icons': navPillsIcons },
      { 'md-card-plain': plain }
    ]"
  >
    <md-card-header slot="header-title"> </md-card-header>

    <md-card-content>
      <md-list class="nav-tabs">
        <md-list-item
          v-for="(item, index) in tabName"
          :key="item"
          :class="[
            { active: isActivePanel(tabName[index]) },
            { [getColorButton(colorButton)]: isActivePanel(tabName[index]) }
          ]"
          @click="switchPanel(tabName[index])"
        >
          {{ tabName[index] }}
          <md-icon v-if="navPillsIcons">{{ tabIcon[index] }}</md-icon>
        </md-list-item>
      </md-list>

      <transition name="fade" mode="out-in">
        <div class="tab-content">
          <div :class="activeTab">
            <slot :name="activeTab">
              This is the default text!
            </slot>
          </div>
        </div>
      </transition>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    flexColumn: {
      type: Boolean,
      default: false
    },
    navPillsIcons: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    tabName: {
      type: Array,
      default: () => {
        return []
      }
    },
    tabIcon: {
      type: Array,
      default: () => {
        return []
      }
    },
    colorButton: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activePanel: this.tabName[0],
      activeTab: this.getTabContent(1)
    }
  },
  watch: {
    activePanel() {
      this.getActiveTab()
    }
  },
  methods: {
    getActiveTab() {
      this.tabName.forEach((item, index) => {
        if (this.isActivePanel(this.tabName[index])) {
          this.activeTab = this.getTabContent(index + 1)
        }
      })
    },
    switchPanel(panel) {
      this.activePanel = panel
    },
    isActivePanel(panel) {
      return this.activePanel === panel
    },
    getColorButton(colorButton) {
      return 'md-' + colorButton + ''
    },
    getTabContent(index) {
      return 'tab-pane-' + index + ''
    }
  }
}
</script>

<style scoped></style>
