<template>
  <div>
    <nav class="absolute top-0 items-center w-full min-h-6 px-5 py-4 z-50">
      <!--  Icon  -->
      <div class="flex flex-col max-w-screen-xl mx-auto">
        <!--  Mobile -->
        <div class="flex items-center justify-between">
          <div class="flex-1 md:flex-none lg:w-1/12 lg:pl-10">
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
          <div class="flex-none md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
              <g fill="#D0D6F9" fill-rule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </svg>
          </div>
        </div>
        <!-- End of Mobile -->
        <!--  Nav Column -->
        <div
          class="flex flex-col flex-grow w-11/12 pl-5 md:flex flex-nowrap items-center"
        >
          <hr class="border-t-2 border-gray-600 w-2/5" />
          <hr class="border-t-2 border-gray-600 w-12 -mr-5 z-50" />
          <div
            class="w-3/5 backdrop-filter backdrop-blur-lg backdrop-brightness-125 flex items-center"
          >
            <ul class="flex flex-row list-none space-x-8 pl-8">
              <li class="font-semibold text-white">
                <nuxt-link
                  class="flex items-center min-h-16 hover:border-b-2 hover:border-white"
                  to="/"
                  >00 HOME</nuxt-link
                >
              </li>
              <li class="font-semibold text-white">
                <nuxt-link
                  class="flex items-center min-h-16 hover:border-b-2 hover:border-white"
                  to="/destination"
                  >01 DESTINATION</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

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
      screenType: "",
    };
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
        this.screenType = "mobile";
      } else if (screen.width > 760 && screen.width < 1280) {
        this.screenType = "tablet";
      } else {
        this.screenType = "desktop";
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
