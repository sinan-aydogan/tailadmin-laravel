<template>
  <div :class="tStyle['container']">
    <!--Top Content-->
    <div class="table-top">
      <!--Left-->
      <div class="table-top-left">
        <!--Search-->
        <div class="table-simple-search-container">
          <!--Search Input-->
          <input :class="tStyle['searchInput']" v-model="tableRequest.searchText" placeholder="search for ..." />
          <!--Search Icon-->
          <svg class="table-simple-search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <!--Customize Showing Options-->
        <t-button
          :color="features.table.darkMode ? 'black' : 'white'"
          :radius="features.table.radius"
          border
          @click="showCustomizeModal = !showCustomizeModal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </t-button>
        <!--Advanced Filter Button-->
        <t-button
          :color="features.table.darkMode ? 'black' : 'white'"
          :radius="features.table.radius"
          border
          @click="showAdvancedFilters = !showAdvancedFilters"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </t-button>
        <!--Custom Top Left Content-->
        <slot name="top-left" />
      </div>
      <!--Right-->
      <div class="table-top-right">
        <t-button color="green" design="light" border>+ Add New</t-button>
        <!--Custom Top Right Content-->
        <slot name="top-right" />
      </div>
    </div>
    <!--Advanced Filters Area-->
    <div v-show="showAdvancedFilters" class="flex flex-col w-full my-4 border bg-white px-4 py-2">
      <span class="font-bold mb-2">Advanced Filters</span>
      <div class="grid grid-cols-2 gap-4 mb-2">
        <div
          v-for="item in regeneratedHeader"
          :key="item.key"
          :class="[item.compareOperators ? 'grid grid-cols-2': 'grid grid-cols-1']"
        >
          <t-input-group label="Condition">
            <t-input-select
              v-if="item.compareOperators"
              :options="item.compareOperators"
            />
          </t-input-group>
          <t-input-group :label="item.label">
            <!--Text-->
            <t-input-text
              v-if="item.filterStatus && item.filterType==='text'"
              v-model.lazy="advancedFilters[item.key]"
              :options="item.compareOperators"
            />
            <!--Select-->
            <t-input-select
              v-if="item.filterStatus && item.filterType==='select'"
              v-model="advancedFilters[item.key]"
              :options="item.filterSource"
            />
          </t-input-group>
        </div>
      </div>
    </div>
    <!--Table-->
    <table :class="tStyle['table']">
      <!--Header-->
      <thead class="table-thead">
      <!--Header Row-->
      <tr>
        <!--Header Items-->
        <td v-for="item in regeneratedHeader" :key="item.key" class="table-header-cell">
          <div
            :class="[
              'flex items-center cursor-pointer',
              item.align === 'right' ? 'justify-end' :
              item.align === 'center' ? 'justify-center' :
              'justify-start'
              ]"
            @click="tableRequest.sortKey=item.key; tableRequest.sortDirection= !tableRequest.sortDirection"
          >
            <!--Label-->
            <span>
              {{ item.label }}
            </span>
            <!--Sort Icon-->
            <span
              v-show="tableRequest.sortKey===item.key"
              :class="[
                    'transform transition',
              tableRequest.sortDirection ? 'rotate-180' : ''
              ]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
              </svg>
            </span>
          </div>

        </td>
        <!--Actions Header Cell-->
        <td v-if="features.actions.status" class="table-header-cell">
          {{ features.actions.headerText }}
        </td>
      </tr>
      </thead>
      <!--Content-->
      <tbody class="table-tbody">
      <!--Content Rows-->
      <tr v-for="(item,itemIndex) in regeneratedContent" :key="itemIndex">
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
            <span v-if="!hasSlot(cellKey)">
              {{ cell }}
            </span>
            <!--SlotScope Content-->
            <slot
              v-else
              :name="cellKey"
              :props="item"
            />
          </div>
        </td>
        <!--Actions Cell-->
        <td
          v-if="features.actions.status"
          :class="actionsCellStyle(itemIndex)"
        >
          <div class="flex justify-end">
            <t-dropdown align="right" button-design="outline" trigger-type="rich" size="fit">
              <template #trigger>
                <div class="flex h-full items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </div>
              </template>
              <t-list :radius="3" style="filter: drop-shadow(0px 1px 1px #718096)">
                <t-list-item class="hover:bg-red-100 hover:text-red-500 cursor-pointer text-sm"
                             @click="deleteItem(item)">
                  <div class="flex items-center h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Delete
                  </div>
                </t-list-item>
                <t-list-item class="hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm">
                  <div class="flex items-center h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                  </div>
                </t-list-item>
                <t-list-item class="hover:bg-blue-100 hover:text-blue-500 cursor-pointer text-sm">
                  <div class="flex items-center h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View
                  </div>
                </t-list-item>
              </t-list>
            </t-dropdown>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <!--Paginator-->
    <div class="table-paginator">
      <t-back-end-table-paginate
        v-model="tableRequest.activePage"
        :dark-mode="features.pagination.darkMode"
        :jump="features.pagination.jump"
        :total="content.total"
        :range="5"
        :radius="features.table.radius"
        :per-page-item="Number(content.per_page)"
        :previous-text="features.pagination.previousText"
        :next-text="features.pagination.nextText"
        :detail="features.pagination.detail"
        :detail-text="features.pagination.detailText"
      />
    </div>
  </div>

  <!--Modals-->
  <teleport to="body">
    <!--Header Fields/Per-page Item Customize Modal-->
    <t-modal
      v-model="showCustomizeModal"
      title="Showing Options"
      design="elegant"
      :dark-mode="features.table.darkMode"
    >
      <template #content>
        <div class="flex flex-col text-left">
          <h4 class="font-bold text-lg">Column Order and Visibility</h4>
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
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 cursor-move" fill="none" viewBox="0 0 24 24"
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
                    rx="0" />
                  <rect
                    style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                    id="rect10347-4"
                    width="2"
                    height="2"
                    x="5.7066164"
                    y="20.149561"
                    rx="0" />
                  <rect
                    style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                    id="rect10347-8"
                    width="2"
                    height="2"
                    x="5.7066164"
                    y="3.3010411"
                    rx="0" />
                  <rect
                    style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                    id="rect10347-1"
                    width="2"
                    height="2"
                    x="14.130877"
                    y="3.3010411"
                    rx="0" />
                  <rect
                    style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                    id="rect10347-4-4"
                    width="2"
                    height="2"
                    x="5.7066164"
                    y="11.725301"
                    rx="0" />
                  <rect
                    style="fill:none;fill-opacity:0.694779;stroke-width:2.22226;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:8"
                    id="rect10347-8-0"
                    width="2"
                    height="2"
                    x="14.130877"
                    y="20.149561"
                    rx="0" />
                </g>
              </svg>
              <t-input-check-box v-model="activeHeaders" :input-value="item.key"
                                 class="inline-block select-none" />
              <span class="pointer-events-none select-none">
                    {{ item.label }}
                  </span>
            </div>
          </div>
        </div>
      </template>
      <template #footer-left>

        <div class="inline-flex whitespace-nowrap items-center space-x-2">
                <span>
                  Items in per page:
                </span>
          <t-input-select
            v-model.number="tableRequest.perPageItem"
            :options="dynamicPerPageItemRange"
            place-holder="Items Count in a page"
          />
        </div>
      </template>
    </t-modal>
    <!--Deleting Confirmation Modal-->
    <t-modal
      v-model="showDeleteModal"
      :title="!hasSlot('deleteModalContent') ? features.deleteModal.headerText : ''"
      :content="!hasSlot('deleteModalContent') ? features.deleteModal.contentText : ''"
      :icon="!hasSlot('deleteModalContent') ? features.deleteModal.icon : ''"
    >
      <template #content>
        <slot name="deleteModalContent" :props="selectedItem" />
      </template>
      <template #footer-left>
        <t-button
          design="light"
          color="green"
          @click="showDeleteModal=!showDeleteModal"
        >
          No, Nevermind
        </t-button>
      </template>
      <template #footer-right>
        <form id="delete" @submit.prevent="deleteUser">
          <t-button
            design="light"
            color="gray"
            type="submit">
            Yes, Delete
          </t-button>
        </form>
      </template>
    </t-modal>
  </teleport>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import { computed, defineComponent, reactive, toRefs, watch, ref, onBeforeMount } from "vue";
