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
    :radius=1
    :closeable="true"
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
    :closeable="true"
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
    :closeable="false"
    >
    <template #icon>
        <icon icon="ban" size="lg" />
    </template>
    The user deleted successfully (light)
</t-alert>`,
    },
    outline: {
        js: `/* FontAwesomeIcon Import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
library.add( faRetweet )

/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: `<t-alert
    id="updateSettings"
    design="outline"
    color="info"
    :closeable="false"
    >
    <template #icon>
        <icon icon="retweet" size="lg" />
    </template>
    You entered a new configuration, the settings will refresh 24hr after (outline)
</t-alert>`,
    },
    gradient: {
        js: `/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

/* Avatar Component Import */
import TAvatar from "@/Components/Avatar/TAvatar";

export default {
    components: {
        TAlert,
        TAvatar
    },
    setup() {
    },
}`,
        template: `<t-alert
    id="createSuccess"
    design="gradient"
    color="dream"
    :closeable="true"
    >
    <t-avatar
        :radius="8"
        :size="3"
        src="https://i.pravatar.cc/300"
        />
    The new user is successfully added.<br>
    User: Hamdi KAYA (gradient)
</t-alert>`,
    },
    elegant: {
        js: `/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: `<t-alert
    id="overwrite"
    design="elegant"
    color="violet"
    title="Attention"
    :closeable="true"
    :radius=8
    >
    The all of changes overwrite to themself (elegant)
</t-alert>`,
    },
    block: {
        js: `/* FontAwesomeIcon Import */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
library.add( faInfo )

/* Alert Component Import */
import TAlert from '@/Components/Alert/TAlert.vue'

export default {
    components: { TAlert },
    setup() {
    },
}`,
        template: `<t-alert
    id="blocked"
    design="block"
    color="info"
    :closeable="true"
    >
    <template #icon>
        <icon icon="info" size="lg" />
    </template>
    Please, check your task list (block)
</t-alert>`,
    }
};

export { samples };
