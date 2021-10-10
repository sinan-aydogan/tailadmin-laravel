<template>
    <button
        v-if="type === 'submit' || type === 'button'"
        :class="[
            'button',
            border && 'border',
            radiusStyle,
            styleClass,
            loading || loadingWithContent ? 'pointer-events-none' : '',
            ]"
        :onclick="!disabled ? 'window.location.href=\''+link+'\'' : ''"
        :type="type">
        <component :is="loadingComponent" v-if="loadingWithContent" :color="loadingColor ? loadingColor : color"/>

        <div :class="{invisible: loading}" class="flex justify-center items-center whitespace-nowrap flex-shrink-0 gap-1 space-x-1">
            <slot />
        </div>
        <component :is="loadingComponent" v-if="loading" :color="loadingColor ? loadingColor : color" class="mx-auto absolute"/>
    </button>
    <Link
        v-else
        :href="link"
        :class="[
            'button',
            border && 'border',
            radiusStyle,
            styleClass,
            loading || loadingWithContent ? 'pointer-events-none' : '',
            ]"
    >
        <slot></slot>
    </Link>
</template>

<script>
import {defineComponent, defineAsyncComponent, toRefs, ref} from 'vue'
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import {buttonStyleMixin} from "@/Mixins/Styles/buttonStyleMixin";
import {Link} from '@inertiajs/inertia-vue3';
import ThreeBars from "@/Components/Loading/Animations/ThreeBars";
import ThreeDots from "@/Components/Loading/Animations/ThreeDots";
import CircleSnake from "@/Components/Loading/Animations/CircleSnake";

export default defineComponent({
    name: "TButton",
    mixins: [radiusSizeMixin],
    props: {
        size: {
            type: String,
            default: 'normal'
        },
        design: {
            type: String,
            default: 'filled'
        },
        color: {
            type: String,
            default: 'blue'
        },
        link: {
            type: String,
            default: '#'
        },
        border: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingDesign: {
            type: String,
            default: 'three-bars'
        },
        loadingWithContent: {
            type: Boolean,
            default: false
        },
        loadingColor: {
            type: String,
        },
        type: {
            type: String,
            default: 'submit'
        }
    },
    components: {
        CircleSnake,
        ThreeDots,
        ThreeBars,
        Link
    },
    setup(props) {
        const {color, design, disabled, link, size, type, loadingColor,loadingDesign} = toRefs(props)
        /*Design Check*/
        const styleClass = ref()
        styleClass.value =
            'button-' + size.value +
            ' button-' + design.value + '-base' +
            ' button-' + design.value + '-' + color.value +
            (disabled.value ? ' button-disabled' : '')

        /*Loading Component*/
        const activeLoadingComponent = ref();
        if(loadingDesign.value === 'three-bars'){
            activeLoadingComponent.value = 'ThreeBars'
        }else {
            activeLoadingComponent.value = 'ThreeDots'
        }

        const loadingComponent = defineAsyncComponent(()=>import(`@/Components/Loading/Animations/${activeLoadingComponent.value}.vue`))

        return {size, link, type, loadingColor, styleClass,loadingComponent}
    }
})
</script>
