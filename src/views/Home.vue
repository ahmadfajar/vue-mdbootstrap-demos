<template>
  <section class="bg-white px-2 px-md-3 px-xl-5 pt-2" style="height: calc(100vh - 70px)">
    <h2 class="display-4">
      Getting Started
    </h2>
    <bs-divider />
    <p class="lead mt-3">
      Get started with <strong>Vue MDBootstrap</strong>, built on the top of Bootstrap v4 and Vue.js framework,
      for building responsive web application.
    </p>
    <p>
      Please don't treat this as manual, but it is merely just a demos of <strong>Vue MDBootstrap</strong> capabilities.
    </p>
    <h3 class="mt-4">
      How to install
    </h3>
    <p>Use npm or yarn to install.</p>
    <blockquote class="bg-grey-800 rounded p-3 mb-0">
      <code>
        npm install vue-mdbootstrap --save<br />
        npm install node-sass --save-dev
        <span class="text-grey d-block">or</span>
        yarn add vue-mdbootstrap<br />
        yarn add node-sass --dev
      </code>
    </blockquote>
    <h3 class="mt-4">
      How to Use
    </h3>
    <p>On your primary javascript, use code below to load or initialize the components.</p>
    <blockquote class="bg-grey-800 rounded p-3 mb-0">
      <code>
        import Vue from "vue";<br />
        import VueMdb, { AxiosPlugin } from "vue-mdbootstrap";
        <br /><br />
        Vue.use(VueMdb);<br />
        <span class="text-grey d-block">
          // Optionally, install the MDBootstrap Axios plugin<br />
          // only requires if using BsGrid, BsTreeGrid, BsModel, BsStore, BsTreeStore or needs to perform HTTP Request
        </span>
        Vue.use(AxiosPlugin);
      </code>
    </blockquote>
    <p class="mt-3">
      Now, you are ready to go. You can use any of <b>Vue MDBootstrap</b> components without
      using <span class="text-pink">import</span> statement again.
    </p>
  </section>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

</style>
