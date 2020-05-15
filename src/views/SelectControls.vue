<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <bs-card tag="article" shadow>
      <bs-card-header>Radio</bs-card-header>
      <bs-card-body>
        <div class="row mb-3">
          <bs-radio v-model="radio" :value="false" class="col-5 col-lg">
            Boolean
          </bs-radio>
          <bs-radio v-model="radio"
                    value="my-radio"
                    color="success"
                    class="col-6 col-lg">
            String
          </bs-radio>
          <bs-radio v-model="radio" color="purple" class="col-5 col-lg">
            No Value
          </bs-radio>
          <bs-radio v-model="radio" class="col-6 col-lg" disabled>
            Disabled
          </bs-radio>
        </div>
        <bs-divider />
        <p class="mt-2 mb-0">
          Model value: {{ radio }}
        </p>
      </bs-card-body>
    </bs-card>

    <bs-card tag="article" class="mt-3" shadow>
      <bs-card-header>Radio Group</bs-card-header>
      <bs-card-body>
        <div class="form-group">
          <bs-radio-group v-model="rdoGroup1"
                          :items="colorItems"
                          help-text="Select your favorite color">
            <label class="col-md-3 col-lg-2 col-form-label">
              Single Row
            </label>
          </bs-radio-group>
        </div>
        <div class="form-group">
          <bs-radio-group v-model="rdoGroup2"
                          :items="dummyItems"
                          :columns="4"
                          color="blue">
            <label class="col-md-3 col-lg-2 col-form-label">
              Multi Column
            </label>
          </bs-radio-group>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card tag="article" class="mt-3" shadow>
      <bs-card-header>Checkbox</bs-card-header>
      <bs-card-body class="pt-2">
        <div class="row">
          <bs-checkbox v-model="array" value="1" class="col-5 col-lg">
            Array
          </bs-checkbox>
          <bs-checkbox v-model="array" value="2" class="col-5 col-lg">
            Array
          </bs-checkbox>
          <bs-checkbox v-model="string1"
                       value="my-checkbox"
                       color="success"
                       class="col-5 col-lg">
            String
          </bs-checkbox>
        </div>
        <div class="row">
          <bs-checkbox v-model="boolean" color="danger" class="col-5 col-lg">
            Boolean
          </bs-checkbox>
          <bs-checkbox v-model="noValue" color="pink" class="col-5 col-lg">
            No Value
          </bs-checkbox>
          <bs-checkbox v-model="disableValue" disabled class="col-5 col-lg">
            Disabled
          </bs-checkbox>
        </div>
        <div class="row">
          <bs-checkbox v-model="obj"
                       :value="obj1"
                       color="purple"
                       class="col-5 col-lg">
            Object 1
          </bs-checkbox>
          <bs-checkbox v-model="obj"
                       :value="obj2"
                       color="indigo"
                       class="col-5 col-lg">
            Object 2
          </bs-checkbox>
          <bs-checkbox v-model="indeterminate" class="col-5 col-lg" indeterminate>
            Indeterminate
          </bs-checkbox>
        </div>
        <table class="table table-fixed mt-4 mb-0">
          <tr class="row">
            <th class="col">
              Array
            </th>
            <th class="col">
              Boolean
            </th>
            <th class="col">
              String
            </th>
            <th class="col">
              No Value
            </th>
            <th class="col">
              Object
            </th>
          </tr>
          <tr class="row">
            <td class="col">
              {{ array }}
            </td>
            <td class="col">
              {{ boolean }}
            </td>
            <td class="col">
              {{ string1 }}
            </td>
            <td class="col">
              {{ noValue }}
            </td>
            <td class="col">
              {{ obj }}
            </td>
          </tr>
        </table>
      </bs-card-body>
    </bs-card>
    
    <bs-card tag="article" class="mt-3" shadow>
      <bs-card-header>Checkbox Group</bs-card-header>
      <bs-card-body>
        <div class="form-group">
          <bs-checkbox-group v-model="cboGroup1"
                             :items="colorItems"
                             help-text="Select your favorite color">
            <label class="col-md-3 col-lg-2 col-form-label">
              Single Row
            </label>
          </bs-checkbox-group>
        </div>
        <div class="form-group">
          <bs-checkbox-group v-model="cboGroup2"
                             :items="dummyItems"
                             :columns="4"
                             color="purple">
            <label class="col-md-3 col-lg-2 col-form-label">
              Multi Column
            </label>
          </bs-checkbox-group>
        </div>
      </bs-card-body>
    </bs-card>

    <bs-card tag="article" class="mt-3" shadow>
      <bs-card-header>Switch Control</bs-card-header>
      <bs-card-body class="pt-2">
        <div class="row">
          <bs-switch v-model="array" value="1" class="col-6 col-lg">
            Array
          </bs-switch>
          <bs-switch v-model="array" value="2" class="col-6 col-lg">
            Array
          </bs-switch>
          <bs-switch v-model="string2"
                     value="my-switchbox"
                     color="success"
                     class="col-6 col-lg">
            String
          </bs-switch>
        </div>
        <div class="row">
          <bs-switch v-model="boolean" color="danger" class="col-6 col-lg">
            Boolean
          </bs-switch>
          <bs-switch v-model="noValue" color="pink" class="col-6 col-lg">
            No Value
          </bs-switch>
          <bs-switch v-model="disableValue" class="col-6 col-lg" disabled>
            Disabled
          </bs-switch>
        </div>
        <div class="row">
          <bs-switch v-model="obj"
                     :value="obj1"
                     color="orange"
                     class="col-6 col-lg-4">
            Object 1
          </bs-switch>
          <bs-switch v-model="obj"
                     :value="obj2"
                     color="brown"
                     class="col-6 col-lg-4">
            Object 2
          </bs-switch>
        </div>
        <table class="table table-fixed mt-4 mb-0">
          <tr class="row">
            <th class="col">
              Array
            </th>
            <th class="col">
              Boolean
            </th>
            <th class="col">
              String
            </th>
            <th class="col">
              No Value
            </th>
            <th class="col">
              Object
            </th>
          </tr>
          <tr class="row">
            <td class="col">
              {{ array }}
            </td>
            <td class="col">
              {{ boolean }}
            </td>
            <td class="col">
              {{ string2 }}
            </td>
            <td class="col">
              {{ noValue }}
            </td>
            <td class="col">
              {{ obj }}
            </td>
          </tr>
        </table>
      </bs-card-body>
    </bs-card>
  </section>
</template>

<script>
export default {
    name: "SelectControls",
    data: () => ({
        array: [],
        boolean: false,
        string1: null,
        string2: null,
        noValue: null,
        disableValue: false,
        obj1: {name: 'obj1'},
        obj2: {name: 'obj2'},
        obj: null,
        indeterminate: true,
        radio: false,
        rdoGroup1: null,
        rdoGroup2: null,
        cboGroup1: [],
        cboGroup2: [],
        colorItems: [
            {value: 'red', label: 'Red'},
            {value: 'green', label: 'Green'},
            {value: 'blue', label: 'Blue'},
            {value: 'yellow', label: 'Yellow'},
            {value: 'purple', label: 'Purple'},
            {value: 'lemon', label: 'Lemon'},
        ],
        dummyItems: [
            {value: 1, label: 'Item 1'},
            {value: 2, label: 'Item 2'},
            {value: 3, label: 'Item 3'},
            {value: 4, label: 'Item 4'},
            {value: 5, label: 'Item 5'},
            {value: 6, label: 'Item 6'},
        ],
    })
}
</script>

<style scoped>

</style>
