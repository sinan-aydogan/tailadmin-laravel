<template>
    <!-- Item Container-->
    <Link
        v-if="item.type === 'route' && item.link"
        :href="
            item.link != null ?
            item.type === 'route' ? route(item.link) :
            item.type === 'internal' ? URL(item.link) : '' : ''"
        class="left-menu-sub-link"
        :class="[
      route().current(this.item.link) ? 'left-menu-sub-link-active' : 'left-menu-sub-link-passive',
    ]"
    >
        <!-- Label -->
        <span
            class="left-menu-label-wrapper"
            :class="[!foldLeftMenu ? 'w-show' : 'w-hide']"
            v-text="tm(item.label ? item.label : item.label)"
        />
        <!-- Icon -->
        <span class="left-menu-icon">
      <icon v-if="item.icon" :icon="item.icon"/>
    </span>
    </Link>
    <a
        v-else
        :href="item.link ? item.link : '#'"
        :target="item.target ? item.target : '_blank'"
        class="left-menu-sub-link left-menu-sub-link-passive"
    >
        <!-- Label -->
        <span
            class="left-menu-label-wrapper"
            :class="[!foldLeftMenu ? 'w-show' : 'w-hide']"
            v-text="tm(item.label ? item.label : item.labelitem)"
        />

        <!-- Icon -->
        <span class="left-menu-icon">
      <icon v-if="item.icon" :icon="item.icon"/>
    </span>
    </a>
</template>

<script>
/*Main Functions*/
import {defineComponent, inject} from "vue";
import {Link} from "@inertiajs/inertia-vue3";

export default defineComponent({
    name: "LeftMenuSubItem",
    components: {
        Link
    },
    props: {
        item: {
            type: [Object, Array],
            default() {
                return []
            }
        }
    },
    setup() {
        const foldLeftMenu = inject("foldLeftMenu");

        /*Multi Language*/
        const tm = inject('tm');

        return {
            foldLeftMenu,
            /*Multi Language*/
            tm
        };
    }
});
</script>
