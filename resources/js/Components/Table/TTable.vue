<template>
  <div class="table-container">
    <!--Top Bar-->
    <div
        v-if="$slots.search || searchable.length>0 || $slots.right"
        class="table-bar">
      <!--Top Bar Main Area-->
      <div
          class="table-top-container">
        <!--Left Area-->
        <div v-if="searchable.length>0" class="table-top-left">
          <t-search-icon class="table-top-search-icon"/>
          <!--Search Box-->
          <input v-model="search"
                 id="search"
                 placeholder="Simple Search"
                 type="text"
                 @change="filteredContent">
          <!--PagedItem Count Selector-->
          <div v-if="pagination"
               class="table-top-pagination"
               title="Paginated item count"
               @click="showPagedItemChooser = !showPagedItemChooser">
            {{ pagedItem }}
          </div>
          <div v-if="showPagedItemChooser"
               class="table-top-pagination-ul">
            <ul>
              <li v-for="i in 5" class="table-top-pagination-li"
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
        <div v-if="$slots.right" class="table-top-right">
          <slot name="right"/>
        </div>
      </div>
      <!--Advanced Search Area-->
      <transition v-if="$slots.search" name="search">
        <div v-if="showSearch" class="table-advanced-search-area">
          <div class="whitespace-normal pb-2">
            <slot name="search"/>
          </div>
        </div>
      </transition>
    </div>
    <!--Table-->
    <div :class="[
            'overflow-x-auto scrollbar scrollbar-thin ',
            calculatedTableStyle,
            ]">
      <table class="w-full">
        <!--Header-->
        <thead>
        <!--Header Row-->
        <tr :class="headerColors[color]">
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
                        contentColors[color],
                        zebra && index%2 === 0 ? 'bg-opacity-0' : 'bg-opacity-10',
                        paginatedContent.length > index+1 && border && 'border-b'
                        ]">
          <!--Content Cell-->
          <td v-for="i in header.length" :key="i" class="whitespace-normal">
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
import TCollection from "@/Components/Icon/TCollectionIcon";
import TPaginate from "@/Components/Paginate/TPaginate";
import TAdjustments from "@/Components/Icon/TAdjustmentsIcon";
import TSearchIcon from "@/Components/Icon/TSearchIcon";
import {tableStyleMixin} from "@/Mixins/Styles/tableStyleMixin";
library.add(faInfoCircle)

export default {
  name: "TTable",
  components: {
    TSearchIcon,
    TAdjustments,
    TPaginate, TCollection, InputText, TInputGroup, TSearchCircle
  },
  mixins: [tableStyleMixin],
  props: {
    header: {
      type: Array
    },
    content: {
      type: Array
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
      default: Array
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
