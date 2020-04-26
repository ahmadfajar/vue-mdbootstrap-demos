<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <bs-card tag="article" shadow>
      <bs-card-header>Form Radio</bs-card-header>
      <bs-card-body>
        <div class="row mb-3">
          <bs-radio v-model="radio" :value="false" class="col">
            Boolean
          </bs-radio>
          <bs-radio v-model="radio"
                    value="my-radio"
                    color="success"
                    class="col">
            String
          </bs-radio>
          <bs-radio v-model="radio" color="purple" class="col">
            No Value
          </bs-radio>
          <bs-radio v-model="radio" class="col" disabled>
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
      <bs-card-header>Form Checkbox</bs-card-header>
      <bs-card-body class="pt-2">
        <div class="row">
          <bs-checkbox v-model="array" value="1" class="col">
            Array
          </bs-checkbox>
          <bs-checkbox v-model="array" value="2" class="col">
            Array
          </bs-checkbox>
          <bs-checkbox v-model="string1"
                       value="my-checkbox"
                       color="success"
                       class="col">
            String
          </bs-checkbox>
        </div>
        <div class="row">
          <bs-checkbox v-model="boolean" color="danger" class="col">
            Boolean
          </bs-checkbox>
          <bs-checkbox v-model="noValue" color="pink" class="col">
            No Value
          </bs-checkbox>
          <bs-checkbox v-model="disabled" disabled class="col">
            Disabled
          </bs-checkbox>
        </div>
        <div class="row">
          <bs-checkbox v-model="obj"
                       :value="obj1"
                       color="purple"
                       class="col">
            Object 1
          </bs-checkbox>
          <bs-checkbox v-model="obj"
                       :value="obj2"
                       color="indigo"
                       class="col">
            Object 2
          </bs-checkbox>
          <bs-checkbox v-model="indeterminate" class="col" indeterminate>
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
      <bs-card-header>Switch Control</bs-card-header>
      <bs-card-body class="pt-2">
        <div class="row">
          <bs-switch v-model="array" value="1" class="col">
            Array
          </bs-switch>
          <bs-switch v-model="array" value="2" class="col">
            Array
          </bs-switch>
          <bs-switch v-model="string2"
                     value="my-switchbox"
                     color="success"
                     class="col">
            String
          </bs-switch>
        </div>
        <div class="row">
          <bs-switch v-model="boolean" color="danger" class="col">
            Boolean
          </bs-switch>
          <bs-switch v-model="noValue" color="pink" class="col">
            No Value
          </bs-switch>
          <bs-switch v-model="disabled" class="col" disabled>
            Disabled
          </bs-switch>
        </div>
        <div class="row">
          <bs-switch v-model="obj"
                     :value="obj1"
                     color="orange"
                     class="col-4">
            Object 1
          </bs-switch>
          <bs-switch v-model="obj"
                     :value="obj2"
                     color="brown"
                     class="col-4">
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
        disabled: true,
        obj1: {name: 'obj1'},
        obj2: {name: 'obj2'},
        obj: null,
        indeterminate: true,
        radio: false
    })
}
</script>

<style scoped>

</style>
