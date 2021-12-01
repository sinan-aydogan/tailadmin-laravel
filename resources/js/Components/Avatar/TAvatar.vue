<template>
  <!--TODO: The link, the avatar group hover zoom and new color options features will add to documentation-->
  <div :class="[
        'avatar-container',
        isAvatarGroup && 'avatar-container-group',
        tStyle['size']
        ]">
    <Link v-if="link" :href="link">
      <img :class="[
            tStyle['radius'],
            tStyle['size'],
            isAvatarGroup ? 'avatar-group-image' : ''
            ]"
           alt="avatar"
           :src="avatarURL"
      />
    </Link>
    <img v-else
         alt="avatar"
         :class="[
            tStyle['radius'],
            tStyle['size'],
            isAvatarGroup ? 'avatar-group-image' : ''
            ]"
         :src="avatarURL"
    />
    <div
      v-if="indicator"
      :class="tStyle['indicator']">
      <div v-text="size>3 ? indicator.label : null" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, getCurrentInstance, reactive, ref, toRefs } from "vue";
import { Link } from "@inertiajs/inertia-vue3";

export default defineComponent({
  name: "TAvatar",
  props: {
    src: {
      type: String,
      default: null,
      require: false
    },
    link: {
      type: String,
      default: null,
      require: false
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
      default: null,
      require: false
    }
  },
  components: {
    Link
  },
  setup(props) {
    /*Definitions*/
    const { size, indicator, src, radius } = toRefs(props);

    /*Generating Style Classes*/
    const tStyle = reactive({})
    tStyle['size'] = computed(() => {
      return "avatar-size-" + size.value;
    });
    tStyle['indicator'] = computed(() => {
      return "avatar-indicator" + " " +
        (size.value < 7 ? "text-2xs" : "text-normal") + " " +
        (indicator.value ? (" avatar-indicator-position-" + indicator.value['position'] + " avatar-indicator-" + indicator.value['color']) : "");
    });
    tStyle['radius'] = computed(() => {
      return "radius-" + radius.value;
    });

    /*Is Avatar Group*/
    const isAvatarGroup = getCurrentInstance().parent.type.name === "TAvatarGroup";

    /*Avatar Url Generator*/
    const avatarURL = ref();
    if (!src.value) {
      avatarURL.value = "/img/samples/dummyAvatar.svg";
    } else {
      avatarURL.value = src.value;
    }

    return { isAvatarGroup, avatarURL, tStyle };
  }
});
</script>
