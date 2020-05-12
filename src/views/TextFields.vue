<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <div class="row">
      <div class="col-lg-6">
        <bs-card shadow>
          <bs-card-header>Standard TextField</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-text-field v-model="regular1">
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="password"
                             type="password">
                <label class="col-md-3 col-form-label"
                       slot-scope="{ id }"
                       :for="id">
                  Password Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-number-field v-model="numberFld">
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  Number Field
                </label>
              </bs-number-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular1" :placeholder="placeholder">
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular1" help-text="This is a help text.">
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular2"
                             :placeholder="placeholder"
                             help-text="Form field with clear button enabled."
                             clear-button>
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular1"
                             prepend-icon="bullhorn"
                             help-text="Form field with prepended icon.">
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular1"
                             append-icon="building"
                             help-text="Form field with appended icon.">
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
          </bs-card-body>
        </bs-card>
      </div>

      <div class="col-lg-6">
        <bs-card class="mt-3 mt-lg-0" shadow>
          <bs-card-header>Floating Label</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-text-field v-model="regular3" floating-label>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-number-field v-model="numberFld" floating-label>
                <label slot-scope="{ id }" :for="id">
                  Number Field
                </label>
              </bs-number-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular3" :placeholder="placeholder" floating-label>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular3" help-text="This is a help text." floating-label>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular2"
                             help-text="Form field with clear button enabled."
                             floating-label
                             clear-button>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular3"
                             prepend-icon="bullhorn"
                             help-text="Form field with prepended icon."
                             floating-label>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular3"
                             append-icon="building"
                             help-text="Form field with appended icon."
                             floating-label>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
    </div>

    <div class="row pt-3">
      <div class="col-lg-6">
        <bs-card shadow>
          <bs-card-header>Outline TextField</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-text-field v-model="regular4" floating-label outlined>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular4"
                             :placeholder="placeholder"
                             floating-label
                             outlined>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular4"
                             help-text="This is a help text."
                             floating-label
                             outlined>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular2"
                             help-text="Form field with clear button enabled."
                             floating-label
                             outlined
                             clear-button>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular4"
                             prepend-icon="bullhorn"
                             help-text="Form field with prepended icon."
                             floating-label
                             outlined>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="regular4"
                             append-icon="building"
                             help-text="Form field with appended icon."
                             floating-label
                             outlined>
                <label slot-scope="{ id }" :for="id">
                  Text Field
                </label>
              </bs-text-field>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-lg-6">
        <bs-card class="mt-3 mt-lg-0" shadow>
          <bs-card-header>Standard TextField with State</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-text-field v-model="regular5" :placeholder="placeholder">
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  State Enabled
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="cannotChange" 
                             help-text="This is a help text."
                             readonly>
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  State Readonly
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="cannotChange"
                             :placeholder="placeholder"
                             disabled>
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  State Disabled
                </label>
              </bs-text-field>
            </div>
          </bs-card-body>
        </bs-card>
        <bs-card class="mt-3" shadow>
          <bs-card-header>Floating Label with State</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-text-field v-model="regular5" :placeholder="placeholder" floating-label>
                <label slot-scope="{ id }" :for="id">
                  State Enabled
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="cannotChange"
                             help-text="This is a help text."
                             floating-label
                             readonly>
                <label slot-scope="{ id }" :for="id">
                  State Readonly
                </label>
              </bs-text-field>
            </div>
            <div class="form-group">
              <bs-text-field v-model="cannotChange"
                             :placeholder="placeholder"
                             floating-label
                             disabled>
                <label slot-scope="{ id }" :for="id">
                  State Disabled
                </label>
              </bs-text-field>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "TextFields",
    data: () => ({
        placeholder: 'Field placeholder',
        password: null,
        regular1: null,
        regular2: 'Initial value',
        regular3: null,
        regular4: null,
        regular5: null,
        numberFld: null,
        cannotChange: 'Initial value',
    })
}
</script>

<style scoped>

</style>
