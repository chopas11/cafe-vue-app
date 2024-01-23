<script>
export default {
  name: "Menubar",
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <div class="menubar py-20 text-center text-white uppercase">
    <h1 class="font-bold mb-5">{{name}}</h1>
    <h2 class="font-semibold text-lg" v-html="label"></h2>
  </div>
</template>

<style scoped>

.menubar {
  background-image: url("../../assets/images/menu.png");
  background-size: cover;
}

</style>