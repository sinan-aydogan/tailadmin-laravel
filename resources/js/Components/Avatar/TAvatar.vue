<template>
    <div :class="[$parent.$vnode.tag.includes('TAvatarGroup') && '-ml-4 hover:absolute hover:z-10' ,'relative z-0',sizes[size]]">
        <img :class="[radiusStyle, sizes[size], $parent.$vnode.tag.includes('TAvatarGroup') ? 'border-2 border-white border-opacity-75' : '']"
             :src="avatarURL">
        <div
            v-if="indicator"
            :class="[
                'absolute flex flex-shrink-0 justify-center items-center w-1/3 h-1/3 rounded-full text-white font-semibold',
                size<7 ? 'text-xs' : 'text-normal',
                positions[indicator.position].positionStyle,
                'bg-'+indicator.color+'-500'
                ]">
            <div v-text="size>3 ? indicator.label : null"/>
        </div>
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
    },
};
</script>
