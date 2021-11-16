import { reactive } from "vue";

export default function() {
  const conf = reactive({
    app: {
      leftMenu : {
        title: "TailAdmin",
        headerBgColor: "bg-blue-600 hover:bg-blue-700"
      },
      footer: {
        show: true,
        text: "<a\n" +
          "              class=\"text-blue-600 hover:underline\"\n" +
          "              href=\"https://tailadmin.dev/\"\n" +
          "              target=\"_blank\"\n" +
          "            >\n" +
          "              TailAdmin v.2.0.0\n" +
          "              </a>\n" +
          "            <span>by</span>\n" +
          "            <a\n" +
          "              class=\"text-teal-400 hover:underline\"\n" +
          "              href=\"https://github.com/sinan-aydogan\"\n" +
          "              target=\"_blank\"\n" +
          "            >\n" +
          "              Sinan AYDOĞAN\n" +
          "            </a>"
      }
    }
  });

  return { conf };
}
