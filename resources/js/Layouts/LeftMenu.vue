<template>
  <aside class="flex flex-col justify-between h-full absolute">
    <!--Logo-->
    <div class="left-menu-logo">
      <inertia-link
          :href="route('dashboard')">
        <div class="flex justify-center items-center h-20 gap-1">
          <div class="flex justify-between h-10 overflow-hidden mx-4">
            <t-logo class="w-10 h-10 text-white"/>
            <transition name="left-menu">
              <div v-if="showingLeftMenu === 'true'" class="flex text-3xl text-white h-10 items-center">TailAdmin</div>
            </transition>
          </div>
        </div>
      </inertia-link>
    </div>
    <!--Menu Items-->
    <nav
        class="flex flex-col h-full mt-6 px-1 overflow-y-auto text-gray-500 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 overflow-y-scroll">
      <slot/>
    </nav>
    <!--Left Menu Footer-->
    <div class="flex flex-row text-gray-500">
      <inertia-link :href="route('settings')"
                    class="flex flex-row justify-center items-center w-full p-3 px-2 border-t border-gray-700 hover:text-gray-400 h-15 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700">
        <t-cog-icon class="w-6 h-6"/>
        <transition name="left-menu">
          <span v-if="showingLeftMenu === 'true'" class="ml-2">Settings</span>
        </transition>
      </inertia-link>
    </div>

  </aside>
</template>

<script>
import TLogo from "@/Components/Icon/TLogo";
import TCogIcon from "@/Components/Icon/TCogIcon";

export default {
  name: "LeftMenu",
  components: {
    TCogIcon,
    TLogo
  },
  props: ['showingLeftMenu']
}
</script>
<style>
.left-menu-enter-active, .left-menu-leave-active {
  transition: all .75s;
}

.left-menu-enter, .left-menu-leave-to {
  opacity: 0;
  max-width: 0;
}

.left-menu-enter-to, .left-menu-leave {
  opacity: 1;
  max-width: 500px;
}
</style>