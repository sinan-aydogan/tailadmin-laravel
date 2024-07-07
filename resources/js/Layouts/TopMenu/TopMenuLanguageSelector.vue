<script setup>
/*Main functions*/
import { inject } from "vue";
import { usePage } from "@inertiajs/vue3";

/*Components*/
import TDropdown from "@/Components/Dropdown/TDropdown.vue";

/*Multi language*/
import { useDisplayLanguageStore } from "@/Stores/displayLanguage.js";
import { languages } from "@/Lang/languages";
import { useForm } from "@inertiajs/vue3";
import { storeToRefs } from "pinia";

/*Injections*/
const appConf = inject("appConf");
const topBarConf = inject("topBarConf");

/*Multi language*/
const displayLanguageStore = useDisplayLanguageStore();
const { changeLang } = displayLanguageStore;
const { locale } = storeToRefs(displayLanguageStore);

const form = useForm({
    language: usePage().props?.auth?.user?.language
});

const updatePreferredLanguage = (langId) => {
    form.language = langId;
    form.put(route("user.preferred-language.update"), {
        errorBag: "updatePreferredLanguage",
        preserveScroll: true
    });
};
</script>

<template>
    <t-dropdown align="right" trigger-type="rich">
        <template #trigger>
            <!--Selected Language-->
            <div
                class="top-menu-dropdown-trigger-transparent"
                :class="`radius-${topBarConf.radius ? topBarConf.radius : appConf.radius}`"
            >
                <component
                    :is="languages.find(i=>i.id === locale).flag"
                    class="w-6 aspect-auto drop-shadow transform hover:scale-110 active:scale-90 transition-all duration-300"
                    :alt="languages.find(i=>i.id === locale).name"
                />
            </div>
        </template>
        <template #default>
            <!--Language Lists-->
            <div class="top-menu-dropdown-content-wrapper-transparent">
                <template v-for="lang in languages" :key="lang.id">
                    <div @click="changeLang(lang.id); updatePreferredLanguage(lang.id)"
                         class="top-menu-dropdown-item-transparent">
                        <component
                            :is="lang.flag"
                            class="w-6 aspect-auto drop-shadow"
                        />
                        <span v-text="lang.name"></span>
                    </div>
                </template>
            </div>
        </template>
    </t-dropdown>
</template>
