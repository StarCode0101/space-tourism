<template>
  <div
    class="h-full w-full z-10 bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: 'url(' + require(`~/assets/img/technology/${bgImage}.jpg`) + ')',
    }"
  >
    <div
      class="max-w-screen-2xl mx-auto md:px-32 px-7 py-6 w-full pt-28 md:pt-52 flex flex-wrap"
    >
      <div class="flex flex-wrap w-full">
        <div class="lg:w-1/2 text-white text-center">
          <p class="text-xl uppercase lg:text-left pb-16">
            <span class="font-thin text-gray-300 pr-2">03 </span> SPACE LAUNCH 101
          </p>
          <div class="flex flex-row">
            <nav class="flex flex-col space-y-8 text-white bg-transparent justify-start">
              <template v-for="(tech, index) in technology">
                <button
                  class="btn btn-circle btn-outline h-12 w-12 xl:h-20 xl:w-20 text-white text-2xl bg-transparent border-gray-600"
                  @click="handleSelect(index)"
                  :class="{ 'i-tab-active': tech.active }"
                >
                  {{ index + 1 }}
                </button>
              </template>
            </nav>
            <div>
              <p class="text-left pb-3 px-6">THE TERMINOLOGY</p>
              <p class="text-left pb-5 px-6 text-3xl uppercase">{{ name }}</p>
              <p class="text-left px-6 leading-6">{{ description }}</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 w-full">
          <img
            class="h-45 w-45 p-4"
            :src="require(`~/assets/img/technology/${currentTab}`)"
            alt=""
          />
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
      currentTab: "image-launch-vehicle-portrait.jpg",
      technology: data.technology,
      description: "", // data.destinations[0].description,
      name: "", //data.destinations[0].name,
    };
  },
  computed: {
    bgImage() {
      if (this.$store.state.deviceType === "mobile")
        return "background-technology-mobile";
      else if (this.$store.state.deviceType === "tablet")
        return "background-technology-tablet";
      else return "background-technology-desktop";
    },
  },
  methods: {
    handleSelect(index) {
      this.technology.forEach((tech, i) => {
        tech.active = index == i; //true(active)
        if (index == i) {
          this.currentTab = tech.images.portrait;
          this.name = tech.name;
          this.description = tech.description;
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
  @apply border-white bg-white text-black;
}
</style>
