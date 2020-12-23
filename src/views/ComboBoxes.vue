<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <div class="row">
      <div class="col-lg-6">
        <bs-card shadow>
          <bs-card-header>Standard ComboBox</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-combobox
                v-model="selectedProduct"
                :data-source="products"
                placeholder="Select Product">
                <label
                  slot-scope="{ id }"
                  :for="id"
                  class="col-md-3 col-form-label">
                  Product
                </label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedStates"
                :data-source="states"
                placeholder="Select States"
                help-text="Multi select ComboBox"
                multiple
                clear-button>
                <label
                  class="col-md-3 col-form-label"
                  slot-scope="{ id }"
                  :for="id">
                  States
                </label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedPeople"
                :data-source="peopleSrc"
                prepend-icon="user-tie"
                help-text="ComboBox with prepended icon and avatar">
                <label
                  class="col-md-3 col-form-label"
                  slot-scope="{ id }"
                  :for="id">
                  Select User
                </label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedPeople"
                :data-source="peopleSrc"
                append-icon="user-graduate"
                help-text="ComboBox with appended icon and avatar"
                show-image
                rounded-image>
                <label
                  class="col-md-3 col-form-label"
                  slot-scope="{ id }"
                  :for="id">
                  Select User
                </label>
              </bs-combobox>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
      
      <div class="col-lg-6">
        <bs-card class="mt-3 mt-lg-0" shadow>
          <bs-card-header>Floating Label</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-combobox
                v-model="selectedProduct" 
                :data-source="products"
                floating-label>
                <label>Select Product</label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedStates"
                :data-source="states"
                placeholder="Select States"
                help-text="Multi select ComboBox"
                multiple
                floating-label
                clear-button>
                <label>States</label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedPeople"
                :data-source="peopleSrc"
                prepend-icon="user-tie"
                help-text="ComboBox with prepended icon and avatar"
                floating-label>
                <label>Select User</label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedPeople"
                :data-source="peopleSrc"
                append-icon="user-graduate"
                help-text="ComboBox with appended icon and avatar"
                show-image
                circle-image
                floating-label>
                <label>Select User</label>
              </bs-combobox>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
    </div>

    <div class="row pt-3">
      <div class="col-lg-6">
        <bs-card shadow>
          <bs-card-header>Outline ComboBox</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-combobox
                v-model="selectedProduct"
                :data-source="products"
                help-text="This is help text"
                floating-label
                outlined>
                <label
                  class="col-md-3 col-form-label"
                  slot-scope="{ id }"
                  :for="id">
                  Select Product
                </label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedStates"
                :data-source="states"
                placeholder="Select States"
                help-text="Multi select ComboBox"
                multiple
                floating-label
                outlined
                clear-button>
                <label
                  class="col-md-3 col-form-label"
                  slot-scope="{ id }"
                  :for="id">
                  States
                </label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedPeople"
                :data-source="peopleSrc"
                prepend-icon="user-tie"
                help-text="ComboBox with prepended icon and avatar"
                floating-label
                outlined>
                <label
                  class="col-md-3 col-form-label"
                  slot-scope="{ id }"
                  :for="id">
                  Select User
                </label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedPeople"
                :data-source="peopleSrc"
                :image-size="36"
                append-icon="user-graduate"
                help-text="ComboBox with appended icon and avatar"
                show-image
                circle-image
                floating-label
                outlined>
                <label
                  class="col-md-3 col-form-label"
                  slot-scope="{ id }"
                  :for="id">
                  Select User
                </label>
              </bs-combobox>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-lg-6">
        <bs-card class="mt-3 mt-lg-0" shadow>
          <bs-card-header>Standard ComboBox with State</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-combobox
                v-model="selectedStates"
                :data-source="states"
                placeholder="Select States"
                multiple>
                <label
                  class="col-md-3 col-form-label"
                  slot-scope="{ id }"
                  :for="id">
                  State Enabled
                </label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedProduct"
                :data-source="products"
                placeholder="Select Product"
                readonly>
                <label
                  class="col-md-3 col-form-label"
                  slot-scope="{ id }"
                  :for="id">
                  State Readonly
                </label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedPeople"
                :data-source="peopleSrc"
                placeholder="Select User"
                disabled>
                <label
                  class="col-md-3 col-form-label"
                  slot-scope="{ id }"
                  :for="id">
                  State Disabled
                </label>
              </bs-combobox>
            </div>
          </bs-card-body>
        </bs-card>
        <bs-card class="mt-3" shadow>
          <bs-card-header>Floating Label with State</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-combobox
                v-model="selectedProduct"
                :data-source="products"
                listbox-color="blue-green"
                item-separator
                floating-label>
                <label>State Enabled</label>
                <template #emptyData>
                  <bs-list-tile-title>Belum ada data</bs-list-tile-title>
                </template>
                <template #optionItem="{ item }">
                  <bs-list-tile-title>
                    <span>{{ item.ProductName }}</span>
                    <span class="float-right font-weight-light small">${{ item.UnitPrice }}</span>
                  </bs-list-tile-title>
                  <bs-list-tile-subtitle>Stock : {{ item.UnitsInStock }}</bs-list-tile-subtitle>
                </template>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedProduct"
                :data-source="products"
                floating-label
                readonly>
                <label>State Readonly</label>
              </bs-combobox>
            </div>
            <div class="form-group">
              <bs-combobox
                v-model="selectedProduct"
                :data-source="products"
                floating-label
                disabled>
                <label>State Disabled</label>
              </bs-combobox>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </section>
