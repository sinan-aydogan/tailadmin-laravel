<script setup>
/*Functions*/
import {inject, onBeforeMount, defineEmits, defineProps, computed, reactive} from "vue";
import {Link} from '@inertiajs/inertia-vue3';
import {menuStatus, updateMenuStatus} from "@/Functions/menuTrigger";


/*Sources*/
import {appConf, mainMenuConf} from "@/config";

/*Variables*/
const emit = defineEmits(['selected'])
const props = defineProps({
    link: {
        type: Object,
        default: null
    }
})

const selectedLink = inject('selectedLink');
const activeMenus = reactive({
    root: null,
    second: null,
    third: null
});

/*Select Active Link*/
const select = (selection) => {

    if (selectedLink.value[0] === selection[0] && selection.length === 1 && menuStatus !== 'opened') {
        emit('selected', [])
    } else if (selectedLink.value[0] === selection[0] && selectedLink.value[1] === selection[1] && selection.length === 2) {
        emit('selected', selection.splice(0, 1))
    } else {
        emit('selected', selection)
    }

}

/*Search Active Link*/
onBeforeMount(() => {
    if (props.link["links"]) {
        for (let child of props.link["links"]) {

            /*Check Second Level*/
            if (route().current(child.link) && child.link !== null && !child["links"]) {
                activeMenus.root = props.link.id
                activeMenus.second = child.id
                select([props.link.id, child.id])
            }

            /*Check Third Level*/
            if (child["links"]) {
                for (let third of child["links"]) {
                    if (route().current(third.link) && third.link !== null) {
                        activeMenus.root = props.link.id
                        activeMenus.second = child.id
                        activeMenus.third = third.id
                        select([props.link.id, child.id, third.id])
                    }
                }
            }

        }
    } else {

        /*Check First Level*/
        if (route().current(props.link.link) && props.link.link !== null) {
            activeMenus.root = props.link.id
            select([props.link.id])
        }

    }
});

/*Radius Check*/
const generatedRadius = computed(() => {

    let style = {
        rootLinkClasses: {
            activeBg: null,
            normal: null,
            active: null,
        },
        secondLinkClasses: {
            activeBg: null,
            normal: null,
            active: null,
        },
        thirdLinkClasses: {
            activeBg: null,
            normal: null,
            active: null,
        },
    };
    let comparedStyle = `radius-${mainMenuConf.umay.menuRadius ? mainMenuConf.umay.menuRadius : appConf.radius}`


    let mainKeys = ['rootLinkClasses', 'secondLinkClasses', 'thirdLinkClasses']
    let subKeys = ['activeBg', 'normal', 'active']


    mainKeys.forEach((link) => {

        subKeys.forEach((subLink) => {

            mainMenuConf.umay[link][subLink].forEach(i => {

                if (!i.match(/(rounded|radius)/g)) {
                    style[link][subLink] = comparedStyle
                } else {
                    style[link][subLink] = null
                }

            })

        })
    })

    return style

})

