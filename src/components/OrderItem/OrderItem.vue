<script>
import Minus from "../../assets/Icons/Minus.vue";
import Plus from "../../assets/Icons/Plus.vue";

export default {
  name: "OrderItem",
  components: {Plus, Minus},
  props: {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },

  },
  methods: {
    IncrementCount () {
      console.log("++");
      this.$store.dispatch("IncrementCount", this.name);
    },
    DecrementCount () {
      this.$store.dispatch("DecrementCount", this.name);
    },
  }
}
</script>

<template>
  <div class="order flex">
    <div class="basis-1/5 py-5 pr-10">
      <img :src="image" class="rounded-lg text" alt="Order">
    </div>
    <div class="basis-3/5 pt-10 relative">
      <span class="accent text-lg uppercase font-semibold">{{name}}</span>
      <p class="mt-6 text-xl font-medium">Молоко</p>
      <p class="mt-2 text-xl font-medium">Объем: {{amount}}</p>
      <p class="accent text-lg uppercase absolute font-semibold bottom-4">{{price}} ₽</p>
    </div>
    <div class="basis-1/5 flex items-center">
      <div class="buttons">
        <div @click="DecrementCount"><Minus /></div>
        <div><span>{{count}}</span></div>
        <div @click="IncrementCount"><Plus /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.buttons {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  border-radius: 50px;
  border: 1px solid #c0c0c0;
  padding: 10px;
  cursor: pointer;
}

.buttons div {
  display: flex;
  border-radius: 20px;
  align-items: center;
  height: 30px;
}

</style>