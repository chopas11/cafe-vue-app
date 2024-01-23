<script>
export default {
  name: "OrdersList",
  computed: {
    orders () {
      let orders = JSON.parse(localStorage.getItem('orders'));
      if (orders === null) orders = [];
      return orders;
    }
  }
}
</script>

<template>
  <div class="container mx-auto">
  <div class="orderslist my-5">
    <div v-if="orders.length > 0" v-for="order in orders" class="my-5">
      <p>№ заказа: {{order.id}}</p>
      <p>Список позиций:
        <span v-for="pos in order.items">{{ pos.name }} {{ pos.amount }} {{ pos.count }} шт, </span>
      </p>
      <p>Адрес доставки: {{order.place}}</p>
      <p v-if="order.promo !== ''">Использованный промокод {{order.promo}}</p>
    </div>
    <div v-else>Заказов нет</div>
  </div>
  </div>
</template>

<style scoped>

</style>