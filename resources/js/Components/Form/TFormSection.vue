<template>
    <div class="md:grid md:grid-cols-3 md:gap-6 space-y-4">
        <!--Section Header-->
        <div class="md:col-span-1">
            <div class="p-4">
                <!--Title-->
                <h3 class="text-lg font-medium dark:text-gray-200">{{ title }}</h3>
                <!--Description-->
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{{ description }}</p>
            </div>
        </div>
        <!--Section Content-->
        <div class="mt-5 md:mt-0 md:col-span-2 border rounded-md shadow m-4">
            <div class="px-4 py-5 sm:p-6">
                <div class="grid grid-cols-12 gap-2">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: ['title','description'],
    components: {
    },

    computed: {
    },

    methods: {
        reset() {
            this.$emit('reset')
        },
    }
})
</script>
