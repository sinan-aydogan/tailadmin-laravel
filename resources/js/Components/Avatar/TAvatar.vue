<template>
    <div :class="[team === true ? '-ml-4 overflow-hidden' : 'relative flex']">
        <img :class="[radiusStyle, sizeStyle, team === true ? 'border-2 border-white border-opacity-50' : '']"
             :src="avatarURL">
        <span
            v-if="indicator"
            :class="[
                'absolute flex justify-center items-center w-1/3 h-1/3 rounded-full text-white font-semibold',
                size<7 ? 'text-xs' : 'text-normal',
                indicatorStyle
                ]">
            <span v-text="size>2 ? indicator.label : null"/>
        </span>
    </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import {avatarStyleMixin} from "@/Mixins/avatarStyleMixin";

export default {
    mixins: [radiusSizeMixin, avatarStyleMixin],
    props: {
        link: {
            type: String,
            require: false,
        },
        team: {
            type: Boolean,
            require: false
        }
    },
    name: "Avatar",
    computed: {
        avatarURL() {
            let imgSrc;
            if (!this.link) {
                imgSrc = '/img/samples/dummyAvatar.svg'
            } else {
                imgSrc = this.link
            }
            return imgSrc
        }
    }
};
</script>
