<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <div class="row">
      <div class="col-12 col-lg-6">
        <bs-card shadow>
          <bs-card-header>Default Tooltip</bs-card-header>
          <bs-card-body class="row">
            <div class="col text-center">
              <bs-card-content type="subtitle" class="mb-3">
                Component
              </bs-card-content>
              <bs-tooltip content="I am a tooltip from a tag">
                <bs-button>Hover me</bs-button>
              </bs-tooltip>
            </div>
            <div class="col text-center">
              <bs-card-content type="subtitle" class="mb-3">
                Directive
              </bs-card-content>
              <bs-button v-tooltip="'I am a tooltip from a directive'">
                Hover me
              </bs-button>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-12 col-lg-6 mt-3 mt-lg-0">
        <bs-card shadow>
          <bs-card-header>Tooltip Placement</bs-card-header>
          <bs-card-body class="row">
            <div class="col-6 col-md mt-2 text-center">
              <bs-button 
                v-tooltip="{content: 'I am a tooltip placed at top', placement: 'top'}"
                color="primary">
                Top
              </bs-button>
            </div>
            <div class="col-6 col-md mt-2 text-center">
              <bs-button 
                v-tooltip="{content: 'I am a tooltip placed at bottom', placement: 'bottom'}"
                color="primary">
                Bottom
              </bs-button>
            </div>
            <div class="col-6 col-md mt-2 text-center">
              <bs-button 
                v-tooltip="{content: 'I am a tooltip placed at right', placement: 'right'}"
                color="primary">
                Right
              </bs-button>
            </div>
            <div class="col-6 col-md mt-2 text-center">
              <bs-button 
                v-tooltip="{content: 'I am a tooltip placed at left', placement: 'left'}"
                color="primary">
                Left
              </bs-button>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Tooltips"
}
</script>

<style scoped>

</style>
