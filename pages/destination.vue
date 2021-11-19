<template>
  <div
    class="h-full w-full z-10 bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: 'url(' + require(`~/assets/img/destination/${bgImage}.jpg`) + ')',
    }"
  >
    <div
      class="max-w-screen-2xl mx-auto md:px-32 px-7 py-6 w-full pt-28 md:pt-52 flex flex-wrap"
    >
      <div class="flex flex-wrap w-full">
        <div class="lg:w-1/2 text-white text-center">
          <p class="text-xl pb-2 uppercase lg:text-left">Pick your destination</p>
          <img
            class="h-45 w-45"
            :src="require(`~/assets/img/destination/${currenTabImage}.webp`)"
            alt=""
          />
        </div>
        <div class="lg:w-1/2 w-full">
          <nav class="flex flex-row text-white bg-transparent justify-start">
            <a
              class="flex items-center font-semibold py-2 mt-2 text-sm bg-transparent min-h-16 px-4 md:px-0 md:mx-4 md:hover:border-b-2 md:hover:border-white md:active:border-white"
            >
              MOON
            </a>
            <a
              class="flex items-center font-semibold py-2 mt-2 text-sm bg-transparent min-h-16 px-4 md:px-0 md:mx-4 md:hover:border-b-2 md:hover:border-white"
            >
              MOON
            </a>
            <a
              class="flex items-center font-semibold py-2 mt-2 text-sm bg-transparent min-h-16 px-4 md:px-0 md:mx-4 md:hover:border-b-2 md:hover:border-white md:active:border-white"
            >
              MOON
            </a>
            <a
              class="flex items-center font-semibold py-2 mt-2 text-sm bg-transparent min-h-16 px-4 md:px-0 md:mx-4 md:hover:border-b-2 md:hover:border-white md:active:border-white"
            >
              MOON
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabActive: ["border-b-2", "border-white"],
      currenTabImage: "image-moon",
      images: {
        moon: "image-moon",
        europa: "image-eroupa",
      },
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
};
</script>

<style scoped>
.tab-active {
  @apply border-b-2 border-white;
}
</style>
