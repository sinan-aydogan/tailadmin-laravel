<template>
    <div :class="[
        'avatar-container',
        {'avatar-container-group' : isAvatarGroup},
        `avatar-size-${temporarySize}`,
        ]">

        <!--Link-->
        <Link v-if="link" :href="link">
            <img :class="[
            `radius-${temporaryRadius}`,
            `avatar-size-${temporarySize}`,
             {'avatar-group-image' : isAvatarGroup}
            ]"
                 alt="avatar"
                 :src="temporarySrc"
            />
        </Link>

        <!--Without Link-->
        <img v-else
             alt="avatar"
             :class="[
            `radius-${temporaryRadius}`,
            `avatar-size-${temporarySize}`,
            {'avatar-group-image' : isAvatarGroup}
            ]"
             :src="temporarySrc"
        />

        <!--Indicator-->
        <div
            v-if="indicator"
            class="avatar-indicator"
            :class="[
                temporarySize < 7 ? 'text-2xs' : 'text-normal',
                `avatar-indicator-position-${indicator.position}`,
                `avatar-indicator-${indicator.color}`
            ]">
            <div v-text="temporarySize>3 ? indicator.label : null"/>
        </div>
    </div>
</template>

<script>
/*Main functions*/
import {defineComponent, getCurrentInstance, inject, ref, toRefs} from "vue";
import {Link} from "@inertiajs/inertia-vue3";

/*Sources*/
import {avatarConf} from "@/config";

export default defineComponent({
    name: "TAvatar",
    props: {
        src: {
            type: String,
            default: null,
        },
        link: {
            type: String,
            default: null,
        },
        size: {
            type: Number,
            default: null
        },
        radius: {
            type: Number,
            default: null
        },
        indicator: {
            type: Object,
            default: null,
        }
    },
    components: {
        Link
    },
    setup(props) {
        /*Definitions*/
        const {size, src, radius} = toRefs(props);
        const appConf = inject('appConf');

        /*Temporary Definitions*/
        const temporarySize = ref(size.value ? size.value : avatarConf.size ? avatarConf.size : appConf.size);
        const temporaryRadius = ref(radius.value ? radius.value : avatarConf.radius ? avatarConf.radius : appConf.radius);
        const temporarySrc = ref(src.value ? src.value : avatarConf.defaultPhotoSrc);

        /*Is Avatar Group*/
        const isAvatarGroup = getCurrentInstance().parent.type.name === "TAvatarGroup";

        return {isAvatarGroup, temporarySize, temporaryRadius, temporarySrc};
    }
});
</script>
