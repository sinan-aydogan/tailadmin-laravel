<template>
    <div :class="[
        'flex space-x-2 first:border-t border-b border-l border-r hover:shadow items-center w-full whitespace-normal p-2 transition duration-300 ease-in-out',
        $slots.secondContent ? 'justify-between' : 'justify-start',
        calculatedListStyle
        ]">
        <!--Icon-->
        <div v-if="$slots.icon">
            <slot name="icon"></slot>
        </div>
        <!--Title-->
        <div v-if="$slots.title">
            <b>
                <slot name="title"></slot>
            </b>
        </div>
        <!--Default Content-->
        <div class="flex flex-grow min-w-min">
            <slot></slot>
        </div>
        <!--Second Content-->
        <div v-if="$slots.secondContent">
            <slot name="secondContent"></slot>
        </div>
    </div>
</template>

<script>
import {listStyleMixin} from "@/Mixins/Styles/listStyleMixin";

export default {
    name: "TListItem",
    props: {
        active: {
            required: false
        }
    },
    mixins: [listStyleMixin],
}
</script>

<style scoped>

</style>
