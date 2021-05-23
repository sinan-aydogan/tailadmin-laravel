<template>
    <div class="flex flex-col flex-wrap w-full overflow-hidden shadow-sm collapsible-border">
        <!--Title-->
        <div
            :class="['flex w-full justify-between items-center p-4 font-bold cursor-pointer collapsible-sub-border',
        showPanel && 'border-b border-gray-400',
        color !== 'black'  ? 'bg-'+color+'-300' : 'text-gray-300 bg-'+color,
        color === 'white' && 'text-gray-800 bg-white',
        align === 'right' && 'flex-row-reverse']"
            @click="showPanel = !showPanel">
            <div
                :class="['flex items-center gap-2 w-full whitespace-nowrap',align === 'left' && 'justify-start',align === 'center' && 'justify-center',align === 'right' && 'flex-row-reverse']">
                <slot name="title"/>
            </div>
            <div :class="[
          color !== 'black'  ? 'text-'+color+'-800' : 'text-gray-300 bg-'+color,
          color === 'white' && 'text-gray-800',
      ]">
                <font-awesome-icon icon="angle-down" size="lg"/>
            </div>
        </div>
        <!--Content-->
        <div v-if="showPanel" :class="['p-4  whitespace-nowrap bg-'+color+'-50']">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "CollapsibleItem",
    props: {
        color: {
            type: String,
            default: 'gray'
        },
        align: {
            type: String,
            default: 'left'
        }
    },
    data() {
        return {
            showPanel: false
        }
    },
}
</script>

<style scoped>
.collapsible-border .collapsible-sub-border:not(:last-child) {
}
</style>
