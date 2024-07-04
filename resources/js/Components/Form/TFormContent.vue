<template>
    <div class="w-full">
        <form :enctype="enctype" @submit.prevent="$emit('submitted')">
            <!--Form Body-->
            <t-content-card :radius="temporaryRadius">
                <div class="flex flex-col w-full space-y-4">
                    <slot></slot>
                    <!--Form Buttons Container-->
                    <transition duration="500" name="status">
                        <div
                            v-if="submitButton || resetButton || $slots.status || $slots.button + '-area'"
                            class="flex flex-wrap col-span-12 justify-center md:justify-end space-x-2"
                            :class="[
                                { 'mr-2 py-2': sectionLayout === 'native' },
                                { 'border-t pt-2 mt-2 -mb-2': sectionLayout === 'smart' }
                            ]"
                        >
                            <!--Extra Form Buttons Area-->
                            <slot name="button-area" />
                            <!--Status Area-->
                            <slot v-if="$slots.status" name="status" />
                            <!--Default Form Buttons-->
                            <div
                                v-else
                                class="flex flex-wrap w-full justify-center md:justify-end items-center space-x-2"
                            >
                                <!--Reset Button-->
                                <t-button
                                    v-if="resetButton"
                                    :radius="temporaryRadius"
                                    design="filled"
                                    color="yellow"
                                    type="button"
                                    @click="reset"
                                >{{ tm('reset') }}</t-button>
                                <!--Save Button-->
                                <t-button
                                    v-if="submitButton"
                                    :disabled="disabled"
                                    :radius="temporaryRadius"
                                    design="filled"
                                    color="green"
                                    icon="plus"
                                    type="submit"
                                >{{ tm('save') }}</t-button>
                            </div>
                        </div>
                    </transition>
                </div>
            </t-content-card>
        </form>
    </div>
</template>

<script>
/* Main functions */
import { defineComponent, inject, toRefs, ref, provide, useSlots } from "vue";

/* Components */
import TButton from "@/Components/Button/TButton.vue";
import TContentCard from "@/Components/Card/TContentCard.vue";

/*Sources*/
import { formContentConf } from "@/config";

/* Multi language */
import { useI18n } from "vue-i18n";

export default defineComponent({
    name: "TForm",
    props: {
        enctype: {
            type: String,
            default: 'application/x-www-form-urlencoded'
        },
        disabled: Boolean,
        radius: {
            type: Number,
            default: null
        },
        resetButton: {
            type: Boolean,
            default: true
        },
        submitButton: {
            type: Boolean,
            default: true
        },
        sectionLayout: {
            type: String,
            default: 'native'
        },
    },
    components: {
        TContentCard,
        TButton
    },
    emits: ["reset"],

    setup(props, { emit, slots }) {
        /*Definitions*/
        const { radius, sectionLayout } = toRefs(props)
        const appConf = inject("appConf");
        provide('formContentConf', (formContentConf));
        provide('sectionLayout', (sectionLayout));

        /*Temporary Definations*/
        const temporaryRadius = ref(radius.value ? radius.value : formContentConf.radius ? formContentConf.radius : appConf.value.radius)

        /* Multi-language */
        const { tm } = useI18n({
            inheritLocale: true,
        });

        /*Reset*/
        const reset = () => {
            emit("reset");
        };

        /*Slot Check*/
        const hasSlot = name => !!useSlots()[name];
        return {
            appConf,
            formContentConf,
            temporaryRadius,
            tm,
            hasSlot,
            reset
        };
    }
});
</script>


<style>
/*Status Change Effect*/
.status-enter-active,
.status-leave-active {
    transition: all 1s;
}

.status-enter,
.status-leave-to {
    opacity: 0;
}

.status-enter-to,
.status-leave {
    opacity: 1;
}
</style>