import { debouncedWatch } from '@vueuse/core'
import TBackEndTablePaginate from "@/Components/Paginate/TBackEndTablePaginate";
import TButton from "@/Components/Button/TButton";
import TModal from "@/Components/Modal/TModal";
import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";
import TDropdown from "@/Components/Dropdown/TDropdown";
import TList from "@/Components/List/TList";
import TListItem from "@/Components/List/TListItem";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";

export default defineComponent({
  name: "TBackEndTable",
  components: {
    TInputText,
    TInputGroup,
    TListItem,
    TList,
    TDropdown,
    TInputSelect,
    TInputCheckBox,
    TModal,
    TButton,
    TBackEndTablePaginate
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
    features: {
      type: Object,
      default() {
        return {
          table: {
            darkMode: false,
            design: "filled",
            rowBorder: true,
            zebraRow: true,
            radius: 3,
            uniqueIdKey: "id"
          },
          pagination: {
            status: true,
            range: 5,
            darkMode: false,
            jump: true,
            radius: 3,
            arrowText: true,
            reverse: false,
            nextText: "Next",
            previousText: "Previous",
            detail: true,
            detailText: "Page: $a of $b"
          },
          actions: {
            status: true,
            headerText: "Actions"
          },
          deleteModal: {
            headerText: "Item's deleting",
            contentText: ""
          }
        };
      }
    },
    contentKey: {
      type: String,
      default: null
    }
  },
  setup(props, { slots }) {
    /*Definitions*/
    const { header, content, contentKey, features } = toRefs(props);
    const dataLoading = ref(false)
    const tableRequest = reactive({
      activePage: 1,
      searchText:'',
      perPageItem: 15,
      sortKey: null,
      sortDirection: false
    });
    const activeHeaders = reactive([]);
    const searchableFields = reactive([]);
    const selectedItem = ref(null);
    const advancedFilters = reactive({});
    /*Modal Show Hide Definitions*/
    const showCustomizeModal = ref(false);
    const showDeleteModal = ref(false);
    const showAdvancedFilters = ref(false);

    /*Generating Style Classes*/
    const tStyle = reactive({});
    tStyle["container"] = computed(() => {
      return "table-outside-container" + " " +
        "table-" + (features.value["table"].darkMode ? "dark" : "light") + " " +
        "table-" + features.value["table"].design;
    });
    tStyle["table"] = computed(() => {
      return "table-container";
    });
    tStyle["searchInput"] = computed(() => {
      return "table-simple-search-input" + " " +
        "radius-" + +features.value["table"].radius;
    });
    const contentCellStyle = (itemIndex, cellIndex) => {
      let style;
      style = "table-content-cell" + " " +
        ((itemIndex === 0) && (cellIndex === 0) ? "radius-tl-" + features.value["table"].radius :
          (itemIndex === 0) && (cellIndex === regeneratedHeader.value.length - 1) ? "radius-tr-" + features.value["table"].radius :
            (itemIndex + 1 === content.value.data.length) && (cellIndex === 0) ? "radius-bl-" + features.value["table"].radius :
              (itemIndex + 1 === content.value.data.length) && (cellIndex === regeneratedHeader.value.length - 1) ? "radius-br-" + features.value["table"].radius : "");
      return style;
    };
    const actionsCellStyle = (itemIndex) => {
      let style;
      style = "table-content-cell" + " " +
        ((itemIndex === 0) ? "radius-tr-" + features.value["table"].radius :
          (itemIndex + 1 === content.value.data.length) ? "radius-br-" + features.value["table"].radius : "");
      return style;
    };

    /*Generate Arrays from Header*/
    onBeforeMount(() => {
      /*Generate Showing Fields Array*/
      header.value.forEach(item => {
        if (item.status) {
          activeHeaders.push(item["key"]);
        }
      });
      /*Generate Searchable Key Array*/
      header.value.forEach(item => {
        if (item.searchable) {
          searchableFields.push(item["key"]);
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
      let newContent = [...content.value["data"]];
      return newContent.map(item => {
        let row = {};
        activeHeaders.forEach(key => {
          row[key] = item[key];
        });
        return row;
      });
    });

    /*Calculate Items in Per Page Select Data*/
    const dynamicPerPageItemRange = computed(() => {
      let rowCounts = [5, 15, 25, 50, 75, 100];
      let list = [];
      rowCounts.forEach(item => {
        if (content.value.total > item) {
          list.push({ key: item, label: item });
        }
      });
      return list;
    });


    /*Watch Actions For Dynamic Data*/
    debouncedWatch(()=>Object.values(tableRequest), () => {
      Inertia.reload({
        method: 'post',
        data: {
          tableRequest: {
            perPage: Number(tableRequest.perPageItem),
            sortKey: tableRequest.sortKey,
            sortDirection: tableRequest.sortDirection,
            searchText: tableRequest.searchText,
            searchable: searchableFields
          }
        },
        only: [contentKey.value]
      });
    },
      { debounce: 500 }
    );
    watch(()=>tableRequest.activePage,()=>{
        Inertia.reload({
          data: {
            page: tableRequest.activePage
          },
          only: [contentKey.value]
        }
      )
      })
    watch(advancedFilters, () => {
      tableRequest.activePage = 1;
      Inertia.reload({
        data: {
          page: 1,
          ...advancedFilters
        },
        only: [contentKey.value],
        onStart: visit => {dataLoading.value = true},
        onSuccess: page => {dataLoading.value = false}
      });
    });


    /*Content Delete Confirm Modal Function*/
    const deleteItem = (item) => {
      selectedItem.value = item;
      showDeleteModal.value = true;

      let generatedContentText = features.value["deleteModal"].contentText;
      let replacingKeys = [...generatedContentText.matchAll(/(?:{\$)[A-Za-z0-9]+}/g)];
      replacingKeys.forEach(async (key) => {
        let value = selectedItem.value[key[0].substring(2, key[0].length - 1)];
        generatedContentText = generatedContentText.replace(key[0], value);
      });

      features.value["deleteModal"].contentText = generatedContentText;

    };

    /*Slot Check*/
    const hasSlot = name => !!slots[name];

    return {
      dataLoading,
      hasSlot,
      tStyle,
      contentCellStyle,
      actionsCellStyle,
      dynamicPerPageItemRange,
      showCustomizeModal,
      activeHeaders,
      regeneratedHeader,
      regeneratedContent,
      startDrag,
      onDrop,
      onDragLeave,
      onDragOver,
      selectedItem,
      showDeleteModal,
      showAdvancedFilters,
      advancedFilters,
      deleteItem,
      tableRequest
    };
  }
});
</script>
