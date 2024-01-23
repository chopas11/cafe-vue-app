<script>
import Logo from "../../assets/Icons/Logo.vue";
import UpIcon from "../../assets/Icons/UpIcon.vue";

export default {
  name: "Footer",
  components: {UpIcon, Logo},
  methods: {
    scrollUp () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<template>
  <div class="footer py-20">
    <div class="container mx-auto px-4">
      <div class="flex flex-row items-center">
        <div class="basis-1/5"><Logo color="#ffffff" /> </div>
        <div class="basis-3/5 flex flex-row items-center">

          <div class="basis-1/3">
            <ul class="list">
              <li>Главная</li>
              <li>Меню</li>
              <li>Акции</li>
              <li>О нас</li>
              <li>Адреса кофеен</li>
            </ul>
          </div>
          <div class="basis-1/3">
            <ul class="list">
              <li>КОНТАКТЫ</li>
              <li>info@kscoffee.com</li>
              <li>Тел.: +7(777)777-77-77</li>
            </ul>
          </div>
          <div class="basis-1/3">
            <ul class="list">
              <li>ЧАСЫ</li>
              <li>Пн-Пт 10.00-21.00</li>
              <li>Сб-Вс 11.30-22.00</li>
            </ul>
          </div>

        </div>
        <div class="basis-1/5">
          <div @click="scrollUp" class="up">
            <UpIcon color="#77093b" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.footer {
  background: var(--footer-color);
}

.list {
  list-style: none;

}

.list li {
  line-height: 2;
  font-size: 14px;
  cursor: pointer;
}

.list li:first-child {
  cursor: default;
}

.list li:hover:not(:first-child) {
  color: var(--accent-color);
}

.up {
  cursor: pointer;
  display: inline-block;
  background: #ffffff;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  padding: 10px 16px;
}

.up:hover {
  color: #ffffff;
  background: var(--pink-color);
}

</style>