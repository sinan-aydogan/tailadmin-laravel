<script setup>
/*Functions*/
import {ref, onBeforeMount, defineEmits, inject, watch} from "vue";
import {Link, usePage} from "@inertiajs/inertia-vue3";
import {onClickOutside} from '@vueuse/core'
import {cloneDeep} from "lodash";


defineEmits(['updateMainMenuStatus'])

/*Sources*/
import MainMenuLinks from "@/Sources/mainMenuLinks";
import UserMenu from "@/Layouts/MainMenu/Abay/UserMenu";
import {appConf, mainMenuConf} from "@/config";
import {menuStatus} from "@/Functions/menuTrigger";

const {mainMenuLinks, mainMenuFooterLinks} = MainMenuLinks({
    roles: usePage().props.value.roles,
    permissions: usePage().props.value.permissions
});

const activeMainLink = ref([null, null, null]);

/*Main-menu - Variables*/
const appearingMode = inject("appearingMode");
onBeforeMount(() => {
    mainMenuLinks.value.forEach(ml => {
        if (ml.hasOwnProperty('links')) {
            ml.links.find(sl => {
                /*Active Main-link*/
                if(ml.link === route().current()){
                    activeMainLink.value[0] = ml.id
                }

                /*Active Sub-link*/
                if (sl.link === route().current()) {
                    activeMainLink.value[0] = ml.id
                    activeMainLink.value[1] = sl.id
                }

                /*Active Third-link*/
                if (sl.hasOwnProperty('links')) {
                    sl.links.find(tl => {
                        if (tl.link === route().current()) {
                            activeMainLink.value[0] = ml.id
                            activeMainLink.value[1] = sl.id
                            activeMainLink.value[2] = tl.id
                        }
                    })
                }
            })
        }
    })
})

/*Sub-menu - Variables*/
const subMenu = ref(null)
const showSubMenu = ref();

/*Submenu - Visibility*/
onClickOutside(subMenu, (event) => showSubMenu.value = false)

/*Third-menu */
const thirdMenu = ref(null)
onClickOutside(thirdMenu, (event) => activeMainLink.value[2] = null)

/*Watch Window Size*/
const breakpoints = inject('breakpoints');
watch(() => cloneDeep(breakpoints), (newValue) => {

    if (newValue.value.smaller('md').value) {
        menuStatus.value = 'hidden'
    }

    if (newValue.value.greater('md').value) {
        menuStatus.value = 'opened'
    }
})

</script>

