<template>
  <app-layout title="Lists">
    <template #header>Lists</template>
    <template #subHeader>Content items, shopping lists or todo list</template>
    <template #default>
      <!-- Color Selector -->
      <t-component-style-selector
        class="mb-4"
        v-model="selectedData"
        :select-data="selectData"
      />
      <transition name="alert">
        <t-toastr
          id="alert"
          v-show="(selectedData.design === 'outline' || selectedData.design === 'elegant')"
          color="solid-white"
          class="bg-opacity-75 text-gray-700 mb-2"
          style="z-index: 999999"
        >
          <div class="flex flex-col">
            <b class="text-yellow-700 font-semibold">Warning</b>
            Outline and Elegant designs defaulted have border, and it's not an option
          </div>
        </t-toastr>
      </transition>
      <t-content-card>
        <template #title>
          Samples
        </template>

        <grid-section :col-tablet="2" :col-laptop="3">
          <!--Simple-->
          <t-list
            :color="selectedData.color"
            :design="selectedData.design"
            :border="selectedData.border"
            :radius="0"
            :separated="selectedData.separated"
          >
            <t-list-item :active="selectedCheckbox.includes('Cheery')">
              <template #icon>
                <t-input-check-box v-model="selectedCheckbox" input-value="Cheery" :color="selectedData.color" />
              </template>
              Cheery
            </t-list-item>
            <t-list-item :active="selectedCheckbox.includes('Banana')">
              <template #icon>
                <t-input-check-box v-model="selectedCheckbox" input-value="Banana" :color="selectedData.color" />
              </template>
              Banana
            </t-list-item>
            <t-list-item :active="selectedCheckbox.includes('Strawberry')">
              <template #icon>
                <t-input-check-box v-model="selectedCheckbox" input-value="Strawberry" :color="selectedData.color" />
              </template>
              Strawberry
            </t-list-item>
            <t-list-item :active="selectedCheckbox.includes('Lemon')">
              <template #icon>
                <t-input-check-box v-model="selectedCheckbox" input-value="Lemon" :color="selectedData.color" />
              </template>
              Lemon
            </t-list-item>
          </t-list>
          <!--With Title-->
          <t-list
            :color="selectedData.color"
            :design="selectedData.design"
            :border="selectedData.border"
            :separated="selectedData.separated"
            :radius="3"
          >
            <t-list-item>
              <template #title>Name:</template>
              <template #default>Sinan Aydoğan</template>
            </t-list-item>
            <t-list-item>
              <template #title>Title:</template>
              <template #default>Developer</template>
            </t-list-item>
            <t-list-item>
              <template #title>Birthday:</template>
              <template #default>1987</template>
            </t-list-item>
            <t-list-item>
              <template #title>Country:</template>
              <template #default>Turkey</template>
            </t-list-item>
          </t-list>
          <!--With Icon-->
          <t-list :color="selectedData.color" :design="selectedData.design" :border="selectedData.border" :radius="5"
                  :separated="selectedData.separated">
            <t-list-item>
              <template #icon>
                <font-awesome-icon :icon="['fab','vuejs']" />
              </template>
              <template #default>VueJS components inside</template>
            </t-list-item>
            <t-list-item>
              <template #icon>
                <font-awesome-icon :icon="['fab','js']" />
              </template>
              <template #default>Powered by JavaScript</template>
            </t-list-item>
            <t-list-item>
              <template #icon>
                <font-awesome-icon :icon="['fab','css3']" />
              </template>
              <template #default>Polished with TailwindCSS</template>
            </t-list-item>
            <t-list-item>
              <template #icon>
                <font-awesome-icon icon="chart-bar" />
              </template>
              <template #default>Detailed some graphics with ChartJS</template>
            </t-list-item>
          </t-list>
          <!--With Avatar-->
          <t-list :color="selectedData.color" :design="selectedData.design" :border="selectedData.border" :radius="3"
                  :separated="selectedData.separated">
            <t-list-item>
              <template #icon>
                <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=1"></t-avatar>
              </template>
              <template #default>Sinem Aydoğan</template>
            </t-list-item>
            <t-list-item>
              <template #icon>
                <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=2"></t-avatar>
              </template>
              <template #default>Zuhal Taşçı</template>
            </t-list-item>
            <t-list-item>
              <template #icon>
                <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=3"></t-avatar>
              </template>
              <template #default>Ayşe Gürel</template>
            </t-list-item>
            <t-list-item>
              <template #icon>
                <t-avatar :radius="8" :size="2" src="https://i.pravatar.cc/150?u=4"></t-avatar>
              </template>
              <template #default>Günel Deren</template>
            </t-list-item>
          </t-list>
          <!--With SecondContent -->
          <t-list :color="selectedData.color" :design="selectedData.design" :border="selectedData.border" :radius="3"
                  :separated="selectedData.separated">
            <t-list-item>
              <template #default>
                Users
              </template>
              <template #secondContent>
                <t-badge :radius="5">120</t-badge>
              </template>
            </t-list-item>
            <t-list-item>
              <template #default>Materials</template>
              <template #secondContent>
                <t-badge :radius="5" color="red">6 pcs.</t-badge>
              </template>
            </t-list-item>
            <t-list-item>
              <template #default>Costs</template>
              <template #secondContent>
                <t-button :radius="2" design="light" border :color="selectedData.color" size="small">+ Add new
                  cash
                </t-button>
              </template>
            </t-list-item>
          </t-list>
        </grid-section>
      </t-content-card>
      <!--Sample Codes-->
      <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table
        :content="sampleCode.table.content"
        :header="sampleCode.table.header"
        :searchable="['variable','details']" class="mt-5"
        color="solid-blue"
      >
        <template #details="{props}">
          <span class="whitespace-nowrap md:whitespace-normal" v-html="props.details" />
        </template>
      </t-table>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TTable from "@/Components/Table/TTable";
