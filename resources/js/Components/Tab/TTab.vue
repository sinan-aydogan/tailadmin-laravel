<template>
  <div v-if="!data.find(t=>t.id === modelValue) && modelValue !== null" class="w-full col-span-full">
    <t-alert design="elegant" title="attention" color="yellow">
      Undefined tab id, please check your id
    </t-alert>
  </div>
  <div v-else :class="tStyle['container']">
    <div class="tab-title-container">
      <div v-for="item in data" :key="item.id" @click="select(item.id)" :class="titleStyle(item.id)">
        <slot name="icon" :props="item" />
        {{ item.title }}
      </div>
    </div>

    <div class="tab-content">
      <span
        v-if="data.find(c => c.id === active).content"
        v-text="data.find(c => c.id === active).content"
      />
      <slot name="content" :props="data.find(c => c.id === active)"/>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, ref, toRefs } from "vue";
import TAlert from "@/Components/Alert/TAlert";

export default defineComponent({
  name: "TTab",
  components: { TAlert },
  props: {
    data: {
      type: Array,
      default() {
        return [
          { id: 0, content: "Sample Content" }
        ];
      }
    },
    modelValue: {
      type: [Number, String, Date],
      default: null
    },
    design: {
      type: String,
      default: "filled"
    },
    color: {
      type: String,
      default: "gray"
    },
    coloredText: {
      type: Boolean,
      default: false
    },
    darkMode: {
      type: Boolean,
      default: false
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    /*Definitions*/
    const { modelValue, data, design, color, darkMode, coloredText } = toRefs(props);
    const active = ref(modelValue.value ? modelValue.value : data.value[0].id);

    /*Select Action*/
    const select = (id) => {
      active.value = id;
      emit("update:modelValue", id);
    };

    /*Generating Style Classes*/
    const tStyle = reactive({});
    tStyle["container"] = computed(() => {
      return "tab" + " " +
        "tab-" + design.value + "-base" + " " +
        "tab-" + (darkMode.value ? "dark" : "light") + " " +
        "tab-" + design.value + "-" + color.value;
    });
    const titleStyle = (id) => {
      return (active.value === id ? 'tab-title-active' : 'tab-title') + ' ' +
        (!coloredText.value ? 'tab-'+ design.value +'-simple-text' : '')
    };

    return { active, select, tStyle, titleStyle };
  }
});
</script>

