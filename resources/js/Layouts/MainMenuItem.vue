<template>
    <!--Root Wrapper-->
    <div
        class="relative w-full font-sans text-slate-100 p-2"
        :class="[
            generatedRadius.rootLinkClasses.activeBg,
            (selectedLink.includes(item.id) && item['items'] &&!foldMainMenu) && mainMenuConf.rootLinkClasses.activeBg,
             ]"
    >
        <!--Root Item: Dropdown-->
        <div
            v-if="item.type === 'dropdown' && item.visibleFor !== false"
            @click="select([item.id]); foldMainMenu && $emit('updateMainMenuStatus', true)"
            class="flex justify-between items-center px-2 rounded cursor-pointer overflow-hidden transition-color duration-300 w-full"
            :class="[
                (selectedLink.includes(item.id) && !foldMainMenu) || activeMenus.root === item.id ?
                [mainMenuConf.rootLinkClasses.active, generatedRadius.rootLinkClasses.active] :
                [mainMenuConf.rootLinkClasses.normal, generatedRadius.rootLinkClasses.normal],
                !foldMainMenu ? 'h-12 space-x-2' : 'h-14 '
            ]"
        >

            <div
                class="flex justify-between items-center w-full"
                :class="{'space-x-2' : !foldMainMenu}"
            >
                <!--Icon-->
                <div class="flex justify-center items-center w-8 h-8">
                    <icon v-if="item['icon']" :icon="item.icon"/>
                </div>
                <!--Label-->
                <span v-text="item.label"
                      class="flex whitespace-nowrap transition-size-medium"
                      :class="[
                              !foldMainMenu ? 'w-show' : 'w-hide',
                              'transition-size-medium'
                              ]"
                ></span>
            </div>
            <div>
                <icon
                    v-if="!foldMainMenu"
                    icon="chevron-down" size="sm"
                    :class="[selectedLink.includes(item.id) ? 'rotate-90' : 'rotate-0']"
                    class="mr-1 transition-size-medium"
                />
            </div>
        </div>
        <!--Root Item: Route-->
        <Link
            v-else-if="item.type === 'route' && item.visibleFor !== false"
            :href="route(item.link)"
            @click="select([item.id]); foldMainMenu && $emit('updateMainMenuStatus', true)"
            class="flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300"
            :class="[
                selectedLink.includes(item.id) || activeMenus.root === item.id ?
                [mainMenuConf.rootLinkClasses.active, generatedRadius.rootLinkClasses.active] :
                [mainMenuConf.rootLinkClasses.normal, generatedRadius.rootLinkClasses.normal],
                !foldMainMenu ? 'h-12 space-x-2' : 'h-14 '
            ]"
        >
            <div
                class="flex items-center"
                :class="!foldMainMenu && 'space-x-2'"
            >
                <!--Icon-->
                <div class="flex justify-center items-center w-8 h-8">
                    <icon v-if="item['icon']" :icon="item.icon"/>
                </div>
                <!--Label-->
                <span v-text="item.label"
                      class="whitespace-nowrap transition-size-medium"
                      :class="[
                              !foldMainMenu ? 'w-show' : 'w-hide',
                              'transition-size-medium'
                              ]"
                ></span>
            </div>
        </Link>
        <!--Root Item: Link-->
        <a
            v-else-if="item.type === 'simple-link' && item.visibleFor !== false"
            :href="item.link"
            :target="item.target"
            class="flex justify-between items-center px-3 rounded cursor-pointer w-full overflow-hidden transition-color duration-300"
            :class="[
                [mainMenuConf.rootLinkClasses.normal, generatedRadius.rootLinkClasses.normal],
                !foldMainMenu ? 'h-12 space-x-2' : 'h-14 '
                ]"
        >
            <div
                class="flex items-center"
                :class="!foldMainMenu && 'space-x-2'"
            >
                <!--Icon-->
                <div class="flex justify-center items-center w-8 h-8">
                    <icon v-if="item['icon']" :icon="item.icon"/>
                </div>
                <!--Label-->
                <span v-text="item.label"
                      class="whitespace-nowrap transition-size-medium"
                      :class="[
                              !foldMainMenu ? 'w-show' : 'w-hide',
                              'transition-size-medium'
                              ]"
                ></span>
            </div>
        </a>
        <!--Secondly Item-->
        <transition name="subMenuTransition">
            <div
                v-if="item.items && (selectedLink.includes(item.id)) && !foldMainMenu"
                class="flex flex-col py-2 space-y-2 overflow-hidden"
            >
                <template v-for="subItem in item.items" :key="subItem">

                    <!--Secondly Item: Dropdown-->
                    <div
                        :key="subItem.id"
                        v-if="subItem.type === 'dropdown' && subItem.visibleFor !== false"
                        @click="select([item.id, subItem.id])"
                        class="flex justify-between items-center space-x-2 px-3 py-2 cursor-pointer rounded transition-color duration-300"
                        :class="[
                            selectedLink.includes(subItem.id) || activeMenus.second === subItem.id ?
                            [mainMenuConf.secondLinkClasses.active, generatedRadius.secondLinkClasses.active] :
                            [mainMenuConf.secondLinkClasses.normal, generatedRadius.secondLinkClasses.normal]
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
                            [mainMenuConf.secondLinkClasses.active, generatedRadius.secondLinkClasses.active] :
                            [mainMenuConf.secondLinkClasses.normal, generatedRadius.secondLinkClasses.normal]
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
                            [mainMenuConf.secondLinkClasses.normal, generatedRadius.secondLinkClasses.normal],
                            !foldMainMenu ? 'h-12 space-x-2' : 'h-14 '
                            ]"
                    >
                        <div
                            class="flex items-center"
                            :class="!foldMainMenu && 'space-x-2'"
                        >
                            <!--Icon-->
                            <div class="flex justify-center items-center w-8 h-8">
                                <icon v-if="subItem['icon']" :icon="subItem.icon"/>
                            </div>
                            <!--Label-->
                            <span v-text="subItem.label"
                                  class="whitespace-nowrap transition-size-medium"
                                  :class="[
                              !foldMainMenu ? 'w-show' : 'w-hide',
                              'transition-size-medium'
                              ]"
                            ></span>
                        </div>
                    </a>

                    <!--Third Item-->
                    <transition name="subMenuTransition">
                        <div
                            v-if="subItem.items && selectedLink.includes(subItem.id) || subItem.items && activeMenus.second === subItem.id"
                            class="flex p-2"
                            :class="[
                                generatedRadius.thirdLinkClasses.activeBg,
                                mainMenuConf.thirdLinkClasses.activeBg
                                ]"
                        >
                            <div class="flex flex-col space-y-4 w-full">
                                <template v-for="thirdItem in subItem.items" :key="thirdItem">
                                    <!--Third: Route-->
                                    <Link :href="route(thirdItem.link)"
                                          v-if="thirdItem.type === 'route' && thirdItem.visibleFor !== false"
                                          class="flex items-center space-x-2 px-3 cursor-pointer w-full"
                                          :class="[
                                              selectedLink.includes(thirdItem.id) || activeMenus.third === thirdItem.id ?
                                              [mainMenuConf.thirdLinkClasses.active, generatedRadius.thirdLinkClasses.active] :
                                              [mainMenuConf.thirdLinkClasses.normal, generatedRadius.thirdLinkClasses.normal],
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
                                        class="flex items-center space-x-2 px-3 cursor-pointer w-full"                                        :class="[
                                            [mainMenuConf.thirdLinkClasses.normal, generatedRadius.thirdLinkClasses.normal],
                                            !foldMainMenu ? 'h-12 space-x-2' : 'h-14 '
                                            ]"
                                    >
                                        <div
                                            class="flex items-center"
                                            :class="!foldMainMenu && 'space-x-2'"
                                        >
                                            <!--Icon-->
                                            <div class="flex justify-center items-center w-8 h-8">
                                                <icon v-if="thirdItem['icon']" :icon="thirdItem.icon"/>
                                            </div>
                                            <!--Label-->
                                            <span v-text="thirdItem.label"
                                                  class="whitespace-nowrap transition-size-medium"
                                                  :class="[
                                                      !foldMainMenu ? 'w-show' : 'w-hide',
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

