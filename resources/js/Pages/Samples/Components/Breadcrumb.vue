<template>
    <app-layout title="Breadcrumb">
        <template #header>Breadcrumb</template>
        <template #subHeader>2 Different breadcrumbs style</template>
        <template #default>
            <grid-section :col="1" :gap="8" class="hidden md:block">

                <div v-for="design in ['filled','block']" :key="design">
                    <t-breadcrumb
                        v-for="(color,index) in ['white','white','black','purple']"
                        :key="color" :breadcrumbs="breadcrumbs"
                        :color="color"
                        :design="design"
                        :position="index%2 === 0 ? 'left' : 'right'"
                        class="mb-4"
                    >
                        <template #home="{props}">
                            <iconify-icon v-if="props.label === 'Home'" icon="tabler:home" />
                        </template>
                        <template #subContent>
                            <t-button v-if="index===0" color="green" size="sm">
                                <iconify-icon icon="tabler:circle-plus" size="xs" />
                                Add Button
                            </t-button>
                            <span v-if="index===2">Alternative Title</span>
                        </template>
                    </t-breadcrumb>
                </div>
            </grid-section>
            <t-alert class="block md:hidden" color="red">The breakcrumb component works only on the large
                screens. If you want to see how ist works, you should use a large screen bigger than 728px
            </t-alert>
        </template>
    </app-layout>
</template>

<script>
/*Main Functions*/
import { defineComponent } from "vue";

/*Component*/
import AppLayout from "@/Layouts/AppLayout.vue";
import GridSection from "@/Layouts/GridSection.vue";
import TBreadcrumb from "@/Components/Breadcrumb/TBreadcrumb.vue";
import TButton from "@/Components/Button/TButton.vue";
import TAlert from "@/Components/Alert/TAlert.vue";

export default defineComponent({
    name: "Breadcrumb",
    components: {
        TAlert,
        AppLayout,
        GridSection,
        TBreadcrumb,
        TButton
    },
    setup() {
        const breadcrumbs = [
            { key: "home", label: "Home", link: "/", active: false },
            { key: "department", label: "Departments", link: "/department", active: false },
            { key: "new-department", label: "New Department", link: "", active: true, activeColor: "solid-red" }
        ];

        return { breadcrumbs };
    }
});
</script>
