<script>
import Logo from "../../assets/Icons/Logo.vue";
import Cart from "../../assets/Icons/Cart.vue";

export default {
  name: "Header",
  components: {Cart, Logo},
  computed: {
    itemsCount () {
      return this.$store.getters.itemsCount;
    }
  }
}
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="header flex flex-row py-4 items-center">
      <div class="basis-1/5"><Logo color="#77093b" /></div>
      <div class="basis-3/5">
        <ul class="header_menu">
          <li>Главная</li>
          <li @click="this.$emit('back')">Меню</li>
          <li @click="this.$emit('toOrders')">Заказы</li>
          <li>О нас</li>
          <li>Адреса</li>
        </ul>
      </div>
      <div class="basis-1/5">
        <div class="cart_wrapper" @click="this.$emit('toCart')">
          <div class="cart">
            <span>Корзина</span>
            <div class="cart_svg">
              <Cart color="#77093b" />
              <div v-show="itemsCount > 0" class="cart_counter">+{{itemsCount}}</div>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.header_menu {
  list-style: none;
  display: inline-block;
}

.header_menu li {
  display: inline;
  padding: 0 40px;
  cursor: pointer;
  font-weight: 500;
}

.header_menu li:hover {
  color: var(--accent-color);
}

.cart_wrapper {
  display: inline-block;
}

.cart {
  font-weight: 500;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50px;
  display: flex;
  gap: 10px;
  border: 1px solid #e4e4e4;
}
.cart_svg {
  position: relative;
}

.cart_counter {
  position: absolute;
  top: -5px;
  right: -6px;
  background: var(--accent-color);
  border: 2px solid #ffffff;
  font-size: 10px;
  color: #ffffff;
  width: 18px;
  padding-left: 2px;
  height: 18px;
  border-radius: 20px;
}

.cart:hover {
  background: #e4e4e4;
}

</style>