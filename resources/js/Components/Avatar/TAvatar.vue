<template>
    <!--TODO: The link, the avatar group hover zoom and new color options features will add to documentation-->
    <div :class="[
        'avatar-container',
        isAvatarGroup && 'avatar-container-group',
        sizeStyle()
        ]">
        <Link v-if="link" :href="link">
            <img :class="[
            radiusStyle(),
            sizeStyle(),
            isAvatarGroup ? 'avatar-group-image' : ''
            ]"
                 :src="avatarURL"/>
        </Link>
        <img v-else :class="[
            radiusStyle(),
            sizeStyle(),
            isAvatarGroup ? 'avatar-group-image' : ''
            ]"
             :src="avatarURL"/>
        <div
            v-if="indicator"
            :class="[
                'avatar-indicator',
                size<7 ? 'text-2xs' : 'text-normal',
                indicatorStyle()
                ]">
            <div v-text="size>3 ? indicator.label : null"/>
        </div>
    </div>
</template>

<script>
import {defineComponent, getCurrentInstance, ref, toRefs} from 'vue'
import {Link} from '@inertiajs/inertia-vue3';

export default defineComponent({
    name: "TAvatar",
    props: {
        src: {
            type: String,
            require: false,
        },
        link: {
            type: String,
            require: false,
        },
        size: {
            type: Number,
            require: false,
            default: 3
        },
        radius: {
            type: Number,
            default: 3
        },
        indicator: {
            type: Object,
            require: false,
        }
    },
    components: {
        Link
    },
    setup(props) {
        /*Definitions*/
        const {size, indicator, src, radius} = toRefs(props)

        /*Generating Style Classes*/
        const sizeStyle = () => {
            return 'avatar-size-' + size.value;
        }
        const indicatorStyle = () => {
            return indicator.value ? (' avatar-indicator-position-' + indicator.value.position + ' avatar-indicator-' + indicator.value.color) : '';
        }
        const radiusStyle = () => {
            return 'radius-'+radius.value
        }

        /*Is Avatar Group*/
        const isAvatarGroup = getCurrentInstance().parent.type.name === 'TAvatarGroup';

        /*Avatar Url Generator*/
        const avatarURL = ref();
        if (!src.value) {
            avatarURL.value = '/img/samples/dummyAvatar.svg'
        } else {
            avatarURL.value = src.value
        }

        return {isAvatarGroup, avatarURL, sizeStyle, indicatorStyle, radiusStyle}
    }
});
</script>
