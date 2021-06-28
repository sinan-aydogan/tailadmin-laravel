<template>
    <!--TODO: THE EFFECT ADDED-->
    <div class="relative select-none" v-click-outside="outside">
        <!--Main Content-->
        <div
            :class="[
                $slots.mainContent[0].text.length>0 && 'border-b-2 border-dotted inline-flex whitespace-normal cursor-pointer rounded-md hover:text-blue-500 hover:border-blue-500'
                ]"
            @click="show = !show"
        >
            <slot name="mainContent"></slot>
        </div>
        <!--Second Content Container-->
        <div
            v-if="show"
            :class="[
                'absolute z-10 w-44 m-2',
                positionStyle[position].box
            ]"
        >
            <!--Arrow-->
            <div :class="[
                positionStyle[position].arrow,
                $slots.secondTitle && position !== 'top' ? 'bg-gray-300' : 'bg-white',
                !$slots.secondTitle && 'bg-white'
                ]"></div>
            <!--Title-->
            <div v-if="$slots.secondTitle" class="relative bg-gray-300 px-2 py-1 whitespace-normal z-50 rounded-t-md font-semibold w-44">
                <slot name="secondTitle"></slot>
            </div>
            <!--Content-->
            <div :class="[
                'bg-white px-2 py-1 whitespace-normal z-50 border',
                $slots.secondTitle ? 'rounded-b-md' : 'rounded-md'
                ]">
                <slot name="secondContent"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TPopover",
    props: {
        position: {
            type: String,
            default: 'bottom'
        }
    },
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
            show: false,
            positionStyle: {
                'left': {
                    arrow: 'absolute w-2 h-2 border-r border-t transform -right-1 top-4 rotate-45 z-10',
                    box: 'right-full -top-4'
                },
                'top': {
                    arrow: 'absolute w-2 h-2 bg-white border-b border-r transform left-4 -bottom-1 rotate-45 z-10',
                    box: 'left-0 bottom-6'
                },
                'bottom': {
                    arrow: 'absolute w-2 h-2 border-l border-t transform left-4 -top-1 rotate-45 z-10',
                    box: 'top-6'
                },
                'right': {
                    arrow: 'absolute w-2 h-2 border-l border-b transform -left-1 top-4 rotate-45 z-10',
                    box: 'left-full -top-4'
                }
            }
        }
    },
    computed: {},
    methods: {
        outside() {
            this.show = false
        }
    },
    mounted() {
        console.log(this.$slots.mainContent[0].text)
    }
}
</script>

<style scoped>

</style>
