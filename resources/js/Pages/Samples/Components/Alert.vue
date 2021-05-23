<template>
    <app-layout>
        <template #header>
            Alerts
        </template>
        <template #subHeader>
            Notifications and alert boxes
        </template>
        <template #default>
            <grid-section col="3" gap="4">
                <t-content-card width="3">
                    <template #title>
                        Alert Boxes
                    </template>
                    <template #subTitle>
                        Closeable, colorful and with the closer timer
                    </template>
                    <template #content>
                        <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
                            <t-alert :border="true" :closeable="true" color="red" :radius="5">
                                <font-awesome-icon icon="trash" size="lg" slot="icon"/>
                                <b>Successfuly deleted</b> ( Lorem ipsum ) <small><b>Time:</b><em>
                                03.09.2025</em></small>
                            </t-alert>
                            <t-alert :closeable="true" color="green" :radius="5">
                                <font-awesome-icon icon="plus-circle" size="lg" slot="icon"/>
                                <b>Successfuly added</b> ( Lorem ipsum ) <small><b>Time:</b><em> 16.01.2025</em></small>
                            </t-alert>
                            <t-alert :closeable="true" color="indigo" :radius="5">
                                <b>Colorful notification</b>
                            </t-alert>
                            <t-alert :timer="3000" color="gray" :radius="5">
                                Closer timer activated, alert box. ( <b>Time:</b> 3 seconds)
                            </t-alert>
                            <component :is="'t-alert'" v-if="newAlert" :key="newAlertID" :timer="3000" color="gray"
                                       :radius="5">
                                Closer timer activated, alert box. ( <b>Time:</b> 3 seconds)
                            </component>
                            <t-button color="green" :radius="8" @click.native="addAlertBox">Recall Closed Alert Box
                            </t-button>
                        </div>
                    </template>
                </t-content-card>
                <t-content-card width="3">
                    <template #title>
                        Toaster Alert
                    </template>
                    <template #content>
                        <div class="flex flex-row gap-4">
                            <component :is="'t-alert'" v-if="toasterPosition" :key="newToasterID" :closeable="true"
                                       :position="toasterPosition" color="indigo" :radius="5">
                                Hi, I'm a toaster notification
                            </component>
                            <t-button color="green" :radius="8" @click.native="toasterPosition='lt';toastAlert">
                                Left-Top
                            </t-button>
                            <t-button color="green" :radius="8" @click.native="toasterPosition='lb';toastAlert">
                                Left-Bottom
                            </t-button>
                            <t-button color="blue" :radius="8" @click.native="toasterPosition='rt';toastAlert">
                                Right-Top
                            </t-button>
                            <t-button color="blue" :radius="8" @click.native="toasterPosition='rb';toastAlert">
                                Right-Bottom
                            </t-button>
                        </div>
                    </template>
                </t-content-card>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TAlert from "@/Components/Alert/TAlert";
import TButton from "@/Components/Button/TButton";

export default {
    name: "Alert",
    components: {AppLayout, GridSection, TContentCard, TAlert, TButton},
    data() {
        return {
            newAlert: false,
            newAlertID: 1,
            toasterPosition: null,
            newToasterID: 1
        }
    },
    methods: {
        addAlertBox() {
            this.newAlert = true;
            this.newAlertID++;
        },
        toastAlert() {
            this.newToasterID++;
        }
    }
}
</script>

<style scoped>

</style>
