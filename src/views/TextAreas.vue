<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <div class="row">
      <div class="col-md-6">
        <bs-card shadow>
          <bs-card-header>Standard TextArea</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-text-area v-model="regular1">
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area v-model="regular1" :placeholder="placeholder">
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area v-model="regular1" help-text="This is a help text.">
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular2"
                :placeholder="placeholder"
                help-text="TextArea with clear button enabled."
                clear-button>
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular1"
                prepend-icon="comment-alt"
                help-text="TextArea with prepended icon.">
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular1"
                append-icon="comment-alt"
                help-text="TextArea with appended icon.">
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area v-model="regular1" auto-grow>
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  Auto Grow
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area v-model="regular1" no-resize>
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  Fixed Height
                </label>
              </bs-text-area>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-md-6">
        <bs-card class="mt-3 mt-lg-0" shadow>
          <bs-card-header>Floating Label</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-text-area v-model="regular3" floating-label>
                <label slot-scope="{ id }" :for="id">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular3"
                :placeholder="placeholder"
                floating-label>
                <label slot-scope="{ id }" :for="id">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular3"
                help-text="This is a help text."
                floating-label>
                <label slot-scope="{ id }" :for="id">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular3"
                prepend-icon="comment-alt"
                help-text="TextArea with prepended icon."
                floating-label>
                <label slot-scope="{ id }" :for="id">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular3"
                append-icon="comment-alt"
                help-text="TextArea with appended icon."
                clear-button
                floating-label>
                <label slot-scope="{ id }" :for="id">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular3"
                auto-grow
                floating-label>
                <label slot-scope="{ id }" :for="id">
                  Auto Grow
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular3"
                no-resize
                floating-label>
                <label slot-scope="{ id }" :for="id">
                  Fixed Height
                </label>
              </bs-text-area>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <bs-card class="mt-3" shadow>
          <bs-card-header>Outline TextArea</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-text-area
                v-model="regular4"
                floating-label
                outlined>
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular4"
                :placeholder="placeholder"
                floating-label
                outlined>
                <label slot-scope="{ id }" :for="id">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular4"
                help-text="This is a help text."
                floating-label
                outlined>
                <label slot-scope="{ id }" :for="id">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular2"
                help-text="TextArea with clear button enabled."
                clear-button
                floating-label
                outlined>
                <label slot-scope="{ id }" :for="id">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular4"
                prepend-icon="comment-alt"
                help-text="TextArea with prepended icon."
                floating-label
                outlined>
                <label slot-scope="{ id }" :for="id">
                  Text Area
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="regular4"
                append-icon="comment-alt"
                help-text="TextArea with appended icon."
                floating-label
                outlined>
                <label slot-scope="{ id }" :for="id">
                  Text Area
                </label>
              </bs-text-area>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-lg-6">
        <bs-card class="mt-3 mt-lg-0" shadow>
          <bs-card-header>Standard TextArea with State</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-text-area v-model="regular5" :placeholder="placeholder">
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  State Enabled
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="cannotChange"
                help-text="This is a help text."
                readonly>
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  State Readonly
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="cannotChange"
                :placeholder="placeholder"
                disabled>
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  State Disabled
                </label>
              </bs-text-area>
            </div>
          </bs-card-body>
        </bs-card>
        
        <bs-card class="mt-3" shadow>
          <bs-card-header>Floating Label with State</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-text-area
                v-model="regular5"
                :placeholder="placeholder"
                floating-label>
                <label slot-scope="{ id }" :for="id">
                  State Enabled
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="cannotChange"
                help-text="This is a help text."
                floating-label
                readonly>
                <label slot-scope="{ id }" :for="id">
                  State Readonly
                </label>
              </bs-text-area>
            </div>
            <div class="form-group">
              <bs-text-area
                v-model="cannotChange"
                :placeholder="placeholder"
                floating-label
                disabled>
                <label slot-scope="{ id }" :for="id">
                  State Disabled
                </label>
              </bs-text-area>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "TextAreas",
    data: () => ({
        placeholder: 'Field placeholder',
        regular1: null,
        regular2: 'Initial value',
        regular3: null,
        regular4: null,
        regular5: null,
        cannotChange: 'Initial value',
    })
}
</script>

<style scoped>

</style>
