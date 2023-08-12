<template>
  <div>
    <div class="container">
      <myNavbar />
      <section>
        <div class="section-1">
          <div>Foto</div>
          <div>Nome</div>
          <div>Cargo</div>
          <div>LinkedIn</div>
          <v-card> </v-card>
        </div>
      </section>
      <section><div class="section-2">Sobre você</div></section>
      <section><div class="section-3">Informações de contato</div></section>
      <myFooter />
    </div>
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

<style>
.section-1 {
  margin: 10px 20px 10px 20px;
  background-color: lightblue;
}
.section-2 {
  margin: 10px 20px 10px 20px;
  background-color: yellow;
}
.section-3 {
  margin: 10px 20px 10px 20px;
  background-color: purple;
}
</style>
