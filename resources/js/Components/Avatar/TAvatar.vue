<template>
    <div :class="[
        'avatar-container',
        $parent.$vnode.tag.includes('TAvatarGroup') && 'avatar-container-group' ,
        sizeStyles[size]
        ]">
        <img :class="[
            radiusStyle,
            sizeStyles[size],
            $parent.$vnode.tag.includes('TAvatarGroup') ? 'avatar-group-image' : ''
            ]"
             :src="avatarURL">
        <div
            v-if="indicator"
            :class="[
                'avatar-indicator',
                size<7 ? 'text-xs' : 'text-normal',
                calculatedIndicatorStyle
                ]">
            <div v-text="size>3 ? indicator.label : null"/>
        </div>
    </div>
</template>

<script>
import {avatarStyleMixin} from "@/Mixins/Styles/avatarStyleMixin";

export default {
    name: "TAvatar",
    mixins: [ avatarStyleMixin],
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
