<template>
    <div>
        <form @submit.prevent="$emit('submitted')" :enctype="enctype">
            <!--Form Body-->
            <div class="mt-5 md:mt-0 md:col-span-2 bg-white shadow sm:rounded-md">
                    <slot></slot>
                <!--Submit Button-->
                <div class="flex col-span-12 justify-end space-x-2 mr-4 py-4">
                    <t-button @click.native="reset" type="button" color="yellow" :radius="3">Reset</t-button>
                    <t-button type="submit" icon="plus" color="green" :radius="3">Save</t-button>
                </div>

                <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6" v-if="hasActions">
                    <slot name="actions"></slot>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import TButton from "@/Components/Button/TButton";

export default {
    props:['enctype'],
    components: {
        TButton,
    },

    computed: {
        hasActions() {
            return !! this.$slots.actions
        }
    },

    methods: {
        reset() {
            this.$emit('reset')
        },
    }
}
</script>
