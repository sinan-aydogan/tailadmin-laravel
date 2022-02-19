<template>
    <div
        class="text-slate-700 dark:text-gray-100"
        :class="[
            { 'md:grid md:grid-cols-3 md:gap-6': sectionLayout === 'native' },
            { '-mx-6': sectionLayout === 'smart' },
        ]"
    >
        <!--Section Header-->
        <div v-if="sectionLayout === 'native'" class="md:col-span-1">
            <div class="px-4">
                <!--Title-->
                <h3 v-if="title" class="text-lg font-medium">{{ title }}</h3>
                <!--Description-->
                <p v-if="description" class="mt-1 text-sm">{{ description }}</p>
            </div>
        </div>
        <!--Section Content-->
        <div
            :class="[
                { 'mt-5 md:mt-0 md:col-span-2 border shadow m-2': sectionLayout === 'native' },
                { '': sectionLayout === 'smart' },
                `radius-${temporaryRadius}`
            ]"
        >
            <div
                class="px-6"
                :class="[
                    { 'py-4': sectionLayout === 'native' }
                ]"
            >
                <!-- Compact Header -->
                <div v-if="sectionLayout === 'smart'" class="mb-4 pb-1 border-b">
                    <!--Title-->
                    <h3 v-if="title" class="text-md font-medium">{{ title }}</h3>
                    <!--Description-->
                    <p v-if="description" class="mt-1 text-xs">{{ description }}</p>
                </div>
                <div class="grid grid-cols-12 gap-2">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Main Functions */
import { defineComponent, inject, toRefs, ref } from 'vue'

export default defineComponent({
    name: "TFormSection",
    props: {
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        radius: {
            type: Number,
            default: null
        },
    },

    emits: ['reset'],

    setup(props, { emit }) {
        /* Definitions */
        const { radius } = toRefs(props);
        const formContentConf = inject('formContentConf');
        const appConf = inject("appConf");
        const sectionLayout = inject("sectionLayout");

        /*Temporary Definations*/
        const temporaryRadius = ref(radius.value ? radius.value : formContentConf.radius ? formContentConf.radius : appConf.value.radius)

        const reset = () => {
            emit('reset')
        }

        return {
            reset,
            temporaryRadius,
            sectionLayout
        }
    }
})
</script>
