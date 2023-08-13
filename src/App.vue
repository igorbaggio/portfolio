<template>
  <div>
    <div>
      <myNavbar />
      
      <section>
        <div class="section-1">
          <v-card class="mx-auto" max-width="0" rounded="0">
            <v-avatar color="black" size="170" rounded="0">
              <img src="@/assets/Igor.jpg.jpg" alt="Igor" class="FotoPrincipal" />
            </v-avatar>
          </v-card> 
          <section>
            <div class="Textos-1">
              <div class="Nome">Igor Baggio Ferreira</div>
              <div class="Cargo">Future Software Developer</div>
              <div>
      <a href="https://www.linkedin.com/in/igor-baggio-08119714b/" target="_blank">Visite o LinkedIn</a>
    </div>
            </div>
          </section>
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
  name: "Link-ed",
  components: { myNavbar, myFooter },
};
</script>

  <style>
  .section-1 {
    margin: 10px 20px 10px 20px;
    background-color:rgba(20, 30, 163, 0.301); 
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }
  .section-2 {
    margin: 10px 20px 10px 20px;
    background-color: yellow;
    text-align: center; 
  }
  .section-3 {
    margin: 10px 20px 10px 20px;
    background-color: purple;
  }
  .Textos-1{
  text-align: center;
  padding: 20px;
  }
  .Nome{
    margin-bottom: 10px;
    color: white ;
  }
  .Cargo{
    margin-bottom: 10px;
    color: white ;
  }
  .Link{
    margin-bottom: 10px;
    color: white ;
  }
  </style>
