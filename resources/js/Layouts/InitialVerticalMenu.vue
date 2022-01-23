<template>
    <div>
        <div
            :class="[
                'ivm',
                menuStyle,
                radiusStyle,
                $slots.hasOwnProperty('subContent') ? 'justify-between':'justify-start'
                ]"
        >
            <div class="ivm-container">
                <template v-for="(item,index) in menu">

                    <Link
                        v-if="item.link"
                        :href="
            item.link != null ?
            item.linkType === 'route' ? route(item.link) :
            item.linkType === 'internal' ? URL(item.link) :
            item.linkType === 'external' ? item.link : '' : ''"

                        :key="index"
                        :active="
                          item.link !== null ?
                          item.linkType === 'route' ? route().current(item.link) :
                          item.linkType === 'internal' ? URL().current(item.link) : '' : ''
                          "
                        :class="[
                        'ivm-item',
                        itemStyle,
                        radiusStyle,
                        menu.length !== index+1 ? '' : item.activeColor ?
                '' :
                  'font-bold'
                        ]"
                    >

                        <icon v-if="item.icon" :icon="item.icon" size="lg"/>
                        {{ item.label }}
                    </Link>

                </template>
            </div>
            <div v-if="$slots.hasOwnProperty('subContent')" class="px-3 text-2xl text-gray-700">
                <slot name="subContent"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import {Link} from '@inertiajs/inertia-vue3';
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export default defineComponent({
    name: 'InitialVerticalMenu',
    components: {
        Link
    },
    props: {
        color: {
            type: String,
            default: 'gray'
        },
        position: {
            type: String,
            require: true,
            default: 'left'
        },
        menu: {
            type: Array,
            require: true
        }
    },
    mixins: [radiusSizeMixin],
    computed: {
        menuStyle() {
            if (this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-300';
            } else if (this.color === 'black') {
                return 'bg-black text-white transition duration-300'
            } else if (this.color === 'white') {
                return 'bg-white border border-gray-300 text-gray-700'
            }
        },
        itemStyle() {
            if (this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-400 text-' + this.color + '-600 hover:text-white border-' + this.color + '-400 transition duration-300 ease-in-out';
            } else if (this.color === 'black') {
                return 'bg-black text-white transition duration-300'
            } else if (this.color === 'white') {
                return 'bg-white border border-gray-300 text-gray-700'
            }
        }
    }
})
</script>
