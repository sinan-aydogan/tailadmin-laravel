<template>
    <div
        class="p-4"
        :class="[colorValue,widthValue,radiusStyle,{'border-2' : border},'relative']">
        <!--Card Title-->
        <div :class="['font-bold text-xl',$slots.hasOwnProperty('subTitle') ? '' : 'pb-2']">
            <slot name="title"></slot>
        </div>
        <!--Card Subtitle-->
        <div class="text-sm pb-2">
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
        <div class="flex flex-wrap whitespace-pre-wrap">
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
    name: "ContentCard",
    props: ['color', 'width', 'line', 'radius', 'border'],
    mixins: [radiusSizeMixin],
    data() {
        return {
            showSecondContent: false,
        }
    },
    computed: {
        colorValue() {
            if (this.color === 'red') {
                return 'bg-red-200 border-red-500';
            } else if (this.color === 'blue') {
                return 'bg-blue-200 border-blue-500';
            } else if (this.color === 'indigo') {
                return 'bg-indigo-200 border-indigo-500';
            } else if (this.color === 'yellow') {
                return 'bg-yellow-200 border-yellow-500';
            } else if (this.color === 'green') {
                return 'bg-green-200 border-green-500';
            } else if (this.color === 'gray') {
                return 'bg-gray-200 border-gray-500';
            } else if (this.color === 'black') {
                return 'bg-gray-700 border-black text-gray-200';
            } else {
                return 'bg-white'
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
