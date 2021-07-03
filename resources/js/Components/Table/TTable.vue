<template>
    <div class="w-full">
        <!--Top Bar-->
        <div
            v-if="$slots.search || searchable.length>0 || $slots.right"
            class="flex flex-col">
            <!--Main Area-->
            <div
                class="flex flex-col md:flex-row justify-between my-2 gap-2 md:gap-0">
                <!--Left Area-->
                <div v-if="searchable.length>0" class="relative inline-flex items-center min-w-24  select-none">
                    <t-search-icon class="absolute left-2 w-5 h-5 text-gray-300 overflow-hidden"/>
                    <!--Search Box-->
                    <input v-model="search"
                           class="pl-8 w-full border-2 border-gray-300 rounded-full"
                           placeholder="Simple Search"
                           type="text"
                           @change="filteredContent">
                    <!--PagedItem Count Selector-->
                    <div v-if="pagination"
                         class="absolute right-11 bg-gray-200 h-9 items-center justify-center flex w-8 cursor-pointer hover:bg-blue-500 hover:text-white"
                         title="Paginated item count"
                         @click="showPagedItemChooser = !showPagedItemChooser">
                        {{ pagedItem }}
                    </div>
                    <div v-if="showPagedItemChooser"
                         class="absolute right-10 top-11 bg-white border rounded-md overflow-hidden">
                        <ul>
                            <li v-for="i in 5" class="text-center bg-white hover:bg-gray-200 cursor-pointer px-2"
                                @click="pagedItem = i*5; showPagedItemChooser=false">{{ i * 5 }}
                            </li>
                        </ul>
                    </div>

                    <!--Advanced Search Trigger-->
                    <div
                        v-if="$slots.search"
                        class="absolute right-1 px-2 flex cursor-pointer bg-gray-200 hover:bg-blue-500 hover:text-white items-center rounded-r-full h-9 w-9"
                        @click="showSearch = !showSearch">
                        <t-adjustments class="w-5 h-5"/>
                    </div>
                </div>
                <!--Right Area-->
                <div v-if="$slots.right" class="inline-flex justify-center md:justify-end items-center gap-2">
                    <slot name="right"/>
                </div>
            </div>
            <!--Advanced Search Area-->
            <transition v-if="$slots.search" name="search">
                <div v-if="showSearch" class="p-2 mb-4 bg-white border rounded-lg">
                    <div class="whitespace-normal pb-2">
                        <slot name="search"/>
                    </div>
                </div>
            </transition>
        </div>
        <!--Table-->
        <div :class="[
            'overflow-x-auto scrollbar scrollbar-thin',
            shadow && 'shadow-md',
            this.color.includes('light') && 'border border-' + this.color.split('-')[1] + '-500',
            radiusStyle,
            scrollStyle
            ]">
            <table class="w-full">
                <!--Header-->
                <thead>
                <!--Header Row-->
                <tr :class="headerStyle">
                    <!--Header Cell-->
                    <th
                        v-for="(item,index) in header"
                        :key="index"
                        :style="{width: item.width ? item.width+'%' : 'auto'}"
                    >
                        <div :class="[
                            'flex px-4 py-2',
                            item.align === 'right' ? 'justify-end' :
                            item.align === 'center' ? 'justify-center' :
                            'justify-start'
                            ]">
                            {{ item.label }}
                        </div>
                    </th>
                </tr>
                </thead>
                <!--Content-->
                <tbody class="bg-white">
                <tr v-if="paginatedContent.length === 0">
                    <td :class="noContentStyle" :colspan="header.length">
                        <div class="noContentStyle">
                            <font-awesome-icon icon="info-circle"/>
                            Any record not found
                        </div>
                    </td>
                </tr>
                <!--Content Row-->
                <tr
                    v-for="(item,index) in paginatedContent"
                    :key="index"
                    :class="[
                        'transition duration-300 ease-in-out',
                        contentStyle,
                        zebra && index%2 === 0 ? 'bg-opacity-0' : 'bg-opacity-10',
                        paginatedContent.length > index+1 && border && 'border-b'
                        ]">
                    <!--Content Cell-->
                    <td v-for="i in header.length" :key="i" class="whitespace-nowrap">
                        <div :class="[
                            'flex px-4 py-2',
                            header[i-1].align === 'right' ? 'justify-end' :
                            header[i-1].align === 'center' ? 'justify-center' :
                            'justify-start'
                        ]">
                            <!--SlotScope Content-->
                            <span
                                v-if="!$scopedSlots[header[i-1].key]"
                                v-html="item[header[i-1].key]"
                            />
                            <!--Simple Content-->
                            <slot
                                v-else
                                :name="header[i-1].key"
                                :props="item"
                            />

                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-if="filteredContent.length > pagedItem" class="flex py-4 justify-center">
            <t-paginate v-model="page" :color="paginationStyle" :range="5"
                        :total="Math.ceil(filteredContent.length/pagedItem)"/>
        </div>
    </div>
</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import TSearchCircle from "@/Components/Icon/TSearchCircleIcon";
import TInputGroup from "@/Components/Form/TInputGroup";
import InputText from "@/Components/Form/Inputs/TInputText";
import TInputDropdown from "@/Components/Form/Inputs/TInputSelect";
import TInputDropdownItem from "@/Components/Form/Inputs/TInputSelectItem";
import TCollection from "@/Components/Icon/TCollectionIcon";
import TPaginate from "@/Components/Paginate/TPaginate";
import TAdjustments from "@/Components/Icon/TAdjustmentsIcon";
import TSearchIcon from "@/Components/Icon/TSearchIcon";
import {radiusSizeMixin} from "@/Mixins/radiusSizeMixin";

