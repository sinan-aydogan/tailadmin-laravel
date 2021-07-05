<template>
    <div>
        <!--Dropdown Item-->
        <div v-if="item.type === 'dropdown'"
             @click="
             showingLeftMenu === 'false' ?
             $emit('showLeftMenuEmit') :
             showingSubMenu = !showingSubMenu ;
             showingLeftMenu === 'false' &&
             showingSubMenu === false ? showingSubMenu = true :''
             "
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
          <transition  name="left-menu">
            <div class="w-full flex flex-row items-center" v-if="showingLeftMenu === 'true'">
              <div

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
          </transition>
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
                'text-white hover:text-gray-700 hover:bg-gray-100 rounded-md ': !showingSubMenu,
                }]">
            <div>
                <font-awesome-icon v-if="item.icon" :icon="item.icon"/>
            </div>
            <!-- Label -->
          <transition name="left-menu">
            <div
                v-if="showingLeftMenu === 'true'"
                :class="['w-full',item.icon ? 'ml-3':'']">
                {{ item.label }}
            </div>
          </transition>
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
          let style;
          if(route().current(this.item.link)){
            style = 'bg-white bg-opacity-10 text-white font-semibold border border-opacity-70 border-blue-500'
          }else{
            style = 'text-gray-300 bg-opacity-10 hover:bg-gray-200  hover:text-white'
          }
          return style
            }
    },
    methods: {
        searchActive(){
            if(this.item.items){
                for(let child of this.item.items){
                    if(route().current(child.link)){
                        return true;
                    }
                }
            }
            return false
        },
    }
}
</script>

<style>
/*Sub Menu Opening Effect*/
.fade-enter-active, .fade-leave-active{
  transition: all .75s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  max-height: 0;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
  max-height: 700px;
}
/*Left Menu Minize Effect*/
.left-menu-enter-active, .left-menu-leave-active {
  transition: ease-in-out all .75s;
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