<script>
/*Main functions*/
import {inject, onBeforeMount, toRefs, ref, computed, reactive} from "vue";
import {Link} from '@inertiajs/inertia-vue3';

/*Sources*/
import {appConf, mainMenuConf} from "@/config";

/*Import FontAwesomeIcon*/
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";

library.add(faChevronDown)

export default {
    name: "MainMenuItem",
    props: {
        item: {
            type: Object,
            default: null
        }
    },
    components: {
        Link
    },
    emits: ['selected', 'updateMainMenuStatus'],
    setup(props, {emit}) {
        /*Menu*/
        const {item} = toRefs(props)
        const foldMainMenu = inject("foldMainMenu");
        const showMainMenu = inject("showMainMenu");
        const selectedLink = inject('selectedLink');
        const activeMenus = reactive({
            root: null,
            second: null,
            third: null
        });

        /*Select Active Link*/
        const select = (selection) => {

            if (selectedLink.value[0] === selection[0] && selection.length === 1 && !foldMainMenu.value) {
                emit('selected', [])
            } else if (selectedLink.value[0] === selection[0] && selectedLink.value[1] === selection[1] && selection.length === 2) {
                emit('selected', selection.splice(0, 1))
            } else {
                emit('selected', selection)
            }

        }

        /*Search Active Link*/
        onBeforeMount(() => {
            if (item.value["items"]) {
                for (let child of item.value["items"]) {

                    /*Check Second Level*/
                    if (route().current(child.link) && child.link !== null && !child["items"]) {
                        activeMenus.root = item.value.id
                        activeMenus.second = child.id
                        select([item.value.id, child.id])
                    }

                    /*Check Third Level*/
                    if (child["items"]) {
                        for (let third of child["items"]) {
                            if (route().current(third.link) && third.link !== null) {
                                activeMenus.root = item.value.id
                                activeMenus.second = child.id
                                activeMenus.third = third.id
                                select([item.value.id, child.id, third.id])
                            }
                        }
                    }

                }
            } else {

                /*Check First Level*/
                if (route().current(item.value.link) && item.value.link !== null) {
                    activeMenus.root = item.value.id
                    select([item.value.id])
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
            let comparedStyle = `radius-${mainMenuConf.menuRadius ? mainMenuConf.menuRadius : appConf.radius}`


            let mainKeys = ['rootLinkClasses', 'secondLinkClasses', 'thirdLinkClasses']
            let subKeys = ['activeBg', 'normal', 'active']


            mainKeys.forEach((item) => {

                subKeys.forEach((subItem) => {

                    mainMenuConf[item][subItem].forEach(i => {

                        if (!i.match(/(rounded|radius)/g)) {
                            style[item][subItem] = comparedStyle
                        } else {
                            style[item][subItem] = null
                        }

                    })

                })
            })

            return style

        })

        return {
            appConf,
            mainMenuConf,
            foldMainMenu,
            showMainMenu,
            selectedLink,
            activeMenus,
            generatedRadius,
            select
        }
    }
}
</script>

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
