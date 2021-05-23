<template>
    <button
        :type="type"
        :class="[
            'flex justify-center items-center whitespace-nowrap text-white border px-3 py-2 gap-1 focus:ring-2 focus:outline-none',
            buttonStyle,
            radiusStyle
            ]"
        :onclick="'window.location.href=\''+link+'\''">
        <slot></slot>
    </button>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export default {
    name: "Button",
    mixins: [radiusSizeMixin],
    props: {
        color: String,
        size: String,
        link: {
            type: String,
            default: '#'
        },
        type: {
            type: String,
            default: 'submit'
        }
    },
    computed: {
        buttonStyle() {
            let colorStyle;
            let sizeStyle;
            /*Button Color Style*/
            if (this.color) {
                colorStyle = 'bg-' + this.color + '-500 border-' + this.color + '-600 hover:text-' + this.color + '-700 focus:text-' + this.color + '-700 hover:bg-' + this.color + '-100 focus:bg-' + this.color + '-100';
            } else {
                colorStyle = 'bg-gray-500 border-gray-600 hover:text-gray-700 focus:text-gray-700 hover:bg-gray-100 focus:bg-gray-100';
            }
            /*Button Size Style*/
            if (this.size === 'full') {
                sizeStyle = 'h-12 w-full text-center ';
            } else if (this.size === 'xl') {
                sizeStyle = 'h-14 text-xl font-bold'
            } else if (this.size === 'sm') {
                sizeStyle = 'h-8 text-sm min-w-min min-h-min'
            } else {
                sizeStyle = 'h-10'
            }
            return colorStyle + ' ' + sizeStyle;
        },
    }
}
</script>
