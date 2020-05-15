<template>
  <bs-app-container>
    <bs-appbar ref="appbar"
               class="bg-unique"
               clipped-left
               fixed-top
               shadow>
      <bs-button mode="icon"
                 color="light-grey"
                 flat
                 @click="menuBarClick">
        <bs-icon icon="menu_bars" size="24" />
      </bs-button>
      <bs-appbar-title :title="pageTitle" class="text-white" />
      <bs-spacer />
      <bs-appbar-items>
        <bs-button mode="icon"
                   color="light-grey"
                   href="https://github.com/ahmadfajar/vue-mdbootstrap"
                   flat>
          <bs-avatar img-src="assets/GitHub-Light.png" size="22" circle />
        </bs-button>
        <bs-button mode="icon"
                   icon="bell"
                   icon-size="lg"
                   color="light-grey"
                   flat />
        <bs-button mode="icon"
                   icon="user"
                   icon-size="lg"
                   color="light-grey"
                   flat />
      </bs-appbar-items>
    </bs-appbar>

    <bs-side-drawer width="250"
                    :mini="sideDrawerState === 'mini'"
                    :open="sideDrawerState === 'open'"
                    @open="toggleDrawer">
      <bs-list-view>
        <bs-list-tile tag="div" class="pt-0">
          <img src="assets/vue.png"
               class="mx-auto d-block"
               style="width: 100px"
               alt="" />
        </bs-list-tile>
        <bs-list-tile path="/home">
          <bs-list-tile-content>
            <bs-list-tile-title>Getting Started</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-subheader>COMPONENTS</bs-subheader>
        <bs-list-tile path="/alerts">
          <bs-list-tile-content>
            <bs-list-tile-title>Alert</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/avatars">
          <bs-list-tile-content>
            <bs-list-tile-title>Avatar</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/image-holders">
          <bs-list-tile-content>
            <bs-list-tile-title>Image Holder</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/badges">
          <bs-list-tile-content>
            <bs-list-tile-title>Badge</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/icons">
          <bs-list-tile-content>
            <bs-list-tile-title>Icon</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button/buttons">
          <bs-list-tile-content>
            <bs-list-tile-title>Button</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button/icons">
          <bs-list-tile-content>
            <bs-list-tile-title>Button Icon</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button/groups">
          <bs-list-tile-content>
            <bs-list-tile-title>Button Group</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button/toggles">
          <bs-list-tile-content>
            <bs-list-tile-title>Button Toggle</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/dropdowns">
          <bs-list-tile-content>
            <bs-list-tile-title>Dropdown Menu</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/cards">
          <bs-list-tile-content>
            <bs-list-tile-title>Card</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/datalist">
          <bs-list-tile-content>
            <bs-list-tile-title>Data List</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile>
          <bs-list-tile-content>
            <bs-list-tile-title>Data Grid</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/picker/datetime">
          <bs-list-tile-content>
            <bs-list-tile-title>DateTime Picker</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/form/text-field">
          <bs-list-tile-content>
            <bs-list-tile-title>TextField</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/form/text-area">
          <bs-list-tile-content>
            <bs-list-tile-title>TextArea</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/form/selects">
          <bs-list-tile-content>
            <bs-list-tile-title>ComboBox</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/form/date-field">
          <bs-list-tile-content>
            <bs-list-tile-title>DateTime Field</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/form/controls">
          <bs-list-tile-content>
            <bs-list-tile-title>Select Controls</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/form/validation">
          <bs-list-tile-content>
            <bs-list-tile-title>Validation Form</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/progress-controls">
          <bs-list-tile-content>
            <bs-list-tile-title>Progress Controls</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/tabs">
          <bs-list-tile-content>
            <bs-list-tile-title>Tabs</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/modals">
          <bs-list-tile-content>
            <bs-list-tile-title>Modal</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/lightbox">
          <bs-list-tile-content>
            <bs-list-tile-title>LightBox</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/notifications">
          <bs-list-tile-content>
            <bs-list-tile-title>Notification</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/tooltips">
          <bs-list-tile-content>
            <bs-list-tile-title>Tooltip</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
      </bs-list-view>

      <bs-sidebar-footer>
        <bs-list-tile>
          <bs-list-tile-content>
            <bs-list-tile-title>
              <font-awesome-icon icon="sign-out-alt" />
              <span class="pl-2">Logout</span>
            </bs-list-tile-title>
          </bs-list-tile-content>
          <bs-list-tile-action class="mini-toggle">
            <bs-icon icon="chevron-left" />
          </bs-list-tile-action>
        </bs-list-tile>
      </bs-sidebar-footer>
    </bs-side-drawer>

    <bs-content tag="main" class="bg-grey-200" app>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </bs-content>
  </bs-app-container>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: "App",
    components: {FontAwesomeIcon},
    data: () => ({
        sideDrawerState: "open",
    }),
    computed: {
        pageTitle() {
            return this.$route.meta ? this.$route.meta.title : 'Getting Started';
        }
    },
    methods: {
        menuBarClick() {
            if (this.$refs.appbar.isMobile && this.sideDrawerState !== 'close') {
                this.sideDrawerState = 'close';
            } else if ((this.$refs.appbar.isMobile && this.sideDrawerState === 'close') ||
                this.sideDrawerState === 'mini') {
                this.sideDrawerState = 'open';
            } else {
                this.sideDrawerState = 'mini';
            }
        },
        toggleDrawer(value) {
            if (value === true) {
                this.sideDrawerState = 'open';
            } else {
                this.sideDrawerState = 'close';
            }
        }
    }
}
</script>

<style scoped>

</style>
