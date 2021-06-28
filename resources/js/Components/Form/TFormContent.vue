<template>
    <div class="w-full">
        <form @submit.prevent="$emit('submitted')" :enctype="enctype">
            <!--Form Body-->
            <div class="mt-5 md:mt-0 md:col-span-2 bg-white shadow sm:rounded-md">
                    <slot></slot>
                <!--Submit Button-->
                <transition name="status" duration="500">
                    <div v-if="submitButton || resetButton || $slots.status" class="flex flex-wrap col-span-12 justify-end space-x-2 mr-4 py-4">
                        <slot v-if="$slots.status" name="status"></slot>
                        <div class="flex flex-wrap gap-2" v-else>
                            <t-button v-if="resetButton" @click.native="reset" type="button" color="yellow" :radius="3">Reset</t-button>
                            <t-button v-if="submitButton" type="submit" icon="plus" color="green" :radius="3" :disabled="disabled">Save</t-button>
                        </div>
                    </div>
                </transition>

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
    props: {
        enctype : String,
        disabled : Boolean,
        resetButton : {
            type: Boolean,
            default: true
        },
        submitButton: {
            type: Boolean,
            default: true
        }
},
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


<style>
/*Status Change Effect*/
.status-enter-active, .status-leave-active{
    transition: all 1s;
}
.status-enter, .status-leave-to {
    opacity: 0;
}
.status-enter-to, .status-leave {
    opacity: 1;
}
</style>
