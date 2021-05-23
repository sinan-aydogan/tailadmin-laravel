<template>
  <div>
    <!--Dropdown Item-->
    <div v-if="!item.link"
         @click="showingSubMenu = !showingSubMenu ; $emit('showLeftMenuEmit')"
         :class="[
                'left-menu-item',{
                'justify-start': showingLeftMenu === 'true',
                'justify-center': showingLeftMenu === 'false',
                'bg-white text-gray-700 rounded-md': showingSubMenu,
                'text-white hover:text-gray-700 hover:bg-gray-100 rounded-md': !showingSubMenu,
                }]"
    >
      <!-- Icon -->
      <div>
        <font-awesome-icon v-if="item.icon" :icon="item.icon"/>
      </div>
      <!-- Label -->
      <div
          v-if="showingLeftMenu === 'true'"
          :class="['w-full',item.icon ? 'ml-3':'']">
        {{ item.label }}
      </div>
      <!--Indicator Icon-->
      <font-awesome-icon
          v-if="item.items && !showingSubMenu && showingLeftMenu == 'true'"
          class="mr-1"
          icon="angle-down"/>
      <font-awesome-icon
          v-if="item.items && showingSubMenu && showingLeftMenu == 'true'"
          class="mr-1"
          icon="angle-left"/>
    </div>
    <!-- Root Item-->
    <inertia-link
        v-if="item.link"
        :href="item.link"
        :class="[
                'left-menu-item',{
                'justify-start': showingLeftMenu === 'true',
                'justify-center': showingLeftMenu === 'false',
                'bg-white text-gray-700 rounded-md': showingSubMenu,
                'text-white hover:text-gray-700 hover:bg-gray-100 rounded-md': !showingSubMenu,
                }]">
        <!--TODO: AKTİFLİĞİ OTOMATİKLEŞTİRİLECEK-->

<!--        <jet-nav-link :href="route('dashboard')" :active="route().current('dashboard')">
            Dashboard
        </jet-nav-link>-->
      <!-- Icon -->
      <div>
        <font-awesome-icon v-if="item.icon" :icon="item.icon"/>
      </div>
      <!-- Label -->
      <div
          v-if="showingLeftMenu === 'true'"
          :class="['w-full',item.icon ? 'ml-3':'']">
        {{ item.label }}
      </div>

    </inertia-link>

    <!-- Sub Item -->
    <transition name="fade" type="easy">
      <div
          v-show="showingSubMenu"
          class="flex flex-col mt-1 bg-gray-100 bg-opacity-10 rounded-md overflow-hidden"
      >
        <left-menu-sub-item
            v-for="(item, index) in item.items"
            :key="index"
            :item="item"
            :showingLeftMenu="showingLeftMenu"/>
      </div>
    </transition>
  </div>
</template>

<script>
import LeftMenuSubItem from "@/Layouts/LeftMenuSubItem";

export default {
  name: "LeftMenuItem",
  components: {
    LeftMenuSubItem
  },
  props: ["item", "showingLeftMenu"],
  data() {
    return {
      showingSubMenu: false,
    };
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  max-height: 0px;
}

.fade-leave-from, .fade-enter-to {
  opacity: 1;
  max-height: 700px;
}
</style>
