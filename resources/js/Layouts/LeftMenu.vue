<template>
    <aside :class="[
      'flex flex-col flex-shrink-0 justify-between h-full bg-gray-800 relative transition-all duration-500',
      showLabelStatus ? 'w-250' : 'w-75'
    ]">
      <!--Logo-->
      <div class="left-menu-logo">
        <Link
          :href="route('dashboard')">
          <div class="flex justify-center items-center space-x-1 space-y-1">
            <div class="flex justify-between h-10 overflow-hidden mx-4">
              <transition-group name="fade">
                <t-logo key="logo" class="w-10 h-10 text-white" />
                <div key="brand-name" v-if="showLabelStatus" class="flex text-3xl text-white h-10 items-center">
                  TailAdmin
                </div>
              </transition-group>
            </div>
          </div>
        </Link>
      </div>
      <!--Menu Items-->
      <nav
        class="h-full mt-6 px-1 overflow-y-auto text-gray-500 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 overflow-y-scroll transition-all transform duration-700">
        <slot />
      </nav>
      <!--Menu Footer-->
      <div
        v-if="showLabelStatus"
        class="flex flex-row items-center justify-center w-full text-white py-2 space-x-2 bg-gray-700 border-t-4 border-blue-800">
        <!--Language Selector-->
        <div
          class="flex justify-center items-center p-2 bg-gray-100 bg-opacity-10 rounded-full hover:bg-blue-600 hover:bg-opacity-30 focus:bg-gray-700 cursor-pointer"
          @click="showLangModal = !showLangModal">
          <svg v-html="languages.find(l=>l.key === lang).icon" class="w-6 h-6" />
        </div>
        <!--Settings-->
        <Link :href="route('settings')"
              class="flex justify-center items-center p-2 bg-gray-100 bg-opacity-10 rounded-full h-15 hover:bg-blue-600 hover:bg-opacity-30 focus:text-gray-400 focus:bg-gray-700">
          <t-cog-icon class="w-6 h-6" />
        </Link>
      </div>
      <!--Menu Expander Arrow-->
      <div v-else class="flex flex-row items-center justify-center w-full text-white py-2 space-x-2 bg-gray-700 border-t-4 border-blue-800 cursor-pointer" @click="$emit('showLeftMenuEmit', true)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
        </svg>
      </div>
      <teleport to="body">
        <t-modal v-model="showLangModal">
          <template #content>
            <div class="text-3xl">Select a Language</div>
            <div class="grid grid-flow-col grid-flow-row place-content-evenly">
              <div v-for="item in languages" :key="item.key">
                <svg v-html="item.icon" class="w-10 h-10  cursor-pointer" @click="changeLang(item.key)" />
              </div>
            </div>
          </template>
        </t-modal>
      </teleport>
    </aside>
</template>

<script>
import { computed, defineComponent, inject, provide, ref } from "vue";
import languageList from "@/Functions/languageList";
import TLogo from "@/Components/Icon/TLogo";
import TCogIcon from "@/Components/Icon/TCogIcon";
import { Link } from "@inertiajs/inertia-vue3";
import TModal from "@/Components/Modal/TModal";

export default defineComponent({
  name: "LeftMenu",
  components: {
    TModal,
    TCogIcon,
    TLogo,
    Link
  },
  emits: ["showLeftMenuEmit"],
  setup() {
    /*Definitions*/
    const lang = ref("en");
    const showLangModal = ref(false);
    const showingLeftMenu = inject("showingLeftMenu");
    const deviceType = inject("deviceType");
    const { languages } = languageList();

    /*Show-Hide Labels*/
    const showLabelStatus = computed(() => {
      let status;
      if (deviceType.value === "tablet" || deviceType.value === "phone") {
        status = true;
      } else {
        status = showingLeftMenu.value;
      }
      return status;
    });
    provide("showLabelStatus", showLabelStatus);

    /*Language Control*/
    const changeLang = (key) => {
      lang.value = key;
      localStorage.lang = key;
      showLangModal.value = false;
    };

    return {
      showLabelStatus,
      changeLang,
      languages,
      lang,
      showLangModal,
    };
  }
});
</script>
<style scoped>
/*Show Hide Menu Titles*/
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}

.fade-enter-from, .fade-leave-to {
  max-width: 0;
  opacity: 0;
}

.fade-enter-to, .fade-leave-from {
  max-width: 250px;
  opacity: 1;
}
</style>
