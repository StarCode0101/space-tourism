<template>
  <div>
    <div
      class="h-full w-full z-10 bg-cover bg-center"
      :style="{ backgroundImage: 'url(' + require(`~/assets/img/${bgImage}`) + ')' }"
    >
      <div class="h-52 w-54 text-white pt-20"></div>

      <div class="container mx-0 px-7 py-6 w-full pb-56 flex flex-wrap">
        <div class="w-1/12"></div>
        <div class="w-11/12 flex flex-wrap lg:flex-nowrap items-center">
          <div class="flex flex-wrap w-full">
            <div class="w-1/2 text-white">
              <p class="text-xl pb-2">So, you want to travel to</p>
              <p class="text-9xl uppercase pb-8">Space</p>
              <p class="text-lg">
                Let’s face it; if you want to go to space, you might as well genuinely go
                to outer space and not hover kind of on the edge of it. Well sit back, and
                relax because we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div class="hidden w-1/2 pl-96 pt-20">
              <div
                class="flex items-center justify-center w-56 h-56 rounded-full bg-white uppercase"
              >
                Explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iData from "~/content/data.json";
export default {
  data() {
    return {
      bgImage: "background-home-desktop.jpg",
    };
  },
};
</script>
