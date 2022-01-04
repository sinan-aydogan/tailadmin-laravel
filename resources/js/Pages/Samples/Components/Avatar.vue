<template>
  <app-layout title="Avatars">
    <template #header>Avatars</template>
    <template #subHeader>User avatars and team members avatar group</template>
    <template #default>
      <grid-section :col-tablet="2">
        <!--Avatar Radius Card-->
        <t-content-card :width="1" color="gradient-gray-to-gray">
          <template #title>Avatar Radius</template>
          <template #subTitle> 9 different radius sizes</template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <t-avatar :radius="0" src="https://i.pravatar.cc/300?img=0" />
              <t-avatar
                v-for="i in 8"
                :key="i"
                :radius="i"
                :src="'https://i.pravatar.cc/300?img='+i"
              />
            </div>
          </template>
        </t-content-card>
        <!--Avatar Group-->
        <t-content-card :width="1">
          <template #title>Avatar Group - Team Members</template>
          <template #subTitle>Best for lists of project members. The avatars gets from <a href="https://pravatar.cc/"
                                                                                          target="_blank">https://pravatar.cc/</a>
          </template>
          <template #content>
            <div class="flex flex-wrap gap-4">
              <t-avatar-group>
                <t-avatar
                  v-for="i in 8"
                  :key="i"
                  :radius="8"
                  :src="'https://i.pravatar.cc/300?img='+i"
                />
              </t-avatar-group>
            </div>
          </template>
        </t-content-card>
        <!--Avatar Sizes Card-->
        <t-content-card :width="1">
          <template #title>Avatar Sizes</template>
          <template #subTitle>8 different sizes</template>
          <template #content>
            <div class="flex flex-wrap items-end gap-4">
              <t-avatar
                v-for="i in 8"
                :key="i"
                :radius="3"
                :size="i"
                :src="'https://i.pravatar.cc/300?img='+i"
              />
            </div>
          </template>
        </t-content-card>
        <!--Avatar Indicator Card-->
        <t-content-card :width="1">
          <template #title> Avatar Indicator</template>
          <template #subTitle> 8 different colors and 4 different positions</template>
          <template #content>
            <div class="flex flex-wrap items-end gap-4">
              <t-avatar
                :indicator="{
                    color: 'red',
                    label: 2,
                    position: 'lb'
                  }"
                :radius="1"
                :size="1"
              />
              <t-avatar
                :indicator="{
                    color: 'blue',
                    label: 2,
                    position: 'lt'
                  }"
                :radius="2"
                :size="2"
                src="https://i.pravatar.cc/300?img=0"
              />
              <t-avatar
                :indicator="{
                    color: 'green',
                    position: 'rb'
                  }"
                :radius="3"
                :size="3"
                src="https://i.pravatar.cc/300?img=1"
              />
              <t-avatar
                :indicator="{
                    color: 'yellow',
                    label: 14,
                    position: 'lb'
                  }"
                :radius="4"
                :size="4"
                src="https://i.pravatar.cc/300?img=2"
              />
              <t-avatar
                :indicator="{
                    color: 'indigo',
                    label: 7,
                    position: 'rt'
                  }"
                :radius="5"
                :size="5"
                src="https://i.pravatar.cc/300?img=3"
              />
              <t-avatar
                :indicator="{
                    color: 'pink',
                    label: 85,
                    position: 'rt'
                  }"
                :radius="6"
                :size="6"
                src="https://i.pravatar.cc/300?img=4"
              />
              <t-avatar
                :indicator="{
                    color: 'purple',
                    label: 12,
                    position: 'lb'
                  }"
                :radius="7"
                :size="7"
                src="https://i.pravatar.cc/300?img=5"
              />
              <t-avatar
                :indicator="{
                    color: 'pink',
                    label: 2,
                    position: 'rb'
                  }"
                :radius="8"
                :size="8"
                src="https://i.pravatar.cc/300?img=6"
              />
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
/*Component*/
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TAvatar from "@/Components/Avatar/TAvatar";
import TAvatarGroup from "@/Components/Avatar/TAvatarGroup";
import TTable from "@/Components/Table/TTable";
/*Codehighlighter*/
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

export default {
  name: "Avatar",
  components: {
    AppLayout,
    GridSection,
    SshPre,
    TAvatar,
    TAvatarGroup,
    TContentCard,
    TTable
  },
  data() {
    return {
      sampleCode: {
        html:
          "<t-avatar src=\"/img/samples/dummyAvatar.svg\" :size=\"5\" :radius=\"8\" :indicator=\"{color: 'gradient-red-to-pink', gradient-direction: 'r', label: '5', position: 'lb'}\" />\n\n" +
          "<!--For Avatar Group-->\n\n" +
          "<t-avatar-group>\n" +
          "    <t-avatar src=\"/img/samples/dummyAvatar.svg\" :size=\"5\" :radius=\"8\"/>\n" +
          "    <t-avatar src=\"/img/samples/dummyAvatar.svg\" :size=\"5\" :radius=\"8\"/>\n" +
          "    <t-avatar src=\"/img/samples/dummyAvatar.svg\" :size=\"5\" :radius=\"8\"/>\n" +
          "</t-avatar-group>",
        js:
          "import TAvatar from \"@/Components/Avatar/TAvatar\";\n" +
          "import TAvatarGroup from \"@/Components/Avatar/TAvatarGroup\";\";\n\n" +
          "export default {\n" +
          "  name: \"Avatar\",\n" +
          "  components: {TAvatar, TAvatarGroup},\n" +
          "  }",
        table: {
          header: [
            {
              key: "variable",
              label: "Variable",
              width: 15
            },
            {
              key: "type",
              label: "Value Type"
            },
            {
              key: "details",
              label: "Details"
            }
          ],
          content: [
            {
              variable: "src",
              type: "String",
              details: "Your photo url"
            },
            {
              variable: ":size",
              type: "Number",
              details: "<b>Options:</b> 1, 2, 3, 4, 5, 6, 7, 8, 9"
            },
            {
              variable: ":radius",
              type: "Number",
              details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
            },
            {
              variable: ":indicator=\"{<br>&nbsp&nbsp&nbsp&nbsp color:&nbsp' ',<br>&nbsp&nbsp&nbsp&nbsp gradient-direction:&nbsp' ',<br>&nbsp&nbsp&nbsp&nbsp label:&nbsp' ',<br>&nbsp&nbsp&nbsp&nbsp position:&nbsp' '<br>}\"",
              type: "Object",
              details: "This object have must 3 sub items: color, label and position<br>" +
                "<b>Color Options Solid:</b> solid-red, solid-blue, solid-green, solid-yellow, solid-indigo, solid-pink, solid-purple, solid-gray, solid-black, solid-white,<br>" +
                "<b>Color Options Light:</b> light-red, light-blue, light-green, light-yellow, light-indigo, light-pink, light-purple, light-gray<br>" +
                "<b>Color Options Gradient:</b> gradient-red-to-pink. Red is first color and Pink is second color. You change red end pink with red, blue, green, yellow, indigo, pink, purple and gray)<br>" +
                "<b>Color Options Gradient Direction:</b> If you use to the gradient color, you can select gradient's direction. <br><b>Gradient Direction Options:</b> r, l, b, t, tl, bl, tr, br " +
                "<b>Default:</b> r (Means: l: left, r: right, b: bottom, t: top)<br>" +
                "<b>Label Options:</b> everything you want <br>" +
                "<b>Label Position Options:</b> lb, rb, lt, rt <small>(Means: l:left,r:right,b:bottom,t:top)</small>"
            }
          ]
        }
      }
    };
  }
};
</script>

<style scoped></style>
