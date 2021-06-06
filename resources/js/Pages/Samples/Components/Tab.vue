<template>
  <app-layout>
    <template #header>
      Tabs
    </template>
    <template #subHeader>
      Multi content in single area
    </template>
    <template #default>
      <grid-section col="2" gap="4">
        <!--Simple-->
        <t-content-card width="1">
          <template #title>
            Simple Tabs
          </template>
          <template #subTitle>
            Default, without color and radius
          </template>
          <template #content>
            <t-tab>
              <!--Tab 1-->
              <t-tab-item title="Tab1">
                Content 1<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem molestie, mollis velit a, auctor
                nisi. Duis ut ex luctus, ornare sem id, tempus purus.
              </t-tab-item>
              <!--Tab 2-->
              <t-tab-item title="Tab2">
                Content 2<br>
                Vestibulum ut tellus blandit, molestie risus eget,
                aliquet odio. In eleifend lectus in dolor laoreet blandit. Nulla sagittis felis tellus, id vulputate
                nulla auctor at.
              </t-tab-item>
              <!--Tab 3-->
              <t-tab-item title="Tab3">
                Content 3<br>
                Nunc a nulla dictum, rutrum purus volutpat, suscipit eros. Fusce fermentum lectus non
                dignissim viverra. Integer non accumsan lorem. Suspendisse at finibus lacus, eu auctor purus.
                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque volutpat sem a
                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
              </t-tab-item>
            </t-tab>
          </template>
        </t-content-card>
        <!--With Color-->
        <t-content-card width="1">
          <template #title>
            With color
          </template>
          <template #subTitle>
            <ul class="flex justify-center mt-4 w-full">
              <li class="flex bg-indigo-500 py-1 px-2 w-full rounded-l items-center flex justify-center cursor-pointer"
                  @click="tabColor='indigo'">
                <div v-if="tabColor==='indigo'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Indigo
                </div>
              </li>
              <li class="flex bg-red-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor='red'">
                <div v-if="tabColor==='red'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Red
                </div>
              </li>
              <li class="flex bg-pink-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor='pink'">
                <div v-if="tabColor==='pink'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Pink
                </div>
              </li>
              <li class="flex bg-yellow-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor='yellow'">
                <div v-if="tabColor==='yellow'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Yellow
                </div>
              </li>
              <li class="flex bg-purple-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor='purple'">
                <div v-if="tabColor==='purple'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Purple
                </div>
              </li>
              <li class="flex bg-gray-200 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor='white'">
                <div v-if="tabColor==='white'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  White
                </div>
              </li>
              <li :class="{'bg-gray-600' : tabColor === 'black'}"
                  class="flex bg-black py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor='black'">
                <div v-if="tabColor==='black'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Black
                </div>
              </li>
              <li class="flex bg-blue-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor='blue'">
                <div v-if="tabColor==='blue'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Blue
                </div>
              </li>
              <li class="flex bg-gray-500 py-1 px-2 w-full rounded-r items-center flex justify-center cursor-pointer"
                  @click="tabColor='gray'">
                <div v-if="tabColor==='gray'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Gray
                </div>
              </li>
            </ul>
          </template>
          <template #content>
            <t-tab :color="tabColor">
              <!--Tab 1-->
              <t-tab-item title="Tab1" @set-id="set-id">
                Content 1<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem molestie, mollis velit a, auctor
                nisi. Duis ut ex luctus, ornare sem id, tempus purus.
              </t-tab-item>
              <!--Tab 2-->
              <t-tab-item title="Tab2">
                Content 2<br>
                Vestibulum ut tellus blandit, molestie risus eget,
                aliquet odio. In eleifend lectus in dolor laoreet blandit. Nulla sagittis felis tellus, id vulputate
                nulla auctor at.
              </t-tab-item>
              <!--Tab 3-->
              <t-tab-item title="Tab3">
                Content 3<br>
                Nunc a nulla dictum, rutrum purus volutpat, suscipit eros. Fusce fermentum lectus non
                dignissim viverra. Integer non accumsan lorem. Suspendisse at finibus lacus, eu auctor purus.
                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque volutpat sem a
                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
              </t-tab-item>
            </t-tab>
          </template>
        </t-content-card>
        <!--With Radius-->
        <t-content-card width="1">
          <template #title>
            With radius
          </template>
          <template #subTitle>
            <ul class="flex justify-center gap-2 mt-4">
              <li :class="tabRadius === 0 && 'bg-green-500 text-white'"
                  class="bg-gray-300 p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=0">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">0</div>
              </li>
              <li :class="tabRadius === 1 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-sm p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=1">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">1</div>
              </li>
              <li :class="tabRadius === 2 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=2">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">2</div>
              </li>
              <li :class="tabRadius === 3 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-md p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=3">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">3</div>
              </li>
              <li :class="tabRadius === 4 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-lg p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=4">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">4</div>
              </li>
              <li :class="tabRadius === 5 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-xl p-2 rounded-2xl items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=5">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">5</div>
              </li>
              <li :class="tabRadius === 6 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-2xl p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=6">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">6</div>
              </li>
              <li :class="tabRadius === 7 && 'bg-green-500 text-white'"
                  class="bg-gray-300 rounded-3xl p-2 items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=7">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">7</div>
              </li>
              <li :class="tabRadius === 8 && 'bg-green-500 text-white'"
                  class="bg-gray-300 p-2 rounded-full items-center flex justify-center cursor-pointer hover:bg-green-300 hover:text-gray-600"
                  @click="tabRadius=8">
                <div class="flex font-semibold justify-center items-center w-5 h-5 z-10">8</div>
              </li>
            </ul>
          </template>
          <template #content>
            <t-tab :radius="tabRadius" :tab-style="1" color="red">
              <!--Tab 1-->
              <t-tab-item title="Tab1">
                Content 1<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem molestie, mollis velit a, auctor
                nisi. Duis ut ex luctus, ornare sem id, tempus purus.
              </t-tab-item>
              <!--Tab 2-->
              <t-tab-item title="Tab2">
                Content 2<br>
                Vestibulum ut tellus blandit, molestie risus eget,
                aliquet odio. In eleifend lectus in dolor laoreet blandit. Nulla sagittis felis tellus, id vulputate
                nulla auctor at.
              </t-tab-item>
              <!--Tab 3-->
              <t-tab-item title="Tab3">
                Content 3<br>
                Nunc a nulla dictum, rutrum purus volutpat, suscipit eros. Fusce fermentum lectus non
                dignissim viverra. Integer non accumsan lorem. Suspendisse at finibus lacus, eu auctor purus.
                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque volutpat sem a
                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
              </t-tab-item>
            </t-tab>
          </template>
        </t-content-card>
        <!--With Color and Style 2-->
        <t-content-card width="1">
          <template #title>
            With color and Style 2
          </template>
          <template #subTitle>
            <ul class="flex justify-center mt-4 w-full">
              <li class="flex bg-indigo-500 py-1 px-2 w-full rounded-l items-center flex justify-center cursor-pointer"
                  @click="tabColor2='indigo'">
                <div v-if="tabColor2==='indigo'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Indigo
                </div>
              </li>
              <li class="flex bg-red-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor2='red'">
                <div v-if="tabColor2==='red'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Red
                </div>
              </li>
              <li class="flex bg-pink-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor2='pink'">
                <div v-if="tabColor2==='pink'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Pink
                </div>
              </li>
              <li class="flex bg-yellow-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor2='yellow'">
                <div v-if="tabColor2==='yellow'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Yellow
                </div>
              </li>
              <li class="flex bg-purple-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor2='purple'">
                <div v-if="tabColor2==='purple'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Purple
                </div>
              </li>
              <li class="flex bg-gray-200 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor2='white'">
                <div v-if="tabColor2==='white'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  White
                </div>
              </li>
              <li :class="{'bg-gray-600' : tabColor2 === 'black'}"
                  class="flex bg-black py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor2='black'">
                <div v-if="tabColor2==='black'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Black
                </div>
              </li>
              <li class="flex bg-blue-500 py-1 px-2 w-full items-center flex justify-center cursor-pointer"
                  @click="tabColor2='blue'">
                <div v-if="tabColor2==='blue'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Blue
                </div>
              </li>
              <li class="flex bg-gray-500 py-1 px-2 w-full rounded-r items-center flex justify-center cursor-pointer"
                  @click="tabColor2='gray'">
                <div v-if="tabColor2==='gray'"
                     class="flex justify-center items-center bg-opacity-50 w-full bg-white font-semibold rounded-full z-10">
                  Gray
                </div>
              </li>
            </ul>
          </template>
          <template #content>
            <t-tab :color="tabColor2" :radius="5" :tab-style="2">
              <!--Tab 1-->
              <t-tab-item title="Tab1">
                Content 1<br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu sem molestie, mollis velit a, auctor
                nisi. Duis ut ex luctus, ornare sem id, tempus purus.
              </t-tab-item>
              <!--Tab 2-->
              <t-tab-item title="Tab2">
                Content 2<br>
                Vestibulum ut tellus blandit, molestie risus eget,
                aliquet odio. In eleifend lectus in dolor laoreet blandit. Nulla sagittis felis tellus, id vulputate
                nulla auctor at.
              </t-tab-item>
              <!--Tab 3-->
              <t-tab-item title="Tab3">
                Content 3<br>
                Nunc a nulla dictum, rutrum purus volutpat, suscipit eros. Fusce fermentum lectus non
                dignissim viverra. Integer non accumsan lorem. Suspendisse at finibus lacus, eu auctor purus.
                Suspendisse efficitur aliquet elit, a congue dui dignissim at. Quisque pellentesque volutpat sem a
                tincidunt. Pellentesque id tristique erat. Curabitur scelerisque blandit quam.
              </t-tab-item>
            </t-tab>
          </template>
        </t-content-card>
      </grid-section>

      <ssh-pre copy-button="true" language="html" label="Code">{{sampleCode.html}}</ssh-pre>
      <ssh-pre copy-button="true" language="js" label="JS">{{sampleCode.js}}</ssh-pre>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TTab from "@/Components/Tab/TTab";
