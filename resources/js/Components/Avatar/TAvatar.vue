<template>
    <!--TODO: The link, the avatar group hover zoom and new color options features will add to documentation-->
    <div :class="[
        'avatar-container',
        isAvatarGroup && 'avatar-container-group',
        sizeStyleClass
        ]">
        <Link v-if="link" :href="link">
        <img :class="[
            radiusStyle,
            sizeStyleClass,
            isAvatarGroup ? 'avatar-group-image' : ''
            ]"
             :src="avatarURL"/>
        </Link>
        <img v-else :class="[
            radiusStyle,
            sizeStyleClass,
            isAvatarGroup ? 'avatar-group-image' : ''
            ]"
             :src="avatarURL"/>
        <div
            v-if="indicator"
            :class="[
                'avatar-indicator',
                size<7 ? 'text-2xs' : 'text-normal',
                indicatorStyleClass
                ]">
            <div v-text="size>3 ? indicator.label : null"/>
        </div>
    </div>
</template>

<script>
import { defineComponent,getCurrentInstance,ref } from 'vue'
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import {Link} from '@inertiajs/inertia-vue3';

export default defineComponent({
    name: "TAvatar",
    mixins: [radiusSizeMixin],
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
        indicator: {
            type: Object,
            require: false,
        }
    },
    components: {
        Link
    },
    setup(props){
        /*Size Check*/
        const size = props.size;
        const indicator = props.indicator;

        const sizeStyleClass = 'avatar-size-' + size;
        const indicatorStyleClass = indicator ? (' avatar-indicator-position-' + indicator.position  + ' avatar-indicator-'+ indicator.color) : '';

        /*Is Avatar Group*/
        const isAvatarGroup = getCurrentInstance().parent.type.name === 'TAvatarGroup';

        /*Avatar Url Generator*/

        const avatarURL = ref();
        if (!props.src) {
            avatarURL.value = '/img/samples/dummyAvatar.svg'
        } else {
            avatarURL.value = props.src
        }

        return {isAvatarGroup,avatarURL,sizeStyleClass,indicatorStyleClass}
    }
});
</script>
