<template>
    <app-layout>
        <!--Header-->
        <template #header>
            Tables
        </template>
        <!--Subheader-->
        <template #subHeader>
            Customizable tables
        </template>
        <!--Content-->
        <template #default>
            <div class="my-2 border rounded-md overflow-hidden">
                <ul class="flex justify-center">
                    <li class="bg-red-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='red'">
                        <div v-if="tableColor=='red'" :class="selectorInnerStyle">Red</div>
                    </li>
                    <li class="bg-blue-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='blue'">
                        <div v-if="tableColor=='blue'" :class="selectorInnerStyle">Blue</div>
                    </li>
                    <li class="bg-indigo-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='indigo'">
                        <div v-if="tableColor=='indigo'" :class="selectorInnerStyle">Indigo</div>
                    </li>
                    <li class="bg-yellow-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='yellow'">
                        <div v-if="tableColor=='yellow'" :class="selectorInnerStyle">Yellow</div>
                    </li>
                    <li :class="{'bg-gray-600' : tableColor === 'black'}" class="bg-black p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='black'">
                        <div v-if="tableColor=='black'" :class="selectorInnerStyle">Black</div>
                    </li>
                    <li class="bg-gray-500 p-2 w-full h-10 items-center flex justify-center cursor-pointer" @click="tableColor='gray'">
                        <div v-if="tableColor=='gray'" :class="selectorInnerStyle">Gray</div>
                    </li>
                </ul>
            </div>
            <t-table :color="tableColor" :content="users" :header="header">
                <template #photo="{props}">
                    <div class="flex justify-center">
                        <t-avatar :link="props.photo" :radius="8" :size="3"/>
                    </div>
                </template>
            </t-table>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import TTable from "@/Components/Table/TTable";
import TAvatar from "@/Components/Avatar/TAvatar";
export default {
    name: "Table",
    components: {AppLayout,TTable,TAvatar},
    props: ['users'],
    data(){
        return {
            tableColor : 'blue',
            header : ['name','email']
        }
    },
    computed:{
        selectorInnerStyle(){
            return 'flex-shrink-0 w-full text-center bg-opacity-50 px-2 py-1 bg-white rounded-full font-semibold z-10'
        }
    }
}
</script>

<style scoped>

</style>
