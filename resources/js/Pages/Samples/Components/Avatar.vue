<template>
    <app-layout>
        <template #header>
            Avatars
        </template>
        <template #default>
            <grid-section col="2" gap="2">
                <!--Avatar Radius Card-->
                <t-content-card width="1">
                    <template #title>
                        Avatar Radius
                    </template>
                    <template #subTitle>
                        8 different radius sizes
                    </template>
                    <template #content>
                        <div class="flex flex-row gap-4">
                            <t-avatar v-for="i in 8" :key="i" :radius="i"/>
                        </div>
                    </template>
                </t-content-card>
                <!--Avatar Group-->
                <t-content-card width="1">
                    <template #title>
                        Avatar Group - Team Members
                    </template>
                    <template #subTitle>
                        Best for lists of project members
                    </template>
                    <template #content>
                        <div class="flex flex-row gap-4">
                            <t-avatar-group>
                                <t-avatar v-for="i in 8" :key="i" :radius="8" :team="true"/>
                            </t-avatar-group>
                        </div>
                    </template>
                </t-content-card>
                <!--Avatar Sizes Card-->
                <t-content-card width="1">
                    <template #title>
                        Avatar Sizes
                    </template>
                    <template #subTitle>
                        6 different sizes
                    </template>
                    <template #content>
                        <div class="flex flex-row items-end gap-x-2">
                            <t-avatar v-for="i in 8" :key="i" :radius="3" :size="i"/>
                        </div>
                    </template>
                </t-content-card>
                <!--Avatar Indicator Card-->
                <t-content-card width="1">
                    <template #title>
                        Avatar Indicator
                    </template>
                    <template #subTitle>
                        Different colors
                    </template>
                    <template #content>
                        <div class="flex flex-row gap-2 items-end">
                            <t-avatar :indicator="{color:'red', label: 2, position: 'lb'}" :radius="1" :size="1"/>
                            <t-avatar :indicator="{color:'green', label: 14, position: 'rb'}" :radius="2" :size="2"/>
                            <t-avatar :indicator="{color:'blue', label: 2, position: 'lt'}" :radius="3" :size="3"/>
                            <t-avatar :indicator="{color:'indigo', label: 7, position: 'rt'}" :radius="4" :size="4"/>
                            <t-avatar :indicator="{color:'yellow', position: 'lb'}" :radius="5" :size="5"/>
                            <t-avatar :indicator="{color:'purple', label: 12, position: 'rt'}" :radius="6" :size="6"/>
                            <t-avatar :indicator="{color:'green', position: 'rb'}" :radius="7" :size="7"/>
                            <t-avatar :indicator="{color:'blue', label: 5, position: 'lb'}" :radius="8" :size="8"/>
                        </div>
                    </template>
                </t-content-card>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
import
    AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TAvatar from "@/Components/Avatar/TAvatar";
import TAvatarGroup from "@/Components/Avatar/TAvatarGroup";

export default {
    name: "Avatar",
    components: {AppLayout, GridSection, TContentCard, TAvatar, TAvatarGroup}
}
</script>

<style scoped>

</style>
