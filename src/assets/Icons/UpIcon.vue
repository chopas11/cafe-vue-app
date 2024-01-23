<script>
export default {
  name: "UpIcon",
  props: {
    color: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <svg width="18" height="31" viewBox="0 0 18 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 31V2M9 2L1 10M9 2L17 10" :stroke="color" stroke-width="1.5"/>
  </svg>
</template>

<style scoped>

</style>