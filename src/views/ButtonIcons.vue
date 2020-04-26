<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <bs-card tag="article" shadow>
      <bs-card-header>Text with Icons</bs-card-header>
      <bs-card-body class="row">
        <div class="col-12 col-sm-6 col-xl-2">
          <bs-button icon="ambulance" icon-position="left">
            Icon Left
          </bs-button>
        </div>
        <div class="col-12 col-sm-6 col-xl-2 mt-3 mt-sm-0">
          <bs-button icon="ambulance" icon-position="right">
            Icon Right
          </bs-button>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mt-3 mt-xl-0">
          <bs-button icon="ambulance" icon-position="right" icon-flip="horizontal">
            Flip Horizontal
          </bs-button>
        </div>
        <div class="col-12 col-sm-6 col-xl-3 mt-3 mt-xl-0">
          <bs-button icon="ambulance" icon-position="right" icon-flip="vertical">
            Flip Vertical
          </bs-button>
        </div>
        <div class="col-12 col-sm-6 col-xl-2 mt-3 mt-xl-0">
          <bs-button icon="ambulance" icon-position="right" icon-flip="both">
            Flip Both
          </bs-button>
        </div>
        <div class="col-12 col-sm-6 col-xl-2 mt-3">
          <bs-button icon="ambulance" icon-position="right" icon-rotation="90">
            Rotate-90
          </bs-button>
        </div>
        <div class="col-12 col-sm-6 col-xl-2 mt-3">
          <bs-button icon="ambulance" icon-position="right" icon-size="lg">
            Size-lg
          </bs-button>
        </div>
        <div class="col-12 col-sm-6 col-xl-2 mt-3">
          <bs-button icon="ambulance" icon-position="right" icon-size="2x">
            Size-2x
          </bs-button>
        </div>
        <div class="col-12 col-sm-6 col-xl-2 mt-3">
          <bs-button icon="circle-notch"
                     icon-position="right"
                     icon-size="lg"
                     icon-spin>
            Spin
          </bs-button>
        </div>
        <div class="col-12 col-sm-6 col-xl-2 mt-3">
          <bs-button icon="spinner"
                     icon-position="right"
                     icon-size="lg"
                     icon-spin>
            Spin
          </bs-button>
        </div>
        <div class="col-12 col-sm-6 col-xl-2 mt-3">
          <bs-button icon="spinner"
                     icon-position="right"
                     icon-size="lg"
                     icon-pulse>
            Pulse
          </bs-button>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card tag="article" class="mt-3" shadow>
      <bs-card-header>Icons Only</bs-card-header>
      <bs-card-body>
        <bs-button color="secondary"
                   mode="icon"
                   icon="ambulance"
                   icon-size="lg" />
        <bs-button color="secondary"
                   mode="icon"
                   icon="ambulance"
                   icon-size="lg"
                   icon-flip="horizontal" />
        <bs-button color="secondary"
                   mode="icon"
                   icon="ambulance"
                   icon-size="lg"
                   icon-flip="vertical" />
        <bs-button color="secondary"
                   mode="icon"
                   icon="ambulance"
                   icon-size="lg"
                   icon-flip="both" />
        <bs-button color="secondary"
                   mode="icon"
                   icon="ambulance"
                   icon-size="lg"
                   icon-rotation="90" />
        <bs-button color="secondary"
                   mode="icon"
                   icon="spinner"
                   icon-size="lg"
                   icon-spin />
        <bs-button color="secondary"
                   mode="icon"
                   icon="spinner"
                   icon-size="lg"
                   icon-pulse />
      </bs-card-body>
    </bs-card>
  </section>
</template>

<script>
export default {
    name: "ButtonIcons"
}
</script>

<style scoped>

</style>
