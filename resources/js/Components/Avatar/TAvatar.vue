<template>
    <div :class="[team === true ? '-ml-4 overflow-hidden' : 'relative flex']">
        <img :class="[radiusStyle, sizes[size], team === true ? 'border-2 border-white border-opacity-50' : '']"
             :src="avatarURL">
        <span
            v-if="indicator"
            :class="[
                'absolute flex justify-center items-center w-1/3 h-1/3 rounded-full text-white font-semibold',
                size<7 ? 'text-xs' : 'text-normal',
                positions[indicator.position].positionStyle,
                'bg-'+indicator.color+'-500'
                ]">
            <span v-text="size>3 ? indicator.label : null"/>
        </span>
    </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import {avatarStyleMixin} from "@/Mixins/avatarStyleMixin";

export default {
    name: "TAvatar",
    mixins: [radiusSizeMixin, avatarStyleMixin],
    props: {
        src: {
            type: String,
            require: false,
        },
        team: {
            type: Boolean,
            require: false
        }
    },
    computed: {
        avatarURL() {
            let imgSrc;
            if (!this.src) {
                imgSrc = '/img/samples/dummyAvatar.svg'
            } else {
                imgSrc = this.src
            }
            return imgSrc
        }
    }
};
</script>
