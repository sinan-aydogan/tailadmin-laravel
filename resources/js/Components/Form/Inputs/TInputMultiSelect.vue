<template>
    <div class="input-select" ref="selectItem">
        <!--Select Container-->
        <div
            class="select-container"
            @click="updateOptionsShowStatus"
        >

            <!--Icon-->
            <div
                v-if="hasSlot('icon')"
                class="select-input-icon"
                :class="`radius-l-${radius}`"
            >
                <slot name="icon"/>
            </div>

            <!--Select Trigger-->
            <div
                class="select-trigger"
                :class="[
                    hasSlot('icon') ? `radius-r-${radius}` : `radius-${radius}`,
                    {'input-disabled' : disabled },
                    disabled || readOnly ? 'cursor-not-allowed' : 'cursor-pointer',
                    ]"
            >

                <!--Texts-->
                <div class="select-trigger-text">

                    <transition name="fade" mode="out-in">

                        <!--Placeholder Text-->
                        <span
                            v-if="modelValue === [] || modelValue === null || modelValue.length === 0"
                            v-t="placeHolder"
                            class="select-trigger-placeholder"
                        />

                        <!--Selected Option-->
                        <div
                            v-else
                            class="multi-select-selected-options-container"
                        >

                            <template
                                v-for="option in selectedOptions"
                                :key="option[optionsValueKey]"
                            >
                                <t-badge class="multi-select-selected-badge">
                                    <template #icon v-if="!readOnly && !disabled">
                                        <!--Clear Icon-->
                                        <svg
                                            @click.stop="selectOption(option)"
                                            class="multi-select-option-clear-icon"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </template>
                                    <!--ScopeSlot Rich Label-->
                                    <slot
                                        v-if="hasSlot('label') && !disabled"
                                        :props="option"
                                        name="label"
                                        v-html="option[optionsLabelKey]"
                                    />

                                    <!--Simple Text Label-->
                                    <span
                                        v-if="!hasSlot('label') && !disabled"
                                        v-text="option[optionsLabelKey]"
                                    />
                                </t-badge>
                            </template>

                        </div>

                    </transition>

                </div>

                <!--Icons-->
                <div class="inline-flex">

                    <!--Clear Icon-->
                    <svg
                        v-if="clearButton && selectedOptions.length>0 && !readOnly && !disabled"
                        @click.stop="clear"
                        xmlns="http://www.w3.org/2000/svg"
                        class="input-clear-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>

                    <!--Dropdown Icon-->
                    <svg
                        class="w-5 h-5 transform"
                        :class="[
                            showOptions ? 'rotate-90' : 'rotate-0',
                            'transition-size-short'
                            ]"
                        @click.stop="updateOptionsShowStatus"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7">
                        </path>
                    </svg>

                </div>

            </div>

        </div>

        <!--Options Container-->
        <transition name="fade">
            <div
                v-if="showOptions"
                class="select-options-container"
                :class="`radius-${radius}`"
            >
                <!--Options Content-->
                <div
                    class="select-options-content"
                    :class="{'max-h-56': !search}"
                >

                    <!--Search Box-->
                    <div
                        v-if="search && options.length>0"
                        class="select-search-container"
                    >
                        <t-input-text
                            v-model="searchText"
                            :placeholder="t(searchPlaceHolder)"
                            icon-type="inside"
                        >
                            <template #icon>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </template>
                        </t-input-text>
                    </div>

                    <!--Options List-->
                    <template v-for="(option,index) in searchedList">
                        <div
                            v-if="search ? index<showingMaxOptions : true"
                            :key="option[optionsValueKey]"
                            :class="[
                                'select-option-item',
                                {'select-option-active-item':modelValue.includes(option[optionsValueKey])},
                                `radius-${radius}`
                                ]"
                            @click="selectOption(option)"
                        >

                            <!--ScopeSlot Rich Label-->
                            <slot
                                v-if="hasSlot('label')"
                                :props="option"
                                name="label"
                                v-html="option[optionsLabelKey]"
                            />

                            <!--Simple Text Label-->
                            <span
                                v-else
                                v-text="option[optionsLabelKey]"
                            />

                            <!--Selected Indicator Icon-->
                            <svg v-if="modelValue.includes(option[optionsValueKey])"
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="select-option-active-item-icon"
                                 viewBox="0 0 20 20"
                                 fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                />
                            </svg>

                        </div>
                    </template>

                    <!--Empty Source Message-->
                    <div
                        v-if="options.length === 0"
                        v-t="'component.input.select.addSource'"
                    />

                </div>
                <!--Many Items Notification-->
                <div
                    v-if="searchedList.length>showingMaxOptions && search"
                    class="select-many-result"
                >
                    {{
                        t('component.input.select.manyResults', {
                            showingMaxOptions: showingMaxOptions,
                            totalOptions: searchedList.length
                        })
                    }}
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import TInputText from "@/Components/Form/Inputs/TInputText.vue";
import TBadge from "@/Components/Badge/TBadge.vue";
import {onClickOutside} from "@vueuse/core";
import {defineComponent, useSlots, ref, toRefs, computed} from "vue";
import {useI18n} from "vue-i18n";

