<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <div class="row">
      <div class="col-12 col-lg-6">
        <bs-card shadow>
          <bs-card-header>
            Bootstrap Badges
          </bs-card-header>
          <bs-card-body>
            <h2>Example heading <bs-badge>New</bs-badge></h2>
            <h3>Example heading <bs-badge>New</bs-badge></h3>
            <h4>Example heading <bs-badge>New</bs-badge></h4>
            <h5>Example heading <bs-badge>New</bs-badge></h5>
            <h6>Example heading <bs-badge>New</bs-badge></h6>
          </bs-card-body>
          <bs-card-footer class="bg-white">
            <bs-button color="primary">
              Notifications 
              <bs-badge variant="light" class="ml-2">
                9
              </bs-badge>
            </bs-button>
          </bs-card-footer>
        </bs-card>
      </div>

      <div class="col-12 col-lg-6">
        <bs-card class="mt-3 mt-lg-0" shadow>
          <bs-card-header>
            Badges with contextual variations
          </bs-card-header>
          <bs-card-body style="font-size: 1rem">
            <bs-badge variant="primary">
              Primary
            </bs-badge>
            <bs-badge variant="secondary">
              Secondary
            </bs-badge>
            <bs-badge variant="success">
              Success
            </bs-badge>
            <bs-badge variant="danger">
              Danger
            </bs-badge>
            <bs-badge variant="warning">
              Warning
            </bs-badge>
            <bs-badge variant="info">
              Info
            </bs-badge>
            <bs-badge variant="light">
              Light
            </bs-badge>
            <bs-badge variant="dark">
              Dark
            </bs-badge>
          </bs-card-body>
        </bs-card>
        <bs-card class="mt-3" shadow>
          <bs-card-header>
            Badges with custom color
          </bs-card-header>
          <bs-card-body style="font-size: 1rem">
            <bs-badge color="primary-color-dark text-white">
              primary-color-dark
            </bs-badge>
            <bs-badge color="default-color-dark text-white">
              default-color-dark
            </bs-badge>
            <bs-badge color="elegant-color text-white">
              elegant-color
            </bs-badge>
            <bs-badge color="stylish-color text-white">
              stylish-color
            </bs-badge>
            <bs-badge color="unique-color text-white">
              unique-color
            </bs-badge>
            <bs-badge color="red text-white">
              red
            </bs-badge>
            <bs-badge color="pink text-white">
              pink
            </bs-badge>
            <bs-badge color="purple text-white">
              purple
            </bs-badge>
          </bs-card-body>
        </bs-card>
      </div>

      <div class="col-12 col-lg-6 mt-3">
        <bs-card shadow>
          <bs-card-header>
            Badges with <span class="text-info">type="label"</span>
          </bs-card-header>
          <bs-card-body style="font-size: 1rem">
            <bs-badge type="label" variant="primary">
              Primary
            </bs-badge>
            <bs-badge type="label" variant="secondary">
              Secondary
            </bs-badge>
            <bs-badge type="label" variant="success">
              Success
            </bs-badge>
            <bs-badge type="label" variant="danger">
              Danger
            </bs-badge>
            <bs-badge type="label" variant="warning">
              Warning
            </bs-badge>
            <bs-badge type="label" variant="info">
              Info
            </bs-badge>
            <bs-badge type="label" variant="light">
              Light
            </bs-badge>
            <bs-badge type="label" variant="dark">
              Dark
            </bs-badge>
          </bs-card-body>
        </bs-card>
      </div>

      <div class="col-12 col-lg-6 mt-3">
        <bs-card shadow>
          <bs-card-header>
            Badges with <span class="text-info">type="pill"</span>
          </bs-card-header>
          <bs-card-body style="font-size: 1rem">
            <bs-badge type="pill" variant="primary">
              Primary
            </bs-badge>
            <bs-badge type="pill" variant="secondary">
              Secondary
            </bs-badge>
            <bs-badge type="pill" variant="success">
              Success
            </bs-badge>
            <bs-badge type="pill" variant="danger">
              Danger
            </bs-badge>
            <bs-badge type="pill" variant="warning">
              Warning
            </bs-badge>
            <bs-badge type="pill" variant="info">
              Info
            </bs-badge>
            <bs-badge type="pill" variant="light">
              Light
            </bs-badge>
            <bs-badge type="pill" variant="dark">
              Dark
            </bs-badge>
          </bs-card-body>
        </bs-card>
      </div>

      <div class="col-12 col-lg-6 mt-3">
        <bs-card shadow>
          <bs-card-header>
            Actionable Badges
          </bs-card-header>
          <bs-card-body style="font-size: 1rem">
            <bs-badge 
              tag="a"
              href="#/badges"
              variant="primary">
              Primary
            </bs-badge>
            <bs-badge 
              tag="a"
              href="#/badges"
              variant="secondary">
              Secondary
            </bs-badge>
            <bs-badge 
              tag="a"
              href="#/badges"
              variant="success">
              Success
            </bs-badge>
            <bs-badge 
              tag="a"
              href="#/badges"
              variant="danger">
              Danger
            </bs-badge>
            <bs-badge 
              tag="a"
              href="#/badges"
              variant="warning">
              Warning
            </bs-badge>
            <bs-badge 
              tag="a"
              href="#/badges"
              variant="info">
              Info
            </bs-badge>
            <bs-badge 
              tag="a"
              href="#/badges"
              variant="light">
              Light
            </bs-badge>
            <bs-badge
              tag="a"
              href="#/badges"
              variant="dark">
              Dark
            </bs-badge>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Badges"
}
</script>

<style lang="scss" scoped>
.card-body {
    .badge {
        margin-right: 4px;
    }
}
</style>
