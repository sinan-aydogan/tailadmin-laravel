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
        <div class="table-simple-search-container">
          <!--Search Input-->
          <input
            id="search"
            type="text"
            v-model="search"
            class="table-simple-search-input"
            :class="`radius-${features.table.radius}`"
            :placeholder="t('component.table.searchPlaceHolder')"
          />
          <!--Search Icon-->
          <svg
            class="table-simple-search-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
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
        <slot name="top-left" />
      </div>
      <!--Right-->
      <div
        v-if="hasSlot('top-right')"
        class="table-top-right"
      >
        <!--Custom Top Right Content-->
        <slot name="top-right" />
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
          <span id="title" v-t="'component.table.advancedSearch'"/>
          <slot name="search" />
        </div>
      </div>
    </transition>
    <!--Table-->
    <div class="overflow-x-auto scrollbar scrollbar-thin">
      <table class="w-full">
        <!--Header-->
        <thead>
        <!--Header Row-->
        <tr>
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
        <tr v-if="paginatedContent.length === 0" id="no-content">
          <td :colspan="regeneratedHeader.length">
            {{ regeneratedHeader }}
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span v-t="'component.table.anyContentMessage'" />
            </div>
          </td>
        </tr>
        <!--Content Row-->
        <tr
          v-for="(item,index) in paginatedContent"
          :key="index"
          :class="[
                        'transition duration-300 ease-in-out',
                        features.table.zebraRow ? 'odd:bg-gray-200' : 'bg-white',
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
                v-if="!$slots[header[i-1].key]"
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
      <t-paginate
        v-model="activePage"
        :jump="features.pagination.jump"
        :range="5"
        :total="content.total"
        :radius="features.table.radius"
        :per-page-item="features.table.perPage"
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
      title="optionsModalTitle"
      design="elegant"
    >
      <template #content>
        <div class="flex flex-col text-left">
          <h4 class="font-bold text-lg" v-text="optionsModalColumnOrder" />
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
  </teleport>
</template>

<script>
import { computed, defineComponent, onBeforeMount, reactive, ref, toRefs } from "vue";
import TPaginate from "@/Components/Paginate/TPaginate";
import { tableStyleMixin } from "@/Mixins/Styles/tableStyleMixin";
import TButton from "@/Components/Button/TButton";
import TModal from "@/Components/Modal/TModal";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";
import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "TTable",
  components: {
    TInputCheckBox,
    TInputSelect,
    TModal,
    TButton,
    TPaginate
  },
  mixins: [tableStyleMixin],
  props: {
    features: {
      type: Object,
      default() {
        return {
          table: {
            design: "filled",
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
            nextText: "Next",
            previousText: "Previous",
            detail: true,
            detailText: "Page: $a of $b"
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
  setup(props, { slots }) {
    const { header, content, features } = toRefs(props);
    const search = ref("");
    const activeHeaders = reactive([]);
    const simpleSearchableFields = reactive([]);
    const showAdvancedSearchPanel = ref(false);
    const showCustomizeModal = ref(false);
    const activePage = ref(1);
    const { t } = useI18n();

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

    /*Calculate Items in Per Page Select Data*/
    const dynamicPerPageItemRange = computed(() => {
      let rowCounts = [5, 15, 25, 50, 75, 100];
      let list = [];
      rowCounts.forEach(item => {
        if (content.value.length > item) {
          list.push({ key: item, label: item });
        }
      });
      return list;
    });


    const paginatedContent = computed(() => {
      return filteredContent.value.slice((activePage.value - 1) * features.value.table.perPage, features.value.table.perPage * activePage.value);
    });
    const filteredContent = computed(() => {
      if (header.value.filter(h => h.searchable === true).length > 0) {
        return content.value.filter((item) => {
          let query;
          header.value.filter(h => h.searchable === true).forEach(i => {
            query = item[i.key].toLowerCase().includes(search.value.toLowerCase()) || query;
          });

          return query;
        });
      } else {
        return content.value;
      }

    });


    const hasSlot = name => !!slots[name];
    return {
      hasSlot,
      onDrop,
      onDragLeave,
      onDragOver,
      startDrag,
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
      t
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
</style>
