<template>
  <div>
    <div class="absolute top-0 items-center w-full min-h-6 z-50 md:mb-6 lg:pt-7">
      <!--  Icon  -->
      <div
        class="flex flex-col md:justify-between md:flex-row max-w-screen-2xl mx-auto px-5 py-4 md:pt-0 md:pr-0 lg:pl-0"
      >
        <!--  Mobile -->
        <div
          class="flex items-center justify-between md:flex-1 lg:mr-7 lg:flex-none md:pl-4 lg:pl-0"
        >
          <div class="md:flex-none lg:pl-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <g fill="none" fill-rule="evenodd">
                <circle cx="24" cy="24" r="24" fill="#FFF" />
                <path
                  fill="#0B0D17"
                  d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
                />
              </g>
            </svg>
          </div>
          <div class="md:hidden" @click="isHidden = !isHidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          </div>
        </div>
        <!-- End of Mobile -->
        <!--  Nav Column -->
        <div class="flex-grow md:flex-grow-0 md:pl-5 items-center lg:flex-1 lg:flex">
          <hr class="hidden lg:flex border-t-2 border-gray-600 lg:flex-1" />
          <hr class="hidden lg:flex border-t-2 border-gray-600 w-12 -mr-8 z-50" />
          <nav
            :class="{ hidden: isHidden }"
            class="flex-col md:px-12 md:flex md:flex-row mt-2 md:mt-0 text-black md:text-white bg-white md:bg-transparent md:bg-gray-800 md:bg-opacity-95 lg:justify-end xl:pr-96 lg:pr-32 lg:bg-transparent lg:backdrop-filter lg:backdrop-blur-xl lg:backdrop-brightness-125"
          >
            <nuxt-link
              class="flex items-center font-semibold py-2 md:py-9 mt-2 text-sm bg-transparent md:min-h-16 px-4 md:px-0 md:mx-4 md:hover:border-b-2 md:hover:border-white md:active:border-white"
              to="/"
              >HOME</nuxt-link
            >
            <nuxt-link
              class="flex items-center font-semibold py-2 md:py-9 mt-2 text-sm bg-transparent md:min-h-16 px-4 md:px-0 md:mx-4 md:hover:border-b-2 md:hover:border-white md:active:border-white"
              to="/destination"
              >DESTINATIONS</nuxt-link
            >
            <nuxt-link
              class="flex items-center font-semibold py-2 md:py-9 mt-2 text-sm bg-transparent md:min-h-16 px-4 md:px-0 md:mx-4 md:hover:border-b-2 md:hover:border-white"
              to="/"
              >DESTINATIONS</nuxt-link
            >
            <nuxt-link
              class="flex items-center font-semibold py-2 md:py-9 mt-2 text-sm bg-transparent md:min-h-16 px-4 md:px-0 md:mx-4 md:hover:border-b-2 md:hover:border-white"
              to="/"
              >HOME</nuxt-link
            >
            <nuxt-link
              class="flex items-center font-semibold py-2 md:py-9 mt-2 text-sm bg-transparent md:min-h-16 px-4 md:px-0 md:mx-4 md:hover:border-b-2 md:hover:border-white"
              to="/"
              >HOME</nuxt-link
            >
          </nav>
        </div>
      </div>
    </div>

    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "from default",
      isHidden: true,
    };
  },

  methods: {
    toggleMenu() {},
  },
  watch: {
    screenType() {
      this.OnWindowResize();
    },
  },
  methods: {
    OnWindowResize() {
      console.log(window.screen.width);
      if (window.screen.width < 760) {
        this.$store.commit("changeDeviceType", "mobile");
      } else if (screen.width > 760 && screen.width < 1024) {
        this.$store.commit("changeDeviceType", "tablet");
      } else {
        this.$store.commit("changeDeviceType", "desktop");
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.OnWindowResize();
    });

    window.addEventListener("resize", this.OnWindowResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.OnWindowResize);
  },
};
</script>

<style></style>