<template>
    <div
        class="abay-main-menu"
        :class="{
        'border-r': showSubMenu,
        'abay-main-menu-show' : menuStatus === 'opened',
        'abay-main-menu-hide' : menuStatus === 'hidden',
        }"
    >
        <!-- Logo -->
        <Link :href="route('/')" class="h-16 w-16 text-rose-600 my-4 mx-auto">
            <img :src="[
                        appearingMode === 'dark' ? mainMenuConf.abay.logo.dark ? mainMenuConf.abay.logo.dark : appConf.logo.dark :
                        mainMenuConf.abay.logo.light ? mainMenuConf.abay.logo.light : appConf.logo.light
                    ]"/>
        </Link>

        <!-- Main Links -->
        <div
            class="flex flex-col flex-grow space-y-[.25rem] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-slate-200 overscroll-x-none pr-4 -mr-4 scroll-smooth">

            <!-- Link -->
            <template v-for="link in mainMenuLinks" :key="link.id">
                <div
                    @click="activeMainLink[0] = link.id; showSubMenu=true"
                    class="abay-main-menu-root-wrapper"
                    :class="{ 'bg-rose-500 text-gray-50': activeMainLink[0] === link.id }"
                >
                    <!--Dropdown-->

                    <div
                        v-if="link.type === 'dropdown'"
                        class="abay-main-menu-root-link"
                    >
                            <!-- Icon -->
                            <icon v-if="link.icon" :icon="link.icon" class="w-6 h-6"/>

                            <!-- Label -->
                            <span class="text-[.65rem]" v-text="link.label"/>
                    </div>

                    <!--Internal Route Link-->
                    <Link
                        v-if="link.type === 'route'"
                        :href="route(link.link)"
                        class="abay-main-menu-root-link"
                    >

                        <!-- Icon -->
                        <icon v-if="link.icon" :icon="link.icon" class="w-6 h-6"/>

                        <!-- Label -->
                        <span class="text-[.65rem]" v-text="link.label"/>
                    </Link>

                    <!--External Link-->
                    <a
                        v-if="link.type === 'simple-link'"
                        class="abay-main-menu-root-link"
                        :href="link.link"
                        :target="!!link.target"
                        :key="link.id"
                    >
                        <!-- Icon -->
                        <icon v-if="link.icon" :icon="link.icon" class="w-6 h-6"/>

                        <!-- Label -->
                        <span class="text-[.65rem]" v-text="link.label"/>
                    </a>

                </div>
            </template>
        </div>

        <!--Footer Links-->
        <template v-for="link in mainMenuFooterLinks" :key="link.id">
            <div
                class="flex flex-shrink-0 justify-center items-center h-12 w-12 mx-auto bg-slate-100/10 mb-4 rounded-full">

                <!--Internal Route Link-->
                <Link
                    v-if="link.linkType === 'route'"
                    id="footer-link"
                    :href="route(link.link)"
                    :key="link.id"
                >
                    <icon v-if="link.icon" :icon="link.icon" class="mt-1 w-6 h-6"/>
                </Link>
                <!--External Link-->
                <a
                    v-else
                    id="footer-link"
                    :href="link.link"
                    :target="!!link.target"
                    :key="link.id"
                >
                    <icon v-if="link.icon" :icon="link.icon" class="mt-1 w-6 h-6"/>
                </a>
            </div>
        </template>

        <!-- User Menu -->
        <div class="flex items-center justify-center">
            <user-menu/>
        </div>
    </div>
    <!-- Sub Links -->

    <div
        v-if="activeMainLink[0]"
        class="absolute z-10 flex h-full flex-col px-4 -mb-4 w-56 bg-gradient-to-tl from-slate-700/90 to-slate-800  text-gray-50"
        :class="[
            showSubMenu ? 'left-28' : '-left-56',
            'transition-all duration-700'
        ]"
        ref="subMenu"
    >
        <!-- Firm Info -->
        <div class="flex flex-col h-20 justify-center items-center">
            <!-- Firm Name -->
            <span class="text-2xl font-bold"
                  v-html="mainMenuConf.appName ? mainMenuConf.appName : appConf.appName"
            />
            <!-- Firm Slogan -->
            <span class="text-xs font-semibold text-center" v-html="mainMenuConf.catchPhrase ? mainMenuConf.catchPhrase : appConf.catchPhrase"/>
        </div>

        <!-- Sub Links -->
        <div v-if="activeMainLink[0]" class="mt-6 space-y-[.25rem]" ref="thirdMenu"
        >
            <!-- Sub Link -->
            <template v-for="subLink in mainMenuLinks.find(l=>l.id === activeMainLink[0]).links" :key="subLink">
                <div
                    class="relative p-2 rounded-md hover:bg-slate-400/50 cursor-pointer text-sm"
                    :class="[
                        {'bg-rose-500' : activeMainLink[1] === subLink.id},
                        ]"
                >
                    <!--Dropdown-->

                    <div
                        v-if="subLink.type === 'dropdown'"
                        class="relative flex justify-between items-center cursor-default"
                    >

                        <div class="flex space-x-2 items-center">

                            <!-- Icon -->
                            <icon v-if="subLink.icon" :icon="subLink.icon"/>

                            <!-- Label -->
                            <span v-text="subLink.label"/>
                        </div>

                        <!--Dropdown Icon-->
                        <div
                            class="px-2 cursor-pointer"
                            @click="activeMainLink[2] = activeMainLink[2] === subLink.id ? null : subLink.id"
                        >
                            <icon
                                v-if="subLink.hasOwnProperty('links')"
                                icon="ellipsis-vertical" size="sm"
                            />
                        </div>
                    </div>

                    <!--Internal Route Link-->
                    <Link
                        v-if="subLink.type === 'route'"
                        :href="route(subLink.link)"
                        class="flex space-x-2 items-center"
                    >

                        <!-- Icon -->
                        <icon v-if="subLink.icon" :icon="subLink.icon"/>

                        <!-- Label -->
                        <span v-text="subLink.label"/>
                    </Link>

                    <!--External Link-->
                    <a
                        v-if="subLink.type === 'simple-link'"
                        class="flex space-x-2 items-center"
                        :href="subLink.link"
                        :target="!!subLink.target"
                        :key="subLink.id"
                    >
                        <!-- Icon -->
                        <icon v-if="subLink.icon" :icon="subLink.icon"/>

                        <!-- Label -->
                        <span v-text="subLink.label"/>
                    </a>

                    <!--Third Menu-->
                    <div
                        v-if="activeMainLink[2] === subLink.id"
                        class="absolute z-50 top-10 -left-0 flex flex-col p-2 space-y-2 w-full rounded-md bg-white bg-slate-700 bg-opacity-[.97]">
                        <template
                            v-for="thirdLink in subLink.links"
                            :key="thirdLink"
                        >

                            <div class="p-1 rounded-md" :class="[
                        {'bg-rose-500' : route().current(thirdLink.link)}
                        ]">
                                <!--Internal Route Link-->
                                <Link
                                    v-if="thirdLink.type === 'route'"
                                    :href="route(thirdLink.link)"
                                    class="flex space-x-2 items-center"
                                >

                                    <!-- Icon -->
                                    <icon v-if="thirdLink.icon" :icon="thirdLink.icon"/>

                                    <!-- Label -->
                                    <span v-text="thirdLink.label"/>
                                </Link>

                                <!--External Link-->
                                <a
                                    v-if="thirdLink.type === 'simple-link'"
                                    class="flex space-x-2 items-center"
                                    :href="thirdLink.link"
                                    :target="!!thirdLink.target"
                                    :key="thirdLink.id"
                                >
                                    <!-- Icon -->
                                    <icon v-if="thirdLink.icon" :icon="thirdLink.icon"/>

                                    <!-- Label -->
                                    <span v-text="thirdLink.label"/>
                                </a>
                            </div>

                        </template>
                    </div>

                </div>
            </template>
        </div>
    </div>
</template>
