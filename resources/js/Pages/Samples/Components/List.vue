<template>
    <app-layout>
        <template #header>Lists</template>
        <template #subHeader>Content items, shopping lists or todo list</template>
        <template #default>
            <!-- Color Selector -->
            <t-component-color-selector @selected-color="selectedColor = $event"/>
            <grid-section col="3" gap="4">
                <!--Simple-->
                <t-list :radius="3" :color="selectedColor">
                    <t-list-item>Cheery</t-list-item>
                    <t-list-item>Banana</t-list-item>
                    <t-list-item>Strawberry</t-list-item>
                    <t-list-item>Lemon</t-list-item>
                </t-list>
                <!--With Title-->
                <t-list :radius="3" :color="selectedColor">
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
                <t-list :radius="3" :color="selectedColor">
                    <t-list-item>
                        <template #icon>
                            <font-awesome-icon :icon="['fab','vuejs']"/>
                        </template>
                        <template #default>VueJS components inside</template>
                    </t-list-item>
                    <t-list-item>
                        <template #icon>
                            <font-awesome-icon :icon="['fab','js']"/>
                        </template>
                        <template #default>Powered by JavaScript</template>
                    </t-list-item>
                    <t-list-item :active="true">
                        <template #icon>
                            <font-awesome-icon :icon="['fab','css3']"/>
                        </template>
                        <template #default>Polished with TailwindCSS</template>
                    </t-list-item>
                    <t-list-item :active="true">
                        <template #icon>
                            <font-awesome-icon icon="chart-bar"/>
                        </template>
                        <template #default>Detailed some graphics with ChartJS</template>
                    </t-list-item>
                </t-list>
                <!--With Avatar-->
                <t-list :radius="3" :color="selectedColor">
                    <t-list-item>
                        <template #icon>
                            <t-avatar src="https://i.pravatar.cc/150?u=1" :radius="8" size="2"></t-avatar>
                        </template>
                        <template #default>Sinem Aydoğan</template>
                    </t-list-item>
                    <t-list-item>
                        <template #icon>
                            <t-avatar src="https://i.pravatar.cc/150?u=2" :radius="8" size="2"></t-avatar>
                        </template>
                        <template #default>Zuhal Taşçı</template>
                    </t-list-item>
                    <t-list-item>
                        <template #icon>
                            <t-avatar src="https://i.pravatar.cc/150?u=3" :radius="8" size="2"></t-avatar>
                        </template>
                        <template #default>Ayşe Gürel</template>
                    </t-list-item>
                    <t-list-item>
                        <template #icon>
                            <t-avatar src="https://i.pravatar.cc/150?u=4" :radius="8" size="2"></t-avatar>
                        </template>
                        <template #default>Günel Deren</template>
                    </t-list-item>
                </t-list>
                <!--With SecondContent -->
                <t-list :radius="3" :color="selectedColor">
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
                            <t-button size="sm" :radius="2">+ Add new cash</t-button>
                        </template>
                    </t-list-item>
                </t-list>
            </grid-section>
            <!--Sample Codes-->
            <ssh-pre :copy-button="true" label="Code" language="html">{{ sampleCode.html }}</ssh-pre>
            <ssh-pre :copy-button="true" label="JS" language="js">{{ sampleCode.js }}</ssh-pre>
            <!--Variables Table-->
            <t-table :content="sampleCode.table.content" :header="sampleCode.table.header" class="mt-5" color="blue"/>
        </template>
    </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import TTable from "@/Components/Table/TTable";
import TList from "@/Components/List/TList";
import TListItem from "@/Components/List/TListItem";
import TBadge from "@/Components/Badge/TBadge";
import TButton from "@/Components/Button/TButton";
import TAvatar from "@/Components/Avatar/TAvatar";
import TComponentColorSelector from "@/Components/Misc/TComponentColorSelector";
/*Codehighlighter*/
import SshPre from 'simple-syntax-highlighter'
import 'simple-syntax-highlighter/dist/sshpre.css'
import GridSection from "@/Layouts/GridSection";

export default {
    name: "List",
    components: {GridSection, TListItem, TList, AppLayout, SshPre, TTable, TBadge, TButton, TAvatar, TComponentColorSelector},
    data() {
        return {
            selectedColor: 'white',
            sampleCode: {
                html:
                    '<t-list :radius="3" color="blue">\n' +
                    '    <t-list-item :active="true">\n' +
                    '        <template #icon>\n' +
                    '            <t-avatar src="https://i.pravatar.cc/150?u=1" :radius="8" size="2"></t-avatar>\n' +
                    '        </template>\n' +
                    '        <template #title>\n' +
                    '            Name:\n' +
                    '        </template>\n' +
                    '        <template #default>\n' +
                    '            Sinem Aydoğan\n' +
                    '        </template>\n' +
                    '        <template #secondContent>\n' +
                    '            <t-button size="sm" :radius="2">+ Add new cash</t-button>\n' +
                    '        </template>\n'+
                    '    </t-list-item>\n' +
                    '</t-list>',
                js:
                    'import TList from "@/Components/List/TList";\n' +
                    'import TListItem from "@/Components/List/TListItem";\n' +
                    'import TButton from "@/Components/Button/TButton";\n' +
                    'import TAvatar from "@/Components/Avatar/TAvatar";' +
                    '\n' +
                    'export default {\n' +
                    '  name: "InputGroup",\n' +
                    '  components: {TListItem, TList, TBadge, TAvatar},\n' +
                    '  }',
                table: {
                    header: [
                        {key: 'variable', label: 'Variable'},
                        {key: 'type', label: 'Value Type'},
                        {key: 'details', label: 'Details'},
                    ],
                    content: [
                        {
                            variable: 'active',
                            type: 'Boolean',
                            details: 'It choose that which item active'
                        },
                        {
                            variable: ":radius",
                            type: "Number",
                            details: "<b>Options:</b> none, 1, 2, 3, 4, 5, 6, 7, 8"
                        },
                        {
                            variable: 'title',
                            type: 'Template item',
                            details: 'It\'s bold title'
                        },
                        {
                            variable: 'icon',
                            type: 'Template item',
                            details: 'If you want to show a photo or a icon, you should this template'
                        },
                        {
                            variable: 'secondContent',
                            type: 'Template item',
                            details: 'If you want to show a counter, a button or other info, you should this template'
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
