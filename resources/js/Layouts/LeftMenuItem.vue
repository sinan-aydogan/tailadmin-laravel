<template>
    <div>
        <!--Dropdown Item-->
        <div v-if="item.type === 'dropdown'"
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
                v-if="item.items && !showingSubMenu && showingLeftMenu === 'true'"
                class="mr-1"
                icon="angle-down"/>
            <font-awesome-icon
                v-if="item.items && showingSubMenu && showingLeftMenu === 'true'"
                class="mr-1"
                icon="angle-left"/>
        </div>
        <!-- Root Item-->
        <inertia-link
            v-if="item.link"
            :href="
            item.link != null ?
            item.linkType === 'route' ? route(item.link) :
            item.linkType === 'internal' ? URL(item.link) :
            item.linkType === 'external' ? item.link : '' : ''"
            :active="
                          item.link !== null ?
                          item.linkType === 'route' ? route().current(item.link) :
                          item.linkType === 'internal' ? URL().current(item.link) : '' : ''
                          "
            :class="[
                classes,
                'left-menu-item',{
                'justify-start': showingLeftMenu === 'true',
                'justify-center': showingLeftMenu === 'false',
                'bg-white text-gray-700 rounded-md': showingSubMenu,
                'text-white hover:text-gray-700 hover:bg-gray-100 rounded-md': !showingSubMenu,
                }]">
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
            showingSubMenu: this.searchActive(),
        };
    },
    computed: {
        classes() {
            return this.active
                ? 'flex items-center py-3 bg-blue-500 text-white hover:text-gray-100 hover:bg-gray-700 border-b-2 border-indigo-400 font-bold leading-5 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
                : 'flex border-b border-gray-600 bg-gray-700 items-center py-3 text-gray-300 hover:text-gray-700 hover:bg-gray-200 focus:text-gray-400 focus:bg-gray-700 transition duration-150 ease-in-out shadow-xl'
        }
    },
    methods: {
        searchActive(){
            if(this.item.items){
                for(let child of this.item.items){
                    if(route().current(child.link)){
                        return true;
                        console.log('Aktif öğe'+this.item.link)
                    }
                }
            }
            return false
            console.log('aktif yok')
        },
    }
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
