<template>
    <app-layout title="Breadcrumb">
        <template #header>Breadcrumb</template>
        <template #subHeader>2 Different breadcrumbs style</template>
        <template #default>
            <grid-section class="hidden md:block" :col="1" :gap="8">

                <div v-for="design in ['filled','block']" :key="design">
                    <t-breadcrumb
                        v-for="(color,index) in ['white','white','black','purple']"
                        :design="design" :color="color"
                        :breadcrumbs="breadcrumbs"
                        class="mb-4"
                        :position="index%2 === 0 ? 'left' : 'right'"
                        :key="color"
                        >
                        <template #home="{props}">
                            <icon icon="home" v-if="props.label === 'Home'"/>
                        </template>
                        <template #subContent>
                            <t-button v-if="index===0" color="green" size="sm">
                                <icon icon="plus-circle" size="xs"/>
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
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TBreadcrumb from "@/Components/Breadcrumb/TBreadcrumb";
import TButton from "@/Components/Button/TButton";
import TAlert from "@/Components/Alert/TAlert";

/*Import FontAwesomeIcon*/
import { library } from "@fortawesome/fontawesome-svg-core";
import {faHome, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
library.add(faHome, faPlusCircle)

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
            {key: 'home', label: 'Home', link: '/', active: false},
            {key: 'department', label: 'Departments', link: '/department', active: false},
            {key: 'new-department', label: 'New Department', link: '', active: true, activeColor: 'solid-red'}
        ]

        return {breadcrumbs}
    }
})
</script>
