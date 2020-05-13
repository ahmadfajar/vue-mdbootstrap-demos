<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <bs-card shadow>
      <bs-card-body>
        <div class="row">
          <div class="col-lg-5">
            <bs-card-content type="title">
              Portrait
            </bs-card-content>
            <bs-date-picker v-model="date1" format="LLL" />
          </div>
          <div class="col-lg-7">
            <bs-card-content type="title" class="mt-3 mt-lg-0">
              Landscape
            </bs-card-content>
            <bs-date-picker v-model="date1" format="LLL" landscape />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-lg">
            <bs-card-content type="title">
              Year Picker
            </bs-card-content>
            <bs-date-picker v-model="year1"
                            format="YYYY"
                            view-mode="year"
                            color="purple" />
          </div>
          <div class="col-lg">
            <bs-card-content type="title" class="mt-3 mt-lg-0">
              Month Picker
            </bs-card-content>
            <bs-date-picker v-model="month1" 
                            view-mode="month"
                            color="deep-purple" />
          </div>
          <div class="col-lg">
            <bs-card-content type="title" class="mt-3 mt-lg-0">
              Time Picker
            </bs-card-content>
            <bs-date-picker v-model="time1"
                            format="HH:mm:ss"
                            view-mode="time"
                            color="dark-blue" />
          </div>
        </div>
      </bs-card-body>
    </bs-card>
  </section>
</template>

<script>
export default {
    name: "DateTimePickers",
    data: () => ({
        date1: null,
        year1: null,
        month1: null,
        time1: null,
    })
}
</script>

<style scoped>

</style>
