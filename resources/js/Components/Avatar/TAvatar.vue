<template>
    <div :class="[team === true ? '-ml-4 overflow-hidden' : 'relative']">
        <img :class="[radiusStyle, sizeStyle, team === true ? 'border-2 border-white border-opacity-50' : '']"
             :src="avatarURL">
        <span v-if="indicator"
              :class=" ['absolute items-center justify-center font-semibold text-xs text-white w-1/3 h-1/3 flex rounded-full',indicatorStyle]">
      <span v-if="size > 2">{{ indicator.label }}</span>
    </span>
    </div>
</template>

<script>
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import {avatarStyleMixin} from "@/Mixins/avatarStyleMixin";
import {resolveComponent, resolveTransitionHooks} from "vue";

export default {
    mixins: [radiusSizeMixin, avatarStyleMixin],
    props: {
        link: {
            type: String,
            require: false,
            default: 'test'
        },
        team: {
            type: Boolean,
            require: false
        }
    },
    name: "Avatar",
    computed: {
        avatarURL() {
            if (this.link.default) {
                return 'img/samples/' + this.link.default.substr(8)
            }
        }
    }
};
</script>
