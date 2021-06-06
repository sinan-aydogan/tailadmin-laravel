<template>
  <app-layout>
    <template #header>
      Collapsible Content
    </template>
    <template #subHeader>

    </template>
    <template #default>
      <!--Simple-->
      <grid-section col="2" gap="4">
        <t-content-card width="1">
          <template #title>
            Simple
          </template>
          <template #subTitle>
            Radius size "0"
          </template>
          <template #content>
            <t-collapsible>
              <!--First Item-->
              <t-collapsible-item>
                <template #title>
                  Title
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Second Item-->
              <t-collapsible-item>
                <template #title>
                  Title
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Third Item-->
              <t-collapsible-item>
                <template #title>
                  Title
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Fourth Item-->
              <t-collapsible-item>
                <template #title>
                  Title
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
            </t-collapsible>
          </template>
        </t-content-card>
        <!--Colorful-->
        <t-content-card width="1">
          <template #title>
            Colorful
          </template>
          <template #subTitle>
            Radius size "3"
          </template>
          <template #content>
            <t-collapsible :radius="3">
              <!--First Item-->
              <t-collapsible-item color="red">
                <template #title>
                  Red
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Second Item-->
              <t-collapsible-item color="blue">
                <template #title>
                  Blue
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Third Item-->
              <t-collapsible-item color="yellow">
                <template #title>
                  Yellow
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Fourth Item-->
              <t-collapsible-item color="purple">
                <template #title>
                  Purple
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
            </t-collapsible>
          </template>
        </t-content-card>
        <!--Icons-->
        <t-content-card width="1">
          <template #title>
            With Icon
          </template>
          <template #subTitle>
            Radius size "5"
          </template>
          <template #content>
            <t-collapsible :radius="5">
              <!--First Item-->
              <t-collapsible-item color="red">
                <template #title>
                  <font-awesome-icon icon="shopping-bag"/>
                  Red
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Second Item-->
              <t-collapsible-item color="blue">
                <template #title>
                  <font-awesome-icon icon="tv"/>
                  Blue
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Third Item-->
              <t-collapsible-item color="yellow">
                <template #title>
                  <font-awesome-icon icon="tasks"/>
                  Yellow
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Fourth Item-->
              <t-collapsible-item color="purple">
                <template #title>
                  <font-awesome-icon icon="envelope"/>
                  Purple
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
            </t-collapsible>
          </template>
        </t-content-card>
        <!--Align-->
        <t-content-card width="1">
          <template #title>
            With Title Align
          </template>
          <template #subTitle>
            Radius size "7"
          </template>
          <template #content>
            <t-collapsible :radius="7">
              <!--Default Item-->
              <t-collapsible-item color="black">
                <template #title>
                  <font-awesome-icon icon="chart-bar"/>
                  Default, non-added align indicator
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--First Item-->
              <t-collapsible-item align="left" color="white">
                <template #title>
                  <font-awesome-icon icon="shopping-bag"/>
                  Left
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Second Item-->
              <t-collapsible-item align="center" color="blue">
                <template #title>
                  <font-awesome-icon icon="tv"/>
                  Center
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
              <!--Third Item-->
              <t-collapsible-item align="right" color="yellow">
                <template #title>
                  <font-awesome-icon icon="tasks"/>
                  Right
                </template>
                <template #content>
                  Content
                </template>
              </t-collapsible-item>
            </t-collapsible>
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
import TCollapsible from "@/Components/Collapsible/TCollapsible";
import TCollapsibleItem from "@/Components/Collapsible/TCollapsibleItem";
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'

export default {
  name: "Collapsible",
  components: {GridSection, AppLayout, TContentCard, TCollapsible, TCollapsibleItem, SshPre},
  data() {
    return {
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
