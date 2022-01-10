const samples = {
    filled: {
        js: `/* FontAwesomeIcon Import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
library.add( faCheckCircle )

/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: `<t-alert
    id="success"
    design="filled"
    color="success"
    title="Success"
    closeable="true"
    >
    <template #icon>
        <icon icon="check-circle" size="lg" />
    </template>
    The post added successfully (filled)
</t-alert>`,
    },
    light: {
        js: `/* FontAwesomeIcon Import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
library.add( faTrash  )

/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: `<t-alert
    id="danger"
    design="light"
    color="danger"
    title="Danger"
    closeable="true"
    >
    <template #icon>
        <icon icon="trash" size="lg" />
    </template>
    The user deleted successfully (light)
</t-alert>`,
    },
    inline: {
        js: `/* FontAwesomeIcon Import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBan } from "@fortawesome/free-solid-svg-icons";
library.add( faBan )

/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: `<t-alert
    id="blocked"
    design="inline"
    color="warning"
    closeable="false"
    >
    <template #icon>
        <icon icon="ban" size="lg" />
    </template>
    The user deleted successfully (light)
</t-alert>`,
    }
}

export { samples }