import TTabItem from "@/Components/Tab/TTabItem";
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

export default {
  name: "Tab",
  components: {AppLayout, GridSection, TContentCard, TTab, TTabItem, SshPre},
  data() {
    return {
      tabColor: 'blue',
      tabColor2: 'pink',
      tabRadius: 0,
      sampleCode: {
        html:
            '<t-input-group label="Text Label" label-for="name4" sub-label="Cash only" sub-label-color="yellow" error="Please enter numerical value">\n' +
            '    <t-input-text id="name4" placeholder="I\'m a placeholder text" value="Hi, I\'m a prefilled text"/>\n' +
            '</t-input-group>',
        js:
            'import TInputGroup from "@/Components/Form/TInputGroup";\n' +
            'import TInputText from "@/Components/Form/Inputs/TInputText";\n' +
            '\n' +
            'export default {\n' +
            '  name: "InputGroup",\n' +
            '  components: {SshPre,GridSection, TInputText, TInputGroup, ContentCard, AppLayout},\n' +
            '  }',
        table: {
          header: [
            {key: 'variable', label: 'Variable'},
            {key: 'type', label: 'Value Type'},
            {key: 'details', label: 'Details'},
          ],
          content: [
            {variable: 'label', type: 'String', details: 'Your input label'},
            {variable: 'label-for', type: 'String', details: 'Label identity indicator, you should enter input\'s id'},
            {
              variable: 'sub-label',
              type: 'String',
              details: 'If you want to show a second and small label, you can use'
            },
            {
              variable: 'sub-label-color',
              type: 'String',
              details: 'You can change sub label color <br><b>Options:</b> red, blue, green, yellow, indigo, pink, gray'
            },
            {
              variable: 'error',
              type: 'String',
              details: 'Every time it\'s text color is red, If It has a value, it shows'
            }
          ]
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
