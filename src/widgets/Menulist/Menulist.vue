<script>
import Menuitem from "../../components/Menuitem/Menuitem.vue";

import image1 from "../../assets/images/coffee-1.png";
import image2 from "../../assets/images/coffee-2.png";
import image3 from "../../assets/images/coffee-3.png";
import image4 from "../../assets/images/coffee-4.png";
import image5 from "../../assets/images/coffee-5.png";
import image6 from "../../assets/images/coffee-6.png";
import image7 from "../../assets/images/coffee-7.png";
import image8 from "../../assets/images/coffee-8.png";
import image9 from "../../assets/images/coffee-9.png";
import image10 from "../../assets/images/coffee-10.png";
import image11 from "../../assets/images/coffee-11.png";
import image12 from "../../assets/images/coffee-12.png";
import image13 from "../../assets/images/coffee-13.png";
import image14 from "../../assets/images/coffee-14.png";
import image15 from "../../assets/images/coffee-15.png";
import image16 from "../../assets/images/coffee-16.png";
import image17 from "../../assets/images/coffee-17.png";
import image18 from "../../assets/images/coffee-18.png";


export default {
  name: "Menulist",
  components: {Menuitem},
  data () {
    return {
      menu: [
        {
          id: 1,
          name: "Эспрессо",
          description: "Мы знаем, что ты слишком серьезен, чтобы читать",
          price: 190,
          image: image1,
        },
        {
          id: 2,
          name: "Американо",
          description: "Для трушных кофеманов",
          price: 190,
          image: image2,
        },
        {
          id: 3,
          name: "Капучино",
          description: "Забирай идеальный баланс вкуса и приходи за добавкой",
          price: 230,
          image: image3,
        },
        {
          id: 4,
          name: "Латте",
          description: "Нежный и молочный на первый взгляд, и на второй",
          price: 230,
          image: image4,
        },
        {
          id: 5,
          name: "Флэт Уайт",
          description: "бери, когда очень хочется взбодриться и капучино",
          price: 230,
          image: image5,
        },
        {
          id: 6,
          name: "Раф",
          description: "ультра сливочный",
          price: 230,
          image: image6,
        },
        {
          id: 7,
          name: "Маття",
          description: "Калссический чайный антистресс",
          price: 190,
          image: image7,
        },
        {
          id: 8,
          name: "Какао",
          description: "Лучше, чем в детстве",
          price: 190,
          image: image8,
        },
        {
          id: 9,
          name: "Чай",
          description: "можешь выбрать разный на каждый день недели, только не обожгись",
          price: 150,
          image: image9,
        },
        {
          id: 10,
          name: "ИРИСНО-КАРАМЕЛЬНЫЙ ЛАТТЕ",
          description: "праздник в твоём стаканчике, Не иначе",
          price: 270,
          image: image10,
        },
        {
          id: 11,
          name: "РАФ «МАРЦИПАН»В",
          description: "кофе и десерт вместе, звучит неплохо",
          price: 270,
          image: image11,
        },
        {
          id: 12,
          name: "РАФ «БАУНТИ»",
          description: "*надпись про наслаждение и рай",
          price: 270,
          image: image12,
        },
        {
          id: 13,
          name: "Капкейки",
          description: "большой ассортимент, аж глаза разбегаются",
          price: 150,
          image: image13,
        },
        {
          id: 14,
          name: "ТАРТАЛЕТКА С БРУСНИКОЙ",
          description: "нежное песочное тесто и нежный крем",
          price: 220,
          image: image14,
        },
        {
          id: 15,
          name: "ПИРОЖНОЕ ШОКОЛАДНО-ОРЕХОВОЕ",
          description: "Шоколадный бисквит, соленая карамель, ореховое пралине и шоколадный мусс",
          price: 220,
          image: image15,
        },
        {
          id: 16,
          name: "ЧИЗКЕЙК С КАРАМЕЛЬЮ",
          description: "десерт с легкой миндальной основой, нежной творожно-сливочной начинкой и яркой карамелью",
          price: 190,
          image: image16,
        },
        {
          id: 17,
          name: "КРАСНЫЙ БАРХАТ",
          description: "Классические бисквиты красный бархат с насыщенным малиновым кули в прослойке",
          price: 220,
          image: image17,
        },
        {
          id: 18,
          name: "МОРКОВНЫЙ ПИРОГ",
          description: "Пряный вкус с нотками мускатного ореха, корицы, изюма и сладостью мандаринового конфи",
          price: 220,
          image: image18,
        },
      ],
    }
  },
}
</script>

<template>
  <div class="container mx-auto">
    <div class="menulist flex flex-row flex-wrap my-20">
      <Menuitem v-for="item in menu" :key="item.id" :name="item.name"
                :description="item.description" :price="item.price" :image="item.image" />
    </div>
  </div>
</template>

<style scoped>

</style>