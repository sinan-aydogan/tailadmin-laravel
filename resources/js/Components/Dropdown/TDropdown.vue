<template>
    <div v-click-outside="outside" class="relative max-w-min select-none">

        <!--Trigger as a Title-->
        <div
            v-if="$slots.title"
            :class="[
            'dropdown',
            calculatedTriggerStyle
            ]"
            @click="showContent = !showContent"
        >
            <slot name="title"/>
            <t-chevron-down-icon
                :class="[
                'w-5 h-5 transform duration-300',
                showContent ? 'rotate-90' : 'rotate-0'
                ]"
            />
        </div>

        <!--Trigger as a Rich Item-->
        <div
            class="cursor-pointer"
            v-if="$slots.trigger"
            @click="showContent = !showContent"
        >
            <slot name="trigger"/>
        </div>

        <!--Content-->
        <transition name="drop-down">
            <div>
                <div
                    v-if="showContent && $slots.title"
                    :class="['dropdown-content',
          calculatedContentStyle
          ]">
                    <slot></slot>
                </div>
                <div
                    v-if="showContent && $slots.trigger"
                    :class="['absolute flex flex-col whitespace-normal z-10',
          calculatedContentStyle
          ]"
                >
                    <slot/>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import {dropdownStyleMixin} from "@/Mixins/Styles/dropdownStyleMixin";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon";

export default defineComponent({
    name: "TDropdown",
    components: {TChevronDownIcon},
    mixins: [dropdownStyleMixin],
    directives: {
        'click-outside': {
            bind: function (el, binding, vNode) {
                // Provided expression must evaluate to a function.
                if (typeof binding.value !== 'function') {
                    const compName = vNode.context.name
                    let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
                    if (compName) {
                        warn += `Found in component '${compName}'`
                    }

                    console.warn(warn)
                }
                // Define Handler and cache it on the element
                const bubble = binding.modifiers.bubble
                const handler = (e) => {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e)
                    }
                }
                el.__vueClickOutside__ = handler

                // add Event Listeners
                document.addEventListener('click', handler)
            },

            unbind: function (el) {
                // Remove Event Listeners
                document.removeEventListener('click', el.__vueClickOutside__)
                el.__vueClickOutside__ = null

            }
        }
    },
    data() {
        return {
            showContent: false,
        }
    },
    methods: {
        outside() {
            this.showContent = false
        }
    }
})
</script>

<style scoped>
/*TODO: Leave 75*/
.drop-down-enter-active, .drop-down-leave active {
    transition: all ease-in-out .2s;
}

.drop-down-enter, .drop-down-leave-to {
    transform: scale(.9);
    opacity: 0;
}

.drop-down-leave, drop-down-enter-to {
    transform: scale(1);
    opacity: 1;
}
</style>