</template>

<script>
import { BsStore, BsArrayStore } from "vue-mdbootstrap";

export default {
    name: "ComboBoxes",
    data: () => ({
        selectedPeople: null,
        selectedProduct: null,
        selectedStates: [],
        peopleSrc: {
            proxy: new BsArrayStore([
                    {id: 1, name: 'Sandra Adams', avatar: 'assets/1.jpg'},
                    {id: 2, name: 'Ali Connors', avatar: 'assets/2.jpg'},
                    {id: 3, name: 'Trevor Hansen', avatar: 'assets/3.jpg'},
                    {id: 4, name: 'Tucker Smith', avatar: 'assets/4.jpg'},
                    {id: 5, name: 'Britta Holt', avatar: 'assets/5.jpg'},
                    {id: 6, name: 'Jane Smith', avatar: 'assets/3.jpg'},
                    {id: 7, name: 'John Smith', avatar: 'assets/2.jpg'},
                    {id: 8, name: 'Sandra Williams', avatar: 'assets/4.jpg'}
                ], {
                    idProperty: 'id',
                }
            ),
            schema: {displayField: 'name', valueField: 'id', imageField: 'avatar'}
        },
        products: {
            proxy: new BsStore({
                idProperty: 'ProductID',
                dataProperty: 'data',
                totalProperty: 'total',
                // adapter: vm.$axios, -> optional, useful to override default instance
                remoteSort: false,
                restProxy: {
                    browse: './data/product.json'
                }
            }),
            schema: {displayField: 'ProductName', valueField: 'ProductID'}
        },
        states: {
            proxy: new BsStore({
                idProperty: 'value',
                dataProperty: 'data',
                totalProperty: 'total',
                // adapter: vm.$axios, -> optional, useful to override default instance
                remoteSort: false,
                remoteFilter: false,
                filters: [{property: 'country', value: 'US', operator: 'eq'}],
                restProxy: {
                    browse: './data/states.json'
                }
            })
        }
    }),
    beforeDestroy() {
        this.peopleSrc.proxy.destroy();
        this.products.proxy.destroy();
        this.states.proxy.destroy();
        this.peopleSrc = null;
        this.products = null;
        this.states = null;
    }
}
</script>

<style scoped>

</style>
