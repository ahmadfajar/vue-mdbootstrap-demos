<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <bs-card shadow>
      <bs-card-header>Examples</bs-card-header>
      <bs-card-body class="row">
        <div class="col-12 col-md-6 col-xl">
          <bs-button color="info" @click="autoCloseModalVisible = true">
            Show auto close modal
          </bs-button>
        </div>
        <div class="col-12 col-md-6 col-xl mt-3 mt-md-0">
          <bs-button color="info" @click="trueModalVisible = true">
            Show True modal
          </bs-button>
        </div>
        <div class="col-12 col-md-6 col-xl mt-3 mt-md-0">
          <bs-button color="info" @click="scrollableModalVisible = true">
            Show long content modal
          </bs-button>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-modal :open.sync="autoCloseModalVisible"
              max-width="85%"
              title="Vue MdBootstrap"
              width="400">
      <b>{{ modalMessage }}</b><br />
      You can click outside area or press ESC to close me.
      <template v-slot:footer="">
        <bs-button color="primary"
                   @click="autoCloseModalVisible = false">
          OK
        </bs-button>
        <bs-button color="primary" flat @click="autoCloseModalVisible = false">
          Cancel
        </bs-button>
      </template>
    </bs-modal>

    <bs-modal :open.sync="trueModalVisible"
              :esc-close="false"
              :overlay-close="false"
              transition="slide-top"
              max-width="85%"
              title="Vue MdBootstrap"
              width="400">
      <b>{{ modalMessage }}</b><br />
      You can only close me by clicking button below.
      <template v-slot:footer="">
        <bs-button color="primary"
                   @click="trueModalVisible = false">
          OK
        </bs-button>
        <bs-button color="primary" flat @click="trueModalVisible = false">
          Cancel
        </bs-button>
      </template>
    </bs-modal>

    <bs-modal :open.sync="scrollableModalVisible"
              :scrollable="true"
              max-width="90%"
              title="Vue MdBootstrap"
              width="600">
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
      <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <template v-slot:footer="">
        <bs-button color="primary"
                   @click="scrollableModalVisible = false">
          OK
        </bs-button>
        <bs-button color="primary" flat @click="scrollableModalVisible = false">
          Cancel
        </bs-button>
      </template>
    </bs-modal>
  </section>
</template>

<script>
export default {
    name: "Modals",
    data: () => ({
        autoCloseModalVisible: false,
        scrollableModalVisible: false,
        trueModalVisible: false,
        modalMessage: 'Hello, I am a modal.'
    })
}
</script>

<style scoped>

</style>
