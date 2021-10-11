<template>
    <div class="justify-start p-2 hover:bg-gray-600 hover:text-white cursor-pointer">
        <Link
            :href="link"
            v-if="link"
            class="flex flex-row items-center justify-start"
        >

            <div v-if="$slots.icon" class="flex justify-center items-center w-5 h-5 mr-1">
                <slot name="icon"></slot>
            </div>
            <div class="flex">
                <slot></slot>
            </div>
        </Link>
        <slot v-else></slot>

    </div>
</template>

<script>
import {defineComponent} from 'vue'
import {Link} from '@inertiajs/inertia-vue3';

export default defineComponent({
    name: "TDropdownItem",
    components: {
        Link
    },
    props: {
        link: {
            type: String
        }
    }
})
</script>
