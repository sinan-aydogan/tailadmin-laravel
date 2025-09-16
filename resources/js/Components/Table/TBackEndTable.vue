<template>
    <div
        class="table-outside-container"
        :class="`table-${design}`"
    >
        <!--Top Content-->
        <div
            v-if="hasSlot('search') || hasSlot('top-right') || hasSlot('top-left') || simpleSearchableFields.length>0"
            class="table-top"
        >
            <!--Left-->
            <div
                v-if="simpleSearchableFields.length>0"
                class="table-top-left"
            >
                <!--Search-->
                <t-input-text
                    id="search"
                    type="text"
                    v-model="searchObj.simpleSearchText"
                    :radius="radius"
                    :placeholder="t('searchPlaceHolder')"
                    :disabled="showAdvancedSearchPanel"
                >
                    <template #icon>
                        <!--Search Icon-->
                        <svg
                            class="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
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
                <!--Customize Showing Options-->
                <t-button
                    :radius="radius"
                    border
                    @click="showCustomizeModal = !showCustomizeModal"
                >
                    <!--Options Icon-->
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
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                    </svg>
                </t-button>
                <!--Advanced Search Button-->
                <t-button
                    v-if="advancedSearchableFields.length>0"
                    :radius="radius"
                    border
                    @click="showAdvancedSearchPanel = !showAdvancedSearchPanel"
                >
                    <!--Advanced Search Icon-->
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
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                    </svg>
                </t-button>
                <!--Custom Top Left Content-->
                <slot name="top-left"/>
            </div>
            <!--Right-->
            <div
                v-if="hasSlot('top-right')"
                class="table-top-right"
            >
                <!--Custom Top Right Content-->
                <slot name="top-right"/>
            </div>
        </div>
        <!--Advanced Filters Area-->
        <transition name="tableSearch">
            <div
                v-if="showAdvancedSearchPanel"
            >
                <div
                    class="table-advanced-search-container"
                    :class="`radius-${radius}`"
                >
                    <span id="title" v-text="t('advancedSearch')"/>
                    <div class="table-advanced-search-content-wrapper">
                        <div
                            v-for="field in advancedSearchableFields"
                            :key="field.key"
                        >

                            <t-input-group :label="field.label ?? field.key">
                                <!--Text-->
                                <t-input-text
                                    v-if="field.advancedSearchInputType==='text'"
                                    v-model="searchObj.advancedSearchFields[field.searchKey].value"
                                    v-model:selectValue="searchObj.advancedSearchFields[field.searchKey].condition"
                                    :options="field.compareOperators"
                                    :options-label-key="field.advancedSearchSelectLabelKey"
                                    :options-value-key="field.advancedSearchSelectValueKey"
                                    :select-position="field.compareOperators ? 'right' : ''"
                                    select-type="inside"
                                />
                                <!--Select-->
                                <t-input-select
                                    v-if="field.advancedSearchInputType==='select'"
                                    v-model.lazy="searchObj.advancedSearchFields[field.searchKey].value"
                                    :options="field.advancedSearchSelectInputSource"
                                    :options-label-key="field.advancedSearchSelectLabelKey"
                                    :options-value-key="field.advancedSearchSelectValueKey"
                                    :search="field.advancedSearchSelectSearch"
                                    :search-place-holder="field['advancedSearchSelectSearchPlaceHolder'] !== null ? field['advancedSearchSelectSearchPlaceHolder'] : null"
                                    :place-holder="field['advancedSearchSelectPlaceHolder'] !== null ? field['advancedSearchSelectPlaceHolder'] : null"
                                />
                                <!--Between-->
                                <t-input-between
                                    v-if="field.advancedSearchInputType==='between'"
                                    v-model="searchObj.advancedSearchFields[field.searchKey].value"
                                />
                            </t-input-group>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <!--Errors-->
        <div class="grid grid-cols-1 gap-2">

            <template v-for="error in tableErrors">

                <t-alert
                    v-if="error.status"
                    :key="error.title"
                    :title="`${error.title} ${t('missing')}`"
                    :radius="radius"
                    color="yellow"
                    design="outline"
                >
                    <template #icon>
                        <svg class="w-10 h-10 dark:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                    </template>
                    <div v-html="t(error.errorText)"/>
                </t-alert>

            </template>

        </div>
        <!--Table-->
        <div
            v-if="header.length>0 && content"
            class="overflow-x-auto scrollbar scrollbar-thin transition-size-medium"
            :class="{'opacity-25' : dataLoading}"
        >
            <table class="table-container">
                <!--Header-->
                <thead>
                <!--Header Row-->
                <tr>
                    <!--Header Items-->
                    <th
                        v-for="item in regeneratedHeader"
                        :key="item.key"
                        :style="{width: item.width ? item.width+'%' : 'auto'}"
                    >
                        <div
                            :class="[
                                'table-header-cell',
                                {'cursor-pointer' : sortableFields.includes(item.key)}  ,
                                item.align === 'right' ? 'justify-end' :
                                item.align === 'center' ? 'justify-center' :
                                'justify-start'
                                ]"
                            @click="
                            sortableFields.includes(item.key) ?
                            [searchObj.sortKey=item.key , searchObj.sortDirection= !searchObj.sortDirection] :
                            ''"
                        >
                            <!--Label-->
                            <span v-text="item.label ?? item.key"/>
                            <!--Sort Icon-->
                            <span v-show="sortableFields.includes(item.key)">
                                <transition name="fade" mode="out-in">
                  <!--Sort Direction Icon-->
                  <svg
                      v-if="searchObj.sortKey===item.key"
                      class="h-5 w-5"
                      :class="[
                        'transform transition',
                        searchObj.sortDirection ? 'rotate-180' : ''
                        ]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
                                    <!--Sort Placeholder Icon-->
                  <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </transition>
                            </span>
                        </div>

                    </th>
                    <!--Actions Header Cell-->
                    <td v-if="actions.length>0" class="table-header-cell">
                        <span
                            class="text-right w-full"
                            v-text="actionsHeaderText"
                        ></span>
                    </td>
                </tr>
                </thead>
                <!--Content-->
                <tbody>
                <!--Content Rows-->
                <tr
                    v-for="(item,itemIndex) in regeneratedContent"
                    :key="itemIndex"
                    class="table-content-row"
                    :class="[
                        {'table-content-zebra-row': rowZebra},
                        {'table-content-hover-row': rowHover},
                        {'table-content-border-row': rowBorder},
                        ]"
                >
                    <!--Cells of The Content Row-->
                    <template v-for="(cell,cellKey,cellIndex) in item">
                        <td
                            :key="cellKey"
                            v-if="cellKey !== uniqueId"
                            class="table-content-cell"
                            :class="contentCellStyle(itemIndex+1,cellIndex+1)"
                        >
                            <div
                                :class="[
                                'flex',
                                regeneratedHeader.find(h=>h.key === cellKey).align === 'right' ? 'justify-end' :
                                regeneratedHeader.find(h=>h.key === cellKey).align === 'center' ? 'justify-center' :
                                'justify-start'
                                ]"
                            >
                                <!--Raw Content-->
                                <span v-if="!hasSlot(cellKey)" v-text="cell"/>
                                <!--SlotScope Content-->
                                <slot
                                    v-else
                                    :name="cellKey"
                                    :props="item"
                                />
                            </div>
                        </td>
                    </template>
                    <!--Actions Cell-->
                    <td
                        v-if="actions.length>0"
                        class="table-content-cell"
                        :class="actionsCellStyle(itemIndex+1)"
                    >
                        <div class="flex justify-end">
                            <t-dropdown align="right" button-design="outline" trigger-type="rich" size="fit">
                                <template #trigger>
                                    <div class="flex h-full items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                                        </svg>
                                    </div>
                                </template>
                                <div
                                    class="flex justify-between items-center px-2 border dark:border-transparent dark:shadow-dark bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 p-1"
                                    :class="`radius-${radius}`"
                                >
                                    <div
                                        class="hover:bg-red-100 hover:text-red-500 dark:hover:text-gray-200 dark:hover:bg-red-500 dark:hover:bg-opacity-75 cursor-pointer text-sm px-2"
                                        :class="`radius-${radius}`"
                                        @click="selectItem($event, item, 'delete')"
                                    >
                                        <div class="flex items-center h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                                 viewBox="0 0 24 24"
                                                 stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                            </svg>
                                            {{ t('actionDelete') }}
                                        </div>
                                    </div>
                                    <div
                                        class="hover:bg-indigo-100 hover:text-indigo-500 dark:hover:text-gray-200 dark:hover:bg-indigo-500 dark:hover:bg-opacity-75 cursor-pointer text-sm px-2"
                                        :class="`radius-${radius}`"
                                        @click="selectItem($event, item, 'edit')"
                                    >
                                        <div class="flex items-center h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                                            </svg>
                                            {{ t('actionEdit') }}
                                        </div>
                                    </div>
                                    <div
                                        class="hover:bg-blue-100 hover:text-blue-500 dark:hover:text-gray-200 dark:hover:bg-blue-500 dark:hover:bg-opacity-75 cursor-pointer text-sm px-2"
                                        :class="`radius-${radius}`"
                                        @click="selectItem($event, item, 'view')"
                                    >
                                        <div class="flex items-center h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                            </svg>
                                            {{ t('actionView') }}
                                        </div>
                                    </div>
                                </div>
                            </t-dropdown>
                        </div>
                    </td>
                </tr>
                <!--Empty Content Notification-->
                <tr v-if="regeneratedContent.length === 0">
                    <td
                        :colspan="regeneratedHeader.length+(actions.length>0 ? 1 : 0)"
                    >
                        <div
                            class="table-no-content"
                            :class="`radius-${radius}`"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span v-text="t('anyContentMessage')"/>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

            <!--Paginator-->
            <div
                class="table-paginator"
                v-if="content.per_page ? content.total>=content.per_page : content.meta.total>=content.meta.per_page"
            >
                <t-paginate
                    v-model="activePage"
                    :jump="paginationJump"
                    :total="content.total ? content.total : content.meta.total"
                    :range="5"
                    :radius="radius"
                    :per-page-item="Number(content.per_page ? content.per_page : content.meta.per_page)"
                    :previous-text="paginationPreviousText"
                    :next-text="paginationNextText"
                    :detail="paginationDetail"
                    :detail-text="paginationDetailText"
                    :reverse="paginationDetailReverse"
                />
            </div>
        </div>
    </div>

    <!--Modals-->
    <teleport to="body">
        <!--Header Fields/Per-page Item Customize Modal-->
        <t-modal
            v-model="showCustomizeModal"
            :title="t('optionsModalTitle')"
            design="elegant"
        >
            <template #content>
                <div class="flex flex-col text-left">
                    <h4 class="font-bold text-sm" v-text="t('optionsModalColumnOrder')"/>
                    <div class="flex flex-col max-w-min mt-4">
                        <div
                            v-for="(item, itemIndex) in header"
                            :key="item.key"
                            @drop="onDrop($event,'new',itemIndex)"
                            @dragenter.prevent
                            @dragover.prevent
                            @dragstart="startDrag($event,'old',itemIndex)"
                            @dragleave="onDragLeave($event)"
                            @dragover="onDragOver($event)"
                            :draggable="true"
                            class="relative inline-flex items-center space-x-1 px-2 py-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0 cursor-move" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <g
                                    id="g10617"
                                    transform="translate(1.0812535,-0.72530103)">
                                    <rect
                                        style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                                        id="rect10347"
                                        width="2"
                                        height="2"
                                        x="14.130877"
                                        y="11.725301"
                                        rx="0"/>
                                    <rect
                                        style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                                        id="rect10347-4"
                                        width="2"
                                        height="2"
                                        x="5.7066164"
                                        y="20.149561"
                                        rx="0"/>
                                    <rect
                                        style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                                        id="rect10347-8"
                                        width="2"
                                        height="2"
                                        x="5.7066164"
                                        y="3.3010411"
                                        rx="0"/>
                                    <rect
                                        style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                                        id="rect10347-1"
                                        width="2"
                                        height="2"
                                        x="14.130877"
                                        y="3.3010411"
                                        rx="0"/>
                                    <rect
                                        style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                                        id="rect10347-4-4"
                                        width="2"
                                        height="2"
                                        x="5.7066164"
                                        y="11.725301"
                                        rx="0"/>
                                    <rect
                                        style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                                        id="rect10347-8-0"
                                        width="2"
                                        height="2"
                                        x="14.130877"
                                        y="20.149561"
                                        rx="0"/>
                                </g>
                            </svg>
                            <t-input-check-box
                                v-model="activeHeaders"
                                :input-value="item.key"
                                class="inline-block select-none"
                                :label="item.label ?? item.key"
                                multipleOption
                            />
                        </div>
                    </div>
                </div>
            </template>
            <template #footer-left>
                <div class="inline-flex whitespace-nowrap items-center space-x-2">
                    <span v-text="t('itemsCountPerPage')"/>
                    <t-input-select
                        v-model.number="searchObj.perPage"
                        :options="dynamicPerPageRange"
                        :clear-button="false"
                        place-holder="t('itemsCountPerPage')"
                    />
                </div>
            </template>
        </t-modal>
    </teleport>
