<template>
  <!--Container-->
  <div
      class="text-input"
      ref="withSelectInput"
      :class="[errors.length>0 ? `border border-red-500 radius-${radius}`: '']"
  >
    <!--Outside Icon-->
    <div
        v-if="hasSlot('icon') && iconType==='outside'"
        class="text-input-outside-icon"
        :class="`radius-l-${radius}`"
    >
      <slot name="icon"/>
    </div>
    <!--Prepend-->
    <div
        v-if="prepend || hasSlot('prepend')"
        class="text-input-prepend"
        :class="[
                selectPosition==='left' && options[0][optionsValueKey] ? 'border-r' : '',
                hasSlot('icon') && iconType==='outside' ? '' : `border-l radius-l-${radius}`
                ]"
    >
      <span v-if="prepend" v-text="prepend"/>
      <slot v-else name="prepend"></slot>
    </div>
    <!--Left Select-->
    <div
        v-if="options[0][optionsValueKey] && selectPosition==='left'"
        @click="disabled || readOnly==='select' || readOnly==='both' ? '' : showSelectList = !showSelectList"
        class="text-input-select-container"
    >
      <!--Select Trigger-->
      <div
          class="text-input-select-trigger"
          :class="[
                    hasSlot('prepend') || prepend ? '' : `border-l radius-l-${radius}`,
                    disabled || readOnly==='select' || readOnly==='both' ? 'cursor-not-allowed' : 'cursor-pointer',
                    {'input-disabled' : disabled}
                    ]"
      >
        <!--Clear Icon-->
        <svg
            @click.stop="$emit('update:selectValue', null)"
            v-if="selectValue && !disabled && readOnly!=='select' && readOnly!=='both'"
            xmlns="http://www.w3.org/2000/svg"
            class="input-clear-icon"
            :class="selectPosition==='left' ? 'mr-1' : ''"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <!--Selected Item-->
        <span
            v-if="selectValue && selectType==='inside'"
            v-text="options.find(o=>o[optionsValueKey] === selectValue)[optionsLabelKey]"
        />
        <!--Dropdown Icon-->
        <svg
            class="w-5 h-5 transform"
            :class="[
            !showSelectList ? 'rotate-0' : '',
            (showSelectList && selectPosition==='left' && selectType !== 'inside') ? '-rotate-90' : '',
            (showSelectList && selectPosition==='right') || (showSelectList &&selectType === 'inside') ? 'rotate-90' : '',
            'transition-size-short'
            ]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24" stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
          />
        </svg>
        <!--Selected Icon-->
        <div
            v-if="selectType==='outside'"
            class="text-input-selected-indicator"
            :class="selectValue ? 'bg-green-500' : 'bg-gray-500 dark:bg-gray-700'"
        />
      </div>
      <!--Select List-->
      <div v-if="showSelectList"
           class="text-input-select-list-container"
           :class="[
                     `radius-${radius}`,
                     selectPosition==='left' ? 'left-0' : 'right-0'
                     ]"
      >
        <template v-for="item in options">
          <div
              @click.stop="showSelectList = false; $emit('update:selectValue', item[optionsValueKey])"
              class="text-input-select-list-item"
          >
            <span v-text="item[optionsLabelKey]"/>
            <svg
                v-if="item[optionsValueKey] === selectValue"
                xmlns="http://www.w3.org/2000/svg"
                class="text-input-select-list-selected-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
        </template>
      </div>

    </div>
    <!--Input-->
    <div class="flex flex-grow">
      <!--Inside Icon-->
      <div
          v-if="hasSlot('icon') && iconType==='inside'"
          class="text-input-inside-icon"
      >
        <slot name="icon"/>
      </div>
      <!--Input Field-->
      <input
          class="input text-input"
          :class="[
                    inputStyle,
                    {'pl-10':iconType === 'inside'},
                    {'input-disabled' : disabled}
                    ]"
          :type="type"
          :id="id"
          :placeholder="placeholder"
          :value="disabled ? '' : modelValue"
          :disabled="disabled || readOnly==='text' || readOnly==='both'"
          @input="$emit('update:modelValue', $event.target.value)"
          ref="input"
      >
    </div>
    <!--Right Select-->
    <div
        v-if="options[0][optionsValueKey] && selectPosition==='right'"
        @click="disabled || readOnly==='select' || readOnly==='both' ? '' : showSelectList = !showSelectList"
        class="text-input-select-container"
    >
      <!--Select Trigger-->
      <div
          class="text-input-select-trigger"
          :class="[
                    hasSlot('append') || append ? '' : `border-r radius-r-${radius}`,
                    disabled || readOnly==='select' || readOnly==='both' ? 'cursor-not-allowed' : 'cursor-pointer',
                    {'input-disabled' : disabled}
                    ]"
      >
        <!--Clear Icon-->
        <svg
            @click.stop="$emit('update:selectValue', null)"
            v-if="selectValue && !disabled && readOnly!=='select' && readOnly!=='both'"
            xmlns="http://www.w3.org/2000/svg"
            class="input-clear-icon"
            :class="selectPosition==='right' ? 'ml-1' : ''"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <!--Selected Item-->
        <span
            v-if="selectValue && selectType==='inside'"
            v-text="options.find(o=>o[optionsValueKey] === selectValue)[optionsLabelKey]"
        />
        <!--Dropdown Icon-->
        <svg
            class="w-5 h-5 transform"
            :class="[
                        !showSelectList ? 'rotate-0' : '',
                        (showSelectList && selectPosition==='left' && selectType !== 'inside') ? '-rotate-90' : '',
                        (showSelectList && selectPosition==='right') || (showSelectList &&selectType === 'inside') ? 'rotate-90' : '',
                        'transition-size-short'
                        ]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24" stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
          />
        </svg>
        <!--Selected Icon-->
        <div
            v-if="selectType==='outside'"
            class="text-input-selected-indicator"
            :class="selectValue ? 'bg-green-500' : 'bg-gray-500 dark:bg-gray-700'"
        />
      </div>
      <!--Select List-->
      <div v-if="showSelectList"
           class="text-input-select-list-container"
           :class="[
                     `radius-${radius}`,
                     selectPosition==='left' ? 'left-0' : 'right-0'
                     ]"
      >
        <template v-for="item in options">
          <div
              @click.stop="showSelectList = false; $emit('update:selectValue', item[optionsValueKey])"
              class="text-input-select-list-item"
          >
            <span v-text="item[optionsLabelKey]"/>
            <svg
                v-if="item[optionsValueKey] === selectValue"
                xmlns="http://www.w3.org/2000/svg"
                class="text-input-select-list-selected-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
              <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
        </template>
      </div>
    </div>
    <!--Append-->
    <div
        v-if="append || hasSlot('append')"
        class="text-input-append"
        :class="[
        `radius-r-${radius}`,
        selectPosition==='right' && options[0][optionsValueKey] ? 'border-l' : ``
        ]"
    >
      <span v-if="append" v-text="append"/>
      <slot v-else name="append"></slot>
    </div>
  </div>
