<template>
  <bs-card 
    tag="section"
    class="mx-2 mx-md-3 mx-xl-5 my-3 my-md-4"
    shadow>
    <bs-card-header>Material Design Icons</bs-card-header>
    <bs-card-body>
      <div class="row text-center">
        <div
          v-for="name in iconLibs"
          :key="name"
          class="col-4 col-sm-2 mb-4">
          <bs-icon :icon="name" size="46" />
          <div>{{ name }}</div>
        </div>
      </div>
    </bs-card-body>
    <bs-card-footer>
      Source <a href="https://material.io/resources/icons/?style=baseline" target="_blank">
        Google Material Icons
      </a>. Only some icons have already been implemented.
    </bs-card-footer>
  </bs-card>
</template>

<script>
const iconLibs = [
    "Add",
    "Apps",
    "ArrowBack",
    "ArrowDropDown",
    "ArrowDropUp",
    "ArrowForward",
    "ArrowLeft",
    "ArrowRight",
    "BorderAll",
    "Calendar",
    "ChevronLeft",
    "ChevronRight",
    "Clear",
    "CreateFolder",
    "Dashboard",
    "Delete",
    "DeleteOutline",
    "ExpandLess",
    "ExpandMore",
    "FirstPage",
    "Folder",
    "FolderOpen",
    "FolderShared",
    "FolderSpecial",
    "InfoOutline",
    "LastPage",
    "MenuBars",
    "MoreHoriz",
    "MoreVert",
    "Reorder",
    "RotateLeft",
    "RotateRight",
    "ViewModule",
    "ZoomIn",
    "ZoomOut",
];

export default {
    name: "Icons",
    data: () => ({
        iconLibs
    }),
}
</script>

<style scoped>

</style>
