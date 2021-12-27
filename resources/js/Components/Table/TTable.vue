<template>
    <div
        class="table-outside-container"
        :class="`table-${features.table.design}`"
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
                    v-model="search"
                    :radius="features.table.radius"
                    :placeholder="t('searchPlaceHolder')"
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
                    :radius="features.table.radius"
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
                    v-if="hasSlot('search')"
                    :radius="features.table.radius"
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
                v-if="hasSlot('search') && showAdvancedSearchPanel"
            >
                <div
                    class="table-advanced-search-container"
                    :class="`radius-${features.table.radius}`"
                >
                    <span id="title" v-t="'advancedSearch'"/>
                    <slot name="search"/>
                </div>
            </div>
        </transition>
        <!--Table-->
        <div class="overflow-x-auto scrollbar scrollbar-thin">
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
                            [sort.key = item.key, sort.trigger=!sort.trigger] :
                            ''"
                        >
                            <!--Label-->
                            <span v-text="item.label"/>
                            <!--Sort Icon-->
                            <span v-show="sortableFields.includes(item.key)">
                                <transition name="fade" mode="out-in">
                  <!--Sort Direction Icon-->
                  <svg
                      v-if="sort.key === item.key"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      :class="[
                          'transform ',
                          sort.direction === 'desc' ? 'rotate-180' : '',
                          'transition-size-short'
                          ]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"
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
                </tr>
                </thead>
                <!--Content-->
                <tbody>
                <!--Content Row-->
                <tr
                    v-for="(item,itemIndex) in regeneratedContent"
                    :key="itemIndex"
                    class="table-content-row"
                    :class="[
                        {'table-content-zebra-row': features.table.zebraRow},
                        {'table-content-hover-row': features.table.hoverRow},
                        {'table-content-border-row': features.table.borderRow},
                        ]"
                >
                    <!--Cells of The Content Row-->
                    <td
                        v-for="(cell,cellKey,cellIndex) in item"
                        :key="cellKey"
                        :class="contentCellStyle(itemIndex,cellIndex)"
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
                </tr>
                <!--Empty Content Notification-->
                <tr v-if="regeneratedContent.length === 0">
                    <td :colspan="regeneratedHeader.length">
                        <div
                            class="table-no-content"
                            :class="`radius-${features.table.radius}`"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <span v-t="'anyContentMessage'"/>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

            <!--Paginator-->
            <div
                v-if="filteredContent.length > perPageItem"
                 class="flex py-4 justify-center"
            >
                <t-paginate
                    v-model="activePage"
                    :jump="features.pagination.jump"
                    :range="5"
                    :total="filteredContent.length"
                    :radius="features.table.radius"
                    :per-page-item="perPageItem"
                    :previous-text="features.pagination.previousText"
                    :next-text="features.pagination.nextText"
                    :detail="features.pagination.detail"
                    :detail-text="features.pagination.detailText"
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
                    <h4 class="font-bold text-lg" v-text="optionsModalColumnOrder"/>
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
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-move" fill="none"
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
                            />
                            <span class="pointer-events-none select-none" v-text="item.label"/>
                        </div>
                    </div>
                </div>
            </template>
            <template #footer-left>

                <div class="inline-flex whitespace-nowrap items-center space-x-2">
                    <span v-t="'itemsCountPerPage'"/>
                    <t-input-select
                        v-model.number="perPageItem"
                        :options="dynamicPerPageItemRange"
                        :clear-button="false"
                        place-holder="t('itemsCountPerPage')"
                    />
                </div>
            </template>
        </t-modal>
    </teleport>
</template>

<script>
import {computed, defineComponent, onBeforeMount, reactive, ref, toRefs, watch, watchEffect} from "vue";
import TPaginate from "@/Components/Paginate/TPaginate";
import TButton from "@/Components/Button/TButton";
import TModal from "@/Components/Modal/TModal";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";
import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox";
import TInputText from "@/Components/Form/Inputs/TInputText";
import _ from "lodash";
import {useI18n} from "vue-i18n";
import table_en from "@/Lang/en/table_lang";
import table_tr from "@/Lang/tr/table_lang";

