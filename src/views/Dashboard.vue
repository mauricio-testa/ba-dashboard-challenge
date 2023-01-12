<template>
  <header class="shadow flex bg-white p-4">
    <div class="container mx-auto flex justify-between">
      <img
        width="100"
        src="https://office.builderall.com/internacional/public/franchise/logo/logo-30877-7830.png"
      />
      <nav class="h-full">
        <ul class="h-full flex gap-6 items-center">
          <li
            v-for="i in ['Affiliates', 'Help', 'Add-ons']"
            class="text-sm font-semibold text-gray-800 md:block hidden"
          >
            {{ i }}
          </li>
          <li class="ml-3 relative">
            <img
              @click="menuVisible = !menuVisible"
              class="cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/17/17704.png"
              width="20"
            />
            <div
              v-if="menuVisible"
              class="
                absolute
                bg-gray-100
                rounded
                top-10
                right-0
                md:w-96
                w-72
                overflow-y-auto
                p-4
                z-10
              "
              style="max-height: 500px"
            >
              <input
                type="text"
                placeholder="Search 22 apps"
                class="
                  bg-transparent
                  border-b-2 border-blue-600
                  p-2
                  w-full
                  my-2
                "
              />
              <ul class="gap-2 grid gap-4 grid-cols-2 md:grid-cols-3">
                <apps-menu
                  :img="70"
                  item-classes="items-center flex flex-col bg-white p-1 shadow rounded"
                />
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="container mx-auto p-2">
    <div class="grid-cols-12 lg:grid gap-4">
      <section class="col-start-1 col-end-10">
        <header class="my-3 flex items-center justify-between h-12">
          <h2>My apps</h2>
          <input
            type="text"
            placeholder="Search 22 apps"
            class="bg-transparent border-b-2 border-blue-600 p-2"
          />
        </header>
        <div class="infinite-shadow relative">
        <ul class="flex overflow-y-auto pb-4 gap-4">
          <AppsMenu
            :img="90"
            item-classes="basis-32 shrink-0 items-center flex flex-col bg-white p-2 shadow rounded"
          />
        </ul>
        </div>

        <header class="mt-8 h-12">
          <h2>Suggested projects</h2>
        </header>
        <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <li v-for="p in projects" class="flex items-center">
            <img
              width="90"
              src="https://office.builderall.com/internacional/public/office5/img/tools/hover/builderall_builder.svg"
            />
            <div>
              <span class="font-semibold">{{ p }}</span>
              <a class="link block">Start</a>
            </div>
          </li>
        </ul>

        <header class="mt-8 h-12">
          <h2>Learn Builderall</h2>
        </header>
        <ul class="grid gap-4 grid-cols-1 sm:grid-cols-3 xl:grid-cols-5">
          <li class="flex items-center flex-col bg-white rounded shadow" v-for="p in ['Email marketing', 'Quick start training', 'Facebook ads course', 'Builderall University Live', 'Another course']" >
            <img
              class="w-full rounded-t"
              src="https://videomng.builderall.com/user_data/posters/i8fQdN3J0JAXBMO.png"
            />
            <div class="w-full flex-1 py-2 px-2">
              <span class="font-semibold px-2  block">{{p}} </span>
              <a class="link block p-2">Learn</a>
            </div>
          </li>
        </ul>
      </section>
      
      <section class="col-start-10 col-end-13">
        <div class="flex items-center bg-gray-50 w-full p-4 mt-4 justify-center">
          <img
            class="rounded-full"
            width="50"
            src="https://cdn.icon-icons.com/icons2/2468/PNG/512/user_kids_avatar_user_profile_icon_149314.png"
            alt=""
          />
          <div class="ml-2">
            <span class="block font-semibold">Mauricio Testa</span>
            <a class="link" href="s">Edit my account</a>
          </div>
        </div>
        <div class="items-center flex flex-col bg-white shadow p-4">
          <b class="my-2">Your plan</b>
          <div class="flex items-center justify-between w-full">
            <div class="font-semibold">
              Funnel Club USD $200
              <span class="block text-green-500 font-bold">Paid</span>
            </div>
            <a href="" class="link">Upgrade</a>
          </div>

          <hr class="mt-4 border-b-1 w-full" />

          <b class="my-2">Storage</b>
          <span class="text-xs w-full text-left text-gray-500">4.5GB/10GB</span>
          <div
            class="w-full mt-1 bg-gray-200 rounded-full h-1 dark:bg-gray-700"
          >
            <div class="bg-primary h-1 rounded-full" style="width: 45%"></div>
          </div>

          <hr class="mt-4 border-b-1 w-full" />

          <b class="my-2">Helpfull links</b>
          <ul>
            <li><a class="link" href="#">Knowledgebase</a></li>
            <li><a class="link" href="#">Support</a></li>
            <li><a class="link" href="#">Buy Domain</a></li>
          </ul>

          <hr class="mt-4 border-b-1 w-full" />

          <b class="my-2">Follow us</b>
          <ul class="flex items-center gap-2 mb-4">
            <li>
              <img
                width="23"
                src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
                alt=""
              />
            </li>
            <li>
              <img
                width="25"
                src="data:image/png;base64,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"
                alt=""
              />
            </li>
            <li>
              <img
                width="29"
                src="https://www.pngkit.com/png/detail/4-40788_square-vector-button-youtube-icon-black-and-white.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AppsMenu from "../components/AppMenu.vue";
export default {
  components: {
    AppsMenu,
  },
  data() {
    return {
      menuVisible: false,
      projects: [
        "Build a Website",
        "Broadcast a webinar",
        "Create an online store",
        "Receive appointments",
      ],
    };
  },
};
</script>
<style scoped>
.infinite-shadow::after {
  height: calc(100%);
  background: linear-gradient(271deg, #e9edf2, transparent);
  position: absolute;
  top: 0;
  right: 0;
  content: close-quote;
  width: 100px;
}
</style>