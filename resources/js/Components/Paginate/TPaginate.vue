<template>
    <div
        class="pagination-container"
        :class="[
            `pagination-${design}-base`,
            `pagination-${design}-${color}`,
            {'flex-wrap-reverse' : reverse}
          ]"
    >
        <!--Detail-->
        <div v-if="detail || jump" class="pagination-detail-container">
            <!--Text-->
            <div class="pagination-detail-text">
                {{ t(detailText, {activePage: modelValue, totalPage: totalPage, totalRecord: total}) }}
            </div>
        </div>
        <!--Jump Button-->
        <div v-if="jump" class="pagination-detail-jump-container">
            <input
                type="text"
                :maxlength="total.toString().length"
                v-model="jumpPage"
                @keypress.enter="selectPage(Number(jumpPage))"
                class="pagination-detail-jump-input"
                :style="{width:Math.floor(total.toString().length)-(.25*total.toString().length-.5)+'rem'}"
            />
            <span @click="selectPage(Number(jumpPage))" class="pagination-detail-jump-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clip-rule="evenodd"/>
          </svg>
                </span>
        </div>
        <!--Filler-->
        <div class="flex flex-grow"></div>
        <!--Counter Container-->
        <div
            class="pagination-counters"
            :class="`radius-${radius}`"
        >
            <!--Previous-->
            <div
                :class="range >= modelValue ? 'pagination-passive-arrow' : 'pagination-arrow'"
                @click="previousPage"
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                     :class="['h-6 w-6', arrowText ? '-mx-1 md:-ml-2 md:-mr-1' : '']"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
                <span v-if="arrowText" v-t="previousText" class="pagination-arrow-text"/>
            </div>
            <!--Counter-->
            <template v-for="item in dynamicRange" :key="item">
                <span
                    :class="modelValue === item ? 'pagination-active-item' : 'pagination-item'"
                    @click="selectPage(item)"
                    v-text="item"
                />
            </template>
            <!--Next-->
            <div
                :class="Math.ceil(modelValue / range) === Math.ceil(totalPage / range) ? 'pagination-passive-arrow' : 'pagination-arrow'"
                @click="nextPage"
            >
                <span v-if="arrowText" v-t="nextText" class="pagination-arrow-text"/>
                <svg xmlns="http://www.w3.org/2000/svg"
                     :class="['h-6 w-6', arrowText ? '-mx-1 md:-mr-2 md:-ml-1' : '']"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import {computed, defineComponent, ref, toRefs} from "vue";
import {useI18n} from "vue-i18n";
import pagination_tr from "@/Lang/tr/pagination_lang";
import pagination_en from "@/Lang/en/pagination_lang";

export default defineComponent({
    name: "TPaginate",
    props: {
        modelValue: {
            type: Number,
            default: 1
        },
        design: {
            type: String,
            default: "filled"
        },
        color: {
            type: String,
            default: "gray"
        },
        reverse: {
            type: Boolean,
            default: false
        },
        radius: {
            type: Number,
            default: 3
        },
        detail: {
            type: Boolean,
            default: true
        },
        jump: {
            type: Boolean,
            default: false
        },
        total: {
            type: Number,
            default: 1
        },
        range: {
            type: Number,
            default: 5
        },
        arrowText: {
            type: Boolean,
            default: true
        },

        detailText: {
            type: String,
            default: "detailText"
        },
        nextText: {
            type: String,
            default: "next"
        },
        previousText: {
            type: String,
            default: "previous"
        }
    },
    emits: ["update:modelValue"],
    setup(props, {emit}) {
        /*Definitions*/
        const {total, modelValue, range} = toRefs(props);
        const jumpPage = ref(null);
        const {t} = useI18n({
            messages: {
                en: pagination_en,
                tr: pagination_tr
            }
        });

        /*Calculate Total Page*/
        const totalPage = computed(() => {
            return Math.ceil(total.value / range.value)
        })
        /*Select, Next and Previous Page Change Action*/
        const nextPage = () => {
            if (Math.ceil(totalPage.value / range.value) > Math.ceil(modelValue.value / range.value)) {
                let newPage = (Math.ceil(modelValue.value / range.value)) * range.value + 1;
                emit("update:modelValue", newPage);
            }
        };
        const previousPage = () => {
            if (modelValue.value > range.value) {
                let newPage = Math.floor(modelValue.value / range.value) * range.value;
                if (modelValue.value === newPage) {
                    newPage = newPage - range.value;
                }
                emit("update:modelValue", newPage);
            }
        };
        const selectPage = (item) => {
            let newPage;
            if (isNaN(item)) {
                newPage = 1;
            } else {
                if (item > totalPage.value) {
                    newPage = totalPage.value;
                } else if (1 > item) {
                    newPage = 1;
                } else {
                    newPage = item;
                }
            }

            emit("update:modelValue", newPage);
        };
        const dynamicRange = computed(() => {
            let newRange = [];
            let start;
            start = (Math.floor(modelValue.value / range.value)) * range.value;
            /*Fixing zero*/
            if (start < 0) {
                start = 1;
            } else if (modelValue.value % range.value !== 0) {
                start = start + 1;
                for (let i = start; (start + range.value) > i; i++) {
                    if (totalPage.value >= i) {
                        newRange.push(i);
                    }
                }
            } else if (modelValue.value % range.value === 0) {
                start = start - (range.value - 1);
                for (let i = start; (start + range.value) > i; i++) {
                    if (totalPage.value >= i) {
                        newRange.push(i);
                    }
                }
            }
            return newRange;
        });

        return {
            nextPage,
            previousPage,
            totalPage,
            selectPage,
            dynamicRange,
            jumpPage,
            t
        };
    }
});
</script>
