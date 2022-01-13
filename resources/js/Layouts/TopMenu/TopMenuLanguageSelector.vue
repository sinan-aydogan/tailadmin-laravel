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
                    <div @click="changeLang(lang.id)" class="top-menu-dropdown-item-transparent">
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

<script>
/*Main functions*/
import {defineComponent, inject} from "vue";

/*Components*/
import TDropdown from "@/Components/Dropdown/TDropdown";

/*Multi language*/
import langChooserFn from "@/Functions/langChooser"
import {languages, flags} from "@/Lang/languages";

export default defineComponent({
    name: "TopMenuLanguageSelector",
    components: {
        TDropdown,
        ...flags
    },
    setup() {
        /*Injections*/
        const appConf = inject("appConf");
        const topBarConf = inject("topBarConf");

        /*Multi language*/
        const {locale, changeLang} = langChooserFn()

        return {
            appConf,
            topBarConf,
            languages,
            locale,
            changeLang
        }
    }
})
</script>

<style scoped>

</style>
