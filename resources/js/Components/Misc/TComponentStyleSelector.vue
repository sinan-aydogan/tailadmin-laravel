<template>
    <div
        class="flex flex-wrap justify-center p-2 bg-white border border-gray-300 bg-opacity-60 border-opacity-60 rounded-lg laptop:rounded-full">
        <div :class="[
            'grid grid-cols-1 gap-2 laptop:gap-4',
            (design || border || separated) ? 'laptop:grid-cols-2' : ''
            ]">
            <div v-if="design || border || separated" class="grid grid-cols-1 tablet:grid-cols-3 gap-2 items-center text-sm">
                <t-input-select
                    v-if="designs"
                    :options="designs"
                    v-model="selectedDesign"
                    options-value-key="key"
                    options-label-key="label"
                    place-holder="Design"
                    :radius="8"
                    :disabled="false"
                />
                <t-input-select
                    v-if="border"
                    :options="borderOptions"
                    v-model="selectedBorder"
                    options-value-key="key"
                    options-label-key="label"
                    place-holder="Border"
                    :radius="8"
                    :disabled="false"
                />
                <t-input-select
                    v-if="separated"
                    :options="separatedOptions"
                    v-model="selectedSeparated"
                    options-value-key="key"
                    options-label-key="label"
                    place-holder="Separated"
                    :radius="8"
                    :disabled="false"
                />
            </div>
            <ul class="grid grid-cols-5 my-2 tablet:grid-cols-10 gap-2 items-center">
                <li
                    v-for="(item,itemKey,index) in colorOptions"
                    :key="index"
                    :class="[
                    'w-5 h-5 rounded-full items-center flex justify-center flex-shrink-0 cursor-pointer',
                    item.style
                ]"
                    @click="updateColorStatus(itemKey)"
                >
                    <t-check-icon
                        v-if="colorValue===itemKey"
                        :class="[
                  'w-5 h-5',
                  itemKey === 'white' ? 'text-gray-600' : 'text-white'
                  ]"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {defineComponent, reactive, ref, toRefs, watch} from "vue";

import TCheckIcon from "@/Components/Icon/TCheckIcon";
import TBadge from "@/Components/Badge/TBadge";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";

export default defineComponent({
    name: "TComponentStyleSelector",
    components: {TInputSelect, TBadge, TCheckIcon},
    props: {
        designs: {
            type: Array
        },
        colorValue: {
            type: String,
        },
        designValue:{
            type: String
        },
        borderValue:{
            type: Boolean
        },
        separatedValue:{
            type: Boolean
        },
        design: {
            type: Boolean,
        },
        border: {
            type: Boolean,
            default: false
        },
        separated: {
            type: Boolean,
            default: false
        }
    },
    setup(props, {emit}) {
        /*Definitions*/
        const {colorValue, designValue, borderValue, separatedValue} = toRefs(props)
        const selectedDesign = ref(designValue.value)
        const selectedBorder = ref(borderValue.value)
        const selectedSeparated = ref(separatedValue.value)
        const colorOptions = reactive({
            'red': {
                style: 'bg-red-500',
                name: 'Red'
            },
            'blue': {
                style: 'bg-blue-500',
                name: 'Blue'
            },
            'green': {
                style: 'bg-green-500',
                name: 'Green'
            },
            'yellow': {
                style: 'bg-yellow-500',
                name: 'Yellow'
            },
            'indigo': {
                style: 'bg-indigo-500',
                name: 'Indigo'
            },
            'purple': {
                style: 'bg-purple-500',
                name: 'Purple'
            },
            'pink': {
                style: 'bg-pink-500',
                name: 'Pink'
            },
            'gray': {
                style: 'bg-gray-500',
                name: 'Gray'
            },
            'white': {
                style: 'bg-white border border-gray-200',
                name: 'White'
            },
            'black': {
                style: 'bg-black',
                name: 'Black'
            }
        })
        const borderOptions = reactive([
            {key: true, label: 'Border: true'},
            {key: false, label: 'Border: false'}
        ])
        const separatedOptions = reactive([
            {key: true, label: 'Separated: true'},
            {key: false, label: 'Separated: false'}
        ])

        const updateColorStatus = (key) => {
            emit('update:colorValue', key)
        }

        watch(
            () => selectedDesign,
            (selectedDesign) => {
                emit('update:designValue', selectedDesign.value)
            },
        { deep: true }
        )

        watch(
            () => selectedBorder,
            (selectedBorder) => {
                emit('update:borderValue', selectedBorder.value)
            },
        { deep: true }
        )

        watch(
            () => selectedSeparated,
            (selectedSeparated) => {
                emit('update:separatedValue', selectedSeparated.value)
            },
        { deep: true }
        )

        return {
            updateColorStatus,
            selectedDesign,
            selectedBorder,
            selectedSeparated,
            borderOptions,
            separatedOptions,
            colorOptions
        }
    }
})
</script>
