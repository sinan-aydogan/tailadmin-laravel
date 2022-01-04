<template>
  <app-layout>
    <template #header>Progress Bars</template>
    <template #subHeader>Loading, graphical indicator and more than</template>
    <template #default>
      <grid-section :col="1">
        <t-content-card :width="1">
          <template #title>Simple and colorful</template>
          <template #subTitle>8 different color and 5 different height</template>
          <template #content>

            <div class="flex flex-col w-full gap-4">
              <div class="flex flex-col md:flex-row justify-center space-y-2 md:space-x-2 items-center w-full">
                <t-input-group class="w-full md:w-36" label="Target Value" label-for="target">
                  <t-input-text v-model.lazy.number="target" type="number" />
                </t-input-group>
                <t-progress :height="1" v-model="target" title="Performance" />
              </div>
              <t-progress :height="2" :model-value="10" counter-text="$a" color="indigo" title="Claim" />
              <t-progress :height="3" :model-value="50" counter-text="$a TRY" color="yellow" title="Cost" />
              <t-progress :height="4" :model-value="75" counter-text="$a Hour/Person" color="purple"
                          title="Working Costs" />
              <t-progress :height="5" :model-value="25040" :max="100000" counter-text="-$aK"
                          color="red"
                          title="Lost" />
            </div>
          </template>
        </t-content-card>
      </grid-section>
      <!--Sample Codes-->
      <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
      <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
      <!--Variables Table-->
      <t-table
        :content="sampleCode.table.content"
        :header="sampleCode.table.header"
        :searchable="['variable','details']"
        class="mt-5"
        color="solid-blue"
      >
        <template #details="{props}">
              <span class="whitespace-nowrap md:whitespace-normal" v-html="props.details">
              </span>
        </template>
      </t-table>
    </template>
  </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
import { defineComponent, reactive, ref, watch } from "vue";
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TProgress from "@/Components/Progress/TProgress";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";

export default defineComponent({
  name: "Progress",
  components: { TInputText, TInputGroup, TProgress, TContentCard, GridSection, AppLayout, SshPre, TTable },
  setup() {
    const target = ref(25);
    const sampleCode = reactive({
      html:
        "<t-progress title=\"Man Hour\" :value=\"75\" color=\"blue\" :height=\"4\" :duration=\"40\"/>",
      js:
        "import TProgress from \"@/Components/Progress/TProgress\";" +
        "\n" +
        "export default {\n" +
        "  name: \"Progress\",\n" +
        "  components: {TProgress},\n" +
        "  }",
      table: {
        header: [
          { key: "variable", label: "Variable" },
          { key: "type", label: "Value Type" },
          { key: "details", label: "Details" }
        ],
        content: [
          {
            variable: "title",
            type: "String",
            details: "You want to what ever"
          },
          {
            variable: ":value",
            type: "Number",
            details: "It must be between 1 and 100"
          },
          {
            variable: "color",
            type: "String",
            details: "Your progress bar color theme.<br><b>Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
              "<b>Options Gradient:</b> gradient-red-to-pink. Red is first color and Pink is second color. You change red end pink with red, blue, green, yellow, indigo, pink, purple and gray)"
          },
          {
            variable: ":height",
            type: "Number",
            details: "It's line height <br><b>Options:</b> 1,2,3,4,5. <b>Default:</b> 3"
          },

          {
            variable: ":speed",
            type: "Number",
            details:
              "It is animation's duration. This value is millisecond. <b>Default:</b> 20"
          }
        ]
      }
    });

    watch(target,
      (newValue) => {
        if (newValue.toString() === null || isNaN(newValue) || newValue.toString() === "") {
          target.value = 0;
        }
      });
    return { target, sampleCode };
  }
});
</script>