export default defineComponent({
    name: "TTable",
    components: {
        TInputText,
        TInputCheckBox,
        TInputSelect,
        TModal,
        TButton,
        TPaginate
    },
    props: {
        features: {
            type: Object,
            default() {
                return {
                    table: {
                        design: "filled",
                        seperatedRow: false,
                        rowBorder: true,
                        zebraRow: true,
                        radius: 3,
                        uniqueIdKey: "id",
                        perPage: 5
                    },
                    pagination: {
                        status: true,
                        range: 5,
                        jump: true,
                        radius: 3,
                        arrowText: true,
                        reverse: false,
                        detail: true,
                    },
                    actions: {
                        status: true,
                        headerText: "Actions"
                    }
                };
            }
        },
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
        }
    },
    setup(props, {slots}) {
        const {header, content, features} = toRefs(props);
        const search = ref("");
        const activeHeaders = reactive([]);
        const sortableFields = reactive([]);
        const simpleSearchableFields = reactive([]);
        const showAdvancedSearchPanel = ref(false);
        const showCustomizeModal = ref(false);
        const activePage = ref(1);
        const perPageItem = ref(features.value['table'].perPage);
        const {t} = useI18n({
            messages: {
                en: table_en,
                tr: table_tr
            }
        });

        /*Generate Arrays from Header*/
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
            /*Generate Searchable Key Array*/
            header.value.forEach(item => {
                if (item.simpleSearchable) {
                    simpleSearchableFields.push(item["key"]);
                }
            });
        });

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
            let newContent = [...paginatedContent.value];
            return newContent.map(item => {
                let row = {};
                activeHeaders.forEach(key => {
                    row[key] = item[key];
                });
                return row;
            });
        });

        /*Generating Style Classes*/
        const contentCellStyle = (itemIndex, cellIndex) => {
            let style;
            let diffOperator;
            if (perPageItem.value > regeneratedContent.value.length) {
                diffOperator = regeneratedContent.value.length
            } else {
                diffOperator = perPageItem.value
            }
            style = "table-content-cell" + " " +
                ((itemIndex === 0) && (cellIndex === 0) ? "radius-tl-" + features.value["table"].radius :
                    (itemIndex === 0) && (cellIndex === regeneratedHeader.value.length - 1) ? "radius-tr-" + features.value["table"].radius :
                        (itemIndex + 1 === diffOperator) && (cellIndex === 0) ? "radius-bl-" + features.value["table"].radius :
                            (itemIndex + 1 === diffOperator) && (cellIndex === regeneratedHeader.value.length - 1) ? "radius-br-" + features.value["table"].radius : "");
            return style;
        };

        /*Calculate Items in Per Page Select Data*/
        const dynamicPerPageItemRange = computed(() => {
            let rowCounts = [5, 15, 25, 50, 75, 100];
            let list = [];
            rowCounts.forEach(item => {
                if (content.value.length > item) {
                    list.push({key: item, label: item});
                }
            });
            return list;
        });

        /*Generate Filtered Data*/
        const paginatedContent = computed(() => {
            return sortedContent.value.slice((activePage.value - 1) * perPageItem.value, perPageItem.value * activePage.value);
        });

        const filteredContent = computed(() => {
            if (header.value.filter(h => h.simpleSearchable === true).length > 0) {
                return content.value.filter((item) => {
                    let query;
                    header.value.filter(h => h.simpleSearchable === true).forEach(i => {
                        query = item[i.key].toLowerCase().includes(search.value.toLowerCase()) || query;
                    });

                    return query;
                });
            } else {
                return content.value;
            }

        });

        const sortedContent = computed(() => {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            return filteredContent.value.sort((a, b) => {
                if (a[sort.key] < b[sort.key]) {
                    return sort.direction === 'asc' ? -1 : 1;
                } else if (a[sort.key] > b[sort.key]) {
                    return sort.direction === 'asc' ? 1 : -1;
                } else {
                    return 0
                }
            })
        })

        const sort = reactive({
            trigger: true,
            key: '',
            direction: 'desc'
        })

        watch(() => _.cloneDeep(sort), (newValue, oldValue) => {
            if (newValue.key === oldValue.key) {
                if (sort.direction === 'asc') {
                    sort.direction = 'desc'
                } else {
                    sort.direction = 'asc'
                }
            }
        }, {
            deep: true
        })

        const hasSlot = name => !!slots[name];
        return {
            hasSlot,
            onDrop,
            onDragLeave,
            onDragOver,
            startDrag,
            contentCellStyle,
            sort,
            sortableFields,
            dynamicPerPageItemRange,
            regeneratedHeader,
            regeneratedContent,
            search,
            simpleSearchableFields,
            activeHeaders,
            showAdvancedSearchPanel,
            showCustomizeModal,
            activePage,
            paginatedContent,
            filteredContent,
            t,
            perPageItem
        };
    }
});
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
