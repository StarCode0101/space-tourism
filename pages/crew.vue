<template>
  <div
    class="h-full w-full z-10 bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: 'url(' + require(`~/assets/img/crew/${bgImage}.jpg`) + ')',
    }"
  >
    <div
      class="max-w-screen-2xl mx-auto md:px-32 px-7 w-full pt-28 md:pt-52 flex flex-wrap"
    >
      <div class="flex flex-wrap items-end w-full">
        <div class="lg:w-1/2 w-full text-white">
          <p class="text-xl pb-32 uppercase lg:text-left">
            <span class="text-gray-400">01</span> MEET YOUR CREW
          </p>
          <p class="text-xl uppercase pb-3 text-left text-gray-400">{{ role }}</p>
          <p class="text-4xl xl:text-5xl pb-10 text-left uppercase">{{ name }}</p>
          <p class="text-md text-gray-300 text-lg xl:text-xl pb-32 text-left leading-8">
            {{ bio }}
          </p>

          <nav
            class="flex flex-row space-x-5 text-white bg-transparent justify-start pb-20"
          >
            <template v-for="(mCrew, index) in crew">
              <a
                class="h-4 w-4 bg-gray-500 rounded-full md:hover:bg-white cursor-pointer"
                @click="handleSelect(index)"
                :class="{ 'i-tab-active': mCrew.active }"
              >
              </a>
            </template>
          </nav>
        </div>
        <div class="lg:w-1/2 text-white flex justify-center">
          <img
            style="max-height: 480px; max-width: 480px"
            class="h-45 w-45 pt-6 pb-0 bg-center bg-cover"
            :src="require(`~/assets/img/crew/${currentTab}`)"
            alt="crew member image"
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
      currentTab: "image-douglas-hurley.webp",
      crew: data.crew,
      name: "", //data.crew[0].name,
      role: "", // data.crew[0].role,
      bio: "", //data.crew[0].bio,
    };
  },
  computed: {
    bgImage() {
      if (this.$store.state.deviceType === "mobile") return "background-crew-mobile";
      else if (this.$store.state.deviceType === "tablet") return "background-crew-tablet";
      else return "background-crew-desktop";
    },
  },
  methods: {
    handleSelect(index) {
      this.crew.forEach((crew, i) => {
        crew.active = index == i; //true(active)
        if (index == i) {
          this.currentTab = crew.images.webp;
          this.name = crew.name;
          this.role = crew.role;
          this.bio = crew.bio;
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

<style scoped>
.i-tab-active {
  @apply bg-white;
}
</style>
