<template>
    <div class="input-select" ref="selectItem">
        <!--Select Container-->
        <div
            class="select-container"
            @click="updateStatus"
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
                        <span v-if="modelValue === null || modelValue === undefined"
                              v-t="placeHolder"
                              class="select-trigger-placeholder"
                        />

                        <!--Selected Option-->
                        <div v-else>

                            <!--ScopeSlot Rich Label-->
                            <slot
                                v-if="hasSlot('label') && !disabled"
                                :props="selectedOption()"
                                name="label"
                                v-html="selectedOption()[optionsLabelKey]"
                            />

                            <!--Simple Text Label-->
                            <span
                                v-if="!hasSlot('label') && !disabled"
                                v-text="selectedOption()[optionsLabelKey]"
                            />

                        </div>

                    </transition>
                </div>

                <!--Icons-->
                <div class="inline-flex">

                    <!--Clear Icon-->
                    <svg
                        v-if="clearButton && selectedOption() && !readOnly && !disabled"
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
                    <t-chevron-down-icon
                        class="w-5 h-5 transform"
                        :class="[
                            isVisible ? 'rotate-90' : 'rotate-0',
                            'transition-size-short'
                            ]"
                        @click.stop="updateStatus"
                    />

                </div>
            </div>

        </div>

        <!--Options Container-->
        <transition name="fade">
            <div
                v-if="isVisible"
                class="select-options-container"
                :class="`radius-${radius}`"
            >
                <!--Options Content-->
                <div
                    class="select-options-content"
                    :class="{'max-h-56': !search}"
                >
                    <!--Search Box-->
                    <div v-if="search" class="select-search-container">
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
                    <template v-for="(item,index) in searchedList()">
                        <div
                            v-if="search ? index<showingMaxOptions : true"
                            :key="item[optionsValueKey]"
                            :class="[
                        'select-option-item',
                        {'select-option-active-item':modelValue === item[optionsValueKey]},
                        `radius-${radius}`
                        ]"
                            @click="select(item)"
                        >
                            <!--ScopeSlot Rich Label-->
                            <slot
                                v-if="hasSlot('label')"
                                :props="item"
                                name="label"
                                v-html="item[optionsLabelKey]"
                            />
                            <!--Simple Text Label-->
                            <span
                                v-else
                                v-text="item[optionsLabelKey]"
                            />
                            <!--Selected Indicator Icon-->
                            <svg v-if="modelValue === item[optionsValueKey]"
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
                </div>
                <!--Many Items Notification-->
                <div
                    v-if="searchedList().length>showingMaxOptions && search"
                    class="select-many-result"
                >
                    {{
                        t('component.input.select.manyResults', {
                            showingMaxOptions: showingMaxOptions,
                            totalOptions: searchedList().length
                        })
                    }}
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import TInputText from "@/Components/Form/Inputs/TInputText";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon";
import TChevronLeftIcon from "@/Components/Icon/TChevronLeftIcon";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";
import {onClickOutside} from "@vueuse/core";
import {readonly, ref, toRefs, watch} from "vue";
import {useI18n} from "vue-i18n";

export default {
    name: "TInputSelect",
    components: {TXCircleIcon, TChevronLeftIcon, TChevronDownIcon, TInputText},
    props: {
        modelValue: {
            type: [String, Date, Number, Object, Array, Boolean],
            default: null
        },
        options: {
            type: [Object, Array],
            default() {
                return [
                    {key: "", label: "Please add a options source"}
                ];
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
        }
    },
    mixins: [radiusSizeMixin],
    setup(props, {emit, slots}) {
        /*Definitions*/
        const isVisible = ref(false);
        const searchText = ref("");
        const selectItem = ref(null);
        const {
            modelValue,
            options,
            optionsLabelKey,
            optionsValueKey,
            disabled,
            readOnly
        } = toRefs(props);
        const {t} = useI18n();


        onClickOutside(selectItem, (event) => isVisible.value = false);


        const selectedOption = () => {
            if (modelValue.value === null || modelValue.value === undefined) {
                return null;

            }
            return options.value.find(item => item[optionsValueKey.value] === modelValue.value);
        };

        const searchedList = () => {
            if (searchText.value === "") {
                return options.value;
            }

            return options.value.filter(option => option[optionsLabelKey.value].toLowerCase().replace(/[^a-zA-Z ]/g, "").includes(searchText.value.toLowerCase().replace(/[^a-zA-Z ]/g, "")));
        };

        const updateStatus = () => {
            if (disabled.value || readOnly.value) {
                isVisible.value = false;
            } else {
                isVisible.value = !isVisible.value;
            }
        };

        const select = (item) => {
            emit("update:modelValue", item[optionsValueKey.value]);
            isVisible.value = false;
        };

        const clear = () => {
            emit("update:modelValue", null);
            searchText.value = "";
        };


        /*Slot Check*/
        const hasSlot = name => !!slots[name];

        return {
            selectItem,
            selectedOption,
            searchedList,
            select,
            updateStatus,
            isVisible,
            hasSlot,
            clear,
            t,
            searchText
        };
    }
};
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