</template>

<script>
import { router } from '@inertiajs/vue3'
import {computed, defineComponent, reactive, toRefs, watch, ref, onBeforeMount, useSlots} from "vue";
import {debouncedWatch} from "@vueuse/core";
import TButton from "@/Components/Button/TButton.vue";
import TModal from "@/Components/Modal/TModal.vue";
import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox.vue";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect.vue";
import TDropdown from "@/Components/Dropdown/TDropdown.vue";
import TList from "@/Components/List/TList.vue";
import TListItem from "@/Components/List/TListItem.vue";
import TInputGroup from "@/Components/Form/TInputGroup.vue";
import TInputText from "@/Components/Form/Inputs/TInputText.vue";

import {useI18n} from "vue-i18n";
import table_en from "@/Lang/en/table_lang";
import table_tr from "@/Lang/tr/table_lang";
import _ from "lodash";
import TInputBetween from "@/Components/Form/Inputs/TInputBetween.vue";
import TPaginate from "@/Components/Paginate/TPaginate.vue";
import TAlert from "@/Components/Alert/TAlert.vue";

export default defineComponent({
    name: "TBackEndTable",
    components: {
        TAlert,
        TPaginate,
        TInputBetween,
        TInputText,
        TInputGroup,
        TListItem,
        TList,
        TDropdown,
        TInputSelect,
        TInputCheckBox,
        TModal,
        TButton,
    },
    props: {
        header: {
            type: Array,
            default() {
                return [];
            }
        },
        content: {
            type: Object,
            default() {
                return {};
            }
        },
        perPage: {
            type: Number,
            default: 5
        },
        design: {
            type: String,
            default: "elegant"
        },
        requestSearchKey: {
            type: String,
            default: 'searchObj'
        },
        uniqueId: {
            type: String,
            default: "id"
        },
        rowBorder: {
            type: Boolean,
            default: true
        },
        rowZebra: {
            type: Boolean,
            default: true
        },
        rowHover: {
            type: Boolean,
            default: true
        },
        radius: {
            type: Number,
            default: 3
        },
        searchRoute: {
            type: String,
            default: ''
        },
        contentKey: {
            type: String,
            default: ''
        },
        showPagination: {
            type: Boolean,
            default: true
        },
        paginationDetail: {
            type: Boolean,
            default: false
        },
        paginationDetailText: {
            type: String,
            default: 'detailText'
        },
        paginationRange: {
            type: Number,
            default: 5
        },
        paginationJump: {
            type: Boolean,
            default: true
        },
        paginationShowArrowText: {
            type: Boolean,
            default: true
        },
        paginationPreviousText: {
            type: String,
            default: 'previous'
        },
        paginationNextText: {
            type: String,
            default: 'next'
        },
        paginationDetailReverse: {
            type: Boolean,
            default: false
        },
        actions: {
            type: Array,
            default() {
                return ['view']
            }
        },
        actionsHeaderText: {
            type: String,
            default: 'actions'
        },
        actionsModal: {
            type: Array,
            default() {
                return ['delete']
            }
        }
    },
    emits: ['selectedItem'],
    setup(props, {slots, emit}) {
        /*Props*/
        const {
            header,
            content,
            perPage,
            radius,
            searchRoute,
            contentKey,
            actions,
            uniqueId,
            requestSearchKey
        } = toRefs(props);


        /*Multi-language Support*/
        const {t} = useI18n({
            messages: {
                en: table_en,
                tr: table_tr
            }
        });


        /*Generating Style Classes*/
        const contentCellStyle = (itemIndex, cellIndex) => {
            let style = [];

            if (regeneratedContent.value.length > 1) {
                if (itemIndex === 1 && cellIndex === 1) {
                    /*Top Left*/
                    style.push('radius-tl-' + radius.value)
                } else if (itemIndex === 1 && cellIndex === regeneratedHeader.value.length && actions.value.length === 0) {
                    /*Top Right*/
                    style.push('radius-tr-' + radius.value)
                } else if (itemIndex === regeneratedContent.value.length && cellIndex === 1) {
                    /*Bottom Left*/
                    style.push('radius-bl-' + radius.value)
                } else if (itemIndex === regeneratedContent.value.length && cellIndex === regeneratedHeader.value.length && actions.value.length === 0) {
                    /*Bottom Right*/
                    style.push('radius-br-' + radius.value)
                }
            } else {
                if (cellIndex === 1) {
                    /*Left*/
                    style.push('radius-l-' + radius.value)
                } else if (cellIndex === regeneratedHeader.value.length && actions.value.length === 0) {
                    /*Right*/
                    style.push('radius-r-' + radius.value)
                }


            }

            return style;
        };

        const actionsCellStyle = (itemIndex) => {
            let style = [];
            if (regeneratedContent.value.length > 1) {
                if (itemIndex === 1) {
                    style.push("radius-tr-" + radius.value)
                } else if (itemIndex === regeneratedContent.value.length) {
                    style.push("radius-br-" + radius.value)
                }
            } else {
                style.push("radius-r-" + radius.value);
            }

            return style;
        };


        /*Customize Table Columns/Rows*/
        const showCustomizeModal = ref(false);
        const activeHeaders = reactive([]);
        const startDrag = (event, type, index) => {
            event.dataTransfer.dropEffect = "move";
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("oldIndex", index);
            event.target.style.opacity = 1;
        };
        const onDrop = (event, item, index) => {
            const oldIndex = event.dataTransfer.getData("oldIndex");
            let cachedItem = header.value[oldIndex];

            startDrag(event, item, index);
            header.value[oldIndex] = header.value[index];
            header.value[index] = cachedItem;
        };
        const onDragOver = (event) => {
            event.target.style.opacity = .3;
        };
        const onDragLeave = (event) => {
            event.target.style.opacity = "1";
        };


        /*Regenerated Table Content*/
        const regeneratedHeader = computed(() => {
            let newHeader = [...header.value];
            return newHeader.filter(i => activeHeaders.includes(i.key));
        });

        const regeneratedContent = computed(() => {
            let newContent = [...content.value["data"]];
            return newContent.map(item => {
                let row = {};
                activeHeaders.forEach(key => {
                    row[key] = item[key];
                });
                row[uniqueId.value] = item[uniqueId.value];
                return row;
            });
        });


        /*Calculate Items in Per Page Select Data*/
        const dynamicPerPageRange = computed(() => {
            let rowCounts = [5, 15, 25, 50, 75, 100];
            let list = [];
            rowCounts.forEach(item => {
                if (content.value['total'] ? content.value['total'] : content.value['meta'].total > item) {
                    list.push({key: item, label: item});
                }
            });
            return list;
        });


        /*Active Page*/

        /**Active Page State**/
        const activePage = ref(1);

        /**Watch Active Page**/
        watch(activePage, () => {
            router.reload({
                    data: {
                        page: activePage.value
                    },
                    only: [contentKey.value]
                }
            );
        });


        /*Search*/

        /**Searching Simple States**/
        const dataLoading = ref(false);
        const showAdvancedSearchPanel = ref(false);

        /**Create Search States**/
        const simpleSearchableFields = reactive([]);
        const advancedSearchableFields = reactive([]);
        const sortableFields = reactive([]);
        const searchObj = reactive({
            searchType: "simple",
            simpleSearchText: "",
            perPage: perPage.value,
            sortKey: null,
            sortDirection: false,
            advancedSearchFields: {}
        });

        onBeforeMount(() => {
            /*Generate Showing Fields Array*/
            header.value.forEach(item => {
                if (item.status) {
                    activeHeaders.push(item["key"]);
                }
            });
            /*Generate Sortable Key Array*/
            header.value.forEach(item => {
                if (item.sortable) {
                    sortableFields.push(item["key"]);
                }
            });
            /*Generate Simple Searchable Key Array*/
            header.value.forEach(item => {
                if (item.simpleSearchable) {
                    simpleSearchableFields.push(item["key"]);
                }
            });
            /*Generate Advanced Searchable Key Array*/
            header.value.forEach(item => {
                if (item.advancedSearchable) {
                    advancedSearchableFields.push({
                        ...item,
                        searchKey: item.advancedSearchKey ? item.advancedSearchKey : item.key
                    });
                }
            });
            /*Generate Advanced Search Query*/
            advancedSearchableFields.forEach(item => {
                searchObj.advancedSearchFields[item.searchKey] = {
                    value: item.advancedSearchInputType === 'between' ? {from: null, to: null} : null,
                    condition: item['compareOperators'] ? item['compareOperators'].length > 0 ? item['compareOperators'][0].key : null : null
                }
            })
        });

        /**Search Post Function**/
        debouncedWatch(() => _.cloneDeep(searchObj), () => {
                router.post(route(searchRoute.value),
                    {
                        [requestSearchKey.value]: {
                            perPage: Number(searchObj.perPage),
                            sortKey: searchObj.sortKey,
                            sortDirection: searchObj.sortDirection,
                            searchType: searchObj.searchType,
                            searchValue: searchObj.searchType === 'simple' ?
                                {
                                    simpleSearchText: searchObj.simpleSearchText,
                                    simpleSearchFields: simpleSearchableFields,
                                } :
                                searchObj.advancedSearchFields

                        }
                    },
                    {
                        only: [contentKey.value],
                        onBefore: visit => {
                            dataLoading.value = true;
                        },
                        onFinish: visit => {
                            dataLoading.value = false;

                        },
                    });
            },
            {debounce: 500}
        );

        /**Watch Search Type**/
        watch(showAdvancedSearchPanel, () => {
            showAdvancedSearchPanel.value ? searchObj.searchType = 'advanced' : searchObj.searchType = 'simple'
        })


        /*Content Delete Confirm Modal Function*/
        const selectedItem = ref(null);
        const selectItem = ($event, item, type) => {
            emit('selectedItem', {
                data: content.value.data.find(i => i[uniqueId.value] === item[uniqueId.value]),
                action: type
            });
        }

        /*Error Management*/
        const tableErrors = computed(() => {
            let contentStatus = !Object.keys(content.value);
            let headerStatus = header.value.length === 0;
            let contentKeyStatus = !contentKey.value;
            let searchRouteStatus = !searchRoute.value;

            return [
                {status: contentStatus, title: 'Content', errorText: 'contentError'},
                {status: headerStatus, title: 'Header', errorText: 'headerError'},
                {status: contentKeyStatus, title: 'Content Key', errorText: 'contentKeyError'},
                {status: searchRouteStatus, title: 'Search Route', errorText: 'searchRouteError'}
            ]
        })


        /*Slot Check*/
        const hasSlot = name => !!useSlots()[name];


        return {
            dataLoading,
            hasSlot,
            contentCellStyle,
            actionsCellStyle,
            dynamicPerPageRange,
            showCustomizeModal,
            activePage,
            activeHeaders,
            regeneratedHeader,
            regeneratedContent,
            startDrag,
            onDrop,
            onDragLeave,
            onDragOver,
            sortableFields,
            simpleSearchableFields,
            advancedSearchableFields,
            selectedItem,
            selectItem,
            showAdvancedSearchPanel,
            searchObj,
            tableErrors,
            t
        };
    }
})
;
</script>

<style scoped>
.tableSearch-enter-active, .tableSearch-leave-active {
    transition: all 700ms;
}

.tableSearch-enter-from, .tableSearch-leave-to {
    opacity: 0;
    max-height: 0;
}

.tableSearch-enter-to, .tableSearch-leave-from {
    opacity: 1;
    max-height: 500px;
}

/*Fade Transition*/
.fade-enter-active, .fade-leave-active {
    transition: all 300ms ease-in-out;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: scale(.9);
}

.fade-enter-to, .fade-leave-from {
    opacity: 1;
    transform: scale(1);
}
</style>
