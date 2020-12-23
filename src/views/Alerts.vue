<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <bs-card shadow>
      <bs-card-header>Basic Alert Examples</bs-card-header>
      <bs-card-body>
        <div class="row">
          <div class="col-12 col-lg-4">
            <bs-alert color="primary">
              An alert with primary color
            </bs-alert>
          </div>
          <div class="col-12 col-lg-4">
            <bs-alert color="success">
              An alert with success color
            </bs-alert>
          </div>
          <div class="col-12 col-lg-4">
            <bs-alert color="danger">
              An alert with danger color
            </bs-alert>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-lg-4">
            <bs-alert color="primary" outlined>
              An outline alert with primary color
            </bs-alert>
          </div>
          <div class="col-12 col-lg-4">
            <bs-alert color="success" outlined>
              An outline alert with success color
            </bs-alert>
          </div>
          <div class="col-12 col-lg-4">
            <bs-alert color="danger" outlined>
              An outline alert with danger color
            </bs-alert>
          </div>
        </div>

        <bs-alert 
          color="purple"
          icon="exclamation-triangle">
          <h5>Well done!</h5>
          <p>
            Aww yeah, you successfully read this important alert message. This is an example how to
            construct <b>Alerts</b> from other predefined colors.
          </p>
          <hr />
          <p class="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
          </p>
        </bs-alert>
      </bs-card-body>
    </bs-card>
    <bs-card class="mt-4" shadow>
      <bs-card-header>Dismissable Alert Examples</bs-card-header>
      <bs-card-body>
        <div class="row">
          <div class="col-12 col-lg-6">
            <bs-alert 
              :value="dismissCountDown > 0"
              transition="fade"
              @input="dismissCountDown=0"
              dismissable>
              <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
              <bs-progress 
                color="warning"
                mode="determinate"
                type="bar"
                :value="percentProgress" />
            </bs-alert>
            <bs-button @click="showAlert">
              Show dismissable Alert
            </bs-button>
          </div>

          <div class="col-12 col-lg-6 mt-3 mt-lg-0">
            <bs-alert 
              v-model="showDismissibleAlert"
              color="teal"
              transition="fade"
              dismissable
              @input="showDismissibleAlert=false">
              <p>This is a dismissable alert.</p>
            </bs-alert>
            <bs-button @click="showDismissibleAlert = !showDismissibleAlert">
              {{ showDismissibleAlert ? 'Hide' : 'Show' }} dismissable Alert
            </bs-button>
          </div>
        </div>
      </bs-card-body>
    </bs-card>
  </section>
</template>

<script>
export default {
    name: "Alerts",
    data: () => ({
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        timerInterval: null,
    }),
    computed: {
        percentProgress() {
            return (this.dismissCountDown / this.dismissSecs) * 100;
        },
    },
    watch: {
        dismissCountDown(newValue) {
            if (newValue < 1) {
                clearInterval(this.timerInterval);
            }
        }
    },
    methods: {
        showAlert() {
            this.dismissCountDown = this.dismissSecs;
            this.startTimer();
        },
        startTimer() {
            this.timerInterval = setInterval(() => (this.dismissCountDown -= 1), 1000);
        }
    }
}
</script>

<style scoped>

</style>
