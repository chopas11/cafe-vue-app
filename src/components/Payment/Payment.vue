<script>
import Success from "../../assets/Icons/Success.vue";

export default {
  name: "Payment",
  components: {Success}
}
</script>

<template>
  <div class="modal_wrapper">
    <div class="modal">
      <div class="payment">
        <h2 class="accent text-2xl uppercase font-semibold">Оплата прошла успешно</h2>
        <p class="mt-5 mb-10">мы уже готовим ваш заказ <br> можете забрать его по адресу через 20 минут</p>
        <Success class="mx-32 mb-10" />
        <button @click="this.$emit('close')" class="button ">На главную</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.modal_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  z-index: 999;
  opacity: 1;
  -webkit-transition: opacity 200ms ease-in;
  -moz-transition: opacity 200ms ease-in;
  transition: opacity 200ms ease-in;
  pointer-events: none;
  margin: 0;
  padding: 0;
}

.modal {
  pointer-events: auto;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.payment {
  z-index: 1001;
  background: var(--footer-color);
  border-radius: 30px;
  text-align: center;
  padding: 50px 150px;
}

</style>