<template>
    <button
        v-if="type === 'submit' || type === 'button'"
        :class="styleClass ()"
        :onclick="!disabled ? 'window.location.href=\''+link+'\'' : ''"
        :type="type">
        <component :is="loadingComponent" v-if="loadingWithContent" :color="loadingColor ? loadingColor : color"/>

        <div :class="{invisible: loading}"
             class="flex justify-center items-center whitespace-nowrap flex-shrink-0 gap-1 space-x-1">
            <slot/>
        </div>
        <component :is="loadingComponent" v-if="loading" :color="loadingColor ? loadingColor : color"
                   class="mx-auto absolute"/>
    </button>
    <Link
        v-else
        :href="link"
        :class="styleClass()"
    >
        <slot></slot>
    </Link>
</template>

<script>
import {defineComponent, defineAsyncComponent, toRefs, ref} from 'vue'
import {Link} from '@inertiajs/inertia-vue3';
import ThreeBars from "@/Components/Loading/Animations/ThreeBars";
import ThreeDots from "@/Components/Loading/Animations/ThreeDots";

export default defineComponent({
    name: "TButton",
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
        radius: {
            type: Number,
            default: 3
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
        ThreeDots,
        ThreeBars,
        Link
    },
    setup(props) {
        /*Definitions*/
        const {
            color,
            design,
            border,
            radius,
            disabled,
            link,
            size,
            type,
            loading,
            loadingWithContent,
            loadingColor,
            loadingDesign
        } = toRefs(props)

        /*Generating Style Classes*/
        const styleClass = () => {
            return 'button' + ' ' +
                'button-' + size.value + ' ' +
                'button-' + design.value + '-base' + ' ' +
                'button-' + design.value + '-' + color.value + ' ' +
                'radius-' + radius.value + ' ' +
                (disabled.value ? ' button-disabled' : '') + ' ' +
                (border.value ? 'border' : '') + ' ' +
                (loading.value || loadingWithContent.value ? 'pointer-events-none' : '')
        }


        /*Loading Component*/
        const activeLoadingComponent = ref();
        if (loadingDesign.value === 'three-bars') {
            activeLoadingComponent.value = 'ThreeBars'
        } else {
            activeLoadingComponent.value = 'ThreeDots'
        }

        const loadingComponent = defineAsyncComponent(() => import(`@/Components/Loading/Animations/${activeLoadingComponent.value}.vue`))

        return {size, link, type, loadingColor, styleClass, loadingComponent}
    }
})
</script>
