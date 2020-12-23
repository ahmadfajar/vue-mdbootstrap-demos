<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <bs-card tag="article" shadow>
      <bs-card-header>Determinate</bs-card-header>
      <bs-card-body class="row">
        <div class="col-12 col-xl mb-2">
          <div class="font-weight-bold">
            Bar
          </div>
          <bs-progress
            :value="amount1"
            mode="determinate"
            class="mb-2" />
          <div>&nbsp;</div>
          <bs-progress
            :value="amount1"
            mode="determinate"
            color="info" />
        </div>
        <div class="col-12 col-xl text-center">
          <div class="font-weight-bold text-left text-xl-center">
            Spinner
          </div>
          <div class="p-3 d-inline-block">
            <bs-progress
              :value="amount1"
              type="spinner"
              mode="determinate"
              color="purple" />
          </div>
          <div class="p-3 d-inline-block">
            <bs-progress
              :value="amount1"
              type="spinner"
              mode="determinate"
              color="red" />
          </div>
        </div>

        <div class="col-12 mb-3">
          <bs-card-content type="subtitle">
            With different sizes
          </bs-card-content>
          <bs-divider />
        </div>
        <div class="col-12 col-xl mb-2">
          <div class="font-weight-bold">
            Bar
          </div>
          <bs-progress
            :value="amount1"
            :height="10"
            class="mb-2"
            mode="determinate"
            color="teal" />
          <div>&nbsp;</div>
          <bs-progress
            :value="amount1"
            :height="15"
            mode="determinate"
            color="success" />
        </div>
        <div class="col-12 col-xl text-center">
          <div class="font-weight-bold text-left text-xl-center">
            Spinner
          </div>
          <div class="p-3 d-inline-block">
            <bs-progress
              :value="amount1"
              :diameter="90"
              :stroke="10"
              type="spinner"
              mode="determinate"
              color="danger" />
          </div>
          <div class="p-3 d-inline-block">
            <bs-progress
              :value="amount1"
              :diameter="80"
              :stroke="8"
              type="spinner"
              mode="determinate"
              color="deep-orange" />
          </div>
          <div class="p-3 d-inline-block">
            <bs-progress
              :value="amount1"
              type="spinner"
              mode="determinate"
              color="amber" />
          </div>
        </div>

        <div class="col-12 mt-2">
          <bs-divider class="mb-2" />
          <bs-card-content type="subtitle" class="mb-2">
            Progress Value
          </bs-card-content>
          <div class="d-flex">
            <label class="mr-2" style="width: 60%">
              <input
                v-model.number="amount1"
                type="range"
                style="width: 100%" />
            </label>
            <span>{{ amount1 }}%</span>
          </div>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card
      tag="article"
      class="mt-3"
      shadow>
      <bs-card-header>Indeterminate</bs-card-header>
      <bs-card-body class="row">
        <div class="col-12 col-xl mb-2">
          <div class="font-weight-bold">
            Bar
          </div>
          <bs-progress type="bar" class="mb-2" />
          <bs-progress :height="8" color="info" />
        </div>
        <div class="col-12 col-xl text-center">
          <div class="font-weight-bold text-left text-xl-center">
            Spinner
          </div>
          <div class="p-3 d-inline-block">
            <bs-progress
              :diameter="90"
              :stroke="10"
              type="spinner"
              color="danger" />
          </div>
          <div class="p-3 d-inline-block">
            <bs-progress
              :diameter="80"
              :stroke="8"
              type="spinner"
              color="deep-orange" />
          </div>
          <div class="p-3 d-inline-block">
            <bs-progress color="amber" type="spinner" />
          </div>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card
      tag="article"
      class="mt-3"
      shadow>
      <bs-card-header>Buffer</bs-card-header>
      <bs-card-body class="row">
        <div class="col">
          <bs-progress
            :value="amount2"
            :buffer="buffer"
            class="mb-2"
            mode="buffer" />
          <div>&nbsp;</div>
          <bs-progress
            :value="amount2"
            :buffer="buffer"
            mode="buffer"
            color="info" />
        </div>

        <div class="col-12 mt-4">
          <bs-divider class="mb-3" />
          <bs-card-content type="subtitle">
            Progress Value
          </bs-card-content>
          <div class="d-flex mt-2">
            <label class="mr-2" style="width: 60%">
              <input
                v-model.number="amount2"
                type="range"
                style="width: 100%" />
            </label>
            <span>{{ amount2 }}%</span>
          </div>
          <bs-card-content type="subtitle">
            Buffer Value
          </bs-card-content>
          <div class="d-flex mt-2">
            <label class="mr-2" style="width: 60%">
              <input
                v-model.number="buffer"
                type="range"
                style="width: 100%" />
            </label>
            <span>{{ buffer }}%</span>
          </div>
        </div>
      </bs-card-body>
    </bs-card>
  </section>
</template>

<script>
export default {
    name: "ProgressControls",
    data: () => ({
        amount1: 25,
        amount2: 25,
        buffer: 50
    })
}
</script>

<style scoped>

</style>
