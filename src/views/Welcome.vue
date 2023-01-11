<template>
  <div class="text-center h-full flex items-center welcome-bg">
    <div class="mx-auto p-2 flex items-center" style="max-width: 600px">
      <div
        v-for="(thing, index) in things"
        v-show="index == pointer"
        class="flex flex-col items-center h-full flex-1"
      >
        <lottie-player
          :src="thing.lottie"
          background="transparent"
          speed="1"
          style="width: 350px; height: 350px"
          loop
          autoplay
        ></lottie-player>

        <h2 class="text-3xl font-extrabold mt-6">{{ thing.title }}</h2>
        <p class="my-8 text-xl">{{ thing.description }}</p>
        <button @click="next" class="button my-3 py-3">
          {{ isLast ? "Enjoy your access!" : "Next" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "../assets/projects";
export default {
  methods: {
    next() {
      if (this.isLast) {
        this.$router.push("/");
      }
      this.pointer++;
    },
  },

  computed: {
    isLast() {
      return this.pointer == this.things.length - 1;
    },
  },

  data() {
    return {
      pointer: 0,
      things: Projects,
    };
  },
};
</script>
<style scoped>
.welcome-bg {
  background-image: linear-gradient(45deg, #fff1eb 0%, #ace0f9 100%);
}
</style>