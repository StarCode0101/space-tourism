<template>
  <div
    class="h-full w-full z-10 bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: 'url(' + require(`~/assets/img/destinations/${bgImage}.jpg`) + ')',
    }"
  >
    <div
      class="max-w-screen-2xl mx-auto md:px-32 px-7 py-6 w-full pt-28 md:pt-52 flex flex-wrap"
    >
      <div class="flex flex-wrap w-full">
        <div class="lg:w-1/2 text-white text-center">
          <p class="text-xl pb-2 uppercase lg:text-left">
            <span class="font-thin text-gray-300 pr-2">01 </span> Pick your destination
          </p>
          <img
            class="h-45 w-45 p-16"
            :src="require(`~/assets/img/destinations/${currentTab}`)"
            alt=""
          />
        </div>
        <div class="lg:w-1/2 w-full">
          <nav class="flex flex-row text-white bg-transparent justify-start">
            <template v-for="(destination, index) in destinations">
              <a
                class="flex items-center font-semibold py-2 mt-2 text-gray-300 text-sm bg-transparent min-h-16 px-4 md:px-0 md:mx-4 md:hover:border-b-2 md:hover:border-white uppercase"
                @click="handleSelect(index)"
                :class="{ 'i-tab-active': destination.active }"
              >
                {{ destination.name }}
              </a>
            </template>
          </nav>
          <div class="text-white">
            <p class="text-8xl uppercase py-10 text-left">{{ name }}</p>
            <p class="text-lg xl:text-xl text-gray-300 leading-8 pb-16">
              {{ description }}
            </p>

            <hr class="pb-3" />
            <div class="flex">
              <div class="w-1/2">
                <p class="text-gray-300">AVERAGE. DISTANCE</p>
                <p class="text-3xl uppercase">{{ distance }}</p>
              </div>
              <div class="w-1/2">
                <p class="text-gray-300">EST. TRAVEL TIME</p>
                <p class="text-3xl uppercase">{{ travel }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "~/content/data.json";
export default {
  data() {
    return {
      //tabActive: ["border-b-2", "border-white"],
      currentTab: "image-moon.webp",
      destinations: data.destinations,
      description: "", // data.destinations[0].description,
      name: "", //data.destinations[0].name,
      distance: "", //data.destinations[0].distance,
      travel: "", //data.destinations[0].travel,
    };
  },
  computed: {
    bgImage() {
      if (this.$store.state.deviceType === "mobile")
        return "background-destination-mobile";
      else if (this.$store.state.deviceType === "tablet")
        return "background-destination-tablet";
      else return "background-destination-desktop";
    },
  },
  methods: {
    handleSelect(index) {
      this.destinations.forEach((destination, i) => {
        destination.active = index == i; //true(active)
        if (index == i) {
          this.currentTab = destination.images.webp;
          this.name = destination.name;
          this.distance = destination.distance;
          this.travel = destination.travel;
          this.description = destination.description;
        }
      });
    },
  },

  mounted() {
    //to initially select the first active tab
    this.$nextTick(function () {
      this.handleSelect(0);
    });
  },
};
</script>

<style lang="postcss" scoped>
.i-tab-active {
  @apply border-b-2 border-white;
}
</style>
