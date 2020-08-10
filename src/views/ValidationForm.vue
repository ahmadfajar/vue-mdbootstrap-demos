<template>
  <section class="container my-3 my-md-4" style="max-width: 650px">
    <bs-card shadow>
      <bs-card-header class="bg-unique text-white">
        Example Form
      </bs-card-header>
      <bs-card-body>
        <form novalidate>
          <div class="form-group">
            <bs-text-field v-model="user.fullName"
                           :external-validator="fullNameValidator"
                           prepend-icon="user"
                           autofocus
                           required
                           floating-label>
              <label>
                Full Name
              </label>
            </bs-text-field>
          </div>
          <div class="form-group">
            <bs-text-field v-model="user.email"
                           :external-validator="emailValidator"
                           type="email"
                           prepend-icon="envelope"
                           required
                           floating-label>
              <label>
                Email
              </label>
            </bs-text-field>
          </div>
          <div class="form-group">
            <bs-radio-group v-model="user.education"
                            :external-validator="educationValidator"
                            :items="educations"
                            color="indigo">
              <label class="col-12 col-form-label">
                Last Education
              </label>
            </bs-radio-group>
          </div>
          <div class="form-group">
            <bs-text-area v-model="user.address"
                          :external-validator="addressValidator"
                          prepend-icon="house-user"
                          clear-button
                          floating-label>
              <label>
                Address
              </label>
            </bs-text-area>
          </div>
          <div class="form-group">
            <bs-combobox v-model="user.country"
                         :data-source="countrySrc"
                         :external-validator="countryValidator"
                         floating-label>
              <label>
                Country
              </label>
            </bs-combobox>
          </div>
          <div class="form-group">
            <bs-combobox v-model="user.state"
                         :data-source="stateSrc"
                         :parent-value="user.country"
                         :external-validator="stateValidator"
                         floating-label>
              <label>
                State
              </label>
            </bs-combobox>
          </div>
        </form>
      </bs-card-body>
      <bs-card-footer class="bg-white text-right">
        <bs-button color="unique" @click="doSave">
          Submit
        </bs-button>
      </bs-card-footer>
    </bs-card>
    <bs-mask-loader :show="loader"
                    :spinner-diameter="50" />
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { BsArrayStore, BsStore } from "vue-mdbootstrap";
import { UserModel } from "../models/UserModel";
import { userValidationHandler, userValidator } from "../models/UserValidators";

export default {
    name: "ValidationForm",
    mixins: [validationMixin, userValidationHandler('user')],
    data: () => ({
        user: new UserModel(),
        countrySrc: {
            proxy: new BsArrayStore([
                    {id: 'US', name: 'USA'},
                    {id: 'CA', name: 'CANADA'},
                ], {
                    idProperty: 'id',
                }
            ),
            schema: {displayField: 'name', valueField: 'id'}
        },
        stateSrc: {
            proxy: new BsStore({
                idProperty: 'value',
                dataProperty: 'data',
                totalProperty: 'total',
                remoteFilter: false,
                restProxy: {
                    browse: './data/states.json'
                }
            }),
            schema: {displayField: 'text', valueField: 'value', cascadeField: 'country'}
        },
        educations: [
            {value: 'High School', label: 'High School'},
            {value: 'University', label: 'University'},
            {value: 'S2', label: 'Master Degree'},
        ],
        requiredErrorMsg: 'This field is required',
        emailErrorMsg: 'Please enter valid email address',
        minLengthErrorMsg: 'This field must at least have 5 characters',
        loader: false,
    }),
    validations: {
        user: userValidator
    },
    beforeDestroy() {
        this.countrySrc.proxy.destroy();
        this.countrySrc.proxy = null;

        this.stateSrc.proxy.destroy();
        this.stateSrc.proxy = null;

        this.user.destroy();
        this.user = null;
        this.educations = null;
    },
    methods: {
        doSave() {
            this.$v.$touch();

            if (!this.$v.$error) {
                // Use code below, if you have fully working Backend API
                // this.user.save();

                // Dummy procedure
                this.loader = true;
                setTimeout(this.showNotification, 1000);
            }
        },
        showNotification() {
            this.loader = false;
            this.$notification.success('Record has been saved.');
        }
    }
}
</script>

<style scoped>

</style>
