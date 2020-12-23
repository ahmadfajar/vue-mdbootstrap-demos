<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h5 class="mb-3">
          Basic Bootstrap Style
        </h5>
        <bs-card class="mb-3" shadow>
          <bs-tabs
            v-model="activeTab" 
            inner-class="card-header">
            <bs-tab label="Home" icon="home">
              {{ homeTab }}
            </bs-tab>
            <bs-tab
              label="Profile" 
              icon="user">
              {{ profileTab }}
            </bs-tab>
            <bs-tab
              label="Contact" 
              icon="address-card">
              {{ contactTab }}
            </bs-tab>
          </bs-tabs>
        </bs-card>

        <h5 class="mt-4 mb-3">
          Bootstrap Pill Style
        </h5>
        <bs-card class="mb-3" shadow>
          <bs-tabs
            v-model="activeTab"
            alignment="center"
            inner-class="card-header"
            variant="pills">
            <bs-tab label="Home" icon="home">
              {{ homeTab }}
            </bs-tab>
            <bs-tab label="Profile" icon="user">
              {{ profileTab }}
            </bs-tab>
            <bs-tab label="Contact" icon="address-card">
              {{ contactTab }}
            </bs-tab>
          </bs-tabs>
        </bs-card>

        <h5 class="mt-4 mb-3">
          Material Style
        </h5>
        <bs-card class="mb-3" shadow>
          <bs-tabs
            v-model="activeTab"
            variant="material"
            alignment="right"
            color="primary">
            <bs-tab label="Home" icon="home">
              {{ homeTab }}
            </bs-tab>
            <bs-tab label="Profile" icon="user">
              {{ profileTab }}
            </bs-tab>
            <bs-tab label="Contact" icon="address-card">
              {{ contactTab }}
            </bs-tab>
          </bs-tabs>
        </bs-card>

        <h5 class="mt-4 mb-3">
          Modern Style
        </h5>
        <bs-card class="mb-3" shadow>
          <bs-tabs
            v-model="activeTab"
            variant="modern"
            color="deep-purple"
            alignment="justified">
            <bs-tab label="Home" icon="home">
              {{ homeTab }}
            </bs-tab>
            <bs-tab label="Profile" icon="user">
              {{ profileTab }}
            </bs-tab>
            <bs-tab label="Contact" icon="address-card">
              {{ contactTab }}
            </bs-tab>
          </bs-tabs>
        </bs-card>
      </div>

      <div class="col-md-6">
        <h5 class="mb-3">
          Placement Top
        </h5>
        <bs-card class="mb-3" shadow>
          <bs-tabs
            v-model="activeTab"
            variant="pills"
            alignment="justified"
            tab-position="top"
            content-transition="slide-fade">
            <bs-tab label="Home" icon="home">
              {{ homeTab }}
            </bs-tab>
            <bs-tab label="Profile" icon="user">
              {{ profileTab }}
            </bs-tab>
            <bs-tab label="Contact" icon="address-card">
              {{ contactTab }}
            </bs-tab>
          </bs-tabs>
        </bs-card>

        <h5 class="mt-4 mb-3">
          Placement Bottom
        </h5>
        <bs-card class="mb-3" shadow>
          <bs-tabs
            v-model="activeTab"
            inner-class="card-footer"
            tab-position="bottom"
            content-transition="popover">
            <bs-tab label="Home" icon="home">
              {{ homeTab }}
            </bs-tab>
            <bs-tab label="Profile" icon="user">
              {{ profileTab }}
            </bs-tab>
            <bs-tab label="Contact" icon="address-card">
              {{ contactTab }}
            </bs-tab>
          </bs-tabs>
        </bs-card>

        <h5 class="mt-4 mb-3">
          Placement Left
        </h5>
        <bs-card class="mb-3" shadow>
          <bs-tabs
            v-model="activeTab"
            variant="modern"
            color="purple"
            alignment="center"
            tab-position="left">
            <bs-tab label="Home" icon="home">
              {{ homeTab }}
            </bs-tab>
            <bs-tab label="Profile" icon="user">
              {{ profileTab }}
            </bs-tab>
            <bs-tab label="Contact" icon="address-card">
              {{ contactTab }}
            </bs-tab>
          </bs-tabs>
        </bs-card>

        <h5 class="mt-4 mb-3">
          Placement Right
        </h5>
        <bs-card class="mb-3" shadow>
          <bs-tabs
            v-model="activeTab"
            variant="modern"
            color="indigo"
            alignment="center"
            tab-position="right">
            <bs-tab label="Home" icon="home">
              {{ homeTab }}
            </bs-tab>
            <bs-tab label="Profile" icon="user">
              {{ profileTab }}
            </bs-tab>
            <bs-tab label="Contact" icon="address-card">
              {{ contactTab }}
            </bs-tab>
          </bs-tabs>
        </bs-card>
      </div>

      <div class="col-md-8">
        <h5 class="mt-4 mb-3">
          Icon Position And Size
        </h5>
        <bs-card shadow>
          <bs-card-body>
            <bs-tabs
              v-model="activeTab"
              variant="material"
              alignment="center"
              color="info-color-dark"
              icon-position="top"
              icon-size="lg">
              <bs-tab label="Home" icon="home" />
              <bs-tab label="Profile" icon="user" />
              <bs-tab label="Contact" icon="address-card" />
            </bs-tabs>
            <bs-tabs
              v-model="activeTab"
              variant="material"
              alignment="center"
              color="success-color-dark"
              icon-position="bottom"
              icon-size="lg">
              <bs-tab label="Home" icon="home" />
              <bs-tab label="Profile" icon="user" />
              <bs-tab label="Contact" icon="address-card" />
            </bs-tabs>
            <bs-tabs
              v-model="activeTab"
              variant="modern"
              alignment="center"
              color="teal"
              icon-position="left"
              icon-size="lg">
              <bs-tab label="Home" icon="home" />
              <bs-tab label="Profile" icon="user" />
              <bs-tab label="Contact" icon="address-card" />
            </bs-tabs>
            <bs-tabs
              v-model="activeTab"
              variant="modern"
              color="blue-green"
              alignment="center"
              icon-position="right"
              icon-size="lg">
              <bs-tab label="Home" icon="home" />
              <bs-tab label="Profile" icon="user" />
              <bs-tab label="Contact" icon="address-card" />
            </bs-tabs>
            <bs-tabs
              v-model="activeTab"
              variant="modern"
              color="unique"
              alignment="center"
              icon-size="2x"
              content-class="p-0">
              <bs-tab icon="home" />
              <bs-tab icon="user" />
              <bs-tab icon="address-card" />
            </bs-tabs>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Tabs",
    data: () => ({
        activeTab: 0,
        homeTab: 'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.',
        profileTab: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr.',
        contactTab: 'Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney\'s organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog.'
    })
}
</script>

<style scoped>

</style>
