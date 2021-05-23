<template>
    <aside class="flex flex-col justify-between h-full">
        <!--Logo-->
        <div class="left-menu-logo">
            <inertia-link
                :href="route('dashboard')">
                <div class="flex items-center h-20">
                    <t-logo class="w-10 h-10 text-white"/>
                    <span class="mx-2 text-3xl text-white" v-if="showingLeftMenu === 'true'">TailAdmin</span>
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
            <a class="flex flex-row justify-center w-full p-3 px-2 border-t border-gray-700 hover:text-gray-400 h-15 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700">
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="ml-2" v-if="showingLeftMenu === 'true'">Settings</span>
            </a>
        </div>
    </aside>
</template>

<script>
import TLogo from "@/Components/Icon/TLogo";

export default {
    name: "LeftMenu",
    components: {
        TLogo
    },
    props: ['showingLeftMenu']
}
</script>

<style scoped>

</style>
