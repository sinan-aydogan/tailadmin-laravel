<template>
    <div v-click-outside="outside" class="max-w-min select-none">
        <div
            :class="['whitespace-normal font-semibold',triggerStyle]"
            @click="showContent = !showContent">
            <slot name="title"></slot>
            <font-awesome-icon icon="angle-down"/>
        </div>
        <div v-if="showContent" :class="['flex flex-col whitespace-normal z-10',childStyle]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dropdown",
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
    props: {
        color: {
            type: String,
            default: 'white'
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
    },
    computed: {
        /*Color Styles*/
        triggerStyle() {
            if (this.color === 'white') {
                return 'relative flex flex-row justify-between hover:bg-gray-200 hover:border-gray-500 border rounded-md p-2 items-center gap-2 cursor-pointer'
            } else if (this.color === 'black') {
                return 'relative flex flex-row justify-between hover:bg-gray-600 hover:border-gray-500 border rounded-md bg-black text-white p-2 items-center gap-2 cursor-pointer'
            } else {
                return 'relative hover:bg-gray-600 bg-' + this.color + '-500 text-' + this.color + '-50 flex flex-row justify-between border rounded-md p-2 items-center gap-2 cursor-pointer'
            }

        },
        childStyle() {
            if (this.color === 'white') {
                return 'absolute border rounded-md mt-1 overflow-hidden bg-white'
            } else if (this.color === 'black') {
                return 'absolute border rounded-md mt-1 overflow-hidden bg-black text-white'
            } else {
                return 'absolute border rounded-md mt-1 overflow-hidden bg-' + this.color + '-200'
            }
        }
    }
}
</script>

<style scoped>

</style>