</script>
<template>
    <!--Root Wrapper-->
    <div
        class="relative w-full font-sans text-slate-100 p-2"
        :class="[
            generatedRadius.rootLinkClasses.activeBg,
            (selectedLink.includes(link.id) && link['links'] &&menuStatus !== 'closed') && mainMenuConf.umay.rootLinkClasses.activeBg,
             ]"
    >
        <!--Root Item: Dropdown-->
        <div
            v-if="link.type === 'dropdown' && link.visibleFor !== false"
            @click="select([link.id]); menuStatus === 'closed' && updateMenuStatus()"
            class="flex justify-between items-center px-2 rounded cursor-pointer overflow-hidden transition-color duration-300 w-full"
            :class="[
                (selectedLink.includes(link.id) && menuStatus !== 'closed') || activeMenus.root === link.id ?
                [mainMenuConf.umay.rootLinkClasses.active, generatedRadius.rootLinkClasses.active] :
                [mainMenuConf.umay.rootLinkClasses.normal, generatedRadius.rootLinkClasses.normal],
                menuStatus !== 'closed' ? 'h-12 space-x-2' : 'h-14 '
            ]"
        >

            <div
                class="flex items-center w-full"
                :class="{
                'space-x-2' : menuStatus !== 'closed',
                'justify-between' : menuStatus !== 'closed',
                'justify-center' : menuStatus === 'closed',
            }"
            >
                <!--Icon-->
                <div class="flex justify-center items-center w-8 h-8">
                    <icon v-if="link['icon']" :icon="link.icon"/>
                </div>
                <!--Label-->
                <span v-text="link.label"
                      class="flex whitespace-nowrap transition-size-medium"
                      :class="[
                              menuStatus !== 'closed' ? 'w-show' : 'w-hide',
                              'transition-size-medium'
                              ]"
                ></span>
            </div>
            <div>
                <icon
                    v-if="menuStatus !== 'closed'"
                    icon="chevron-down" size="sm"
                    :class="[selectedLink.includes(link.id) ? 'rotate-90' : 'rotate-0']"
                    class="mr-1 transition-size-medium"
                />
            </div>
        </div>
        <!--Root Item: Route-->
        <Link
            v-else-if="link.type === 'route' && link.visibleFor !== false"
            :href="route(link.link)"
            @click="select([link.id]); menuStatus === 'closed' && updateMenuStatus()"
            class="flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300"
            :class="[
                selectedLink.includes(link.id) || activeMenus.root === link.id ?
                [mainMenuConf.umay.rootLinkClasses.active, generatedRadius.rootLinkClasses.active] :
                [mainMenuConf.umay.rootLinkClasses.normal, generatedRadius.rootLinkClasses.normal],
                menuStatus !== 'closed' ? 'h-12 space-x-2' : 'h-14 '
            ]"
        >
            <div
                class="flex items-center"
                :class="menuStatus !== 'closed' && 'space-x-2'"
            >
                <!--Icon-->
                <div class="flex justify-center items-center w-8 h-8">
                    <icon v-if="link['icon']" :icon="link.icon"/>
                </div>
                <!--Label-->
                <span v-text="link.label"
                      class="whitespace-nowrap transition-size-medium"
                      :class="[
                              menuStatus !== 'closed' ? 'w-show' : 'w-hide',
                              'transition-size-medium'
                              ]"
                ></span>
            </div>
        </Link>
        <!--Root Item: Link-->
        <a
            v-else-if="link.type === 'simple-link' && link.visibleFor !== false"
            :href="link.link"
            :target="link.target"
            class="flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300"
            :class="[
                [mainMenuConf.umay.rootLinkClasses.normal, generatedRadius.rootLinkClasses.normal],
                menuStatus !== 'closed' ? 'h-12 space-x-2' : 'h-14 '
                ]"
        >
            <div
                class="flex items-center"
                :class="menuStatus !== 'closed' && 'space-x-2'"
            >
                <!--Icon-->
                <div class="flex justify-center items-center w-8 h-8">
                    <icon v-if="link['icon']" :icon="link.icon"/>
                </div>
                <!--Label-->
                <span v-text="link.label"
                      class="whitespace-nowrap transition-size-medium"
                      :class="[
                              menuStatus !== 'closed' ? 'w-show' : 'w-hide',
                              'transition-size-medium'
                              ]"
                ></span>
            </div>
        </a>
        <!--Secondly Item-->
        <transition name="subMenuTransition">
            <div
                v-if="link.links && (selectedLink.includes(link.id)) && menuStatus !== 'closed'"
                class="flex flex-col py-2 space-y-2 overflow-hidden"
            >
                <template v-for="subItem in link.links" :key="subItem">

                    <!--Secondly Item: Dropdown-->
                    <div
                        :key="subItem.id"
                        v-if="subItem.type === 'dropdown' && subItem.visibleFor !== false"
                        @click="select([link.id, subItem.id])"
                        class="flex justify-between items-center space-x-2 px-3 py-2 cursor-pointer rounded transition-color duration-300"
                        :class="[
                            selectedLink.includes(subItem.id) || activeMenus.second === subItem.id ?
                            [mainMenuConf.umay.secondLinkClasses.active, generatedRadius.secondLinkClasses.active] :
                            [mainMenuConf.umay.secondLinkClasses.normal, generatedRadius.secondLinkClasses.normal]
                            ]"
                    >
                        <div class="flex space-x-2 items-center">
                            <icon v-if="subItem['icon']" :icon="subItem.icon"/>
                            <span v-text="subItem.label"></span>
                        </div>
                        <icon
                            icon="chevron-down"
                            size="sm"
                            :class="[selectedLink.includes(subItem.id) ? 'rotate-90' : 'rotate-0']"
                            class="mr-1 transition-size-medium"
                        />
                    </div>

                    <!--Secondly Item: Route-->
                    <Link
                        v-else-if="subItem.type === 'route' && subItem.visibleFor !== false"
                        :href="route(subItem.link)"
                        class="flex justify-between items-center space-x-2 px-3 py-2 cursor-pointer rounded transition-color duration-300"
                        :class="[
                            selectedLink.includes(subItem.id) || activeMenus.second === subItem.id ?
                            [mainMenuConf.umay.secondLinkClasses.active, generatedRadius.secondLinkClasses.active] :
                            [mainMenuConf.umay.secondLinkClasses.normal, generatedRadius.secondLinkClasses.normal]
                            ]"
                    >
                        <div class="flex justify-between space-x-2 items-center w-full">
                            <span v-text="subItem.label"></span>
                            <icon v-if="subItem['icon']" :icon="subItem.icon"/>
                        </div>
                    </Link>

                    <!--Secondly Item: Link-->
                    <a
                        v-else-if="subItem.type === 'simple-link' && subItem.visibleFor !== false"
                        :href="subItem.link"
                        :target="subItem.target"
                        class="flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300"
                        :class="[
                            [mainMenuConf.umay.secondLinkClasses.normal, generatedRadius.secondLinkClasses.normal],
                            menuStatus !== 'closed' ? 'h-12 space-x-2' : 'h-14 '
                            ]"
                    >
                        <div
                            class="flex items-center"
                            :class="menuStatus !== 'closed' && 'space-x-2'"
                        >
                            <!--Icon-->
                            <div class="flex justify-center items-center w-8 h-8">
                                <icon v-if="subItem['icon']" :icon="subItem.icon"/>
                            </div>
                            <!--Label-->
                            <span v-text="subItem.label"
                                  class="whitespace-nowrap transition-size-medium"
                                  :class="[
                              menuStatus !== 'closed' ? 'w-show' : 'w-hide',
                              'transition-size-medium'
                              ]"
                            ></span>
                        </div>
                    </a>

                    <!--Third Item-->
                    <transition name="subMenuTransition">
                        <div
                            v-if="subItem.links && selectedLink.includes(subItem.id) || subItem.links && activeMenus.second === subItem.id"
                            class="flex p-2"
                            :class="[
                                generatedRadius.thirdLinkClasses.activeBg,
                                mainMenuConf.umay.thirdLinkClasses.activeBg
                                ]"
                        >
                            <div class="flex flex-col space-y-4 w-full">
                                <template v-for="thirdItem in subItem.links" :key="thirdItem">
                                    <!--Third: Route-->
                                    <Link :href="route(thirdItem.link)"
                                          v-if="thirdItem.type === 'route' && thirdItem.visibleFor !== false"
                                          class="flex items-center space-x-2 px-3 cursor-pointer w-full"
                                          :class="[
                                              selectedLink.includes(thirdItem.id) || activeMenus.third === thirdItem.id ?
                                              [mainMenuConf.umay.thirdLinkClasses.active, generatedRadius.thirdLinkClasses.active] :
                                              [mainMenuConf.umay.thirdLinkClasses.normal, generatedRadius.thirdLinkClasses.normal],
                                              ]"
                                    >
                                        <div class="flex justify-between space-x-2 py-2 items-center w-full">
                                            <span v-text="thirdItem.label"></span>
                                            <icon v-if="thirdItem['icon']" :icon="thirdItem.icon"/>
                                        </div>
                                    </Link>

                                    <!--Third: Link-->
                                    <a
                                        v-if="thirdItem.type === 'simple-link' && thirdItem.visibleFor !== false"
                                        :href="thirdItem.link"
                                        :target="thirdItem.target"
                                        class="flex items-center space-x-2 px-3 cursor-pointer w-full" :class="[
                                            [mainMenuConf.umay.thirdLinkClasses.normal, generatedRadius.thirdLinkClasses.normal],
                                            menuStatus !== 'closed' ? 'h-12 space-x-2' : 'h-14 '
                                            ]"
                                    >
                                        <div
                                            class="flex items-center"
                                            :class="menuStatus !== 'closed' && 'space-x-2'"
                                        >
                                            <!--Icon-->
                                            <div class="flex justify-center items-center w-8 h-8">
                                                <icon v-if="thirdItem['icon']" :icon="thirdItem.icon"/>
                                            </div>
                                            <!--Label-->
                                            <span v-text="thirdItem.label"
                                                  class="whitespace-nowrap transition-size-medium"
                                                  :class="[
                                                      menuStatus !== 'closed' ? 'w-show' : 'w-hide',
                                                      'transition-size-medium'
                                                      ]"
                                            ></span>
                                        </div>
                                    </a>
                                </template>
                            </div>
                        </div>
                    </transition>
                </template>
            </div>
        </transition>
    </div>
</template>


<style scoped>
.subMenuTransition-enter-active, .subMenuTransition-leave-active {
    transition: max-height 300ms cubic-bezier(.17, .67, .83, .67),
    opacity 300ms cubic-bezier(.17, .67, .83, .67),
    transform 300ms cubic-bezier(.17, .67, .83, .67);
}

.subMenuTransition-enter-from, .subMenuTransition-leave-to {
    transform: translateY(-1rem);
    max-height: 0;
    opacity: 0;
}

.subMenuTransition-leave-from, .subMenuTransition-enter-to {
    max-height: 75vh;
    opacity: 1;
}

</style>
