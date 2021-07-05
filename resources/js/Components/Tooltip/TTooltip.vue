<template>
    <div class="relative select-none">
        <!--Main Content-->
        <div
            :class="[
                typeof $slots.mainContent[0].text !== 'undefined' ? 'border-b-2 border-dotted inline-flex whitespace-normal cursor-pointer' :'whitespace-normal'
                ]"
            @mouseenter="show = true"
            @mouseleave="show = false"
        >
            <slot name="mainContent"></slot>
        </div>
        <!--Second Content Container-->
        <div
            v-if="show"
            :class="[
                'absolute z-10 w-44 m-2 filter drop-shadow',
                positionStyle[position].box
            ]"
        >
            <!--Arrow-->
            <div :class="[
                positionStyle[position].arrow,
                'bg-white'
                ]"></div>
            <!--Content-->
            <div :class="[
                'bg-white text-gray-700 px-2 py-1 whitespace-normal z-50 border rounded-md',
                ]">
                <slot name="secondContent"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TTooltip",
    props: {
        position: {
            type: String,
            default: 'bottom'
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
    }
}
</script>

<style scoped>

</style>
