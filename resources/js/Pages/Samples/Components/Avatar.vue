<template>
    <app-layout title="Avatars">
        <template #header>Avatars</template>
        <template #subHeader>User avatars and team members avatar group</template>
        <template #default>
            <grid-section :col-tablet="2">
                <!--Avatar Radius Card-->
                <t-content-card :width="1">
                    <template #title>Avatar Radius</template>
                    <template #subTitle> 9 different radius sizes</template>
                    <template #content>
                        <div class="flex flex-wrap gap-4">
                            <t-avatar :radius="0" src="https://i.pravatar.cc/300?img=0"/>
                            <t-avatar
                                v-for="i in 8"
                                :key="i"
                                :radius="i"
                                :src="'https://i.pravatar.cc/300?img='+i"
                            />
                        </div>
                    </template>
                </t-content-card>
                <!--Avatar Group-->
                <t-content-card :width="1">
                    <template #title>Avatar Group - Team Members</template>
                    <template #subTitle>Best for lists of project members. The avatars gets from <a
                        href="https://pravatar.cc/"
                        target="_blank">https://pravatar.cc/</a>
                    </template>
                    <template #content>
                        <div class="flex flex-wrap gap-4">
                            <t-avatar-group>
                                <t-avatar
                                    v-for="i in 8"
                                    :key="i"
                                    :radius="8"
                                    :src="'https://i.pravatar.cc/300?img='+i"
                                />
                            </t-avatar-group>
                        </div>
                    </template>
                </t-content-card>
                <!--Avatar Sizes Card-->
                <t-content-card :width="1">
                    <template #title>Avatar Sizes</template>
                    <template #subTitle>8 different sizes</template>
                    <template #content>
                        <div class="flex flex-wrap items-end gap-4">
                            <t-avatar
                                v-for="i in 8"
                                :key="i"
                                :radius="3"
                                :size="i"
                                :src="'https://i.pravatar.cc/300?img='+i"
                            />
                        </div>
                    </template>
                </t-content-card>
                <!--Avatar Indicator Card-->
                <t-content-card :width="1">
                    <template #title> Avatar Indicator</template>
                    <template #subTitle> 8 different colors and 4 different positions</template>
                    <template #content>
                        <div class="flex flex-wrap items-end gap-4">
                            <t-avatar
                                :indicator="{
                    color: 'red',
                    label: 2,
                    position: 'lb'
                  }"
                                :radius="1"
                                :size="1"
                            />
                            <t-avatar
                                :indicator="{
                    color: 'blue',
                    label: 2,
                    position: 'lt'
                  }"
                                :radius="2"
                                :size="2"
                                src="https://i.pravatar.cc/300?img=0"
                            />
                            <t-avatar
                                :indicator="{
                    color: 'green',
                    position: 'rb'
                  }"
                                :radius="3"
                                :size="3"
                                src="https://i.pravatar.cc/300?img=1"
                            />
                            <t-avatar
                                :indicator="{
                    color: 'yellow',
                    label: 14,
                    position: 'lb'
                  }"
                                :radius="4"
                                :size="4"
                                src="https://i.pravatar.cc/300?img=2"
                            />
                            <t-avatar
                                :indicator="{
                    color: 'indigo',
                    label: 7,
                    position: 'rt'
                  }"
                                :radius="5"
                                :size="5"
                                src="https://i.pravatar.cc/300?img=3"
                            />
                            <t-avatar
                                :indicator="{
                    color: 'pink',
                    label: 85,
                    position: 'rt'
                  }"
                                :radius="6"
                                :size="6"
                                src="https://i.pravatar.cc/300?img=4"
                            />
                            <t-avatar
                                :indicator="{
                    color: 'purple',
                    label: 12,
                    position: 'lb'
                  }"
                                :radius="7"
                                :size="7"
                                src="https://i.pravatar.cc/300?img=5"
                            />
                            <t-avatar
                                :indicator="{
                    color: 'pink',
                    label: 2,
                    position: 'rb'
                  }"
                                :radius="8"
                                :size="8"
                                src="https://i.pravatar.cc/300?img=6"
                            />
                        </div>
                    </template>
                </t-content-card>
            </grid-section>
        </template>
    </app-layout>
</template>

<script>
/*Main Functions*/
import {defineComponent} from "vue";

/*Component*/
import AppLayout from "@/Layouts/AppLayout";
import GridSection from "@/Layouts/GridSection";
import TContentCard from "@/Components/Card/TContentCard";
import TAvatar from "@/Components/Avatar/TAvatar";
import TAvatarGroup from "@/Components/Avatar/TAvatarGroup";

export default defineComponent({
    name: "Avatar",
    components: {
        AppLayout,
        GridSection,
        TAvatar,
        TAvatarGroup,
        TContentCard,
    }
});
</script>