import TList from "@/Components/List/TList";
import TListItem from "@/Components/List/TListItem";
import TBadge from "@/Components/Badge/TBadge";
import TButton from "@/Components/Button/TButton";
import TAvatar from "@/Components/Avatar/TAvatar";
import TComponentStyleSelector from "@/Components/Misc/TComponentStyleSelector";
import TAlert from "@/Components/Alert/TAlert";
import TToastr from "@/Components/Toastr/TToastr";
import TContentCard from "@/Components/Card/TContentCard";
import TInputCheckBox from "@/Components/Form/Inputs/TInputCheckBox";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "List",
  components: {
    TInputCheckBox,
    TContentCard,
    TToastr,
    TAlert,
    GridSection,
    TListItem,
    TList,
    AppLayout,
    SshPre,
    TTable,
    TBadge,
    TButton,
    TAvatar,
    TComponentStyleSelector
  },
  setup() {
    const selectedData = reactive({
      color: "blue",
      design: "filled",
      border: true,
      separated: false
    });
    const selectedCheckbox = ref(["Cheery", "Banana", "Strawberry"]);
    const selectData = reactive([
      {
        key: "design",
        label: "Design",
        options: [
          { key: "filled", label: "Design: Filled" },
          { key: "light", label: "Design: Light" },
          { key: "outline", label: "Design: Outline" },
          { key: "elegant", label: "Design: Elegant" },
          { key: "simple", label: "Design: Simple" }
        ]
      },
      {
        key: "border",
        label: "Border",
        options: [
          { key: true, label: "Border: True" },
          { key: false, label: "Border: False" }
        ]
      },
      {
        key: "separated",
        label: "Separated",
        options: [
          { key: true, label: "Separated: True" },
          { key: false, label: "Separated: False" }
        ]
      }
    ]);

    return { selectedData, selectedCheckbox, selectData };
  },
  data() {
    return {
      sampleCode: {
        html:
          "<t-list :radius=\"3\" color=\"solid-blue\">\n" +
          "    <t-list-item :active=\"true\">\n" +
          "        <template #icon>\n" +
          "            <t-avatar src=\"https://i.pravatar.cc/150?u=1\" :radius=\"8\" size=\"2\"></t-avatar>\n" +
          "        </template>\n" +
          "        <template #title>\n" +
          "            Name:\n" +
          "        </template>\n" +
          "        <template #default>\n" +
          "            Sinem Aydoğan\n" +
          "        </template>\n" +
          "        <template #secondContent>\n" +
          "            <t-button size=\"sm\" :radius=\"2\">+ Add new cash</t-button>\n" +
          "        </template>\n" +
          "    </t-list-item>\n" +
          "</t-list>",
        js:
          "import TList from \"@/Components/List/TList\";\n" +
          "import TListItem from \"@/Components/List/TListItem\";\n" +
          "import TButton from \"@/Components/Button/TButton\";\n" +
          "import TAvatar from \"@/Components/Avatar/TAvatar\";" +
          "\n" +
          "export default {\n" +
          "  name: \"InputGroup\",\n" +
          "  components: {TListItem, TList, TBadge, TAvatar},\n" +
          "  }",
        table: {
          header: [
            { key: "variable", label: "Variable" },
            { key: "type", label: "Value Type" },
            { key: "details", label: "Details" }
          ],
          content: [
            {
              variable: "active",
              type: "Boolean",
              details: "It choose that which item active"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
            },
            {
              variable: "color",
              type: "String",
              details: "Your list color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                "<b>Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br>"
            },
            {
              variable: "title",
              type: "Template item",
              details: "It's bold title"
            },
            {
              variable: "icon",
              type: "Template item",
              details: "If you want to show a photo or a icon, you should this template"
            },
            {
              variable: "secondContent",
              type: "Template item",
              details: "If you want to show a counter, a button or other info, you should this template"
            }
          ]
        }
      }
    };
  }
});
</script>

<style scoped>
.alert-enter-active, .alert-leave-active {
  transition: opacity ease-out .75s;
}

.alert-enter, .alert-leave-to {
  opacity: 0;
  height: revert;
}

.alert-enter-to, .alert-leave {
  opacity: 1;
  height: revert;
}
</style>
