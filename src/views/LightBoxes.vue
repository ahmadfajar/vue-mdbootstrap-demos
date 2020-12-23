<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <bs-card shadow>
      <bs-card-header>Single Image</bs-card-header>
      <bs-card-body class="text-center">
        <bs-avatar
          class="md-link"
          img-src="https://unsplash.it/200.jpg?image=250"
          size="200"
          rounded
          @click="showSingleItem = true" />
      </bs-card-body>
    </bs-card>

    <bs-card class="mt-3" shadow>
      <bs-card-header>Image Gallery</bs-card-header>
      <bs-card-body class="row justify-content-center">
        <div class="col-md-8 col-xl-6">
          <div class="row">
            <div class="col-sm-4">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=251"
                size="100%"
                rounded
                @click="showGalleryAt(0)" />
            </div>
            <div class="col-sm-4 mt-3 mt-sm-0">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=252"
                size="100%"
                rounded
                @click="showGalleryAt(1)" />
            </div>
            <div class="col-sm-4 mt-3 mt-sm-0">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=253"
                size="100%"
                rounded
                @click="showGalleryAt(2)" />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-sm-4">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=254"
                size="100%"
                rounded
                @click="showGalleryAt(3)" />
            </div>
            <div class="col-sm-4 mt-3 mt-sm-0">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=255"
                size="100%"
                rounded
                @click="showGalleryAt(4)" />
            </div>
            <div class="col-sm-4 mt-3 mt-sm-0">
              <bs-avatar
                class="md-link"
                img-src="https://unsplash.it/600.jpg?image=256"
                size="100%"
                rounded
                @click="showGalleryAt(5)" />
            </div>
          </div>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-lightbox 
      :items="singleItem"
      :open.sync="showSingleItem"
      :overlay-opacity="0.8"
      :show-counter="false"
      :show-item-title="true"
      :show-nav-control="false"
      :show-thumbnail="false"
      :show-toolbar="false" />

    <bs-lightbox
      ref="lightbox"
      :items="galleryItems"
      :open.sync="showGalleryItems"
      :overlay-opacity="0.9"
      :thumbnail-height="80">
      <bs-list-view slot="menubar" color="teal">
        <bs-list-tile navigable>
          <bs-list-tile-title>Slideshow</bs-list-tile-title>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-title>Add to album</bs-list-tile-title>
        </bs-list-tile>
        <bs-list-tile navigable>
          <bs-list-tile-title>Shared picture</bs-list-tile-title>
        </bs-list-tile>
        <bs-divider />
        <bs-list-tile navigable>
          <bs-list-tile-title>Send Feedback</bs-list-tile-title>
        </bs-list-tile>
      </bs-list-view>
    </bs-lightbox>
  </section>
</template>

<script>
export default {
    name: "LightBoxes",
    data: () => ({
        showSingleItem: false,
        showGalleryItems: false,
        singleItem: [{
            thumbnail: 'https://unsplash.it/200.jpg?image=250',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=250',
            title: 'Your image title'
        }],
        galleryItems: [{
            thumbnail: 'https://unsplash.it/200.jpg?image=251',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=251',
            title: 'First image title'
        }, {
            thumbnail: 'https://unsplash.it/200.jpg?image=252',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=252',
            title: 'Second image title'
        }, {
            thumbnail: 'https://unsplash.it/200.jpg?image=253',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=253',
            title: 'Third image title'
        }, {
            thumbnail: 'https://unsplash.it/200.jpg?image=254',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=254',
            title: 'Fourth image title'
        }, {
            thumbnail: 'https://unsplash.it/200.jpg?image=255',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=255',
            title: 'Fifth image title'
        }, {
            thumbnail: 'https://unsplash.it/200.jpg?image=256',
            imageSrc: 'https://unsplash.it/1200/768.jpg?image=256',
            title: 'Sixth image title'
        }],
    }),
    methods: {
        showGalleryAt(index) {
            if (index != null && index > -1) {
                this.$refs.lightbox.openAt(index);
            } else {
                this.showGalleryItems = true;
            }
        }
    }
}
</script>

<style scoped>

</style>
