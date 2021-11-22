require("./bootstrap");

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

// Fontawesome

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCss3, faJs, faVuejs } from "@fortawesome/free-brands-svg-icons";
import {
  faRocket,
  faDotCircle,
  faWindowRestore,
  faEdit,
  faCalendarAlt,
  faEnvelope,
  faTasks,
  faWindowMaximize,
  faChartBar,
  faChevronDown,
  faCode,
  faAngleDown,
  faAngleUp,
  faLayerGroup,
  faGripHorizontal,
  faAngleLeft,
  faClock,
  faRetweet,
  faTags,
  faTv,
  faPlug,
  faTable,
  faShoppingBag,
  faLiraSign,
  faTrash,
  faPlusCircle,
  faAngleDoubleRight,
  faCheck, faMinusCircle, faInfo, faSave, faCog
} from "@fortawesome/free-solid-svg-icons";

//i18n
import { createI18n } from "vue-i18n";
import messages from "@/language";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en",
  fallbackLocale: "en",
  messages
});


library.add(faRocket, faDotCircle, faWindowRestore, faSave, faEdit, faJs, faCss3, faInfo, faCalendarAlt, faVuejs, faEnvelope, faTasks, faWindowMaximize, faChartBar, faChevronDown, faCode, faAngleDown, faAngleUp, faChartBar, faLayerGroup, faGripHorizontal, faAngleLeft, faClock, faRetweet, faTags, faTv, faPlug, faTable, faShoppingBag, faLiraSign, faTrash, faPlusCircle, faAngleDoubleRight, faCheck, faMinusCircle, faCog);

const appName = window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => require(`./Pages/${name}.vue`),
  setup({ el, app, props, plugin }) {
    return createApp({
      render: () => h(app, props)
    })
      .use(plugin)
      .use(i18n)
      .component("font-awesome-icon", FontAwesomeIcon)
      .mixin({ methods: { route } })
      .mount(el);
  }
});

InertiaProgress.init({ color: "#4B5563" });
