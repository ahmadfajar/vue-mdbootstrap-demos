<template>
  <bs-app-container>
    <bs-appbar
      ref="appbar"
      class="bg-unique"
      clipped-left
      fixed-top
      shadow>
      <bs-button
        mode="icon"
        color="light-grey d-xl-none"
        flat
        @click="menuBarClick">
        <bs-icon icon="menu_bars" size="24" />
      </bs-button>
      <bs-appbar-title :title="pageTitle" class="text-white" />
      <bs-spacer />
      <bs-appbar-items>
        <bs-button
          color="light-grey"
          flat
          href="https://github.com/ahmadfajar/vue-mdbootstrap"
          mode="icon"
          target="_blank">
          <bs-avatar
            img-src="img/GitHub-Light.png"
            size="22"
            circle />
        </bs-button>
        <bs-button
          color="light-grey"
          flat
          icon="bell"
          icon-size="lg"
          mode="icon" />
        <bs-button
          color="light-grey"
          flat
          icon="user"
          icon-size="lg"
          mode="icon" />
      </bs-appbar-items>
    </bs-appbar>

    <bs-side-drawer
      :mini="sideDrawerState === 'mini'"
      :open="sideDrawerState === 'open'"
      color="white border-right"
      mini-width="70"
      width="250"
      @open="toggleDrawer">
      <img
        :style="{width: sideDrawerState === 'mini' ? '40px' : '120px'}"
        alt=""
        class="mx-auto d-block logo"
        src="img/vue-mdb.png" />
      <bs-list-view active-item-bordered="left">
        <bs-list-nav>
          <bs-list-nav-item label="Getting Started" path="/home" />
          <bs-list-nav-item label="COMPONENTS" disabled />
          <bs-list-nav-item label="Alert" path="/alerts" />
          <bs-list-nav-item label="Avatar" path="/avatars" />
          <bs-list-nav-item label="Image Holder" path="/image-holders" />
          <bs-list-nav-item label="Badge" path="/badges" />
          <bs-list-nav-item label="Icon" path="/icons" />
          <bs-list-nav-item label="Button" path="/button/buttons" />
          <bs-list-nav-item label="Button Icon" path="/button/icons" />
          <bs-list-nav-item label="Button Group" path="/button/groups" />
          <bs-list-nav-item label="Button Toggle" path="/button/toggles" />
          <bs-list-nav-item label="Dropdown Menu" path="/dropdowns" />
          <bs-list-nav-item label="Card" path="/cards" />
          <bs-list-nav-item label="Data List" path="/datalist" />
          <bs-list-nav-item label="Data Grid" path="/data-grid" />
          <bs-list-nav-item label="Tree Grid" path="/tree-grid" />
          <bs-list-nav-item label="DateTime Picker" path="/picker/datetime" />
          <bs-list-nav-item label="TextField" path="/form/text-field" />
          <bs-list-nav-item label="TextArea" path="/form/text-area" />
          <bs-list-nav-item label="ComboBox" path="/form/selects" />
          <bs-list-nav-item label="DateTime Field" path="/form/date-field" />
          <bs-list-nav-item label="Select Controls" path="/form/controls" />
          <bs-list-nav-item label="Form Validation" path="/form/validation" />
          <bs-list-nav-item label="Progress Controls" path="/progress-controls" />
          <bs-list-nav-item label="Tabs" path="/tabs" />
          <bs-list-nav-item label="Modal" path="/modals" />
          <bs-list-nav-item label="LightBox" path="/lightbox" />
          <bs-list-nav-item label="Notification" path="/notifications" />
          <bs-list-nav-item label="Tooltip" path="/tooltips" />
        </bs-list-nav>
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

    <bs-content
      app
      class="bg-grey-200"
      tag="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </bs-content>
  </bs-app-container>
</template>

<script>
export default {
    name: "App",
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

<style lang="scss">
.md-side-drawer {
    .logo {
        transition: all .3s ease-in-out;
    }

    &.md-mini {
        .logo {
            margin-bottom: 12px;
            margin-top: 12px;
        }
    }
}
</style>
