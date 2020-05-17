<template>
  <section class="mx-2 mx-md-4 my-3 my-md-4">
    <bs-card shadow>
      <bs-grid :data-source="gridSources"
               :filterable="{operator: 'contains'}"
               pageable
               row-hover
               sortable>
        <bs-grid-column text-align="right"
                        width="50"
                        row-numbering />
        <bs-grid-column field="value"
                        label="ID"
                        width="75" />
        <bs-grid-column field="text"
                        label="State Name"
                        min-width="150" />
        <bs-grid-column field="country"
                        label="Country ID"
                        text-align="center"
                        width="125" />
        <bs-grid-column field="description"
                        label="Comments"
                        min-width="150" />
      </bs-grid>
    </bs-card>
  </section>
</template>

<script>
import { BsStore } from "vue-mdbootstrap";

export default {
    name: "DataGrid",
    data: () => ({
        gridSources: new BsStore({
            idProperty: 'value',
            dataProperty: 'data',
            totalProperty: 'total',
            pageSize: 15,
            remoteFilter: false, // default is TRUE
            remotePaging: false, // default is TRUE
            remoteSort: false,   // default is TRUE
            sorts: [{property: 'text', direction: 'asc'}],
            restUrl: {
                // Note: data is fetched from static sources. So, we must fine tune BsStore
                // to make sorting, paging and filtering is done locally by BsStore.
                // If you have working Backend API, the default values above can be ignored
                // and all the works will be processed by the remote server.
                browse: './data/states.json'
            }
        }),
    }),
    beforeDestroy() {
        this.gridSources.destroy();
        this.gridSources = null;
    }
    // Note: to apply row-alt just override css "md-grid-row-alt" with `background-color` of your desired
}
</script>

<style scoped>

</style>
