<template>
    <app-layout>
        <template #header>Toaster Notifications</template>
        <template #subHeader>Elegant and simple notifications bubbles</template>
        <template #default>
            <t-form-content>
                <t-form-section
                    description="You can customize toaster notfication to demo"
                    title="Toaster Customizer"
                >
                    <t-input-group label-for="timer" label="Timer" class="col-span-12 md:col-span-6">
                        <t-input-text id="timer" placeholder="3000"/>
                    </t-input-group>
                    <t-input-group label-for="timer" label="Timer" class="col-span-12 md:col-span-6">
                        <t-input-select>
                            <t-input-select-item v-for="item in colorOptions" :key="item.key">

                            </t-input-select-item>
                        </t-input-select>
                    </t-input-group>
                </t-form-section>
            </t-form-content>
        </template>
    </app-layout>
</template>

<script>
/*Layout*/
import AppLayout from "@/Layouts/AppLayout";
/*Component*/
import TFormSection from "@/Components/Form/TFormSection";
import TFormContent from "@/Components/Form/TFormContent";
import TInputGroup from "@/Components/Form/TInputGroup";
import TInputText from "@/Components/Form/Inputs/TInputText";
import TInputSelect from "@/Components/Form/Inputs/TInputSelect";

export default {
    name: "Toaster",
    components: {
        TInputSelect,
        TInputText,
        TInputGroup,
        TFormContent, TFormSection, AppLayout},
    data() {
        return {
            colorOptions : {
                'red': {
                    label: 'Red',
                    alertStyle: "bg-red-200 border-red-500 text-red-700 shadow-sm"
                },
                'blue': {
                    label: 'Blue',
                    alertStyle: "bg-blue-200 border-blue-500 text-blue-700 shadow-sm"
                },
                'green': {
                    label: 'Green',
                    alertStyle: "bg-green-200 border-green-500 text-green-700 shadow-sm"
                },
                'yellow': {
                    label: 'Yellow',
                    alertStyle: "bg-yellow-200 border-yellow-500 text-yellow-700 shadow-sm"
                },
                'indigo': {
                    label: 'Indigo',
                    alertStyle: "bg-indigo-200 border-indigo-500 text-indigo-700 shadow-sm"
                },
                'purple': {
                    label: 'Purple',
                    alertStyle: "bg-purple-200 border-purple-500 text-purple-700 shadow-sm"
                },
                'pink': {
                    label: 'Pink',
                    alertStyle: "bg-pink-200 border-pink-500 text-pink-700 shadow-sm"
                },
                'white': {
                    label: 'White',
                    alertStyle: "bg-white border-gray-300 shadow-sm"
                },
                'gray': {
                    label: 'Gray',
                    alertStyle: "bg-gray-200 border-gray-500 text-gray-700 shadow-sm"
                },
                'black': {
                    label: 'Black',
                    alertStyle: "bg-gray-700 border-black text-gray-200 shadow-sm"
                },
            }
        }
    },
    methods: {
        toastAlert() {
            this.$page.props.flash.toastr = {
                color: 'red',
                position: '',
                closeable: true,
                timer: 6000,
                content: 'Selam ben bir uyarı kutusuyum'
            }
        }
    }
}
</script>

<style scoped>

</style>
