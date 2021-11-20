import { reactive } from "vue";

export default function() {
  const conf = reactive({
    app: {
      languages: [
        {
          key: "en",
          label: "English",
          icon: "          <svg v-if=\"lang = 'en'\" @click=\"changeLang('en')\" class=\"inline-block rounded-full w-6 h-6\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n" +
            "            id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"\"\n" +
            "            xml:space=\"preserve\">\n" +
            "            <circle style=\"fill:#F0F0F0;\" cx=\"256\" cy=\"256\" r=\"256\"/>\n" +
            "            <g>\n" +
            "              <path style=\"fill:#0052B4;\"\n" +
            "                    d=\"M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z\"/>\n" +
            "              <path style=\"fill:#0052B4;\"\n" +
            "                    d=\"M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z\"/>\n" +
            "              <path style=\"fill:#0052B4;\"\n" +
            "                    d=\"M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784   z\"/>\n" +
            "              <path style=\"fill:#0052B4;\"\n" +
            "                    d=\"M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z\"/>\n" +
            "              <path style=\"fill:#0052B4;\"\n" +
            "                    d=\"M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z\"/>\n" +
            "              <path style=\"fill:#0052B4;\"\n" +
            "                    d=\"M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z\"/>\n" +
            "              <path style=\"fill:#0052B4;\"\n" +
            "                    d=\"M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z\"/>\n" +
            "              <path style=\"fill:#0052B4;\"\n" +
            "                    d=\"M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z\"/>\n" +
            "            </g>\n" +
            "            <g>\n" +
            "              <path style=\"fill:#D80027;\"\n" +
            "                    d=\"M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0   c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391   h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442   C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z\"/>\n" +
            "              <path style=\"fill:#D80027;\"\n" +
            "                    d=\"M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435   l-97.802-97.802h-31.482V322.784z\"/>\n" +
            "              <path style=\"fill:#D80027;\"\n" +
            "                    d=\"M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804   V322.784z\"/>\n" +
            "              <path style=\"fill:#D80027;\"\n" +
            "                    d=\"M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803   H189.217z\"/>\n" +
            "              <path style=\"fill:#D80027;\"\n" +
            "                    d=\"M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047   l-97.802,97.803V189.219z\"/>\n" +
            "            </g>\n" +
            "          </svg>\n"
        },
        {
          key: "tr",
          label: "Türkçe",
          icon: "          <svg v-else @click=\"changeLang('tr')\" class=\"inline-block rounded-full w-6 h-6\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\n" +
            "            <circle style=\"fill:#D80027;\" cx=\"256\" cy=\"256\" r=\"256\"/>\n" +
            "            <g transform=\"matrix(1.545738, 0, 0, 1.544734, -23.607437, -142.003983)\" style=\"\">\n" +
            "              <polygon style=\"fill:#F0F0F0;\"\n" +
            "                       points=\"245.518,209.186 266.523,238.131 300.54,227.101 279.502,256.021 300.504,284.965 &#10;&#9;&#9;266.499,273.893 245.462,302.813 245.484,267.052 211.478,255.98 245.496,244.95 &#9;\"/>\n" +
            "              <path style=\"fill:#F0F0F0;\"\n" +
            "                    d=\"M188.194,328.348c-39.956,0-72.348-32.392-72.348-72.348s32.392-72.348,72.348-72.348 c12.458,0,24.18,3.151,34.414,8.696c-16.055-15.702-38.012-25.392-62.24-25.392c-49.178,0-89.043,39.866-89.043,89.043 s39.866,89.043,89.043,89.043c24.23,0,46.186-9.691,62.24-25.392C212.374,325.197,200.652,328.348,188.194,328.348z\"/>\n" +
            "            </g>\n" +
            "          </svg>\n"
        }
      ],
      leftMenu: {
        title: "TailAdmin",
        logo: "<svg\n" +
          "        xmlns=\"http://www.w3.org/2000/svg\"\n" +
          "        fill=\"none\"\n" +
          "        viewBox=\"0 0 24 24\"\n" +
          "        stroke=\"currentColor\"\n" +
          "    >\n" +
          "        <path\n" +
          "            stroke-linecap=\"round\"\n" +
          "            stroke-linejoin=\"round\"\n" +
          "            stroke-width=\"2\"\n" +
          "            d=\"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z\"\n" +
          "        />\n" +
          "        <path\n" +
          "            stroke-linecap=\"round\"\n" +
          "            stroke-linejoin=\"round\"\n" +
          "            stroke-width=\"2\"\n" +
          "            d=\"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z\"\n" +
          "        />\n" +
          "    </svg>",
        headerBgColor: "bg-blue-600 hover:bg-blue-700 active:bg-blue-500",
        radius: 3,
        footer: {
          status: true,
          links: [
            {
              label: "Help",
              linkType: "external",
              link: "https://github.com/sinan-aydogan",
              icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n" +
                "  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z\" />\n" +
                "</svg>"
            },
            {
              showWhenFolded: true,
              label: "Settings",
              linkType: "route",
              link: "settings",
              icon: "<svg aria-hidden=\"true\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">\n" +
                "    <path\n" +
                "        d=\"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z\"\n" +
                "        stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
                "        stroke-width=\"2\"/>\n" +
                "    <path d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n" +
                "          stroke-width=\"2\"/>\n" +
                "  </svg>"
            }
          ]
        }
      },
      topMenu: {
        radius:3,
        languageSelector: true,
        darkModeSelector: true,
        searchPlaceHolderText: 'type and search'
      },
      footer: {
        status: true,
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
