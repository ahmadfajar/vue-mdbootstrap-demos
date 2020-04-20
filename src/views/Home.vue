<template>
  <div class="px-2 px-md-3 mt-2">
    <h2 class="display-4">
      Getting Started
    </h2>
    <bs-divider />
    <p class="lead mt-3">
      Get started with <strong>Vue MdBootstrap</strong>, built on the top of Bootstrap v4 and Vue.js framework,
      for building responsive web application.
    </p>
    <p>
      Please don't treat this as manual, but it is merely just a demos of <strong>Vue MdBootstrap</strong> capabilities.
    </p>
    <h3 class="mt-4">
      How to install
    </h3>
    <p>Use npm or yarn to install.</p>
    <code>
      npm install --save vue-mdbootstrap<br />
      <span class="text-grey d-block">or</span>
      yarn add vue-mdbootstrap
    </code>
    <h3 class="mt-4">
      How to Use
    </h3>
    <p>On your primary javascript, use code below to load or initialize the components.</p>
    <code>
      import Vue from "vue";<br />
      import VueMdb, { AxiosPlugin } from "vue-mdbootstrap";
      <br /><br />
      Vue.use(VueMdb);<br />
      <span class="text-grey d-block">
        // Below only requires if using BsGrid, BsModel, BsStore or needs to perform HTTP Request
      </span>
      Vue.use(AxiosPlugin);
    </code>
    <p class="mt-3">
      Now, you are ready to go. You can use any of <b>Vue MdBootstrap</b> components without
      using <span class="text-pink">import</span> statement again.
    </p>
  </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

</style>
