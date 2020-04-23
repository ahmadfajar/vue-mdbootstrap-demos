<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <bs-card tag="article" shadow>
      <bs-card-header>Standard Button Groups</bs-card-header>
      <bs-card-body>
        <div class="row align-items-center">
          <div class="mb-3 col-12 col-sm text-center">
            <h6>Default Buttons</h6>
            <div class="btn-group" role="group" aria-label="Basic example">
              <bs-button color="blue-grey">
                Left
              </bs-button>
              <bs-button color="blue-grey">
                Middle
              </bs-button>
              <bs-button color="blue-grey">
                Right
              </bs-button>
            </div>
          </div>
          <div class="mb-3 col-12 col-sm text-center">
            <h6>Raised Buttons</h6>
            <div class="btn-group" role="group" aria-label="Basic raised example">
              <bs-button color="primary" raised>
                Left
              </bs-button>
              <bs-button color="primary" raised>
                Middle
              </bs-button>
              <bs-button color="primary" raised>
                Right
              </bs-button>
            </div>
          </div>
          <div class="mb-3 col-12 col-sm text-center">
            <h6>Outlined Buttons</h6>
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <bs-button color="primary" outlined>
                Left
              </bs-button>
              <bs-button color="primary" outlined>
                Middle
              </bs-button>
              <bs-button color="primary" outlined>
                Right
              </bs-button>
            </div>
          </div>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card tag="article" class="mt-3" shadow>
      <bs-card-header>Button Toolbar</bs-card-header>
      <bs-card-body>
        <div class="row">
          <div class="mb-3 col-12 col-xl">
            <h6>Default Button Toolbar</h6>
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <bs-button color="blue-grey">
                  1
                </bs-button>
                <bs-button color="blue-grey">
                  2
                </bs-button>
                <bs-button color="blue-grey">
                  3
                </bs-button>
                <bs-button color="blue-grey">
                  4
                </bs-button>
              </div>
              <div class="btn-group mr-2" role="group" aria-label="Second group">
                <bs-button color="blue-grey">
                  5
                </bs-button>
                <bs-button color="blue-grey">
                  6
                </bs-button>
                <bs-button color="blue-grey">
                  7
                </bs-button>
              </div>
              <div class="btn-group mr-2" role="group" aria-label="Third group">
                <bs-button color="blue-grey">
                  8
                </bs-button>
              </div>
            </div>
          </div>
          <div class="mb-3 col-12 col-xl">
            <h6>Outlined Button Toolbar</h6>
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-2" role="group" aria-label="First group">
                <bs-button color="blue-grey" outlined>
                  1
                </bs-button>
                <bs-button color="blue-grey" outlined>
                  2
                </bs-button>
                <bs-button color="blue-grey" outlined>
                  3
                </bs-button>
                <bs-button color="blue-grey" outlined>
                  4
                </bs-button>
              </div>
              <div class="btn-group mr-2" role="group" aria-label="Second group">
                <bs-button color="blue-grey" outlined>
                  5
                </bs-button>
                <bs-button color="blue-grey" outlined>
                  6
                </bs-button>
                <bs-button color="blue-grey" outlined>
                  7
                </bs-button>
              </div>
              <div class="btn-group mr-2" role="group" aria-label="Third group">
                <bs-button color="blue-grey" outlined>
                  8
                </bs-button>
              </div>
            </div>
          </div>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card tag="article" class="mt-3" shadow>
      <bs-card-header>With Different Sizes</bs-card-header>
      <bs-card-body>
        <div class="row">
          <div class="mb-3 col-12 column-name font-weight-bold">
            Small
          </div>
          <div class="mb-3 col-12 col-xl">
            <div class="btn-group" role="group" aria-label="Small buttons group example">
              <bs-button color="blue-grey" size="sm">
                Left
              </bs-button>
              <bs-button color="blue-grey" size="sm">
                Middle
              </bs-button>
              <bs-button color="blue-grey" size="sm">
                Right
              </bs-button>
            </div>
          </div>
          <div class="mb-3 col-12 col-xl">
            <div class="btn-group" role="group" aria-label="Small buttons group example">
              <bs-button color="blue-grey" size="sm" outlined>
                Left
              </bs-button>
              <bs-button color="blue-grey" size="sm" outlined>
                Middle
              </bs-button>
              <bs-button color="blue-grey" size="sm" outlined>
                Right
              </bs-button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="mb-3 col-12 column-name font-weight-bold">
            Medium
          </div>
          <div class="mb-3 col-12 col-xl">
            <div class="btn-group" role="group" aria-label="Small buttons group example">
              <bs-button color="blue-grey">
                Left
              </bs-button>
              <bs-button color="blue-grey">
                Middle
              </bs-button>
              <bs-button color="blue-grey">
                Right
              </bs-button>
            </div>
          </div>
          <div class="mb-3 col-12 col-xl">
            <div class="btn-group" role="group" aria-label="Small buttons group example">
              <bs-button color="blue-grey" outlined>
                Left
              </bs-button>
              <bs-button color="blue-grey" outlined>
                Middle
              </bs-button>
              <bs-button color="blue-grey" outlined>
                Right
              </bs-button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="mb-3 col-12 column-name font-weight-bold">
            Large
          </div>
          <div class="mb-3 col-12 col-xl">
            <div class="btn-group" role="group" aria-label="Small buttons group example">
              <bs-button color="blue-grey" size="lg">
                Left
              </bs-button>
              <bs-button color="blue-grey" size="lg">
                Middle
              </bs-button>
              <bs-button color="blue-grey" size="lg">
                Right
              </bs-button>
            </div>
          </div>
          <div class="mb-3 col-12 col-xl">
            <div class="btn-group" role="group" aria-label="Small buttons group example">
              <bs-button color="blue-grey" size="lg" outlined>
                Left
              </bs-button>
              <bs-button color="blue-grey" size="lg" outlined>
                Middle
              </bs-button>
              <bs-button color="blue-grey" size="lg" outlined>
                Right
              </bs-button>
            </div>
          </div>
        </div>
      </bs-card-body>
    </bs-card>
    
    <h6 class="mt-4">
      Note:
    </h6>
    <p>
      <span class="text-blue">Button group</span> is created from collection of buttons. So every feature that a button has,
      can be implemented to any of individual button on a button group.
    </p>
  </section>
</template>

<script>
export default {
    name: "ButtonGroups"
}
</script>

<style scoped>

</style>
