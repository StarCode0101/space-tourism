<template>
  <div
    class="h-full w-full z-10 bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: 'url(' + require(`~/assets/img/${bgImage}`) + ')' }"
  >
    <div
      class="max-w-screen-2xl mx-auto md:px-32 px-7 py-24 w-full pt-28 md:pt-80 flex flex-wrap"
    >
      <div class="flex flex-wrap lg:flex-nowrap items-center">
        <div class="flex flex-wrap w-full">
          <div class="lg:w-1/2 text-white text-center">
            <p class="text-xl pb-2 uppercase lg:text-left">So, you want to travel to</p>
            <p class="text-6xl md:text-9xl xl:text-12 uppercase pb-8 lg:text-left">
              Space
            </p>
            <p class="text-lg lg:text-left">
              Let’s face it; if you want to go to space, you might as well genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and
              relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div
            class="flex justify-center lg:justify-end lg:w-1/2 pt-20 md:pt-36 md:pb-16 w-full"
          >
            <div
              class="bg-white flex h-32 md:h-56 w-32 md:w-56 md:text-3xl items-center justify-center rounded-full uppercase"
            >
              Explore
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // bgImage: "",
    };
  },

  computed: {
    bgImage() {
      if (this.$store.state.deviceType === "mobile") return "background-home-mobile.jpg";
      else if (this.$store.state.deviceType === "tablet")
        return "background-home-tablet.jpg";
      else return "background-home-desktop.jpg";
    },
  },
};
</script>
