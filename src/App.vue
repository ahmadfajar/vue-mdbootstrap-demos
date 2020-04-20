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
      <bs-appbar-title title="Getting Started" class="text-white" />
      <bs-spacer />
      <bs-appbar-items>
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

    <bs-side-drawer :mini="sideDrawerState === 'mini'"
                    :open="sideDrawerState === 'open'"
                    shadow
                    @open="toggleDrawer">
      <bs-list-view>
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
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Avatar</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Badge</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Icon</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Button</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Button Group</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Button Dropdown</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Card</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>TextField</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>TextArea</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>ComboBox</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>DateTime Fields</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Select Controls</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Validation Forms</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Modals</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Notification</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>Tooltip</bs-list-tile-title>
          </bs-list-tile-content>
        </bs-list-tile>
        <bs-list-tile path="/button">
          <bs-list-tile-content>
            <bs-list-tile-title>DataGrid</bs-list-tile-title>
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
      <router-view />
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
