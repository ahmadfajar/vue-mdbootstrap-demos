<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <div class="row">
      <div class="col-12">
        <div class="card-deck">
          <bs-card shadow>
            <bs-card-header>Circle Avatar - Standalone</bs-card-header>
            <bs-card-body>
              <bs-avatar class="m-2"
                         size="72"
                         img-src="assets/kitty-1.jpg"
                         circle />
              <bs-avatar size="72"
                         class="bg-teal text-white m-2"
                         icon="bs-folder-shared"
                         circle />
              <bs-avatar size="72"
                         class="bg-deep-orange darken-3 text-white m-2"
                         icon="user-friends"
                         circle />
              <bs-avatar size="72"
                         class="bg-grey-600 darken-3 text-white m-2"
                         style="font-size: 220%"
                         text="BS"
                         circle />
            </bs-card-body>
          </bs-card>
          <bs-card shadow>
            <bs-card-header>Rounded Avatar - Standalone</bs-card-header>
            <bs-card-body>
              <bs-avatar class="m-2"
                         size="72"
                         img-src="assets/kitty-2.jpg"
                         rounded />
              <bs-avatar size="72"
                         class="bg-teal text-white m-2"
                         icon="bs-folder-special"
                         rounded />
              <bs-avatar size="72"
                         class="bg-deep-orange darken-3 text-white m-2"
                         icon="camera"
                         rounded />
              <bs-avatar size="72"
                         class="bg-grey-600 darken-3 text-white m-2"
                         style="font-size: 220%"
                         text="BS"
                         rounded />
            </bs-card-body>
          </bs-card>
          <bs-card shadow>
            <bs-card-header>Square Avatar - Standalone</bs-card-header>
            <bs-card-body>
              <bs-avatar class="m-2"
                         size="72"
                         img-src="assets/kitty-1.jpg" />
              <bs-avatar size="72"
                         class="bg-teal text-white m-2"
                         icon="bs-create_folder" />
              <bs-avatar size="72"
                         class="bg-deep-orange darken-3 text-white m-2"
                         icon="camera" />
              <bs-avatar size="72"
                         class="bg-grey-600 text-white m-2"
                         style="font-size: 220%"
                         text="bs" />
            </bs-card-body>
          </bs-card>
        </div>
      </div>

      <div class="col-lg-9 col-xl-6 mt-3">
        <bs-card shadow>
          <bs-card-header>Within ListView component</bs-card-header>
          <bs-list-view>
            <bs-list-tile>
              <bs-list-tile-leading size="42">
                <bs-avatar img-src="assets/kitty-2.jpg"
                           size="40"
                           circle />
              </bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>Avatar using external image.</bs-list-tile-title>
              </bs-list-tile-content>
              <bs-list-tile-action>
                <bs-badge>22</bs-badge>
              </bs-list-tile-action>
            </bs-list-tile>
            <bs-divider />
            <bs-list-tile>
              <bs-list-tile-leading size="42">
                <bs-avatar size="40"
                           class="bg-teal text-white"
                           icon="bs-folder-shared"
                           circle />
              </bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>Avatar using icon listed on Icon examples</bs-list-tile-title>
              </bs-list-tile-content>
              <bs-list-tile-action>
                <bs-badge>8</bs-badge>
              </bs-list-tile-action>
            </bs-list-tile>
            <bs-divider />
            <bs-list-tile>
              <bs-list-tile-leading size="42">
                <bs-avatar size="40"
                           class="bg-deep-orange darken-3 text-white"
                           icon="user-friends"
                           circle />
              </bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>Avatar using icon listed on FontAwesome website</bs-list-tile-title>
              </bs-list-tile-content>
              <bs-list-tile-action>
                <bs-badge>15</bs-badge>
              </bs-list-tile-action>
            </bs-list-tile>
            <bs-divider />
            <bs-list-tile>
              <bs-list-tile-leading size="42">
                <bs-avatar size="40"
                           class="bg-grey-600 text-white"
                           text="BS"
                           circle />
              </bs-list-tile-leading>
              <bs-list-tile-content>
                <bs-list-tile-title>This avatar created using Text</bs-list-tile-title>
              </bs-list-tile-content>
              <bs-list-tile-action>
                <bs-badge>5</bs-badge>
              </bs-list-tile-action>
            </bs-list-tile>
          </bs-list-view>
        </bs-card>
      </div>
    </div>
  </section>
</template>

<script>

export default {
    name: "Avatars"
}
</script>

<style scoped>

</style>
