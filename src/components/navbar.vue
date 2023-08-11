<template>
  <div class="navbar">
    <div class="navbar__left">Igor Baggio</div>
    <div class="navbar__right">
      <div class="navbar__right--sobre">Sobre | </div>
      <div class="navbar__right--contato">Contato</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myNavbar",
};
</script>
<style scoped>
.navbar {
  height: 80px;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar__right{
  display: flex;
  justify-content: right;
}
.navbar__right--contato{
  padding-left: 4px;
}
</style>
