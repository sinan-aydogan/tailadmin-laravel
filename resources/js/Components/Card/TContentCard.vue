<template>
    <div
        :class="[colorValue,widthValue,radiusStyle, border && 'border','relative p-4 shadow-sm w-full overflow-hidden']">
        <!--Card Title-->
        <div :class="['font-bold text-xl',$slots.hasOwnProperty('subTitle') ? '' : 'pb-2']">
            <slot name="title"></slot>
        </div>
        <!--Card Subtitle-->
        <div class="text-sm pb-2" v-if="$slots.subTitle">
            <slot name="subTitle"></slot>
        </div>
        <!--Separator-->
        <hr v-if="line" :class="'my-1 border border-'+color+'-300'"/>
        <div
            v-if="$slots.secondContent"
            class="content-card-show-button"
            @click="showSecondContent = ! showSecondContent">
            <font-awesome-icon icon="code"/>
        </div>
        <div class="flex flex-wrap whitespace-normal w-full">
            <!--Card Main Content-->
            <slot v-if="!showSecondContent" name="content"></slot>
            <!--Card Second Content-->
            <slot v-if="showSecondContent" name="secondContent"></slot>
        </div>
    </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

export default {
    name: "TContentCard",
    props: {
        color: {
            type: String,
            default: 'white'
        },
        width: {
            type: Number,
            default: 1
        },
        line: {
            type: Boolean,
            default: false
        },
        border: {
            type: Boolean,
            default: false
        },
    },
    mixins: [radiusSizeMixin],
    data() {
        return {
            showSecondContent: false,
        }
    },
    computed: {
        colorValue() {
            /*Color Styles*/
            /*Solid*/
            if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-500 text-white';
            } else if (this.color === 'black') {
                return 'bg-gray-700 border-black text-gray-200'
            } else if (this.color === 'white') {
                return 'bg-white border-gray-300 text-gray-700'
            }
            /*Light*/
            if (this.color.includes('light')) {
                return 'bg-' + this.color.split('-')[1] + '-50 border border-' + this.color.split('-')[1] + '-500 text-' + this.color.split('-')[1] + '-600';
            }
            /*Gradient*/
            if (this.color.includes('gradient')) {
                return 'bg-gradient-to-r from-' + this.color.split('-')[1] + '-500 to-' + this.color.split('-')[3] + '-700 text-white';
            }
        },
        widthValue() {
            if (this.width != null) {
                return 'col-span-12 lg:col-span-' + this.width;
            } else {
                return 'col-span-12'
            }
        }
    }
}
</script>
