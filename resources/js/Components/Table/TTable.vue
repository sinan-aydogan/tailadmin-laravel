<template>
    <div>
        <!--Top Bar-->
        <div class="flex flex-col">
            <!--Main Area-->
            <div class="flex w-full justify-between my-2">
                <!--Left Area-->
                <div class="relative inline-flex items-center min-w-24">
                    <t-search-icon class="absolute left-2 w-5 h-5 text-gray-300 overflow-hidden"/>
                    <!--Search Box-->
                    <input v-model="search" @change="filteredContent" class="pl-8 w-full border-2 border-gray-300 rounded-full" placeholder="Simple Search" type="text">
                    <!--PagedItem Count Selector-->
                    <div v-if="pagination" @click="showPagedItemChooser = !showPagedItemChooser" class="absolute right-11 bg-gray-200 h-9 items-center justify-center flex w-8 cursor-pointer select-none hover:bg-blue-500 hover:text-white" title="Paginated item count">
                        {{ pagedItem }}
                    </div>
                    <div v-if="showPagedItemChooser" class="absolute right-10 top-11 bg-white border rounded-md overflow-hidden">
                        <ul>
                            <li @click="pagedItem = i*5; showPagedItemChooser=false" v-for="i in 5" class="text-center bg-white hover:bg-gray-200 cursor-pointer px-2">{{ i*5 }}</li>
                        </ul>
                    </div>

                    <!--Advanced Search Trigger-->
                    <div
                        v-if="$slots.search"
                        @click="showSearch = !showSearch"
                        class="absolute right-1 px-2 flex cursor-pointer bg-gray-200 hover:bg-blue-500 hover:text-white items-center rounded-r-full h-9 w-9">
                        <t-adjustments  class="w-5 h-5"/>
                    </div>
                </div>
                <!--Right Area-->
                <div class="inline-flex items-center gap-2">
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
        <div class="rounded-md overflow-hidden shadow-lg">
            <table class="w-full">
                <thead>
                <tr :class="headerStyle">
                    <th v-for="(item,index) in header" :key="index"
                        :class="['p-2',item.align ? 'text-'+item.align : 'text-left']">{{ item.label }}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="paginatedContent.length === 0">
                    <td :class="noContentStyle" :colspan="header.length">
                        <div class="noContentStyle">
                            <font-awesome-icon icon="info-circle"/>
                            Any record not found
                        </div>
                    </td>
                </tr>
                <tr
                    v-for="(item,index) in paginatedContent"
                    :key="index"
                    :class="['hover:bg-'+color+'-200',index%2 === 0 ? 'bg-white' : 'bg-'+color+'-100']">
                    <td v-for="i in header.length" :key="i"
                        :class="['p-4',header[i-1].align ? 'text-'+header[i-1].align : 'text-left']">
                        <span v-if="!$scopedSlots[header[i-1].key]" v-html="item[header[i-1].key]"></span>
                        <slot v-else :name="header[i-1].key" :props="item"></slot>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-if="filteredContent.length > pagedItem" class="flex py-4 justify-center">
            <t-paginate :range="5" :total="Math.ceil(filteredContent.length/pagedItem)" @active="page = $event"/>
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

library.add(faInfoCircle)

export default {
    name: "TTable",
    components: {
        TSearchIcon,
        TAdjustments,
        TPaginate, TCollection, TInputDropdownItem, TInputDropdown, InputText, TInputGroup, TSearchCircle},
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
        pagination: {
            type: Boolean,
            default: false
        },
        searchable: {
            type: Array
        }
    },
    data() {
        return {
            search: '',
            showSearch: false,
            showPagedItemChooser: false,
            pagedItem: this.pagination ? 5 : 10,
            page:1
        }
    },
    computed: {
        headerStyle() {
            let headerStyle;
            if (this.color === 'white') {
                headerStyle = 'bg-white'
            } else if (this.color === 'black') {
                headerStyle = 'bg-black text-white'
            } else {
                headerStyle = 'bg-' + this.color + '-200'
            }
            return headerStyle
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
            return content.slice((this.page-1)*this.pagedItem, this.pagedItem * this.page)
        },
        filteredContent() {
            return this.content.filter((item)=>{
                let query;
                for(let i=0; this.searchable.length>i; i++){
                    query = item[this.searchable[i]].toLowerCase().includes(this.search.toLowerCase()) || query

                }

                return query
            })
        },
        finalContent() {
            if(this.searchable.length>0 && this.searchable){
                return this.filteredContent
            }else{
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
