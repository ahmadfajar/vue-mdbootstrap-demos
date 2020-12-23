<template>
  <bs-card class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4" shadow>
    <bs-card-header>ImageHolder Variations</bs-card-header>
    <bs-card-body>
      <div class="row">
        <div class="col-4 col-md-3 mb-4">
          <bs-image-holder
            x-pos="26%"
            text-color="#ffffff"
            place-holder="Place Holder Text..." />
        </div>
        <div class="col-4 col-md-3 mb-4">
          <bs-image-holder
            x-pos="26%"
            bg-color="#1976d2" 
            place-holder="BgColor: #1976d2" />
        </div>
        <div class="col-4 col-md-3 mb-4">
          <bs-image-holder
            x-pos="26%"
            bg-color="#006064"
            place-holder="BgColor: #006064"
            rounded />
        </div>
        <div class="col-4 col-md-3 mb-4">
          <bs-image-holder
            x-pos="26%"
            bg-color="#f57f17"
            text-color="#ffffff"
            place-holder="BgColor: #f57f17"
            rounded />
        </div>
        <div class="col-4 col-md-3 mb-4">
          <bs-image-holder
            width="200px"
            height="200px"
            x-pos="25%"
            bg-color="#8e24aa"
            text-color="#ffffff"
            place-holder="BgColor: #8e24aa"
            circle
            center />
        </div>
        <div class="col-4 col-md-3 mb-4">
          <bs-image-holder
            width="200px"
            x-pos="22%"
            bg-color="#1565c0"
            place-holder="BgColor: #1565c0"
            circle
            center />
        </div>
        <div class="col-4 col-md-3 mb-4">
          <bs-image-holder
            height="350px"
            x-pos="27%"
            bg-color="#2e7d32"
            place-holder="BgColor: #2e7d32"
            circle
            center />
        </div>
        <div class="col-4 col-md-3 mb-4">
          <bs-image-holder
            x-pos="30%"
            bg-color="#d32f2f"
            text-color="#ffffff"
            place-holder="BgColor: #d32f2f"
            circle
            center />
        </div>
      </div>
    </bs-card-body>
    <bs-card-footer>
      Beware, some property of <span class="text-primary">ImageHolder</span> will make it not responsive. Use it with care.
    </bs-card-footer>
  </bs-card>
</template>

<script>
export default {
    name: "ImageHolders"
}
</script>

<style scoped>

</style>