library.add(faInfoCircle)

export default {
    name: "TTable",
    components: {
        TSearchIcon,
        TAdjustments,
        TPaginate, TCollection, TInputDropdownItem, TInputDropdown, InputText, TInputGroup, TSearchCircle
    },
    mixins: [radiusSizeMixin],
    props: {
        header: {
            type: Array
        },
        content: {
            type: Array
        },
        color: {
            type: String,
            default: 'white'
        },
        paginationColor: {
            type: String,
        },
        pagination: {
            type: Boolean,
            default: false
        },
        searchable: {
            type: Array,
            default: []
        },
        zebra: {
            type: Boolean,
            default: true
        },
        border: {
            type: Boolean,
            default: true
        },
        shadow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            search: '',
            showSearch: false,
            showPagedItemChooser: false,
            pagedItem: this.pagination ? 5 : 10,
            page: 1
        }
    },
    computed: {
        headerStyle() {
            /*Color Styles*/
            /*Solid*/
            if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-500 bg-opacity-95 text-white';
            } else if (this.color === 'black') {
                return 'bg-black text-white'
            } else if (this.color === 'white') {
                return 'bg-white border-b-2'
            }
            /*Light*/
            if (this.color.includes('light')) {
                return 'bg-' + this.color.split('-')[1] + '-50 text-' + this.color.split('-')[1] + '-600 border-'+this.color.split('-')[1]+'-500 border-b-2';
            }
            /*Gradient*/
            if (this.color.includes('gradient')) {
                return 'bg-gradient-to-r from-' + this.color.split('-')[1] + '-500 to-' + this.color.split('-')[3] + '-700 text-white';
            }
        },
        contentStyle() {
            /*Color Styles*/
            /*Solid*/
            if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
                return 'bg-' + this.color + '-500 hover:bg-' + this.color + '-300 border-' + this.color + '-200';
            } else if (this.color === 'black') {
                return 'bg-black hover:bg-gray-900 hover:text-white'
            } else if (this.color === 'white') {
                return 'bg-white border-gray-200 hover:bg-gray-200'
            }
            /*Light*/
            if (this.color.includes('light')) {
                return 'bg-' + this.color.split('-')[1] + '-200 hover:bg-' + this.color.split('-')[1] + '-300 border-' + this.color.split('-')[1] + '-300 text-' + this.color.split('-')[1] + '-600';
            }
            /*Gradient*/
            if (this.color.includes('gradient')) {
                return 'bg-gradient-to-r from-' + this.color.split('-')[1] + '-500 to-' + this.color.split('-')[3] + '-700 text-white';
            }
        },
        scrollStyle() {
            /*Color Styles*/
            /*Solid*/
            if (!this.color.includes('-') && this.color !== 'black' && this.color !== 'white') {
                return 'scrollbar-thumb-' + this.color + '-500 scrollbar-track-' + this.color + '-300';
            } else if (this.color === 'black') {
                return 'scrollbar-thumb-gray-700 scrollbar-track-gray-300';
            } else if (this.color === 'white') {
                return 'scrollbar-thumb-gray-500 scrollbar-track-gray-300';
            }
            /*Light*/
            if (this.color.includes('light')) {
                return 'scrollbar-thumb-' + this.color.split('-')[1] + '-500 scrollbar-track-' + this.color.split('-')[1] + '-300';
            }
            /*Gradient*/
            if (this.color.includes('gradient')) {
                return 'scrollbar-thumb-' + this.color.split('-')[1] + '-500 scrollbar-track-' + this.color.split('-')[1] + '-300';
            }
        },
        paginationStyle() {
            if (this.color && !this.paginationColor) {
                return this.color
            } else {
                return this.paginationColor
            }
        },
        noContentStyle() {
            let noContentStyle;
            if (this.color === 'white') {
                noContentStyle = 'bg-red-200 text-gray-600 text-center p-3'
            } else if (this.color === 'black') {
                noContentStyle = 'bg-gray-500 text-gray-200 text-center p-3'
            } else {
                noContentStyle = 'bg-' + this.color + '-50  text-' + this.color + '-500 text-center p-3'
            }
            return noContentStyle
        },
        paginatedContent() {
            let content = [...this.finalContent]
            return content.slice((this.page - 1) * this.pagedItem, this.pagedItem * this.page)
        },
        filteredContent() {
            return this.content.filter((item) => {
                let query;
                for (let i = 0; this.searchable.length > i; i++) {
                    query = item[this.searchable[i]].toLowerCase().includes(this.search.toLowerCase()) || query

                }

                return query
            })
        },
        finalContent() {
            if (this.searchable.length > 0 && this.searchable) {
                return this.filteredContent
            } else {
                return this.content
            }
        }
    }
}
</script>

<style scoped>
.search-enter-active, .search-leave-active {
    transition: all .75s;
}

.search-enter, .search-leave-to {
    opacity: 0;
    max-height: 0;
}

.search-enter-to, .search-leave {
    opacity: 1;
    max-height: 500px;
}
</style>
