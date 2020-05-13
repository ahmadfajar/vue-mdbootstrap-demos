<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <div class="row">
      <div class="col-lg-6">
        <bs-card shadow>
          <bs-card-header>Standard</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-date-time-field v-model="date1" :value-format="dateFmt">
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="date1"
                                  :value-format="dateFmt"
                                  placeholder="Field placeholder"
                                  help-text="This is help text.">
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="datetime1"
                                  :value-format="datetimeFmt"
                                  :display-format="displayTimeFmt"
                                  :help-text="msgInitialValue"
                                  clear-button>
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="month1"
                                  :value-format="monthFmt"
                                  :display-format="displayMonthFmt"
                                  :help-text="msgPrependIcon"
                                  prepend-icon="building"
                                  view-mode="month"
                                  clear-button>
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="year1"
                                  :help-text="msgCustomIcon"
                                  append-icon="calendar"
                                  value-format="YYYY"
                                  view-mode="year"
                                  clear-button>
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
          </bs-card-body>
        </bs-card>
      </div>

      <div class="col-lg-6">
        <bs-card class="mt-3 mt-lg-0" shadow>
          <bs-card-header>Floating Label</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-date-time-field v-model="date1" :value-format="dateFmt" floating-label>
                <label slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="date1"
                                  :value-format="dateFmt"
                                  placeholder="Field placeholder"
                                  help-text="This is help text."
                                  floating-label>
                <label slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="datetime1"
                                  :value-format="datetimeFmt"
                                  :display-format="displayTimeFmt"
                                  :help-text="msgInitialValue"
                                  clear-button
                                  floating-label>
                <label slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="month1"
                                  :value-format="monthFmt"
                                  :display-format="displayMonthFmt"
                                  :help-text="msgPrependIcon"
                                  prepend-icon="building"
                                  view-mode="month"
                                  clear-button
                                  floating-label>
                <label slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="year1"
                                  :help-text="msgCustomIcon"
                                  value-format="YYYY"
                                  append-icon="calendar"
                                  view-mode="year"
                                  clear-button
                                  floating-label>
                <label slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-lg-6">
        <bs-card shadow>
          <bs-card-header>Outline DateTime Field</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-date-time-field v-model="date1"
                                  :value-format="dateFmt"
                                  outlined
                                  floating-label>
                <label slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="date1"
                                  :value-format="dateFmt"
                                  placeholder="Field placeholder"
                                  help-text="DatePicker with landscape mode."
                                  outlined
                                  landscape-mode
                                  floating-label>
                <label slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="datetime1"
                                  :value-format="datetimeFmt"
                                  :display-format="displayTimeFmt"
                                  :help-text="msgInitialValue"
                                  color="deep-purple"
                                  clear-button
                                  outlined
                                  floating-label>
                <label slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="month1"
                                  :value-format="monthFmt"
                                  :display-format="displayMonthFmt"
                                  :help-text="msgPrependIcon"
                                  prepend-icon="building"
                                  view-mode="month"
                                  clear-button
                                  outlined
                                  floating-label>
                <label slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="year1"
                                  :help-text="msgCustomIcon"
                                  value-format="YYYY"
                                  append-icon="calendar"
                                  view-mode="year"
                                  clear-button
                                  outlined
                                  floating-label>
                <label slot-scope="{ id }" :for="id">
                  DateTime Field
                </label>
              </bs-date-time-field>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
      <div class="col-lg-6">
        <bs-card class="mt-3 mt-lg-0" shadow>
          <bs-card-header>Standard DateTimeField with State</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-date-time-field v-model="date2" :value-format="dateFmt" clear-button>
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  State Enabled
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="date2" :value-format="dateFmt" readonly>
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  State Readonly
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="date2" :value-format="dateFmt" disabled>
                <label class="col-md-3 col-form-label" slot-scope="{ id }" :for="id">
                  State Disabled
                </label>
              </bs-date-time-field>
            </div>
          </bs-card-body>
        </bs-card>
        <bs-card class="mt-3" shadow>
          <bs-card-header>Floating Label with State</bs-card-header>
          <bs-card-body>
            <div class="form-group">
              <bs-date-time-field v-model="date3" 
                                  :value-format="dateFmt"
                                  clear-button
                                  floating-label>
                <label slot-scope="{ id }" :for="id">
                  State Enabled
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="date3" 
                                  :value-format="dateFmt"
                                  floating-label
                                  readonly>
                <label slot-scope="{ id }" :for="id">
                  State Readonly
                </label>
              </bs-date-time-field>
            </div>
            <div class="form-group">
              <bs-date-time-field v-model="date3" 
                                  :value-format="dateFmt"
                                  floating-label
                                  disabled>
                <label slot-scope="{ id }" :for="id">
                  State Disabled
                </label>
              </bs-date-time-field>
            </div>
          </bs-card-body>
        </bs-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "DateTimeFields",
    data: () => ({
        msgCustomIcon: 'DateTime field with custom icon.',
        msgInitialValue: 'DateTime field with initial value and clear button enabled.',
        msgPrependIcon: 'DateTime field with prepended icon and custom display format.',
        monthFmt: 'YYYY-MM',
        dateFmt: 'YYYY-MM-DD',
        datetimeFmt: 'YYYY-MM-DD HH:mm:ss',
        displayTimeFmt: 'DD MMM YYYY HH:mm:ss',
        displayMonthFmt: 'MMMM YYYY',
        datetime1: '2020-05-14 20:24:45',
        date1: null,
        date2: null,
        date3: null,
        month1: null,
        year1: null,
    })
}
</script>

<style scoped>

</style>
