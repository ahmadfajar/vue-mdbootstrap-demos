<template>
  <section class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4">
    <bs-card shadow>
      <bs-treegrid
        ref="treeGrid"
        :data-source="sources"
        row-hover>
        <bs-treegrid-column
          label="ID"
          field="id"
          width="120" />
        <bs-treegrid-column label="Region" field="name" />
      </bs-treegrid>
    </bs-card>
  </section>
</template>

<script>
import { BsArrayStore, BsTreeStore } from "vue-mdbootstrap";

export default {
    name: "TreeGrid",
    data: () => ({
        // Below is example how to use data sources from Array collection
        sources: new BsArrayStore([], {
            idProperty: 'id',
        }),
        // Below is example how to use data sources with backend API
        treeSources: new BsTreeStore({
            idProperty: 'id',
            dataProperty: 'data',
            restUrl: {
                browse: '/api/rest-url',
                fetch: '/api/rest-url/{id}'
            }
        })
    }),
    created() {
        this.$http.get('./data/indonesia.json').then(response => {
            this.sources.assignData(response.data.data);
            this.$refs.treeGrid.reload();
        });
    },
    beforeDestroy() {
        this.treeSources.destroy();
        this.treeSources = null;
        this.sources.destroy();
        this.sources = null;
    }
}
</script>

<style scoped>

</style>
