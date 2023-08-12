<template>
  <div>
    <myNavbar />
    <myFooter />

  </div>
</template>

<script>
import myNavbar from "./components/navbar.vue";
import myFooter from "./components/footer.vue";

export default {
  name: "App",
  components: { myNavbar, myFooter },
};
</script>

<style></style>
