<template>
    <app-layout>
        <template #header>
            Breadcrumb
        </template>
        <template #subHeader>
            Different breadcrumbs
        </template>
        <template #default>
            <grid-section col="1" gap="8">
                <!--Style 1 without Subcontent-->
                <t-breadcrumb :breadcrumbStyle="1" :breadcrumbs="breadcrumbs"/>
                <!--Style 1 with Subcontent-->
                <t-breadcrumb :breadcrumbStyle="1" :breadcrumbs="breadcrumbs">
                    <template #subContent>
                        Alternative Title
                    </template>
                </t-breadcrumb>
                <!--Style 1 with Subcontent-->
                <t-breadcrumb :breadcrumbStyle="1" :breadcrumbs="breadcrumbs">
                    <template #subContent>
                        <t-button color="green" size="sm">
                            <font-awesome-icon icon="plus-circle"/>
                            Add Button
                        </t-button>
                    </template>
                </t-breadcrumb>
                <!--Style 2 without Subcontent on the left-->
                <t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs" position="left"/>
                <!--Style 2 with Subcontent on the left-->
                <t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs" position="left">
                    <template #subContent>
                        Alternative Title
                    </template>
                </t-breadcrumb>
                <!--Style 2 with Subcontent on the left-->
                <t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs" position="left">
                    <template #subContent>
                        <t-button color="green" size="sm">
                            <font-awesome-icon icon="plus-circle"/>
                            Add Button
                        </t-button>
                    </template>
                </t-breadcrumb>
                <!--Style 2 without Subcontent on the right-->
                <t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs" position="right"/>
                <!--Style 2 with Subcontent on the left-->
                <t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs" position="right">
                    <template #subContent>
                        Alternative Title
                    </template>
                </t-breadcrumb>
                <!--Style 2 with Subcontent on the left-->
                <t-breadcrumb :breadcrumbStyle="2" :breadcrumbs="breadcrumbs" position="right">
                    <template #subContent>
                        <t-button color="green" size="sm">
                            <font-awesome-icon icon="plus-circle"/>
                            Add Button
                        </t-button>
                    </template>
                </t-breadcrumb>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TBreadcrumb from "@/Components/Breadcrumb/TBreadcrumb";
import TButton from "@/Components/Button/TButton";
export default {
    name: "Breadcrumb",
    components: {AppLayout,GridSection,TContentCard,TBreadcrumb,TButton},
    data(){
        return {
            breadcrumbs : [
                {label:'Home', link:'/', active: false},
                {label:'Departments', link:'/department', active: false},
                {label:'New Department', link:'', active: true, activeColor:'red'}
            ]
        }
    }
}
</script>

<style scoped>

</style>