export default defineComponent({
    name: "TInputMultiSelect",
    components: {TBadge, TInputText},
    props: {
        modelValue: {
            type: [String, Date, Number, Object, Array, Boolean],
            default(){
                return []
            }
        },
        options: {
            type: [Object, Array],
            default() {
                return [];
            }
        },
        optionsLabelKey: {
            type: String,
            default: "label"
        },
        optionsValueKey: {
            type: String,
            default: "key"
        },
        placeHolder: {
            type: String,
            default: "component.input.select.select"
        },
        searchPlaceHolder: {
            type: String,
            default: "component.input.select.search"
        },
        clearButton: {
            type: Boolean,
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        search: {
            type: Boolean,
            default: false
        },
        showingMaxOptions: {
            type: Number,
            default: 10
        },
        radius: {
            type: Number,
            default: 3
        }
    },
    emits: ['update:modelValue'],
    setup(props, {emit, slots}) {
        /*Definitions*/
        const {
            modelValue,
            options,
            optionsLabelKey,
            optionsValueKey,
            disabled,
            readOnly
        } = toRefs(props);


        /*i18n*/
        const {t} = useI18n();

        /*Update Show/Hide Status of The Options List*/
        const showOptions = ref(false);
        const updateOptionsShowStatus = () => {
            if (disabled.value || readOnly.value) {
                showOptions.value = false;
            } else {
                showOptions.value = !showOptions.value;
            }
        };

        /*Outside Click Event*/
        const selectItem = ref(null);
        onClickOutside(selectItem, () => showOptions.value = false);

        /*Select Item*/
        const selectedIDs = ref([])
        const selectedOptions = computed(() => {
            if (!modelValue.value) {
                return null
            }

            let list = [];

            for (let i = 0; i < modelValue.value.length; i++) {
                if (options.value.find((item => item[optionsValueKey.value] === modelValue.value[i]))) {
                    list.push(options.value.find((item => item[optionsValueKey.value] === modelValue.value[i])))
                }
            }

            return list
        });

        const selectOption = (option) => {
            if (!selectedIDs.value.includes(option[optionsValueKey.value])) {
                /*Select the option*/
                selectedOptions.value.push(option);
                selectedIDs.value.push(option[optionsValueKey.value])
                emit('update:modelValue', selectedIDs.value)
                showOptions.value = false
            } else {
                /*Deselect the option*/
                selectedOptions.value.forEach((o, oIndex) => {
                    if (o[optionsValueKey.value] === option[optionsValueKey.value]) {
                        selectedOptions.value.splice(oIndex, 1);
                        selectedIDs.value.splice(oIndex, 1);
                        emit('update:modelValue', selectedIDs.value)
                        showOptions.value = false
                    }
                })

            }
        }

        /*Clear Option Selections*/
        const clear = () => {
            searchText.value = "";
            showOptions.value = false;
            emit("update:modelValue", []);
            selectedIDs.value = [];
        };

        /*Search Item*/
        const searchText = ref("");
        const searchedList = computed(() => {
            if (searchText.value === "") {
                return options.value;
            }

            return options.value.filter(option => option[optionsLabelKey.value].toLowerCase().replace(/[^a-zA-Z ]/g, "").includes(searchText.value.toLowerCase().replace(/[^a-zA-Z ]/g, "")));
        })

        /*Slot Check*/
        const hasSlot = name => !!useSlots()[name];

        return {
            showOptions,
            selectItem,
            selectedOptions,
            selectedIDs,
            searchText,
            searchedList,
            t,
            clear,
            hasSlot,
            selectOption,
            updateOptionsShowStatus
        }
    }
})
</script>

<style scoped>
/*Show Hide Menu Titles*/
.fade-enter-active, .fade-leave-active {
    transition: all 300ms ease-in-out;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
}
</style>
