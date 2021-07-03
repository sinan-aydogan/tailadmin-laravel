<template>
    <div
        :class="[
            'flex px-1 py-0.5 items-center justify-center max-w-min max-h-min whitespace-nowrap gap-2 select-none',
            collapsible && 'cursor-pointer',
            colors[color].badgeStyle,
            radiusStyle
        ]"
        @click="toggle"
    >
        <div class="px-2" v-if="$slots.icon">
            <slot name="icon" @click="toggle"></slot>
        </div>
        <transition name="fade">
            <div
                v-if="showTitle || !collapsible"
                class="flex px-1 justify-between items-center gap-1 overflow-hidden text-xs"
            >
                <slot></slot>
                <div
                    v-if="value"
                    class="flex px-1 my-1 text-2xs items-center justify-center border rounded-full"
                    >{{ value }}</div
                >
            </div>
        </transition>
    </div>
</template>

<script>
import { radiusSizeMixin } from "@/Mixins/radiusSizeMixin";

export default {
    name: "TBadge",
    mixins: [radiusSizeMixin],
    props: {
        color: {
            type: String,
            required: false,
            default: "blue"
        },
        value: {
            type: String,
            required: false
        },
        collapsible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showTitle: false,
            colors: {
                'red': {
                    badgeStyle: "bg-red-500 text-white"
                },
                'blue': {
                    badgeStyle: "bg-blue-500 text-white"
                },
                'green': {
                    badgeStyle: "bg-green-500 text-white"
                },
                'yellow': {
                    badgeStyle: "bg-yellow-500 text-white"
                },
                'indigo': {
                    badgeStyle: "bg-indigo-500 text-white"
                },
                'purple': {
                    badgeStyle: "bg-purple-500 text-white"
                },
                'pink': {
                    badgeStyle: "bg-pink-500 text-white"
                },
                'white': {
                    badgeStyle: "bg-white border border-gray-300 text-gray-700"
                },
                'gray': {
                    badgeStyle: "bg-gray-500 text-gray-100"
                },
                'black': {
                    badgeStyle: "bg-black text-white"
                },
                'light-red': {
                    badgeStyle: "bg-red-50 border border-red-500 text-red-600"
                },
                'light-blue': {
                    badgeStyle:
                        "bg-blue-50 border border-blue-500 text-blue-600"
                },
                'light-green': {
                    badgeStyle:
                        "bg-green-50 border border-green-500 text-green-600"
                },
                'light-yellow': {
                    badgeStyle:
                        "bg-yellow-50 border border-yellow-500 text-yellow-600"
                },
                'light-indigo': {
                    badgeStyle:
                        "bg-indigo-50 border border-indigo-500 text-indigo-600"
                },
                'light-purple': {
                    badgeStyle:
                        "bg-purple-50 border border-purple-500 text-purple-600"
                },
                'light-pink': {
                    badgeStyle:
                        "bg-pink-50 border border-pink-500 text-pink-600"
                },
                'light-gray': {
                    badgeStyle:
                        "bg-gray-50 border border-gray-500 text-gray-600"
                }
            }
        };
    },
    methods: {
        toggle() {
            this.showTitle = !this.showTitle;
        }
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
    max-width: 0;
}
.fade-enter-to,
.fade-leave {
    opacity: 1;
    max-width: 250px;
}
</style>
