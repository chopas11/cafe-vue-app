<script>
import OrderItem from "../../components/OrderItem/OrderItem.vue";

import image1 from "../../assets/images/coffee-1.png"
import Plus from "../../assets/Icons/Plus.vue";

export default {
  name: "Order",
  components: {Plus, OrderItem},
  data () {
    return {
      place: "Г. Санкт-Петербург Ул. 7-ая Красноармейская, 5",
      isPlace: false,
      promo: "",
    }
  },
  methods: {
    takeOrder () {
      if (this.place !== "" && this.itemsCount) {

        const newOrder = {
          id: new Date().valueOf(),
          items: this.items,
          place: this.place,
          promo: this.promo,
        };

        let orders = JSON.parse(localStorage.getItem('orders'));
        if (orders === null) orders = [];
        localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
        this.$store.dispatch('clearItems');
        this.$emit('open');
      }
    },
    editPlace () {
      this.isPlace = !this.isPlace;
      this.isPlace ?
          document.getElementById('place').disabled = false
          :
          document.getElementById('place').disabled = true;
    }
  },
  computed: {
    items () {
      return this.$store.getters.items;
    },
    itemsCount () {
      return this.$store.getters.itemsCount;
    }
  }
}
</script>

<template>
  <div class="container mx-auto">
    <div class="orderview">
      <h2 class="accent my-10 text-3xl uppercase font-bold">Ваш заказ</h2>
      <OrderItem v-if="itemsCount" v-for="item in items" :name="item.name" :amount="item.amount"
                 :count="item.count" :price="item.price" :image="item.image" />
      <div v-else>Вы еще ничего не выбрали</div>

      <div class="text-center">
        <input type="text" class="input" placeholder="Введите промокод" v-model="promo">
        <button class="button">Применить</button>
        <br>
        <div class="place my-10">
          <span class="place_name">Заказ с собой</span>
          <span @click="editPlace" class="place_edit">{{isPlace ? "Сохранить" : "Изменить"}}</span><br>
          <textarea id="place" class="textarea" rows="2" cols="31" placeholder="Адрес" v-model="place" disabled />
        </div>
        <br>
        <button @click="takeOrder" class="button">Оформить заказ</button>
        <br><br>
      </div>
    </div>
  </div>
</template>

<style scoped>

.place {
  padding: 20px 20px 40px 20px;
  border-radius: 30px;
  text-align: left;
  background: var(--place-color);
  display: inline-block;
}

.place_name {
  font-size: 20px;
  font-weight: 600;
  color: var(--accent-color)
}

.place_edit {
  cursor: pointer;
  float: right;
  font-size: 14px;
  font-weight: 400;
  color: var(--accent-color)
}

.textarea {
  background: var(--place-color);
  outline: none;
  font-size: 20px;
  resize: none;
}

</style>