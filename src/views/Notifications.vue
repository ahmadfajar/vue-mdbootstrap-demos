<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <bs-card shadow>
      <bs-card-header>Standard Notifications</bs-card-header>
      <bs-card-body class="row">
        <div class="col-12 col-md-6 col-xl">
          <bs-button color="success" @click="showSuccessNotification">
            Show success notification
          </bs-button>
        </div>
        <div class="col-12 col-md-6 col-xl mt-3 mt-md-0">
          <bs-button color="info" @click="showInfoNotification">
            Show info notification
          </bs-button>
        </div>
        <div class="col-12 col-md-6 col-xl mt-3 mt-xl-0">
          <bs-button color="warning" @click="showWarningNotification">
            Show warning notification
          </bs-button>
        </div>
        <div class="col-12 col-md-6 col-xl mt-3 mt-xl-0">
          <bs-button color="danger" @click="showErrorNotification">
            Show error notification
          </bs-button>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card class="mt-3" shadow>
      <bs-card-header>Notifications Placement</bs-card-header>
      <bs-card-body>
        <div class="row">
          <div class="col-12 col-md-6 col-xl">
            <bs-button color="info" @click="showCustomNotification('top-left')">
              Show Top-Left
            </bs-button>
          </div>
          <div class="col-12 col-md-6 col-xl mt-3 mt-xl-0">
            <bs-button color="info" @click="showCustomNotification('top-center')">
              Show Top-Center
            </bs-button>
          </div>
          <div class="col-12 col-md-6 col-xl mt-3 mt-md-0">
            <bs-button color="info" @click="showCustomNotification('top-right')">
              Show Top-Right
            </bs-button>
          </div>
          <div class="col-12 col-md-6 col-xl mt-3 mt-xl-0">
            <bs-button color="info" @click="showCustomNotification('top-full-width')">
              Show Top Full Width
            </bs-button>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6 col-xl mt-3">
            <bs-button color="info" @click="showCustomNotification('bottom-left')">
              Show Bottom-Left
            </bs-button>
          </div>
          <div class="col-12 col-md-6 col-xl mt-3">
            <bs-button color="info" @click="showCustomNotification('bottom-center')">
              Show Bottom-Center
            </bs-button>
          </div>
          <div class="col-12 col-md-6 col-xl mt-3">
            <bs-button color="info" @click="showCustomNotification('bottom-right')">
              Show Bottom-Right
            </bs-button>
          </div>
          <div class="col-12 col-md-6 col-xl mt-3">
            <bs-button color="info" @click="showCustomNotification('bottom-full-width')">
              Show Bottom Full Width
            </bs-button>
          </div>
        </div>
      </bs-card-body>
    </bs-card>
  </section>
</template>

<script>
export default {
    name: "Notifications",
    data: () => ({
        successNotification: false,
        infoNotification: false,
        warningNotification: false,
        dangerNotification: false,
    }),
    methods: {
        showSuccessNotification() {
            this.$notification.success('I am notification message...', 'Success Title');
        },
        showInfoNotification() {
            this.$notification.info('I am notification message...', 'Info Title');
        },
        showWarningNotification() {
            this.$notification.warning('I am notification message...', 'Warning Title');
        },
        showErrorNotification() {
            this.$notification.error('I am notification message...', 'Error Title');
        },
        showCustomNotification(position) {
            let options = {
                position: position,
                message: 'I am notification message...'
            };
            this.$notification.info(options, 'Info Title');
        }
    }
}
</script>

<style scoped>

</style>
