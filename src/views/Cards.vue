<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <div class="row">
      <div class="col-md-6 col-lg-4 col-xl-3">
        <bs-card>
          <img
            src="https://picsum.photos/600/300/?image=255"
            class="card-img-top"
            alt="image" />
          <bs-card-body>
            <bs-card-content type="title">
              Card Title
            </bs-card-content>
            <bs-card-content type="text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </bs-card-content>
            <bs-button color="primary" active>
              Go Somewhere
            </bs-button>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 mt-3 mt-lg-0">
        <bs-card>
          <img
            src="https://picsum.photos/600/300/?image=25"
            class="card-img-top"
            alt="image" />
          <bs-card-body>
            <bs-card-content type="title">
              Card Title
            </bs-card-content>
            <bs-card-content type="subtitle" class="mb-3 text-muted">
              Card SubTitle
            </bs-card-content>
            <bs-card-content type="text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </bs-card-content>
            <bs-button color="primary mr-2" flat>
              Action 1
            </bs-button>
            <bs-button color="primary" flat>
              Action 2
            </bs-button>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 mt-3 mt-lg-0">
        <bs-card>
          <img
            src="https://picsum.photos/600/300/?image=425"
            class="card-img-top"
            alt="image" />
          <bs-card-body>
            <bs-card-content type="title">
              Card With ListGroup
            </bs-card-content>
            <bs-card-content type="text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </bs-card-content>
          </bs-card-body>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Cras justo odio
            </li>
            <li class="list-group-item">
              Dapibus ac facilisis in
            </li>
            <li class="list-group-item">
              Vestibulum at eros
            </li>
          </ul>
          <bs-card-body class="text-right">
            <bs-button>Button</bs-button>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-md-6 col-lg-4 col-xl-3 mt-3 mt-xl-0">
        <bs-card>
          <img
            src="https://picsum.photos/600/300/?image=29"
            class="card-img-top"
            alt="image" />
          <bs-card-body>
            <bs-card-content type="title">
              Card Title
            </bs-card-content>
            <bs-card-content type="text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </bs-card-content>
            <bs-card-content type="text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </bs-card-content>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-md-6 mt-3">
        <bs-card>
          <div class="row no-gutters">
            <div class="col-md-4">
              <bs-image-holder
                height="100%"
                class="rounded-left"
                place-holder="Image"
                style="font-size: 22px"
                x-pos="28%" />
            </div>
            <div class="col-md-8">
              <bs-card-body>
                <bs-card-content type="title">
                  Card with Image-Left
                </bs-card-content>
                <bs-card-content type="text">
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </bs-card-content>
                <bs-card-content type="text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </bs-card-content>
              </bs-card-body>
            </div>
          </div>
        </bs-card>
      </div>
      <div class="col-lg-10 col-xl-6 mt-3">
        <div class="card-group">
          <bs-card>
            <img
              src="https://picsum.photos/600/300/?image=425"
              class="card-img-top"
              alt="image" />
            <bs-card-body>
              <bs-card-content type="title">
                Layout - Card Group
              </bs-card-content>
              <bs-card-content type="text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </bs-card-content>
              <bs-card-content type="text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </bs-card-content>
            </bs-card-body>
          </bs-card>
          <bs-card>
            <img
              src="https://picsum.photos/600/300/?image=29"
              class="card-img-top"
              alt="image" />
            <bs-card-body>
              <bs-card-content type="title">
                Layout - Card Group
              </bs-card-content>
              <bs-card-content type="text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </bs-card-content>
              <bs-card-content type="text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </bs-card-content>
            </bs-card-body>
          </bs-card>
        </div>
      </div>
      <div class="col-12 mt-3">
        <div class="card-deck">
          <bs-card>
            <img
              src="https://picsum.photos/600/300/?image=425"
              class="card-img-top"
              alt="image" />
            <bs-card-body>
              <bs-card-content type="title">
                Layout - Card Deck
              </bs-card-content>
              <bs-card-content type="text">
                This is a longer card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </bs-card-content>
              <bs-card-content type="text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </bs-card-content>
            </bs-card-body>
          </bs-card>
          <bs-card>
            <img
              src="https://picsum.photos/600/300/?image=29"
              class="card-img-top"
              alt="image" />
            <bs-card-body>
              <bs-card-content type="title">
                Layout - Card Deck
              </bs-card-content>
              <bs-card-content type="text">
                This card has supporting text below as a natural lead-in to additional content.
              </bs-card-content>
              <bs-card-content type="text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </bs-card-content>
            </bs-card-body>
          </bs-card>
          <bs-card>
            <img
              src="https://picsum.photos/600/300/?image=255"
              class="card-img-top"
              alt="image" />
            <bs-card-body>
              <bs-card-content type="title">
                Layout - Card Deck
              </bs-card-content>
              <bs-card-content type="text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </bs-card-content>
              <bs-card-content type="text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </bs-card-content>
            </bs-card-body>
          </bs-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Cards"
}
</script>

<style scoped>

</style>
