<template>
  <!--Container-->
  <div  class="text-input">
    <!--Icon-->
    <div
      v-if="hasSlot('icon')"
      :class="tStyle['icon']">
      <slot name="icon"></slot>
    </div>
    <!--Inline Icon-->
    <!--Prepend-->
    <div v-if="prepend || hasSlot('prepend')" :class="tStyle['prepend']">
      <span v-if="prepend" v-text="prepend"/>
      <slot v-else name="prepend"></slot>
    </div>
    <!--Input Field-->
    <input
      :class="tStyle['input']"
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      ref="input"
    >
    <!--Append-->
    <div v-if="append || hasSlot('append')" :class="tStyle['append']">
      <span v-if="append" v-text="append"/>
      <slot v-else name="append"></slot>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "TInputText",
  props: {
    modelValue: {
      type: [Number, String, Date],
      default: null
    },
    id: {
      type: String,
      default() {
        return "text-select-input-" + Number(new Date());
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
    radius: {
      type: Number,
      default: 3
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    clearButton: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, {slots}){
    /*Definitions*/
    const {radius, prepend, append} = toRefs(props)
    const input = ref(null)

    /*Focus Action*/
    const focus = ()=>{
      input.value.focus()
    }

    /*Generating Style Classes*/
    const tStyle = reactive({});
    tStyle["icon"] = computed(() => {
      return "text-input-icon" + " " +
        "radius-l-" + radius.value;
    });
    tStyle["input"] = computed(() => {
      let radiusStyle

      if((prepend.value || hasSlot('prepend') || hasSlot('icon')) && (!append.value && !hasSlot('append'))){
        /*Left Full and Right Empty*/
        radiusStyle = "border-l-0 radius-r-" + radius.value
      }else if((!prepend.value && !hasSlot('prepend') && !hasSlot('icon')) && (append.value || hasSlot('append'))){
        /*Left Empty and Right Full*/
        radiusStyle = "border-r-0 radius-l-" + radius.value
      }else if((prepend.value || hasSlot('prepend') || hasSlot('icon')) && (append.value || hasSlot('append'))){
        /*Both Full*/
        radiusStyle = "border-l-0 border-r-0"
      }else{
        radiusStyle = "radius-" + radius.value
      }
      return "input text-input" + " " +
        radiusStyle;
    });
    tStyle["prepend"] = computed(() => {
      return "text-input-prepend" + " " +
        (hasSlot('icon') ? 'border-l-0' : "radius-l-" + radius.value);
    });
    tStyle["icon"] = computed(() => {
      return "text-input-icon" + " " +
        "radius-l-" + radius.value;
    });
    tStyle["append"] = computed(() => {
      return "text-input-append" + " " +
        "radius-r-" + radius.value;
    });


    /*Slot Check*/
    const hasSlot = name => !!slots[name];

    return {input, tStyle,focus, hasSlot}
  }
});
</script>
