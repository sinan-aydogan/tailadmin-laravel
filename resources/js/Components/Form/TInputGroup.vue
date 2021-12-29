<template>
    <div class="flex flex-col">
        <!--Label-->
        <label
            :for="labelFor"
            class="flex flex-row gap-1 items-center font-medium text-sm whitespace-normal dark:text-gray-200"
        >
            <!--Label-->
            <span v-if="label">
        {{ label }}
      </span>
            <!--Label Prop-->
            <span v-if="!label && $slots.label" class="inline-flex items-center">
        <!--Label Slot-->
        <slot name="label"/>
      </span>
            <!--Sub Label-->
            <span
                v-if="subLabel"
                :class="['text-xs italic',subLabelColors[subLabelColor]]"
            >
        {{ subLabel }}
      </span>
        </label>
        <!--Input Content-->
        <slot></slot>
        <!--Error-->
        <div v-show="errors">
            <template v-for="error in errors" :key="error.$uid">
                <p class="text-sm text-red-600 mt-2 whitespace-nowrap">
                    {{ error.$message }}
                </p>
            </template>
        </div>
    </div>
</template>

<script>
import {defineComponent, provide, toRefs} from 'vue'
import {inputGroupStyleMixin} from "@/Mixins/Styles/inputGroupStyleMixin";

export default defineComponent({
    props: {
        label: {
            type: String,
            default: null
        },
        subLabel: {
            type: String,
            default: null
        },
        subLabelColor: {
            type: String,
            default: 'yellow'
        },
        labelFor: {
            type: String,
            default: null
        },
        errors: {
            type: Array,
            default() {
                return []
            }
        }
    },
    mixins: [inputGroupStyleMixin],
    setup(props) {
        /*Error Status Provide to Input Component*/
        const {errors} = toRefs(props);
        provide('errors', errors);
    }
})
</script>
