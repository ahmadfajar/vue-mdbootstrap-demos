<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <bs-card shadow>
      <bs-card-header>Standard Toggle</bs-card-header>
      <bs-card-body>
        <bs-card-content type="subtitle" class="mb-2">
          Normal State
        </bs-card-content>
        <div class="mb-2 row">
          <label class="col-md-2 col-form-label">
            What are you drinking?
          </label>
          <div class="col-md-10">
            <bs-button-toggle v-model="selectedDrink" :items="drinks" />
          </div>
        </div>
        <div class="mb-2 row">
          <label class="col-md-2 col-form-label">
            How is the weather today
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedWeather"
              :items="weathers"
              color="info"
              toggle-color="indigo"
              icon-position="right" />
          </div>
        </div>

        <bs-card-content type="subtitle" class="mb-2">
          Readonly State
        </bs-card-content>
        <div class="mb-2 row">
          <label class="col-md-2 col-form-label">
            What are you drinking?
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedDrink"
              :items="drinks"
              readonly />
          </div>
        </div>
        <div class="mb-2 row">
          <label class="col-md-2 col-form-label">
            How is the weather today
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedWeather"
              :items="weathers"
              color="info"
              toggle-color="indigo"
              icon-position="left"
              readonly />
          </div>
        </div>

        <bs-card-content type="subtitle" class="mb-2">
          Disabled State
        </bs-card-content>
        <div class="mb-2 row">
          <label class="col-md-2 col-form-label">
            What are you drinking?
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedDrink"
              :items="drinks"
              disabled />
          </div>
        </div>
        <div class="row">
          <label class="col-md-2 col-form-label">
            How is the weather today
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedWeather"
              :items="weathers"
              disabled />
          </div>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card class="mt-3" shadow>
      <bs-card-header>With Different Effect</bs-card-header>
      <bs-card-body>
        <bs-card-content type="subtitle" class="mb-2">
          Raised
        </bs-card-content>
        <div class="mb-2 row">
          <label class="col-md-2 col-form-label">
            What are you drinking?
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedDrink"
              :items="drinks"
              raised />
          </div>
        </div>
        <div class="mb-2 row">
          <label class="col-md-2 col-form-label">
            How is the weather today
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedWeather"
              :items="weathers"
              color="info"
              toggle-color="indigo"
              icon-position="right"
              raised />
          </div>
        </div>

        <bs-card-content type="subtitle" class="mb-2">
          Outlined
        </bs-card-content>
        <div class="mb-2 row">
          <label class="col-md-2 col-form-label">
            What are you drinking?
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedDrink"
              :items="drinks"
              outlined />
          </div>
        </div>
        <div class="mb-2 row">
          <label class="col-md-2 col-form-label">
            How is the weather today
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedWeather"
              :items="weathers"
              color="info"
              toggle-color="indigo"
              icon-position="right"
              outlined />
          </div>
        </div>

        <bs-card-content type="subtitle" class="mb-2">
          Flat
        </bs-card-content>
        <div class="mb-2 row">
          <label class="col-md-2 col-form-label">
            What are you drinking?
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedDrink"
              :items="drinks"
              flat />
          </div>
        </div>
        <div class="row">
          <label class="col-md-2 col-form-label">
            How is the weather today
          </label>
          <div class="col-md-10">
            <bs-button-toggle
              v-model="selectedWeather"
              :items="weathers"
              color="info"
              toggle-color="indigo"
              icon-position="right"
              flat />
          </div>
        </div>
      </bs-card-body>
    </bs-card>
  </section>
</template>

<script>
export default {
    name: "ButtonToggles",
    data: () => ({
        drinks: [{
            value: 'tea',
            label: 'Tea'
        }, {
            value: 'coffee',
            label: 'Coffee'
        }, {
            value: 'beer',
            label: 'Beer'
        }],
        weathers: [{
            value: 'sunny',
            label: 'Sunny',
            icon: 'cloud-sun',
            iconSize: 'lg'
        }, {
            value: 'rain',
            label: 'Rain',
            icon: 'cloud-rain',
            iconSize: 'lg'
        }, {
            value: 'heavy-rain',
            label: 'Heavy Rain',
            icon: 'cloud-showers-heavy',
            iconSize: 'lg'
        }],
        selectedDrink: null,
        selectedWeather: null
    })
}
</script>

<style scoped>

</style>
