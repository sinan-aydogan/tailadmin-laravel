<template>
    <!--TODO: Styles will be separate-->
    <div class="relative select-none min-w-3" ref="selectItem">
        <!--Container-->
        <div
            :class="['select-container', disabled && 'bg-gray-100' ,radiusStyle]"
            @click="updateStatus"
        >

            <!--Texts-->
            <div class="inline-flex w-full">

                <!--Placeholder Text-->
                <span
                    v-if="modelValue === null"
                    v-text="placeHolder ? placeHolder : 'Select'"
                />

                <!--Selected Option-->
                <span v-else>
                    <!--ScopeSlot Rich Label-->
                    <slot
                        v-if="hasSlot('label')"
                        :props="selectedOption()"
                        name="label"
                        v-html="selectedOption()[optionsLabelKey]"
                    />
                    <!--Simple Text Label-->
                    <span
                        v-if="!hasSlot('label')"
                        v-text="selectedOption()[optionsLabelKey]"
                    />
                </span>

            </div>

            <!--Icons-->
            <div class="inline-flex">

                <!--Clear Button-->
                <div
                    v-if="clearButton && selectedOption()"
                    @click="clear"
                >
                    <t-x-circle-icon class="w-6 h-6 rounded-full hover:bg-red-500 hover:text-white cursor-pointer"/>
                </div>

                <!--Dropdown Icon-->
                <t-chevron-down-icon
                    :class="[
                'select-dropdown-icon transform',
                isVisible ? 'rotate-90' : 'rotate-0'
                ]"
                    @click="updateStatus"
                />
            </div>
        </div>

        <!--Options Container-->
        <div v-if="isVisible" class="select-options-container">
            <!--Search Box-->
            <div v-if="search" class="flex w-full p-2 bg-gray-200">
                <t-input-text
                    v-model="searchText"
                    :placeholder="searchPlaceHolder ? searchPlaceHolder : 'Search...'"
                />
            </div>
            <!--Options List-->
            <template v-for="(item,index) in searchedList()">
                <div
                    v-if="index<10"
                    :key="item[optionsValueKey]"
                    :class="[
                        'select-option-item',
                        alignStyle[align]
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
                </div>
            </template>
            <!--Many Items Notification-->
            <div
                v-if="searchedList().length>10"
                class="hidden tablet:block text-xs text-center p-2 text-blue-500"
            >
                The
                results({{ searchedList().length }}) are
                too many, please search...
            </div>
        </div>
    </div>
</template>

<script>
import TInputText from "@/Components/Form/Inputs/TInputText";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";
import TChevronDownIcon from "@/Components/Icon/TChevronDownIcon";
import TChevronLeftIcon from "@/Components/Icon/TChevronLeftIcon";
import TXCircleIcon from "@/Components/Icon/TXCircleIcon";
import {onClickOutside} from '@vueuse/core';
import {ref, toRefs} from "vue";

export default {
    name: "TInputSelect",
    components: {TXCircleIcon, TChevronLeftIcon, TChevronDownIcon, TInputText},
    props: ['modelValue', 'options', 'optionsLabelKey', 'optionsValueKey', 'placeHolder', 'searchPlaceHolder', 'clearButton', 'disabled', 'search', 'align'],
    mixins: [radiusSizeMixin],
    setup(props, {emit, slots}) {
        /*Definitions*/
        const isVisible = ref(false)
        const searchText = ref('')
        const selectItem = ref(null)
        const alignStyle = {
            'left': 'text-left',
            'center': 'text-center',
            'right': 'text-right'
        }
        const {
            modelValue,
            options,
            optionsLabelKey,
            optionsValueKey,
            placeHolder,
            searchPlaceHolder,
            clearButton,
            disabled,
            search,
            align
        } = toRefs(props)

        onClickOutside(selectItem, (event) => isVisible.value = false)


        const selectedOption = () => {
            if (!modelValue.value) {
                return null
            }

            return options.value.find(item => item[optionsValueKey.value] === modelValue.value)
        }

        const searchedList = () => {
            if (searchText.value === '') {
                return options.value
            }

            return options.value.filter(option => option[optionsLabelKey.value].toLowerCase().replace(/[^a-zA-Z ]/g, "").includes(searchText.value.toLowerCase().replace(/[^a-zA-Z ]/g, "")))
        }

        const updateStatus = () => {
            if (disabled.value) {
                isVisible.value = false
            } else {
                isVisible.value = !isVisible.value
            }
        }

        const select = (item) => {
            emit('update:modelValue', item[optionsValueKey.value])
            isVisible.value = false
        }

        const clear = () => {
            emit('update:modelValue', null)
            searchText.value = ''
        }


        /*Slot Check*/
        const hasSlot = name => !!slots[name]

        return {
            selectItem,
            selectedOption,
            searchedList,
            select,
            updateStatus,
            isVisible,
            hasSlot,
            alignStyle,
            clear,
            searchText
        }
    }
}
</script>
