<script>
import image1 from "../../assets/images/coffee-1.png";
import Cart from "../../assets/Icons/Cart.vue";

export default {
  name: "Menuitem",
  components: {Cart},
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleInCart() {
      const newItem = {
        id: (new Date).valueOf(),
        name: this.name,
        amount: "300 мл",
        count: 1,
        price: this.price,
        image: this.image,
      }
      this.$store.dispatch("toggleInCart", newItem);
    }
  },
  computed: {
    count () {
      const items = this.$store.getters.items;
      return items.filter(item => item.name === this.name)[0]?.count ?? 0;
    },
  }
  // beforeCreate() {
  //   this.$store.dispatch("fetchElems");
  // },
}
</script>

<template>
  <div  class="menuitem basis-1/3 p-3 mb-2">
    <div :class="count > 0 ? 'chosen' : ''" class="menuitem_bg">
      <div class="menuitem_image">
        <img :src="image" alt="Image" />
        <div @click="toggleInCart" class="menuitem_image_cart">
          <Cart color="#77093b" />
          <div v-show="count > 0" class="menuitem_image_count">+{{count}}</div>
        </div>
      </div>

      <div class="pl-4 py-4 pr-20">
        <span class="menuitem_name">{{name}}</span>
        <p class="lowercase">{{description}}</p>
        <span class="mt-2">{{price}} ₽</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

.menuitem {
  position: relative;
}

.menuitem_bg {
  height: 100%;
  padding: 10px;
  border-radius: 12px;
}

.chosen {
  background: var(--light-color);
}

.menuitem_image {
  position: relative;
  width: 100%;
}

.menuitem_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}


.menuitem_image_cart {
  cursor: pointer;
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: var(--light-color);
  width: 36px;
  height: 36px;
  padding: 7px 8px;
  border-radius: 50px;
}

.menuitem_image_cart:hover {
  background: #e4e4e4;
}

.menuitem_image_count {
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


.menuitem_name {
  font-size: 20px;
  color: var(--accent-color);
  font-weight: 600;
}


</style>