<template>
  <app-layout :action-buttons="true">
    <template #header><div class="bg-blue-200 w-full h-full">Header</div></template>
    <template #subHeader><div class="bg-gray-200 w-full h-full">SubHeader</div></template>
    <template #action-buttons>
      <div class="bg-green-200 w-full h-full flex justify-center items-center">Action Button Area</div>
    </template>
    <template #default>
      <div class="bg-yellow-200 w-full items-center justify-center flex text-center h-36">Content Area</div>
      <ssh-pre :copy-button="true" language="html" label="Code">{{sampleCode.html}}</ssh-pre>
      <ssh-pre :copy-button="true" language="js" label="JS">{{sampleCode.js}}</ssh-pre>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import SshPre from "simple-syntax-highlighter";
import 'simple-syntax-highlighter/dist/sshpre.css'
import TBadge from "@/Components/Badge/TBadge";

export default {
  name: "LayoutStructure",
  components: {TBadge, AppLayout, SshPre},
  data() {
    return {
      sampleCode: {
        html:
            '<!--If you want to show a few buttons for action, you should :actions-buttons="true" Default: false-->\n' +
            '<app-layout :action-buttons="true">\n\n' +
            '  <template #header>Header</template>\n\n' +
            '  <!--This area is hidden at the device screen size smaller than tablets-->\n' +
            '  <template #subHeader>Sub Header</template>\n\n' +
            '   <!--If :actions-buttons is true, you can add buttons in this template area-->\n' +
            '  <template #action-buttons>\n' +
            '      \n' +
            '  </template>\n\n' +
            '  <!--The here is for main content-->\n' +
            '  <template #default>\n' +
            '    Content\n' +
            '  </template>\n' +
            '</app-layout>',
        js:
            'import AppLayout from "@/Layouts/AppLayout";' +
            '\n' +
            'export default {\n' +
            '  name: "AppLayout",\n' +
            '  components: {AppLayout},\n' +
            '  }'
      }
    }
  }
}
</script>

<style scoped>

</style>
