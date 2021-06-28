<template>
  <app-layout>
    <template #header>Header</template>
    <template #subHeader>Subheader</template>
    <template #default>
        Content
      <ssh-pre :copy-button="true" language="html" label="Code">{{sampleCode.html}}</ssh-pre>
      <ssh-pre :copy-button="true" language="js" label="JS">{{sampleCode.js}}</ssh-pre>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import SshPre from "simple-syntax-highlighter";
import 'simple-syntax-highlighter/dist/sshpre.css'

export default {
  name: "LayoutStructure",
  components: {AppLayout, SshPre},
  data() {
    return {
      sampleCode: {
        html:
            '<app-layout>\n' +
            '  <template #header>Header</template>\n' +
            '  <template #subHeader>Sub Header</template>\n' +
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
