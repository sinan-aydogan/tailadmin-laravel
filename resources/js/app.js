require('./bootstrap');

// Import modules...
import Vue from 'vue';
import {App as InertiaApp, plugin as InertiaPlugin} from '@inertiajs/inertia-vue';
import PortalVue from 'portal-vue';

// Fontawesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faCss3, faJs, faVuejs} from "@fortawesome/free-brands-svg-icons";
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
} from '@fortawesome/free-solid-svg-icons'

library.add(faRocket, faDotCircle, faWindowRestore, faSave, faEdit, faJs, faCss3, faInfo, faCalendarAlt, faVuejs, faEnvelope, faTasks, faWindowMaximize, faChartBar, faChevronDown, faCode, faAngleDown, faAngleUp, faChartBar, faLayerGroup, faGripHorizontal, faAngleLeft, faClock, faRetweet, faTags, faTv, faPlug, faTable, faShoppingBag, faLiraSign, faTrash, faPlusCircle, faAngleDoubleRight, faCheck, faMinusCircle, faCog)
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.mixin({methods: {route}});
Vue.use(InertiaPlugin);
Vue.use(PortalVue);

Vue.config.productionTip = false


const app = document.getElementById('app');

new Vue({
    render: (h) =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: (name) => require(`./Pages/${name}`).default,
            },
        })
}).$mount(app);
