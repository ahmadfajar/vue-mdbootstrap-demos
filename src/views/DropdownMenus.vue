<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <bs-card shadow>
      <bs-card-header>Dropdown Toggle Examples</bs-card-header>
      <bs-card-body class="row">
        <div class="col-12 col-md-6 col-xl">
          <bs-menu class="w-100">
            <bs-button block dropdown-toggle raised>
              Default
            </bs-button>
            <bs-list-view slot="content">
              <bs-list-tile>
                <bs-list-tile-title>First Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile>
                <bs-list-tile-title>Second Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile>
                <bs-list-tile-title>Third Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-divider />
              <bs-list-tile v-model="active" @click="onClick">
                <bs-list-tile-title>Another Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile disabled>
                <bs-list-tile-title>Disabled Action</bs-list-tile-title>
              </bs-list-tile>
            </bs-list-view>
          </bs-menu>
        </div>
        <div class="col-12 col-md-6 col-xl">
          <bs-menu class="w-100 mt-3 mt-md-0" color="deep-purple">
            <bs-button color="indigo"
                       block
                       dropdown-toggle
                       raised>
              With Colors
            </bs-button>
            <bs-list-view color="deep-purple" slot="content">
              <bs-list-tile>
                <bs-list-tile-title>First Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile>
                <bs-list-tile-title>Second Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile>
                <bs-list-tile-title>Third Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-divider />
              <bs-list-tile v-model="active" @click="onClick">
                <bs-list-tile-title>Another Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile disabled>
                <bs-list-tile-title>Disabled Action</bs-list-tile-title>
              </bs-list-tile>
            </bs-list-view>
          </bs-menu>
        </div>
        <div class="col-12 col-md-6 col-xl">
          <bs-menu class="w-100 mt-3 mt-xl-0" color="primary-color-dark">
            <bs-button color="purple"
                       block
                       dropdown-toggle
                       raised>
              With Header
            </bs-button>
            <bs-list-view color="primary-color-dark" slot="content">
              <bs-subheader>My Header</bs-subheader>
              <bs-list-tile>
                <bs-list-tile-title>First Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile>
                <bs-list-tile-title>Second Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile>
                <bs-list-tile-title>Third Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-divider />
              <bs-list-tile v-model="active" @click="onClick">
                <bs-list-tile-title>Another Action</bs-list-tile-title>
              </bs-list-tile>
              <bs-list-tile disabled>
                <bs-list-tile-title>Disabled Action</bs-list-tile-title>
              </bs-list-tile>
            </bs-list-view>
          </bs-menu>
        </div>
        <div class="col-12 col-md-6 col-xl">
          <bs-menu class="w-100 mt-3 mt-xl-0" color="blue-green">
            <bs-button color="success"
                       block
                       dropdown-toggle
                       raised>
              With Icons
            </bs-button>
            <bs-list-view color="blue-green" slot="content">
              <bs-subheader>Icon from FontAwesome</bs-subheader>
              <bs-list-tile>
                <bs-list-tile-action>
                  <font-awesome-icon icon="comment-alt"
                                     class="text-teal"
                                     fixed-width />
                </bs-list-tile-action>
                <bs-list-tile-content>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile-content>
              </bs-list-tile>
              <bs-list-tile>
                <bs-list-tile-action>
                  <font-awesome-icon icon="bicycle"
                                     class="text-teal"
                                     fixed-width />
                </bs-list-tile-action>
                <bs-list-tile-content>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile-content>
              </bs-list-tile>
              <bs-list-tile>
                <bs-list-tile-action>
                  <font-awesome-icon icon="biking"
                                     class="text-teal"
                                     fixed-width />
                </bs-list-tile-action>
                <bs-list-tile-content>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile-content>
              </bs-list-tile>
              <bs-divider />
              <bs-list-tile v-model="active" @click="onClick">
                <bs-list-tile-action>
                  <font-awesome-icon icon="award"
                                     class="text-teal"
                                     fixed-width />
                </bs-list-tile-action>
                <bs-list-tile-content>
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile-content>
              </bs-list-tile>
              <bs-list-tile disabled>
                <bs-list-tile-action>
                  <font-awesome-icon icon="bed" class="text-teal" fixed-width />
                </bs-list-tile-action>
                <bs-list-tile-content>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile-content>
              </bs-list-tile>
            </bs-list-view>
          </bs-menu>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card class="mt-3" shadow>
      <bs-card-header>Dropdown Placement Examples</bs-card-header>
      <bs-card-body>
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3">
            <bs-menu>
              <bs-button block dropdown-toggle>
                Bottom-Left
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mt-3 mt-md-0">
            <bs-menu placement="bottom">
              <bs-button block dropdown-toggle>
                Bottom
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mt-3 mt-xl-0">
            <bs-menu placement="bottom-right">
              <bs-button block dropdown-toggle>
                Bottom-Right
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mt-3 mt-xl-0">
            <bs-menu placement="top-left">
              <bs-button block dropdown-toggle>
                Top-Left
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mt-3">
            <bs-menu placement="top">
              <bs-button block dropdown-toggle>
                Top
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mt-3">
            <bs-menu placement="top-right">
              <bs-button block dropdown-toggle>
                Top-Right
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mt-3">
            <bs-menu placement="left">
              <bs-button block dropdown-toggle>
                Left
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mt-3">
            <bs-menu placement="left-top">
              <bs-button block dropdown-toggle>
                Left-Top
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mt-3">
            <bs-menu placement="left-bottom">
              <bs-button block dropdown-toggle>
                Left-Bottom
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mt-3">
            <bs-menu placement="right">
              <bs-button block dropdown-toggle>
                Right
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
          <div class="col-12 col-md-6 col-xl-3 mt-3">
            <bs-menu placement="right-top">
              <bs-button block dropdown-toggle>
                Right-Top
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-xl-3 mt-3">
            <bs-menu placement="right-bottom">
              <bs-button block dropdown-toggle>
                Right-Bottom
              </bs-button>
              <bs-list-view slot="content">
                <bs-list-tile>
                  <bs-list-tile-title>First Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Second Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile>
                  <bs-list-tile-title>Third Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-divider />
                <bs-list-tile v-model="active" @click="onClick">
                  <bs-list-tile-title>Another Action</bs-list-tile-title>
                </bs-list-tile>
                <bs-list-tile disabled>
                  <bs-list-tile-title>Disabled Action</bs-list-tile-title>
                </bs-list-tile>
              </bs-list-view>
            </bs-menu>
          </div>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card class="mt-3" shadow>
      <bs-card-header>Advanced Dropdown Examples</bs-card-header>
      <bs-card-body class="row">
        <div class="col-12 col-md-6 col-xl-3">
          <bs-menu v-model="popover"
                   placement="top"
                   :content-click-close="false">
            <bs-button color="blue" raised>
              Advance Dropdown
            </bs-button>
            <div slot="content">
              <bs-list-view>
                <bs-list-tile tag="div">
                  <bs-list-tile-leading :img-src="avatar" rounded />
                  <bs-list-tile-content>
                    <bs-list-tile-title>John Doe</bs-list-tile-title>
                    <bs-list-tile-subtitle>Going further more, etc.. etc..</bs-list-tile-subtitle>
                  </bs-list-tile-content>
                </bs-list-tile>
              </bs-list-view>
              <bs-divider />
              <div class="card-body pt-2">
                <div class="d-block">
                  <bs-switch v-model="enableMessage" color="purple">
                    Enable Messages
                  </bs-switch>
                </div>
                <div class="d-block mt-2">
                  <bs-switch v-model="enableHints" color="purple">
                    Enable Hints
                  </bs-switch>
                </div>
                <div class="mt-4 text-right">
                  <bs-button color="primary" @click="popover = false" outlined>
                    Save
                  </bs-button>
                  <bs-button color="primary" @click="popover = false" flat>
                    Cancel
                  </bs-button>
                </div>
              </div>
            </div>
          </bs-menu>
        </div>
        <div class="col-12 col-md-6 col-xl-3 mt-3 mt-md-0">
          <bs-menu v-model="showKitty"
                   placement="right-bottom"
                   :content-click-close="false">
            <bs-avatar size="72"
                       class="md-shadow-1"
                       :img-src="kitty"
                       rounded />
            <div slot="content">
              <bs-list-view>
                <bs-list-tile tag="div">
                  <bs-list-tile-leading :img-src="kitty" rounded />
                  <bs-list-tile-content>
                    <bs-list-tile-title>John Kitty Doe</bs-list-tile-title>
                    <bs-list-tile-subtitle>Going further from an Avatar, etc.. etc..</bs-list-tile-subtitle>
                  </bs-list-tile-content>
                </bs-list-tile>
              </bs-list-view>
              <bs-divider />
              <div class="card-body pt-2">
                <div class="d-block">
                  <bs-switch v-model="enableMessage" color="purple">
                    Enable Messages
                  </bs-switch>
                </div>
                <div class="d-block mt-2">
                  <bs-switch v-model="enableHints" color="purple">
                    Enable Hints
                  </bs-switch>
                </div>
                <div class="mt-4 text-right">
                  <bs-button color="primary" @click="showKitty = false" outlined>
                    Save
                  </bs-button>
                  <bs-button color="primary" @click="showKitty = false" flat>
                    Cancel
                  </bs-button>
                </div>
              </div>
            </div>
          </bs-menu>
        </div>
      </bs-card-body>
    </bs-card>
  </section>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
    name: "DropdownMenus",
    components: {FontAwesomeIcon},
    data: () => ({
        active: true,
        avatar: 'avatar/2.jpg',
        kitty: 'avatar/kitty-2.jpg',
        enableMessage: false,
        enableHints: true,
        popover: false,
        showKitty: false,
    }),
    methods: {
        onClick() {
            console.log("MenuItem: Another Action is clicked...");
            this.active = !this.active;
        }
    }
}
</script>

<style scoped>

</style>