</template>

<script>
import {computed, defineComponent, inject, reactive, ref, toRefs} from "vue";
import {onClickOutside} from "@vueuse/core";

export default defineComponent({
  name: "TInputText",
  props: {
    selectValue: {
      type: [String, Date, Number, Object, Array],
      default: null
    },
    modelValue: {
      type: [String, Date, Number, Object, Array],
      default: null
    },
    id: {
      type: String,
      default() {
        return "text-input-" + Number(new Date());
      }
    },
    placeholder: {
      type: String,
      default: ""
    },
    prepend: {
      type: String,
      default: ""
    },
    append: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    selectType: {
      type: String,
      default: "outside"
    },
    selectPosition: {
      type: String,
      default: ""
    },
    iconType: {
      type: String,
      default: "outside"
    },
    options: {
      type: [Object, Array],
      default() {
        return [
          {key: "", label: "Please add a options source"}
        ];
      }
    },
    optionsLabelKey: {
      type: String,
      default: "label"
    },
    optionsValueKey: {
      type: String,
      default: "key"
    },
    radius: {
      type: Number,
      default: 3
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: String,
      default: ''
    },
    clearButton: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "update:selectValue"],
  setup(props, {slots}) {
    /*Definitions*/
    const {radius, prepend, append, iconType, options, optionsValueKey, selectPosition} = toRefs(props);
    const input = ref(null);
    const withSelectInput = ref(null);
    const showSelectList = ref(false);

    /*Get Error Status*/
    const errors = inject('errors', []);

    /*Outside click for select*/
    onClickOutside(withSelectInput, () => showSelectList.value = false);

    /*Focus Action*/
    const focus = () => {
      input.value.focus();
    };

    /*Generating Style Classes*/
    const inputStyle = computed(() => {
      let radiusStyle;
      let leftSideHasItem, rightSideHasItem;

      /*Check Left Side Has Item*/
      if (prepend.value || hasSlot("prepend") || selectPosition.value === "left" || (hasSlot('icon') && iconType.value === 'outside')) {
        leftSideHasItem = true
      }

      /*Check Right Side Has Item*/
      if (append.value || hasSlot("append") || selectPosition.value === "right") {
        rightSideHasItem = true
      }

      /*Left Full and Right Empty*/
      if (leftSideHasItem && !rightSideHasItem) {
        radiusStyle = "radius-r-" + radius.value;
      }

      /*Left Empty Right Full*/
      if (!leftSideHasItem && rightSideHasItem) {
        radiusStyle = "radius-l-" + radius.value;
      }

      /*Both Empty*/
      if (!leftSideHasItem && !rightSideHasItem) {
        radiusStyle = "radius-" + radius.value;
      }

      return radiusStyle;
    });

    /*Slot Check*/
    const hasSlot = name => !!slots[name];

    return {input, withSelectInput, inputStyle, showSelectList, errors, focus, hasSlot};
  }
});
</script>
