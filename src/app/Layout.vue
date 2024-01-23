<script>
import Header from "../widgets/Header/Header.vue";
import Menubar from "../widgets/Menubar/Menubar.vue";
import Menulist from "../widgets/Menulist/Menulist.vue";
import Footer from "../widgets/Footer/Footer.vue";
import Order from "../widgets/Order/Order.vue";
import Payment from "../components/Payment/Payment.vue";
import OrdersList from "../widgets/OrdersList/OrdersList.vue";

export default {
  name: "Layout",
  components: {OrdersList, Payment, Order, Footer, Menulist, Menubar, Header},
  data () {
    return {
      menuVisible: true,
      modalVisible: false,
      ordersVisible: false,
    }
  },
  methods: {
    showCart() {
      this.menuVisible = false;
      this.ordersVisible = false;
    },
    showMenu() {
      this.menuVisible = true;
    },
    showOrders () {
      this.menuVisible = false;
      this.ordersVisible = true;
    },
    openModal () {
      this.modalVisible = true;
    },
    closeModal () {
      this.modalVisible = false;
      this.menuVisible = true;
      window.scrollTo({
        top: 0,
        left: 0,
      });
    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="content">
    <Payment v-show="modalVisible" @close="closeModal" />

    <Header @back="showMenu" @toCart="showCart" @toOrders="showOrders" />
    <div v-if="menuVisible">
      <Menubar name="Меню" label="Здесь есть все, что вы любите. Можно изучить состав <br>
      и рассчитать КБЖУ для любого напитка или дессерта" />
      <Menulist />
    </div>
    <div v-else-if="ordersVisible">
      <OrdersList />
    </div>
    <div v-else>
      <Menubar name="Корзина" label="Ваш заказ" />
      <Order @open="openModal" />
    </div>
    </div>
    <Footer />
  </div>


</template>

<style scoped>

.wrapper {
  position: relative;
  height: calc(100vh - 300px);
}
.content {
  box-sizing: border-box;
  min-height: 100%;
  //padding-bottom: 60px;
}

</style>